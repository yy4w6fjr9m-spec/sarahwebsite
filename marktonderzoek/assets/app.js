(function () {
  "use strict";

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  // Opslag die niet faalt in private mode of zonder storage
  const store = {
    get(key, fallback) {
      try { const v = localStorage.getItem("mo:" + key); return v ? JSON.parse(v) : fallback; } catch (e) { return fallback; }
    },
    set(key, value) {
      try { localStorage.setItem("mo:" + key, JSON.stringify(value)); } catch (e) { /* negeren */ }
    }
  };

  /* ───────────── Thema ───────────── */
  const root = document.documentElement;
  const savedTheme = store.get("theme", null);
  if (savedTheme) root.setAttribute("data-theme", savedTheme);
  $("#themeToggle").addEventListener("click", () => {
    const isDark = root.getAttribute("data-theme") === "dark" ||
      (!root.getAttribute("data-theme") && matchMedia("(prefers-color-scheme: dark)").matches);
    const next = isDark ? "light" : "dark";
    root.setAttribute("data-theme", next);
    store.set("theme", next);
  });

  $$("[data-peildatum]").forEach((el) => (el.textContent = window.PEILDATUM));

  /* ───────────── KPI's ───────────── */
  const orgs = window.ORGANISATIES;
  const kpis = [
    [orgs.length, "organisaties in kaart"],
    [orgs.filter((o) => o.fit === 3).length, "met hoge fit"],
    [window.PROGRAMMAS.length, "traineeships & programma's"],
    [Object.keys(window.SECTOREN).length, "sectoren"]
  ];
  $("#kpis").innerHTML = kpis.map(([n, l]) => `<div class="kpi"><b>${n}</b><span>${l}</span></div>`).join("");

  /* ───────────── Pitch ───────────── */
  const PITCHES = {
    ngo: "Als cum laude-afgestudeerde in International Development Studies met onderzoekservaring bij Human Rights Watch combineer ik grondig, feitelijk onderzoek met het vermogen om bevindingen om te zetten in advocacy die verandering afdwingt.",
    gov: "Ik breng academische scherpte (AUC cum laude met Honours, MSc IDS) en praktijkervaring in internationaal mensenrechtenonderzoek mee, en vertaal complexe internationale vraagstukken naar heldere, uitvoerbare beleidsadviezen voor Nederland.",
    io: "With a Master's in International Development Studies and hands-on research experience at Human Rights Watch, I bring rigorous documentation skills, bilingual Dutch–English communication and a strong grounding in governance and conflict dynamics.",
    peace: "Mijn achtergrond in ontwikkelingsstudies en mensenrechtenonderzoek bij HRW geeft me inzicht in de grondoorzaken van conflict en in het belang van gerechtigheid en inclusie voor duurzame vrede.",
    uni: "Als cum laude honours-afgestudeerde van AUC en een interdisciplinaire MSc IDS breng ik zowel onderzoekservaring in het veld (Human Rights Watch) als affiniteit met liberal-arts-onderwijs mee."
  };
  const setPitch = (k) => {
    $("#pitchText").textContent = PITCHES[k];
    $$(".pitch-tabs .chip").forEach((b) => b.classList.toggle("active", b.dataset.pitch === k));
  };
  $$(".pitch-tabs .chip").forEach((b) => b.addEventListener("click", () => setPitch(b.dataset.pitch)));
  setPitch("ngo");

  /* ───────────── Kansenkaart ───────────── */
  const HEAT = [
    ["Overheid (NL)", 3, 3, "Grootste werkgever. IBBZ is dicht, maar het Rijkstraineeprogramma en reguliere vacatures zijn open"],
    ["IO's in Den Haag", 2, 3, "Topmatch, maar het ICC is onzeker. Andere tribunalen en agentschappen hebben weinig plekken"],
    ["VN & IO's buitenland", 1, 3, "UN80-bezuinigingen. De JPO-route vraagt eerst 2 jaar ervaring"],
    ["NGO · mensenrechten", 2, 3, "Organisaties met eigen fondsen (Amnesty, Bellingcat) zijn stabieler"],
    ["NGO · ontwikkeling", 1, 2, "De hardst geraakte sector door de subsidiekorting"],
    ["Humanitair", 2, 2, "MSF en War Child zijn stabieler. Veldfuncties vragen ervaring"],
    ["Vrede & conflict", 2, 3, "Kleine organisaties met weinig vacatures. Netwerk is cruciaal"],
    ["Denktanks", 2, 3, "Competitief, maar je cijfers tellen hier mee"],
    ["Universiteiten", 2, 3, "PhD- en junior docentplekken komen regelmatig vrij. Je cum laude telt"],
    ["Bedrijfsleven & mensenrechten", 3, 2, "Groeit richting de CSDDD-omzetting in 2028. Betere salarissen"]
  ];
  const lvl = ["", "laag", "middel", "hoog"];
  $("#heatmap").innerHTML =
    `<div class="heat-row heat-head"><span>Sector</span><span>Vacatures</span><span>Fit</span><span>Toelichting</span></div>` +
    HEAT.map(([s, v, f, t]) =>
      `<div class="heat-row"><span>${esc(s)}</span><span class="h h${v}">${lvl[v]}</span><span class="h h${f}">${lvl[f]}</span><span class="heat-note">${esc(t)}</span></div>`
    ).join("");

  /* ───────────── Actuele vacatures ───────────── */
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const fmtDate = (iso) => new Date(iso + "T00:00:00").toLocaleDateString("nl-NL", { day: "numeric", month: "long", year: "numeric" });
  function vacCard(v) {
    let badge, cls = v.status;
    if (v.deadline) {
      const days = Math.round((new Date(v.deadline + "T00:00:00") - today) / 864e5);
      if (days < 0) { badge = "Verlopen " + fmtDate(v.deadline); cls = "gesloten"; }
      else if (days === 0) badge = "Deadline vandaag";
      else badge = `Nog ${days} ${days === 1 ? "dag" : "dagen"} · ${fmtDate(v.deadline)}`;
    } else badge = "Deadline onbekend";
    const stCls = { open: "st-volgende", onzeker: "st-later", gesloten: "st-dicht" }[cls];
    return `<article class="vac vac-${cls}">
      <header><span class="st ${stCls}">${esc(badge)}</span><span class="fitbadge f${v.fit}">${"●".repeat(v.fit)}${"○".repeat(3 - v.fit)}</span></header>
      <h3>${esc(v.t)}</h3>
      <p class="meta">${esc(v.org)} · ${esc(v.loc)}</p>
      <p class="vac-level">${esc(v.niveau)}</p>
      <p class="onote">${esc(v.note)}</p>
      <footer><a href="${esc(v.u)}" target="_blank" rel="noopener">Bekijk vacature ↗</a>
      <button type="button" class="linkbtn" data-track="${esc(v.org)}|${esc(v.t)}|${v.deadline || ""}">+ Tracker</button></footer>
    </article>`;
  }
  const vacs = window.VACATURES || [];
  const isClosed = (v) => v.status === "gesloten" || (v.deadline && new Date(v.deadline + "T00:00:00") < today);
  const byDeadline = (a, b) => (a.deadline || "9999").localeCompare(b.deadline || "9999") || b.fit - a.fit;
  const openVacs = vacs.filter((v) => !isClosed(v)).sort((a, b) => b.fit - a.fit || (a.deadline || "9999").localeCompare(b.deadline || "9999"));
  const closedVacs = vacs.filter(isClosed).sort((a, b) => (b.deadline || "").localeCompare(a.deadline || ""));
  $("#vacOpen").innerHTML = openVacs.map(vacCard).join("") || `<p class="empty">Geen open vacatures in de lijst.</p>`;
  $("#vacClosed").innerHTML = closedVacs.map(vacCard).join("");
  $("#vacClosedCount").textContent = closedVacs.length;
  const geen = window.GEEN_VACATURE || [];
  $("#geenCount").textContent = geen.length;
  $("#geenList").innerHTML = geen.map(([n, s, u]) => `<li><a href="${esc(u)}" target="_blank" rel="noopener">${esc(n)} ↗</a> <span>${esc(s)}</span></li>`).join("");
  $$("[data-vacgecheckt]").forEach((el) => (el.textContent = window.VACATURES_GECHECKT || window.PEILDATUM));

  /* ───────────── Organisaties ───────────── */
  const sectSel = $("#fSector");
  Object.entries(window.SECTOREN).forEach(([k, v]) => {
    const n = orgs.filter((o) => o.s === k).length;
    sectSel.insertAdjacentHTML("beforeend", `<option value="${k}">${esc(v.label)} (${n})</option>`);
  });

  let favs = new Set(store.get("favs", []));
  const fitLabel = { 3: "Hoge fit", 2: "Middel", 1: "Laag" };
  const nlLabel = { ja: "Nederlands vereist", plus: "NL = pluspunt", nee: "Engels volstaat" };
  const isAbroad = (o) => o.s === "io-int" || /Genève|Brussel|Londen|Wenen|Straatsburg|Parijs|Washington|New York|Helsinki|Bern|wereldwijd|Wereldwijd/.test(o.loc) && !/Den Haag|Amsterdam|Utrecht/.test(o.loc);

  function renderOrgs() {
    const q = $("#fQ").value.trim().toLowerCase();
    const s = sectSel.value, fit = +$("#fFit").value || 0, nl = $("#fNl").value, loc = $("#fLoc").value, onlyFav = $("#fFav").checked;
    const list = orgs
      .filter((o) => !s || o.s === s)
      .filter((o) => !fit || o.fit >= fit)
      .filter((o) => !nl || o.nl === nl)
      .filter((o) => !loc || (loc === "int" ? isAbroad(o) : !isAbroad(o)))
      .filter((o) => !onlyFav || favs.has(o.n))
      .filter((o) => !q || [o.n, o.loc, o.in, o.note, o.th.join(" ")].join(" ").toLowerCase().includes(q))
      .sort((a, b) => b.fit - a.fit || a.n.localeCompare(b.n, "nl"));

    $("#orgCount").textContent = `${list.length} van ${orgs.length} organisaties`;
    $("#orgList").innerHTML = list.map((o) => {
      const sec = window.SECTOREN[o.s];
      const search = "https://www.google.com/search?q=" + encodeURIComponent(o.n + " vacatures");
      const fav = favs.has(o.n);
      return `<article class="org fit${o.fit}">
        <header>
          <span class="sect ${sec.kleur}">${esc(sec.label)}</span>
          <button class="fav" type="button" data-fav="${esc(o.n)}" aria-pressed="${fav}" aria-label="Favoriet">${fav ? "★" : "☆"}</button>
        </header>
        <h3>${esc(o.n)}</h3>
        <p class="meta">${esc(o.loc)} · <span class="nl nl-${o.nl}">${nlLabel[o.nl]}</span></p>
        <p class="fitbadge f${o.fit}">${"●".repeat(o.fit)}${"○".repeat(3 - o.fit)} ${fitLabel[o.fit]}</p>
        <p class="themes">${o.th.map((t) => `<span>${esc(t)}</span>`).join("")}</p>
        <p><strong>Instap:</strong> ${esc(o.in)}</p>
        <p class="onote">${esc(o.note)}</p>
        <footer>
          ${o.w ? `<a href="${esc(o.w)}" target="_blank" rel="noopener">Website / vacatures ↗</a>` : ""}
          <a href="${search}" target="_blank" rel="noopener">Zoek vacatures ↗</a>
        </footer>
      </article>`;
    }).join("") || `<p class="empty">Geen resultaten met deze filters.</p>`;
  }
  ["#fQ", "#fSector", "#fFit", "#fNl", "#fLoc", "#fFav"].forEach((id) => $(id).addEventListener("input", renderOrgs));
  $("#orgList").addEventListener("click", (e) => {
    const b = e.target.closest("[data-fav]");
    if (!b) return;
    const n = b.dataset.fav;
    favs.has(n) ? favs.delete(n) : favs.add(n);
    store.set("favs", [...favs]);
    renderOrgs();
  });
  renderOrgs();

  /* ───────────── Programma's ───────────── */
  const order = { volgende: 0, check: 1, later: 2, dicht: 3 };
  $("#progList").innerHTML = window.PROGRAMMAS
    .slice()
    .sort((a, b) => b.fit - a.fit || order[a.status] - order[b.status])
    .map((p) => `<article class="prog">
      <header><h3>${esc(p.n)}</h3><span class="st st-${p.status}">${esc(p.statusLabel)}</span></header>
      <p class="org-line">${esc(p.org)} · ${"●".repeat(p.fit)}${"○".repeat(3 - p.fit)} fit</p>
      <dl>
        <dt>Eisen</dt><dd>${esc(p.eisen)}</dd>
        <dt>Vergoeding</dt><dd>${esc(p.salaris)}</dd>
        <dt>Duur</dt><dd>${esc(p.duur)}</dd>
        <dt>Deadline</dt><dd>${esc(p.deadline)}</dd>
      </dl>
      <p class="tip">💡 ${esc(p.tip)}</p>
    </article>`).join("");

  /* ───────────── Salarisgrafiek ───────────── */
  const sal = window.SALARISSEN;
  const maxSal = Math.max(...sal.map((s) => s.max));
  const eur = (n) => "€ " + n.toLocaleString("nl-NL");
  $("#salaryChart").innerHTML = sal.map((s) => {
    const left = (s.min / maxSal) * 100;
    const width = Math.max(((s.max - s.min) / maxSal) * 100, 0.8);
    const range = s.min === s.max ? eur(s.min) : `${eur(s.min)} – ${eur(s.max)}`;
    return `<div class="bar-row" title="${esc(s.bron)}">
      <span class="bar-label">${esc(s.label)}</span>
      <span class="bar-track"><span class="bar-base" style="width:${left}%"></span><span class="bar-range" style="left:${left}%;width:${width}%"></span></span>
      <span class="bar-val">${range}</span>
    </div>`;
  }).join("") + `<p class="note">Lichte balk = tot het minimum, donkere balk = de bandbreedte min–max. Beweeg over een rij voor de bron.</p>`;

  /* ───────────── Kalender ───────────── */
  const typeLabel = { overheid: "Overheid", io: "IO / EU / VN", uni: "Universiteit", actie: "Actie" };
  $("#timeline").innerHTML = window.KALENDER.map((m) => `<div class="tl-month">
      <h3>${esc(m.maand)}</h3>
      <ul>${m.items.map((i) => `<li class="tl-${i.type}"><span class="tl-type">${typeLabel[i.type]}</span>${esc(i.t)}${i.verwacht ? ' <em class="exp">verwacht</em>' : ""}</li>`).join("")}</ul>
    </div>`).join("");

  /* ───────────── Actieplan ───────────── */
  const PLAN = [
    ["Eerste 30 dagen", [
      "Job alerts instellen: Werken voor Nederland, OneWorld, Impactpool, AcademicTransfer, LinkedIn",
      "Twee cv-varianten maken: NL-overheid en internationaal (EN)",
      "HRW-stage herschrijven naar 3 à 4 resultaatgerichte bullets",
      "Writing sample klaarzetten (policy brief van 2 pagina's)",
      "UN YPP: checken of Nederland in 2026 meedoet",
      "Top 15 organisaties kiezen uit de database (★)",
      "5 informatiegesprekken aanvragen (HRW-, AUC- en IDS-netwerk)",
      "Scriptiebegeleider of IDS-docent vragen naar onderzoeks- of promotieplekken"
    ]],
    ["Dag 31–60", [
      "5 tot 8 gerichte sollicitaties versturen bij organisaties met hoge fit",
      "Twee evenementen bezoeken (Humanity Hub, Clingendael, ISS)",
      "EU Login aanmaken en Blue Book-motivatie per DG uitschrijven",
      "Aanmelden voor de Nederlandse pool voor OVSE-verkiezingswaarnemers (navragen bij BZ)",
      "Starten met een cursus in een derde taal of een vaardigheid (Frans, MEAL, OSINT)",
      "Rijkstrainee-eisen 2027 naast je afstudeerdatum leggen"
    ]],
    ["Dag 61–90", [
      "STAR-voorbeelden (6 tot 8) en een UN-competentieverhaal oefenen",
      "Het netwerk opvolgen: wie heeft je doorverwezen, en welke vacatures komen eraan?",
      "Tussenbalans: welke sector reageert het best? Daar je strategie op bijstellen",
      "Plannen voor voorjaar 2027: Rijkstrainee, Blue Book en eventueel de JPO-ronde",
      "Overwegen: een promotievoorstel schrijven als je het academische pad openhoudt",
      "Tijdlijn naar de JPO uittekenen: hoe kom je vóór je 32e aan 2 jaar relevante ervaring?"
    ]]
  ];
  let done = new Set(store.get("plan", []));
  function renderPlan() {
    let total = 0;
    $("#planList").innerHTML = PLAN.map(([title, items], gi) => `<div class="card"><h3>${title}</h3><ul class="checklist">${
      items.map((t, i) => { total++; const id = gi + "-" + i; return `<li><label><input type="checkbox" data-plan="${id}" ${done.has(id) ? "checked" : ""}> <span>${esc(t)}</span></label></li>`; }).join("")
    }</ul></div>`).join("");
    $("#planBar").style.width = (done.size / total) * 100 + "%";
    $("#planBar").textContent = `${done.size}/${total}`;
  }
  $("#planList").addEventListener("change", (e) => {
    const id = e.target.dataset.plan;
    if (!id) return;
    e.target.checked ? done.add(id) : done.delete(id);
    store.set("plan", [...done]);
    renderPlan();
  });
  renderPlan();

  /* ───────────── Tracker ───────────── */
  let rows = store.get("tracker", []);
  function renderTracker() {
    $("#trackTable tbody").innerHTML = rows
      .slice()
      .sort((a, b) => (a.deadline || "9999").localeCompare(b.deadline || "9999"))
      .map((r) => `<tr>
        <td>${esc(r.org)}</td><td>${esc(r.functie)}</td><td>${esc(r.deadline || "–")}</td>
        <td><select data-status="${r.id}">${["Interessant", "Bezig met brief", "Verstuurd", "Gesprek", "Aanbod", "Afgewezen"].map((s) => `<option ${s === r.status ? "selected" : ""}>${s}</option>`).join("")}</select></td>
        <td>${esc(r.notitie)}</td>
        <td><button type="button" class="del" data-del="${r.id}" aria-label="Verwijder">✕</button></td>
      </tr>`).join("");
    $("#trackEmpty").hidden = rows.length > 0;
    $("#trackTable").hidden = rows.length === 0;
  }
  $("#trackForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const f = new FormData(e.target);
    rows.push({ id: Date.now().toString(36), org: f.get("org"), functie: f.get("functie"), deadline: f.get("deadline"), status: f.get("status"), notitie: f.get("notitie") });
    store.set("tracker", rows);
    e.target.reset();
    renderTracker();
  });
  $("#trackTable").addEventListener("click", (e) => {
    const id = e.target.dataset.del;
    if (!id) return;
    rows = rows.filter((r) => r.id !== id);
    store.set("tracker", rows);
    renderTracker();
  });
  $("#trackTable").addEventListener("change", (e) => {
    const id = e.target.dataset.status;
    if (!id) return;
    const r = rows.find((x) => x.id === id);
    if (r) { r.status = e.target.value; store.set("tracker", rows); }
  });
  $("#exportCsv").addEventListener("click", async () => {
    const q = (v) => `"${String(v ?? "").replace(/"/g, '""')}"`;
    const csv = ["Organisatie;Functie;Deadline;Status;Notitie", ...rows.map((r) => [r.org, r.functie, r.deadline, r.status, r.notitie].map(q).join(";"))].join("\n");
    const msg = $("#exportMsg");
    try {
      await navigator.clipboard.writeText(csv);
      msg.textContent = "CSV gekopieerd. Plak het in Excel, Numbers of Google Sheets.";
    } catch (e) {
      const ta = $("#csvOut");
      ta.value = csv; ta.hidden = false; ta.select();
      msg.textContent = "Kopiëren lukte niet automatisch. Selecteer de tekst hieronder en kopieer die zelf.";
    }
  });
  renderTracker();
  $("#vacatures").addEventListener("click", (e) => {
    const b = e.target.closest("[data-track]");
    if (!b) return;
    const [org, functie, deadline] = b.dataset.track.split("|");
    if (!rows.some((r) => r.org === org && r.functie === functie)) {
      rows.push({ id: Date.now().toString(36), org, functie, deadline, status: "Interessant", notitie: "" });
      store.set("tracker", rows);
      renderTracker();
    }
    b.textContent = "✓ In tracker";
    b.disabled = true;
  });

  /* ───────────── Platforms & bronnen ───────────── */
  $("#platformList").innerHTML = window.PLATFORMS.map((p) =>
    `<a class="platform" href="${esc(p.u)}" target="_blank" rel="noopener"><b>${esc(p.n)} ↗</b><span>${esc(p.d)}</span></a>`).join("");
  $("#sourceList").innerHTML = window.BRONNEN.map(([t, u]) =>
    `<li><a href="${esc(u)}" target="_blank" rel="noopener">${esc(t)}</a></li>`).join("");

  /* ───────────── Actieve sectie in nav ───────────── */
  const links = $$(".nav a");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) links.forEach((l) => l.classList.toggle("active", l.getAttribute("href") === "#" + en.target.id));
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    $$("main section[id]").forEach((s) => io.observe(s));
  }
})();
