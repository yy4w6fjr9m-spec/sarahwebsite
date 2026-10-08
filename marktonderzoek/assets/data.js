/* Marktonderzoek — databestand
 * Peildatum onderzoek: 8 oktober 2026.
 * Alles hier is los te bewerken: voeg organisaties, programma's of deadlines toe
 * door een object in de juiste lijst te zetten.
 *
 * Velden organisaties:
 *   n    naam
 *   s    sector-sleutel (zie SECTOREN)
 *   loc  locatie
 *   th   thema's
 *   fit  3 = hoog, 2 = middel, 1 = laag (aansluiting op het profiel)
 *   nl   "ja" (Nederlands vereist), "plus" (pluspunt), "nee" (Engels volstaat)
 *   in   realistische instapfuncties
 *   w    website (optioneel; anders alleen een zoeklink)
 *   note korte toelichting / waarom interessant
 */

window.PEILDATUM = "8 oktober 2026";

window.SECTOREN = {
  overheid:   { label: "Overheid (NL)",                 kleur: "c1" },
  "io-nl":    { label: "Internationale org. in NL",     kleur: "c2" },
  "io-int":   { label: "Internationale org. buitenland", kleur: "c3" },
  "ngo-mr":   { label: "NGO · mensenrechten",           kleur: "c4" },
  "ngo-os":   { label: "NGO · ontwikkeling & gender",   kleur: "c5" },
  "ngo-hum":  { label: "NGO · humanitair & migratie",   kleur: "c6" },
  vrede:      { label: "Vrede & conflictoplossing",     kleur: "c7" },
  kennis:     { label: "Denktanks & kennisinstituten",  kleur: "c8" },
  uni:        { label: "Universiteiten & hogescholen",  kleur: "c9" },
  bedrijf:    { label: "Bedrijfsleven & mensenrechten", kleur: "c10" },
  media:      { label: "Onderzoek, OSINT & media",      kleur: "c11" }
};

window.ORGANISATIES = [
  /* ───────────── Overheid ───────────── */
  { n: "Ministerie van Buitenlandse Zaken", s: "overheid", loc: "Den Haag + posten wereldwijd", th: ["diplomatie", "mensenrechten", "ontwikkelingssamenwerking", "veiligheid"], fit: 3, nl: "ja", in: "Beleidsmedewerker (schaal 9–11), stage, Rijkstrainee-plaatsing", w: "https://www.rijksoverheid.nl/ministeries/ministerie-van-buitenlandse-zaken/organisatie/vacatures", note: "Hét logische doel. Let op: het traineeship IBBZ werft in 2026 alleen intern vanwege bezuinigingen. Instromen kan via het Rijkstraineeprogramma of reguliere vacatures. Interessante afdelingen: DMM (multilaterale organisaties & mensenrechten), DSH (stabiliteit & humanitaire hulp), DSO (sociale ontwikkeling)." },
  { n: "Ministerie van Justitie en Veiligheid (o.a. DG Migratie)", s: "overheid", loc: "Den Haag", th: ["migratie", "rechtsstaat", "internationaal strafrecht"], fit: 2, nl: "ja", in: "Beleidsmedewerker, Rijkstrainee", w: "https://www.werkenvoornederland.nl", note: "DG Migratie en de directie Internationale Aangelegenheden passen goed bij IDS. Ook de afdeling die het gastlandbeleid voor de Haagse tribunalen regelt is interessant." },
  { n: "Ministerie van Defensie (beleid / CIMIC)", s: "overheid", loc: "Den Haag", th: ["veiligheid", "missies", "conflict"], fit: 2, nl: "ja", in: "Beleidsmedewerker internationale missies, analist", note: "Interessant voor het conflictspoor (missies, Women Peace & Security). Hier is vaak een veiligheidsonderzoek nodig." },
  { n: "Ministerie van BZK (democratie & grondrechten)", s: "overheid", loc: "Den Haag", th: ["mensenrechten", "democratie", "discriminatie"], fit: 2, nl: "ja", in: "Beleidsmedewerker", note: "Werkt aan nationaal mensenrechtenbeleid, de Nationaal Coördinator tegen Discriminatie en Racisme en de democratische rechtsstaat." },
  { n: "Ministerie van SZW (integratie & inburgering)", s: "overheid", loc: "Den Haag", th: ["migratie", "integratie"], fit: 1, nl: "ja", in: "Beleidsmedewerker", note: "Relevant als je migratie vanuit het Nederlandse perspectief wilt benaderen." },
  { n: "College voor de Rechten van de Mens", s: "overheid", loc: "Utrecht", th: ["mensenrechten", "gelijke behandeling", "monitoring"], fit: 3, nl: "ja", in: "Junior onderzoeker/adviseur mensenrechten, beleidsmedewerker", w: "https://www.mensenrechten.nl", note: "Het nationale mensenrechteninstituut. Het werk lijkt op dat bij HRW: monitoring, rapportage en advies, maar dan met Nederland als onderwerp." },
  { n: "Nationale ombudsman", s: "overheid", loc: "Den Haag", th: ["behoorlijk bestuur", "kinderrechten"], fit: 2, nl: "ja", in: "Onderzoeker, juridisch/beleidsmedewerker", w: "https://www.nationaleombudsman.nl", note: "Hier zit ook de Kinderombudsman. Je doet er onderzoek naar hoe de overheid met burgers omgaat." },
  { n: "WODC (onderzoekscentrum J&V)", s: "overheid", loc: "Den Haag", th: ["onderzoek", "migratie", "justitie"], fit: 2, nl: "ja", in: "Junior onderzoeker", w: "https://www.wodc.nl", note: "Goed als je de onderzoekscomponent van de master wilt inzetten." },
  { n: "Adviesraad Internationale Vraagstukken (AIV)", s: "overheid", loc: "Den Haag", th: ["buitenlands beleid", "mensenrechten", "vrede & veiligheid"], fit: 3, nl: "ja", in: "Secretaris/beleidsmedewerker (klein team)", note: "Adviseert regering en parlement. Er komen maar weinig vacatures, maar elke vacature past heel goed bij het profiel. Zet een alert." },
  { n: "Adviesraad Migratie (ACVZ)", s: "overheid", loc: "Den Haag", th: ["migratie", "asiel"], fit: 2, nl: "ja", in: "Junior adviseur", note: "Een klein onafhankelijk adviesorgaan over migratiebeleid." },
  { n: "RVO (Rijksdienst voor Ondernemend Nederland)", s: "overheid", loc: "Den Haag / Utrecht", th: ["ontwikkelingssamenwerking", "subsidiebeheer", "internationaal"], fit: 3, nl: "ja", in: "Adviseur internationale programma's, junior programmamanager", w: "https://www.rvo.nl", note: "Voert veel OS-programma's van BZ uit. Een onderschatte route naar het OS-veld vanuit de overheid." },
  { n: "IND", s: "overheid", loc: "Diverse locaties", th: ["migratie", "asiel"], fit: 1, nl: "ja", in: "Beslismedewerker, beleidsmedewerker, landenonderzoeker (Team Ambtsberichten via BZ)", w: "https://ind.nl", note: "Landeninformatie- en analistenfuncties passen bij onderzoekservaring zoals bij HRW." },
  { n: "COA", s: "overheid", loc: "Diverse locaties", th: ["opvang", "asiel"], fit: 1, nl: "ja", in: "Beleidsadviseur, projectleider", w: "https://www.coa.nl", note: "Ervaring in de uitvoering. Er is veel vraag naar mensen." },
  { n: "NCTV", s: "overheid", loc: "Den Haag", th: ["veiligheid", "radicalisering"], fit: 1, nl: "ja", in: "Analist, beleidsmedewerker", note: "Interessant voor het veiligheidsspoor. Hier is een veiligheidsonderzoek nodig." },
  { n: "Tweede Kamer (fracties & commissiestaf)", s: "overheid", loc: "Den Haag", th: ["politiek", "buitenlandse zaken"], fit: 2, nl: "ja", in: "Fractiemedewerker BuZa/BHO, informatiespecialist", note: "Fractiemedewerker is een snelle leerschool en levert een groot netwerk op. Vacatures lopen via de fracties zelf." },
  { n: "Gemeente Den Haag (Internationale Stad / Vrede & Recht)", s: "overheid", loc: "Den Haag", th: ["internationale stad", "vrede & recht"], fit: 2, nl: "ja", in: "Beleidsadviseur internationale zaken, trainee", w: "https://www.denhaag.nl", note: "De gemeente is het aanspreekpunt voor de vele internationale organisaties in de stad." },
  { n: "Gemeente Amsterdam", s: "overheid", loc: "Amsterdam", th: ["diversiteit", "mensenrechten", "migratie"], fit: 2, nl: "ja", in: "Beleidsadviseur, trainee", w: "https://www.werkenbij.amsterdam.nl", note: "Werkt aan beleid voor ongedocumenteerden, antidiscriminatie en internationale samenwerking." },
  { n: "Gemeente Utrecht (Mensenrechtenstad)", s: "overheid", loc: "Utrecht", th: ["mensenrechten lokaal"], fit: 2, nl: "ja", in: "Beleidsadviseur", note: "De eerste mensenrechtenstad van Nederland, met een expliciet lokaal mensenrechtenbeleid." },
  { n: "VNG International", s: "overheid", loc: "Den Haag", th: ["lokaal bestuur", "fragiele staten", "ontwikkeling"], fit: 3, nl: "plus", in: "Junior projectmanager", note: "De internationale tak van de Vereniging van Nederlandse Gemeenten. Versterkt lokaal bestuur in fragiele staten." },

  /* ───────────── Internationale organisaties in NL ───────────── */
  { n: "Internationaal Strafhof (ICC)", s: "io-nl", loc: "Den Haag", th: ["internationaal strafrecht", "mensenrechten", "slachtoffers"], fit: 3, nl: "nee", in: "Internship, Visiting Professional, JPO, G-/P-posten", w: "https://www.icc-cpi.int/jobs", note: "Past perfect bij de HRW-achtergrond (documentatie van misdrijven). Risico: VS-sancties (aug. 2026 tegen de president van het Hof, sept. 2026 dreiging met sancties tegen het hele Hof). Ook relevant: Trust Fund for Victims en het Office of the Prosecutor (analist)." },
  { n: "OVSE Hoge Commissaris voor Nationale Minderheden (HCNM)", s: "io-nl", loc: "Den Haag", th: ["conflictpreventie", "minderheden"], fit: 3, nl: "nee", in: "Internship, junior officer via secondment", w: "https://www.osce.org/hcnm", note: "Conflictpreventie in de kern en in Den Haag. Klein, maar erg relevant." },
  { n: "International Commission on Missing Persons (ICMP)", s: "io-nl", loc: "Den Haag", th: ["vermiste personen", "transitional justice"], fit: 3, nl: "nee", in: "Programme officer, internship", w: "https://www.icmp.int", note: "Werkt op het snijvlak van transitional justice en mensenrechten." },
  { n: "IOM Nederland", s: "io-nl", loc: "Den Haag", th: ["migratie", "terugkeer"], fit: 2, nl: "plus", in: "Project assistant/officer", w: "https://netherlands.iom.int", note: "VN-migratieorganisatie, met projecten in Nederland en in de regio." },
  { n: "UNHCR Nederland", s: "io-nl", loc: "Den Haag", th: ["vluchtelingen", "bescherming"], fit: 2, nl: "plus", in: "Associate, internship", w: "https://www.unhcr.org/nl", note: "Klein kantoor. UNHCR adverteert wereldwijd veel minder vacatures (−83%), dus de concurrentie is hoog." },
  { n: "Internationaal Gerechtshof (ICJ)", s: "io-nl", loc: "Den Haag", th: ["internationaal recht"], fit: 1, nl: "nee", in: "Internship (vaak onbetaald/universitair gesponsord)", w: "https://www.icj-cij.org", note: "Vooral juridisch georiënteerd, dus minder logisch voor een IDS-profiel." },
  { n: "IRMCT (Residual Mechanism)", s: "io-nl", loc: "Den Haag", th: ["internationaal strafrecht", "archieven"], fit: 2, nl: "nee", in: "Internship, korte contracten", w: "https://www.irmct.org", note: "Neemt de restfuncties over van de tribunalen voor Joegoslavië en Rwanda." },
  { n: "Kosovo Specialist Chambers", s: "io-nl", loc: "Den Haag", th: ["internationaal strafrecht", "slachtoffers"], fit: 2, nl: "nee", in: "Internship, victims' participation office", w: "https://www.scp-ks.org", note: "EU-gefinancierd hof. Stages en junior functies." },
  { n: "Permanent Hof van Arbitrage (PCA)", s: "io-nl", loc: "Den Haag", th: ["arbitrage", "geschillenbeslechting"], fit: 1, nl: "nee", in: "Assistant legal counsel (jurist), internship", w: "https://pca-cpa.org", note: "Conflictoplossing tussen staten, maar het werk is vooral juridisch." },
  { n: "OPCW", s: "io-nl", loc: "Den Haag", th: ["ontwapening", "veiligheid"], fit: 1, nl: "nee", in: "Internship (externe betrekkingen, beleid)", w: "https://www.opcw.org", note: "Er zijn ook beleids- en externe-betrekkingenfuncties naast het technische werk." },
  { n: "Eurojust", s: "io-nl", loc: "Den Haag", th: ["justitiële samenwerking", "genocide-netwerk"], fit: 2, nl: "nee", in: "Traineeship (~€1.500/mnd, 5 mnd)", w: "https://www.eurojust.europa.eu", note: "Hier zit het Genocide Network, dat zich bezighoudt met vervolging van internationale misdrijven. Dat sluit goed aan op HRW." },
  { n: "Europol", s: "io-nl", loc: "Den Haag", th: ["veiligheid", "mensenhandel"], fit: 1, nl: "nee", in: "Traineeship (o.a. EU & International Affairs)", w: "https://www.europol.europa.eu/careers-procurement", note: "Biedt traineeships in beleid en internationale zaken." },
  { n: "ICCT (International Centre for Counter-Terrorism)", s: "io-nl", loc: "Den Haag", th: ["terrorisme", "mensenrechten", "rechtsstaat"], fit: 2, nl: "nee", in: "Junior research fellow, project officer", w: "https://www.icct.nl", note: "Denktank met een duidelijke mensenrechtenhoek (counter-terrorisme en rechtsstaat)." },
  { n: "The Hague Academy for Local Governance", s: "io-nl", loc: "Den Haag", th: ["lokaal bestuur", "training", "fragiele staten"], fit: 3, nl: "nee", in: "Programme officer, project assistant", w: "https://thehagueacademy.com", note: "Geeft trainingen aan bestuurders uit het Mondiale Zuiden. Past goed bij IDS." },
  { n: "IDLO (Den Haag)", s: "io-nl", loc: "Den Haag", th: ["rechtsstaat", "toegang tot recht"], fit: 2, nl: "nee", in: "Programme officer, internship", w: "https://www.idlo.int", note: "Intergouvernementele organisatie voor rechtsontwikkeling, met een kantoor in Den Haag." },
  { n: "UNU-MERIT", s: "io-nl", loc: "Maastricht", th: ["ontwikkeling", "beleid", "onderzoek"], fit: 2, nl: "nee", in: "Research assistant, PhD", note: "VN-universiteit voor onderzoek naar innovatie en ontwikkelingsbeleid." },

  /* ───────────── Internationale organisaties buitenland ───────────── */
  { n: "VN-secretariaat (o.a. DPPA, OCHA, DPO)", s: "io-int", loc: "New York / Genève / missies", th: ["vrede", "politieke zaken", "humanitair"], fit: 3, nl: "nee", in: "Internship, YPP (P-1/P-2), JPO", w: "https://careers.un.org", note: "DPPA (Political & Peacebuilding Affairs) is de plek voor conflict resolution. Het aantal vacatures is sinds 2025 met ongeveer 43% gedaald (UN80-bezuinigingen)." },
  { n: "OHCHR (VN-mensenrechtenbureau)", s: "io-int", loc: "Genève + veldkantoren", th: ["mensenrechten", "monitoring", "onderzoekscommissies"], fit: 3, nl: "nee", in: "Internship, JPO, consultancy bij onderzoekscommissies", w: "https://www.ohchr.org", note: "Inhoudelijk de beste match, maar in 2026 vervallen 117 posten en is de onderzoekscapaciteit gehalveerd. Een JPO-plek is de meest realistische ingang." },
  { n: "UNDP", s: "io-int", loc: "Wereldwijd", th: ["ontwikkeling", "governance", "conflictpreventie"], fit: 3, nl: "nee", in: "JPO, UNV, internship, consultancy", w: "https://jobs.undp.org", note: "De grootste afnemer van JPO's. Werkt aan governance en peacebuilding." },
  { n: "UNICEF / UN Women / UNFPA", s: "io-int", loc: "Wereldwijd", th: ["kinderrechten", "gender", "SRGR"], fit: 2, nl: "nee", in: "JPO, internship, UNV", note: "Thematische VN-organisaties. Nederland financiert er vaak JPO-plekken." },
  { n: "UNHCR (internationaal)", s: "io-int", loc: "Genève / veld", th: ["vluchtelingen", "bescherming"], fit: 2, nl: "nee", in: "JPO, UNV, Associate Protection Officer", w: "https://www.unhcr.org/careers", note: "UNHCR schrapt een derde van zijn activiteiten. Voorlopig is er zeer beperkte instroom." },
  { n: "IOM (internationaal)", s: "io-int", loc: "Wereldwijd", th: ["migratie"], fit: 2, nl: "nee", in: "JPO, internship, project officer", w: "https://www.iom.int/careers", note: "Ook hier gelden VN-brede bezuinigingen." },
  { n: "OVSE (secretariaat & veldmissies)", s: "io-int", loc: "Wenen / Oost-Europa / Centraal-Azië", th: ["conflictpreventie", "democratisering", "mensenrechten"], fit: 3, nl: "nee", in: "Internship, gedetacheerde posities, verkiezingswaarneming", w: "https://jobs.osce.org", note: "Veel posities lopen via detachering door lidstaten. Vraag bij BZ na hoe Nederland kandidaten voordraagt. Verkiezingswaarnemer (via ODIHR) is een goede eerste stap." },
  { n: "Raad van Europa", s: "io-int", loc: "Straatsburg", th: ["mensenrechten", "rechtsstaat"], fit: 3, nl: "nee", in: "Traineeship (2x per jaar), junior professional", w: "https://www.coe.int/en/web/jobs", note: "Kerninstelling voor mensenrechten in Europa. Frans is een pluspunt." },
  { n: "EU — EEAS & EU-delegaties", s: "io-int", loc: "Brussel / wereldwijd", th: ["buitenlands beleid", "mensenrechten", "vrede"], fit: 3, nl: "nee", in: "Blue Book traineeship, funded traineeships voor young graduates bij delegaties, contractagent", w: "https://www.eeas.europa.eu", note: "EU-delegaties bieden betaalde traineeships van een paar maanden. Houd hun pagina's in de gaten." },
  { n: "Europese Commissie (DG INTPA, DG ECHO, DG HOME)", s: "io-int", loc: "Brussel", th: ["ontwikkeling", "humanitair", "migratie"], fit: 3, nl: "nee", in: "Blue Book traineeship, EPSO AD5, contractagent (CAST)", w: "https://eu-careers.europa.eu", note: "AD5 2026: 174.727 sollicitanten voor 1.490 plekken. Contractagent is vaak een realistischere eerste stap." },
  { n: "Europees Parlement", s: "io-int", loc: "Brussel / Straatsburg", th: ["politiek", "mensenrechten (DROI)"], fit: 2, nl: "plus", in: "Schuman traineeship, assistent van een Europarlementariër", w: "https://ep-stages.gestmax.eu", note: "Werken als assistent van een Nederlands Europarlementariër is een snelle ingang." },
  { n: "EU Grondrechtenagentschap (FRA)", s: "io-int", loc: "Wenen", th: ["grondrechten", "onderzoek"], fit: 3, nl: "nee", in: "Traineeship, contractagent", w: "https://fra.europa.eu", note: "Onderzoek en data over grondrechten in de EU. Sluit sterk aan op HRW." },
  { n: "NAVO", s: "io-int", loc: "Brussel / Den Haag (NCIA)", th: ["veiligheid", "WPS"], fit: 1, nl: "nee", in: "NATO Internship Programme", note: "Alleen voor onderdanen van NAVO-landen. Er zijn ook plekken rond Women, Peace & Security." },
  { n: "ICRC (Rode Kruis internationaal)", s: "io-int", loc: "Genève / veld", th: ["humanitair recht", "bescherming"], fit: 2, nl: "nee", in: "Internship Genève; veldfuncties na ervaring", w: "https://careers.icrc.org", note: "Voor veldfuncties is werkervaring nodig, maar dit is een sterke langetermijnoptie." },
  { n: "OESO", s: "io-int", loc: "Parijs", th: ["ontwikkeling (DAC)", "fragiliteit", "MVO-richtlijnen"], fit: 2, nl: "nee", in: "Internship, junior policy analyst", w: "https://www.oecd.org/careers", note: "De States of Fragility-rapporten en het werk aan verantwoord ondernemen zijn relevant." },
  { n: "Wereldbank", s: "io-int", loc: "Washington / landenkantoren", th: ["ontwikkeling", "fragiliteit (FCV)"], fit: 1, nl: "nee", in: "Short-term consultant; YPP pas later (vereist meer ervaring)", w: "https://www.worldbank.org/en/about/careers", note: "Een optie voor de lange termijn." },

  /* ───────────── NGO — mensenrechten ───────────── */
  { n: "Amnesty International Nederland", s: "ngo-mr", loc: "Amsterdam", th: ["mensenrechten", "onderzoek", "campagne"], fit: 3, nl: "ja", in: "Junior onderzoeker, beleidsmedewerker, campagnemedewerker", w: "https://www.amnesty.nl/werken-bij-amnesty", note: "De meest directe vertaling van het HRW-werk naar een Nederlandse organisatie." },
  { n: "Amnesty International (Internationaal Secretariaat)", s: "ngo-mr", loc: "Londen / regionale kantoren", th: ["mensenrechtenonderzoek"], fit: 3, nl: "nee", in: "Research assistant, campaigner", w: "https://careers.amnesty.org", note: "Hier gebruik je HRW-ervaring het directst. De concurrentie is wereldwijd." },
  { n: "Human Rights Watch (netwerk)", s: "ngo-mr", loc: "Diverse kantoren (o.a. Brussel, Berlijn, Genève)", th: ["mensenrechtenonderzoek", "advocacy"], fit: 3, nl: "nee", in: "Associate, research assistant, coordinator", w: "https://www.hrw.org/careers", note: "Je bestaande netwerk. Vraag oud-collega's actief om tips en referenties. Associate-functies zijn de gebruikelijke tweede stap na een stage." },
  { n: "Justice & Peace Netherlands", s: "ngo-mr", loc: "Den Haag", th: ["mensenrechtenverdedigers", "Shelter City"], fit: 3, nl: "plus", in: "Projectmedewerker, programme officer", w: "https://justiceandpeace.nl", note: "Coördineert Shelter City, de opvang van bedreigde mensenrechtenverdedigers. Een zeer goede match." },
  { n: "Nederlands Helsinki Comité", s: "ngo-mr", loc: "Den Haag", th: ["rechtsstaat", "mensenrechten", "Oost-Europa"], fit: 3, nl: "plus", in: "Projectmedewerker", w: "https://www.nhc.nl", note: "Werkt aan mensenrechten en rechtsstaat in Europa, met projecten in onder meer Oekraïne en de Westelijke Balkan." },
  { n: "Free Press Unlimited", s: "ngo-mr", loc: "Amsterdam", th: ["persvrijheid", "media in conflict"], fit: 3, nl: "plus", in: "Project officer, junior programme manager", w: "https://www.freepressunlimited.org", note: "Persvrijheid en journalistiek in conflictgebieden." },
  { n: "Defence for Children", s: "ngo-mr", loc: "Leiden", th: ["kinderrechten", "migratie"], fit: 2, nl: "ja", in: "Beleidsmedewerker, projectmedewerker", w: "https://www.defenceforchildren.nl", note: "Combineert kinderrechten met migratie." },
  { n: "NJCM / PILP", s: "ngo-mr", loc: "Leiden / Amsterdam", th: ["strategisch procederen", "mensenrechten in NL"], fit: 2, nl: "ja", in: "Projectmedewerker, onderzoeker", w: "https://pilpnjcm.nl", note: "PILP (Public Interest Litigation Project) voert strategische rechtszaken over mensenrechten in Nederland." },
  { n: "COC Nederland", s: "ngo-mr", loc: "Amsterdam", th: ["LHBTI-rechten", "internationaal"], fit: 2, nl: "plus", in: "Programmamedewerker internationaal", w: "https://www.coc.nl", note: "Heeft een sterk internationaal LHBTI-programma." },
  { n: "Controle Alt Delete", s: "ngo-mr", loc: "Amsterdam", th: ["etnisch profileren", "politie"], fit: 1, nl: "ja", in: "Onderzoeker, campagnemedewerker", w: "https://www.controlealtdelete.nl", note: "Klein en activistisch." },
  { n: "Movies that Matter", s: "ngo-mr", loc: "Den Haag", th: ["mensenrechtenfilm", "educatie"], fit: 1, nl: "plus", in: "Programmamedewerker", note: "Mensenrechtenfilmfestival. Een creatieve route binnen het veld." },

  /* ───────────── NGO — ontwikkeling & gender ───────────── */
  { n: "Oxfam Novib", s: "ngo-os", loc: "Den Haag", th: ["ongelijkheid", "conflict", "klimaat", "gender"], fit: 3, nl: "plus", in: "Programme officer, junior beleidsadviseur, onderzoeker", w: "https://www.oxfamnovib.nl/vacatures", note: "Een grote speler die door de subsidiekorting onder druk staat. Er is een unit Conflict & Peacebuilding." },
  { n: "Cordaid", s: "ngo-os", loc: "Den Haag", th: ["fragiele staten", "justice & peace", "gezondheid"], fit: 3, nl: "plus", in: "Programme officer, MEAL officer", w: "https://www.cordaid.org/en/careers", note: "Expliciet gericht op fragiliteit en vrede. Coördineert ook het CSPPS-platform voor peacebuilding." },
  { n: "Hivos", s: "ngo-os", loc: "Den Haag", th: ["burgerruimte", "digitale rechten", "gender"], fit: 3, nl: "plus", in: "Programme officer", w: "https://hivos.org", note: "Werkt aan civic space en vrije meningsuiting." },
  { n: "SNV", s: "ngo-os", loc: "Den Haag + landenkantoren", th: ["landbouw", "water", "energie", "fragiliteit"], fit: 2, nl: "nee", in: "Junior advisor, programme officer", w: "https://www.snv.org", note: "Een uitvoerende ontwikkelingsorganisatie met veel veldfuncties." },
  { n: "Plan International Nederland", s: "ngo-os", loc: "Amsterdam", th: ["meisjesrechten", "onderwijs"], fit: 2, nl: "plus", in: "Programmamedewerker, beleidsmedewerker", w: "https://www.planinternational.nl", note: "Richt zich op meisjes, kinderhuwelijken en noodhulp." },
  { n: "Save the Children Nederland", s: "ngo-os", loc: "Den Haag", th: ["kinderrechten", "kinderen in conflict"], fit: 2, nl: "plus", in: "Programme officer, advocacy officer", w: "https://www.savethechildren.nl", note: "Werkt aan de bescherming van kinderen in gewapend conflict." },
  { n: "Terre des Hommes Nederland", s: "ngo-os", loc: "Den Haag", th: ["kinderuitbuiting", "mensenhandel"], fit: 2, nl: "plus", in: "Programme officer", note: "Richt zich op uitbuiting van kinderen." },
  { n: "Mama Cash", s: "ngo-os", loc: "Amsterdam", th: ["vrouwenrechten", "feministische fondsen"], fit: 2, nl: "nee", in: "Programme associate", w: "https://www.mamacash.org", note: "Een internationaal feministisch fonds. De werktaal is Engels." },
  { n: "WO=MEN Dutch Gender Platform", s: "ngo-os", loc: "Den Haag", th: ["gender", "vrouwen, vrede & veiligheid (NAP 1325)"], fit: 3, nl: "plus", in: "Projectmedewerker, beleidsmedewerker", note: "Coördineert het Nederlandse Nationaal Actieplan 1325. Dat combineert gender met conflict." },
  { n: "Rutgers", s: "ngo-os", loc: "Utrecht", th: ["SRGR", "seksuele gezondheid"], fit: 1, nl: "plus", in: "Programme officer", w: "https://rutgers.nl", note: "Expertisecentrum voor seksualiteit, ook internationaal actief." },
  { n: "Simavi / Aidsfonds", s: "ngo-os", loc: "Amsterdam", th: ["gezondheid", "gender"], fit: 1, nl: "plus", in: "Programme officer", note: "Gezondheidsgerichte ontwikkelingsorganisaties." },
  { n: "Both ENDS", s: "ngo-os", loc: "Amsterdam", th: ["klimaatrechtvaardigheid", "land- en waterrechten"], fit: 2, nl: "nee", in: "Projectmedewerker, beleidsmedewerker", w: "https://www.bothends.org", note: "Werkt waar milieu en mensenrechten elkaar raken." },
  { n: "Milieudefensie", s: "ngo-os", loc: "Amsterdam", th: ["klimaat", "rechtszaken", "bedrijven"], fit: 1, nl: "ja", in: "Campagnemedewerker, onderzoeker", w: "https://milieudefensie.nl", note: "Bekend van strategische klimaatzaken zoals die tegen Shell." },
  { n: "Solidaridad", s: "ngo-os", loc: "Utrecht", th: ["ketens", "duurzame landbouw"], fit: 1, nl: "nee", in: "Programme officer", note: "Werkt aan eerlijke en duurzame ketens." },
  { n: "RNW Media", s: "ngo-os", loc: "Hilversum", th: ["digitale media", "jongeren", "vrije meningsuiting"], fit: 2, nl: "nee", in: "Project officer", w: "https://www.rnw.org", note: "Digitale media voor jongeren in beperkte vrije ruimtes." },
  { n: "Spark", s: "ngo-os", loc: "Amsterdam", th: ["ondernemerschap in fragiele staten"], fit: 2, nl: "nee", in: "Programme officer", note: "Werkt in post-conflictlanden aan banen voor jongeren." },
  { n: "ActionAid Nederland", s: "ngo-os", loc: "Amsterdam", th: ["belastingrechtvaardigheid", "vrouwenrechten"], fit: 1, nl: "plus", in: "Beleidsmedewerker, campagne", note: "Klein en gericht op lobby." },
  { n: "Kerk in Actie / Mensen met een Missie", s: "ngo-os", loc: "Utrecht / Den Haag", th: ["vrede", "religie & conflict", "noodhulp"], fit: 2, nl: "ja", in: "Programmamedewerker", note: "Kerkelijke organisaties met vredesprogramma's." },
  { n: "Partos", s: "ngo-os", loc: "Amsterdam", th: ["koepel OS-sector"], fit: 2, nl: "ja", in: "Beleidsmedewerker (klein)", w: "https://www.partos.nl", note: "De brancheorganisatie van de sector. Die verliest zelf ook subsidie, maar het netwerk en de nieuwsbrief zijn waardevol voor je marktkennis." },

  /* ───────────── NGO — humanitair & migratie ───────────── */
  { n: "Artsen zonder Grenzen (MSF-OCA)", s: "ngo-hum", loc: "Amsterdam + veld", th: ["humanitair", "advocacy", "humanitaire zaken"], fit: 3, nl: "nee", in: "Humanitarian affairs officer, advocacy, veldcoördinatie (na ervaring)", w: "https://www.artsenzondergrenzen.nl/werken-bij", note: "Het Operational Centre Amsterdam is een van de vijf operationele centra. Bij Humanitarian Affairs past het HRW-profiel heel goed." },
  { n: "Nederlandse Rode Kruis", s: "ngo-hum", loc: "Den Haag", th: ["noodhulp", "humanitair recht", "data (510)"], fit: 2, nl: "plus", in: "Programme officer, humanitarian diplomacy", w: "https://www.rodekruis.nl/werken-bij", note: "Het initiatief 510 werkt met data. Er zijn ook functies rond humanitair oorlogsrecht." },
  { n: "War Child", s: "ngo-hum", loc: "Amsterdam", th: ["kinderen in conflict", "psychosociale steun"], fit: 3, nl: "plus", in: "Programme officer, onderzoeker", w: "https://www.warchild.nl", note: "Werkt rond conflict en heeft een sterke onderzoeksafdeling." },
  { n: "ZOA", s: "ngo-hum", loc: "Apeldoorn + veld", th: ["wederopbouw", "conflict", "vluchtelingen"], fit: 2, nl: "plus", in: "Programme officer, veldfuncties", note: "Werkt aan wederopbouw na conflict." },
  { n: "Stichting Vluchteling", s: "ngo-hum", loc: "Den Haag", th: ["vluchtelingenhulp"], fit: 2, nl: "ja", in: "Programmamedewerker", note: "Financiert noodhulp aan vluchtelingen." },
  { n: "VluchtelingenWerk Nederland", s: "ngo-hum", loc: "Amsterdam + regio", th: ["asiel", "integratie", "belangenbehartiging"], fit: 2, nl: "ja", in: "Beleidsmedewerker, juridisch medewerker", w: "https://www.vluchtelingenwerk.nl", note: "Heeft beleids- en lobbyfuncties en veel ruimte voor vrijwilligers." },
  { n: "Dutch Relief Alliance", s: "ngo-hum", loc: "Den Haag", th: ["humanitaire coördinatie"], fit: 2, nl: "nee", in: "Coördinatie-/supportfuncties", note: "Een samenwerkingsverband van Nederlandse humanitaire NGO's." },
  { n: "Dokters van de Wereld", s: "ngo-hum", loc: "Amsterdam", th: ["gezondheid", "ongedocumenteerden"], fit: 1, nl: "ja", in: "Projectmedewerker", note: "Richt zich op zorg voor ongedocumenteerden in Nederland." },
  { n: "ASKV / Steunpunt Vluchtelingen", s: "ngo-hum", loc: "Amsterdam", th: ["ongedocumenteerden"], fit: 1, nl: "ja", in: "Projectmedewerker", note: "Klein, met een grassroots-karakter." },

  /* ───────────── Vrede & conflictoplossing ───────────── */
  { n: "PAX", s: "vrede", loc: "Utrecht", th: ["vredesopbouw", "bescherming burgers", "ontwapening"], fit: 3, nl: "plus", in: "Projectmedewerker, onderzoeker, programme officer", w: "https://paxvoorvrede.nl", note: "De grootste Nederlandse vredesorganisatie. Doet veel onderzoek naar burgerslachtoffers." },
  { n: "GPPAC", s: "vrede", loc: "Den Haag", th: ["conflictpreventie", "civil society netwerk"], fit: 3, nl: "nee", in: "Programme officer, network coordinator", w: "https://gppac.net", note: "Global Partnership for the Prevention of Armed Conflict: een wereldwijd netwerk voor conflictpreventie." },
  { n: "Impunity Watch", s: "vrede", loc: "Den Haag / Utrecht", th: ["transitional justice", "slachtofferparticipatie"], fit: 3, nl: "nee", in: "Programme officer, research", note: "Transitional justice. Een directe brug tussen HRW-werk en conflict resolution." },
  { n: "Women's Initiatives for Gender Justice", s: "vrede", loc: "Den Haag", th: ["seksueel geweld in conflict", "ICC"], fit: 3, nl: "nee", in: "Programme officer, legal/advocacy", note: "Werkt aan gendergerechtigheid bij het ICC en in conflictsituaties." },
  { n: "HiiL", s: "vrede", loc: "Den Haag", th: ["toegang tot recht", "geschilbeslechting"], fit: 3, nl: "nee", in: "Junior researcher, programme officer", w: "https://www.hiil.org", note: "Werkt aan people-centred justice en heeft veel onderzoeksfuncties." },
  { n: "NIMD", s: "vrede", loc: "Den Haag", th: ["democratie", "politieke dialoog"], fit: 3, nl: "nee", in: "Programme officer", w: "https://nimd.org", note: "Netherlands Institute for Multiparty Democracy. Organiseert dialoog tussen politieke partijen in fragiele landen." },
  { n: "Clingendael Academy", s: "vrede", loc: "Den Haag", th: ["mediation-training", "diplomatieke training"], fit: 3, nl: "plus", in: "Junior training coordinator", w: "https://www.clingendael.org", note: "Traint diplomaten en mediators wereldwijd, met veel praktisch conflict-resolution-werk." },
  { n: "European Institute of Peace (EIP)", s: "vrede", loc: "Brussel", th: ["mediation", "dialoog"], fit: 3, nl: "nee", in: "Programme assistant/officer", w: "https://www.eip.org", note: "Een Europese mediationorganisatie, op een uur of twee van Nederland." },
  { n: "International Crisis Group", s: "vrede", loc: "Brussel / wereldwijd", th: ["conflictanalyse", "advocacy"], fit: 3, nl: "nee", in: "Research assistant, (senior) analyst-trajecten", w: "https://www.crisisgroup.org", note: "Doet hetzelfde soort veldonderzoek als HRW, maar met een conflictlens." },
  { n: "Search for Common Ground", s: "vrede", loc: "Brussel / Washington / veld", th: ["dialoog", "conflicttransformatie"], fit: 2, nl: "nee", in: "Programme officer", note: "Een grote internationale peacebuilding-NGO." },
  { n: "HD Centre / Interpeace / swisspeace", s: "vrede", loc: "Genève / Bern", th: ["mediation", "vredesprocessen"], fit: 2, nl: "nee", in: "Programme assistant, internship", note: "Zwitserse mediationorganisaties. Het is een competitieve, maar invloedrijke cluster." },
  { n: "Conciliation Resources", s: "vrede", loc: "Londen", th: ["vredesprocessen", "inclusie"], fit: 2, nl: "nee", in: "Programme officer", note: "Britse peacebuilding-NGO." },
  { n: "CMI – Martti Ahtisaari Peace Foundation", s: "vrede", loc: "Helsinki / Brussel", th: ["mediation"], fit: 2, nl: "nee", in: "Project officer", note: "Een vooraanstaande mediationorganisatie." },
  { n: "Buurtbemiddeling (CCV) / mediationpraktijk NL", s: "vrede", loc: "Heel Nederland", th: ["lokale conflictbemiddeling"], fit: 1, nl: "ja", in: "Coördinator buurtbemiddeling, MfN-mediator (opleiding)", note: "Conflictoplossing in Nederland zelf. Een mediationopleiding (MfN-register) kan een praktisch pluspunt zijn." },

  /* ───────────── Denktanks & kennisinstituten ───────────── */
  { n: "Clingendael Instituut (o.a. Conflict Research Unit)", s: "kennis", loc: "Den Haag", th: ["conflict", "migratie", "EU", "veiligheid"], fit: 3, nl: "plus", in: "Junior research fellow, research assistant", w: "https://careers.clingendael.org", note: "De topdenktank in Nederland. Let op: stages (€550/mnd) zijn alleen voor studenten in de afrondende fase. Na je afstuderen solliciteer je op junior research-functies." },
  { n: "ECDPM", s: "kennis", loc: "Maastricht / Brussel", th: ["EU-Afrika", "ontwikkelingsbeleid", "vrede & veiligheid"], fit: 3, nl: "nee", in: "Junior policy officer, young professional", w: "https://ecdpm.org", note: "Een denktank voor EU-ontwikkelingsbeleid. Werft regelmatig junior policy officers. Een zeer goede match." },
  { n: "KIT Royal Tropical Institute", s: "kennis", loc: "Amsterdam", th: ["ontwikkelingsonderzoek", "gezondheid", "gender"], fit: 3, nl: "nee", in: "Junior advisor/researcher", w: "https://www.kit.nl", note: "Toegepast onderzoek naar ontwikkeling in Amsterdam." },
  { n: "HCSS", s: "kennis", loc: "Den Haag", th: ["veiligheid", "strategie"], fit: 2, nl: "plus", in: "Junior analyst, assistant analyst", w: "https://hcss.nl", note: "Een strategische denktank met een kwantitatievere inslag." },
  { n: "T.M.C. Asser Instituut", s: "kennis", loc: "Den Haag", th: ["internationaal recht", "mensenrechten"], fit: 2, nl: "nee", in: "Junior researcher, project officer", w: "https://www.asser.nl", note: "Een onderzoeksinstituut voor internationaal en Europees recht." },
  { n: "NIOD", s: "kennis", loc: "Amsterdam", th: ["genocide", "oorlog", "geschiedenis"], fit: 2, nl: "plus", in: "Junior onderzoeker, onderzoeksassistent", w: "https://www.niod.nl", note: "Instituut voor Oorlogs-, Holocaust- en Genocidestudies." },
  { n: "WRR", s: "kennis", loc: "Den Haag", th: ["regeringsbeleid", "lange termijn"], fit: 1, nl: "ja", in: "Wetenschappelijk medewerker (zeldzaam)", w: "https://www.wrr.nl", note: "Een prestigieuze raad. Er komen zelden vacatures." },
  { n: "The Broker", s: "kennis", loc: "Den Haag", th: ["kennisdeling OS"], fit: 2, nl: "nee", in: "Junior knowledge broker", note: "Organiseert kennisdeling in de ontwikkelingssector." },
  { n: "Atlantische Commissie / ProDemos", s: "kennis", loc: "Den Haag", th: ["buitenlands beleid", "democratie-educatie"], fit: 1, nl: "ja", in: "Projectmedewerker", note: "Kleinere organisaties. Interessant voor je netwerk en evenementen." },

  /* ───────────── Universiteiten & hogescholen ───────────── */
  { n: "Universiteit van Amsterdam — AISSR / IDS-programma", s: "uni", loc: "Amsterdam", th: ["ontwikkelingsstudies", "governance", "conflict"], fit: 3, nl: "plus", in: "Promovendus, onderzoeksassistent, tutor/docent IDS, projectcoördinator onderzoeksproject", w: "https://werkenbij.uva.nl", note: "Je eigen opleiding: scriptiebegeleiders en docenten kennen je werk. Vraag actief naar ERC- of NWO-projecten die onderzoeksassistenten of promovendi zoeken." },
  { n: "Amsterdam University College (AUC)", s: "uni", loc: "Amsterdam", th: ["liberal arts", "sociale wetenschappen"], fit: 3, nl: "nee", in: "Tutor/junior docent (Social Sciences), teaching assistant, programmacoördinator", w: "https://www.auc.nl", note: "Je cum laude honoursdiploma is hier een directe aanbeveling. Junior docent/tutor-functies zijn vaak tijdelijk, maar een goede opstap naar onderwijs of een promotie." },
  { n: "UvA — Amsterdam Center for International Law / Law Clinics", s: "uni", loc: "Amsterdam", th: ["internationaal recht", "mensenrechten"], fit: 2, nl: "nee", in: "Projectmedewerker, onderzoeksassistent", note: "Interdisciplinaire mensenrechtenprojecten zoeken soms niet-juristen voor onderzoek." },
  { n: "Universiteit Leiden — Institute of Security and Global Affairs (ISGA)", s: "uni", loc: "Den Haag", th: ["veiligheid", "conflict", "terrorisme"], fit: 3, nl: "plus", in: "Junior docent, promovendus, onderzoeksassistent", w: "https://www.universiteitleiden.nl/vacatures", note: "Campus Den Haag. ISGA werft regelmatig junior docenten (vaak tijdelijk)." },
  { n: "Leiden University College The Hague (LUC)", s: "uni", loc: "Den Haag", th: ["global challenges", "vrede & recht"], fit: 3, nl: "nee", in: "Junior lecturer, tutor", note: "Een liberal-arts-college zoals AUC, met als thema's 'Peace, Justice & Security' en 'International Justice'. Dat sluit goed aan op je profiel." },
  { n: "Universiteit Leiden — Grotius Centre / Kalshoven-Gieskes Forum", s: "uni", loc: "Den Haag / Leiden", th: ["internationaal strafrecht", "humanitair recht"], fit: 2, nl: "nee", in: "Projectmedewerker, onderzoeksassistent", note: "Trainingen en onderzoek rond internationaal strafrecht." },
  { n: "Erasmus Universiteit — International Institute of Social Studies (ISS)", s: "uni", loc: "Den Haag", th: ["ontwikkelingsstudies", "conflict", "migratie", "agrarische vraagstukken"], fit: 3, nl: "nee", in: "Promovendus, onderzoeksassistent, projectmedewerker, beleidsmedewerker onderwijs", w: "https://www.iss.nl", note: "Hét Nederlandse instituut voor ontwikkelingsstudies, met een internationale staf. Hier past een IDS-master het best." },
  { n: "Universiteit Utrecht — Netherlands Institute of Human Rights (SIM) / UCU", s: "uni", loc: "Utrecht", th: ["mensenrechten", "conflictstudies"], fit: 3, nl: "plus", in: "Promovendus, onderzoeksassistent, junior docent (UCU), projectcoördinator", w: "https://www.uu.nl/organisatie/werken-bij-de-universiteit-utrecht", note: "SIM is een van de oudste mensenrechteninstituten. Ook de master Conflict Studies & Human Rights en University College Utrecht zijn relevant." },
  { n: "VU Amsterdam — Sociale wetenschappen / Rechten", s: "uni", loc: "Amsterdam", th: ["migratie", "conflict", "mensenrechten"], fit: 2, nl: "plus", in: "Promovendus, junior docent, onderzoeksassistent", w: "https://werkenbij.vu.nl", note: "Hier lopen onder meer onderzoeksprogramma's over migratie, grenzen en conflict." },
  { n: "Radboud Universiteit — Centre for Migration Law / ontwikkelingsstudies", s: "uni", loc: "Nijmegen", th: ["migratie", "ontwikkeling"], fit: 2, nl: "plus", in: "Promovendus, onderzoeksassistent", w: "https://www.ru.nl/werken-bij", note: "Een sterk centrum voor migratierecht en -onderzoek." },
  { n: "Rijksuniversiteit Groningen — NOHA / Globalisation Studies", s: "uni", loc: "Groningen", th: ["humanitaire actie", "globalisering"], fit: 2, nl: "plus", in: "Junior docent, projectcoördinator, promovendus", w: "https://www.rug.nl/about-ug/work-with-us", note: "Het NOHA-netwerk (humanitarian action) heeft een groot alumni-netwerk bij NGO's." },
  { n: "Wageningen University — Sociology of Development & Change", s: "uni", loc: "Wageningen", th: ["conflict & disaster studies", "ontwikkeling"], fit: 2, nl: "nee", in: "Promovendus, onderzoeksassistent", w: "https://www.wur.nl/nl/werken-bij", note: "De groep Disaster Studies doet onderzoek naar conflict en humanitaire crises." },
  { n: "Maastricht University — Centre for Human Rights / UNU-MERIT", s: "uni", loc: "Maastricht", th: ["mensenrechten", "ontwikkelingsbeleid"], fit: 2, nl: "nee", in: "Promovendus, onderzoeksassistent", w: "https://www.maastrichtuniversity.nl/about-um/working-um", note: "Een internationale universiteit waar Engels de werktaal is." },
  { n: "Tilburg University — Law School / Intervict-traditie", s: "uni", loc: "Tilburg", th: ["slachtofferstudies", "mensenhandel"], fit: 1, nl: "plus", in: "Promovendus, onderzoeksassistent", note: "Onderzoek naar victimologie en mensenhandel." },
  { n: "University College Roosevelt / UC Fryslân", s: "uni", loc: "Middelburg / Leeuwarden", th: ["liberal arts", "global responsibility"], fit: 2, nl: "nee", in: "Junior docent, tutor", note: "Liberal-arts-colleges waar een AUC-achtergrond direct herkend wordt." },
  { n: "De Haagse Hogeschool — International Studies / Lectoraat Global Governance", s: "uni", loc: "Den Haag", th: ["internationale betrekkingen", "mensenrechten"], fit: 2, nl: "plus", in: "Docent (vaak schaal 10–11 cao hbo), onderzoeker lectoraat", w: "https://www.dehaagsehogeschool.nl/werken-bij", note: "Een hogeschooldocentschap levert vaak een vaster contract en betere werktijden op. Het lectoraat doet praktijkgericht onderzoek." },
  { n: "Hogeschool van Amsterdam / Hogeschool Utrecht (internationale opleidingen)", s: "uni", loc: "Amsterdam / Utrecht", th: ["internationaal management", "sociaal werk", "migratie"], fit: 1, nl: "ja", in: "Docent, onderzoeker lectoraat", note: "Docentfuncties met een maatschappelijke inslag." },
  { n: "Universiteiten — staf (internationalisering, onderzoeksbeleid, impact)", s: "uni", loc: "Heel Nederland", th: ["internationalisering", "onderzoeksbeleid", "subsidie-advies"], fit: 2, nl: "plus", in: "Beleidsmedewerker internationalisering, subsidieadviseur (grants), impact officer", note: "Ondersteunende functies met vaak vaste contracten. Subsidieadviseur (EU/NWO-aanvragen) is een vaardigheid die je later ook bij NGO's kunt gebruiken." },

  /* ───────────── Bedrijfsleven & mensenrechten ───────────── */
  { n: "SOMO", s: "bedrijf", loc: "Amsterdam", th: ["multinationals", "ketenonderzoek", "mensenrechten"], fit: 3, nl: "nee", in: "Junior onderzoeker", w: "https://www.somo.nl", note: "Onderzoek naar multinationals. HRW-achtige methodologie, toegepast op bedrijven." },
  { n: "MVO Platform", s: "bedrijf", loc: "Amsterdam", th: ["IMVO-wetgeving", "lobby"], fit: 2, nl: "ja", in: "Beleidsmedewerker", note: "Een coalitie die lobbyt voor IMVO-wetgeving en de omzetting van de CSDDD." },
  { n: "Fair Wear Foundation", s: "bedrijf", loc: "Amsterdam", th: ["arbeidsrechten", "kleding"], fit: 2, nl: "nee", in: "Junior officer, brand liaison", w: "https://www.fairwear.org", note: "Een multi-stakeholderinitiatief voor arbeidsrechten in de kledingsector." },
  { n: "IDH Sustainable Trade Initiative", s: "bedrijf", loc: "Utrecht", th: ["duurzame handel", "leefbaar loon"], fit: 1, nl: "nee", in: "Programme officer", note: "Een publiek-private partij voor duurzame handel." },
  { n: "FMO (Nederlandse ontwikkelingsbank)", s: "bedrijf", loc: "Den Haag", th: ["impact investing", "ESG", "mensenrechten-due-diligence"], fit: 3, nl: "nee", in: "ESG/impact analyst, trainee", w: "https://www.fmo.nl/careers", note: "Een ontwikkelingsbank met een ESG- en mensenrechtenteam. Betaalt beter dan NGO's en is een stabiele werkgever." },
  { n: "Banken (ABN AMRO, ING, Rabobank) — mensenrechtenteams", s: "bedrijf", loc: "Amsterdam / Utrecht", th: ["human rights due diligence"], fit: 2, nl: "plus", in: "Analist mensenrechten/ESG, traineeship", note: "Nederlandse banken publiceren mensenrechtenrapportages en hebben hiervoor specialisten." },
  { n: "Pensioenuitvoerders (APG, PGGM)", s: "bedrijf", loc: "Amsterdam / Zeist", th: ["verantwoord beleggen", "engagement"], fit: 1, nl: "plus", in: "Responsible investment analyst", note: "Analisten voor engagement met bedrijven over mensenrechten." },
  { n: "Ecorys", s: "bedrijf", loc: "Rotterdam / Brussel", th: ["beleidsevaluatie", "EU-programma's", "ontwikkeling"], fit: 3, nl: "plus", in: "Junior consultant/researcher", w: "https://www.ecorys.com", note: "Voert evaluaties uit voor de EU en BZ. Hier kun je je onderzoeksvaardigheden direct inzetten." },
  { n: "Beleidsadviesbureaus (Berenschot, AEF, Significant, Regioplan)", s: "bedrijf", loc: "Diverse", th: ["beleidsonderzoek", "evaluatie", "migratie"], fit: 2, nl: "ja", in: "Junior adviseur/onderzoeker", note: "Onderzoek en evaluaties in opdracht van de overheid. Je hebt een goed startsalaris en bouwt een breed netwerk op." },
  { n: "Big Four — ESG & Human Rights (Deloitte, PwC, EY, KPMG)", s: "bedrijf", loc: "Amsterdam e.o.", th: ["CSRD/CSDDD", "due diligence"], fit: 1, nl: "plus", in: "Associate sustainability", note: "De vraag hangt af van de CSDDD. Die is versmald via Omnibus I en moet uiterlijk 26 juli 2028 zijn omgezet in nationale wetgeving." },

  /* ───────────── Onderzoek, OSINT & media ───────────── */
  { n: "Bellingcat", s: "media", loc: "Amsterdam (remote-first)", th: ["open-source onderzoek", "accountability"], fit: 3, nl: "nee", in: "Researcher, project officer, Justice & Accountability-unit", w: "https://www.bellingcat.com", note: "OSINT-onderzoek dat dicht bij het HRW-werk ligt. Het Justice & Accountability-team werkt voor tribunalen." },
  { n: "Lighthouse Reports", s: "media", loc: "Amsterdam", th: ["onderzoeksjournalistiek", "migratie", "grenzen"], fit: 2, nl: "nee", in: "Junior researcher/reporter", note: "Doet veel onderzoek naar migratie en grenzen." },
  { n: "Follow the Money / De Correspondent / NRC", s: "media", loc: "Amsterdam / Rotterdam", th: ["journalistiek", "buitenland"], fit: 1, nl: "ja", in: "Researcher, stagiair", note: "Een alternatieve route via de journalistiek." }
];

/* ───────────── Traineeships & instapprogramma's ───────────── */
window.PROGRAMMAS = [
  { n: "Rijkstraineeprogramma", org: "Rijksoverheid", status: "volgende", statusLabel: "Volgende ronde: start sept. 2027",
    eisen: "Pas afgestudeerd (max. 2 jaar vóór start; voor 2026 gold afstuderen tussen 1 sept. 2024 en 1 sept. 2026). Hbo/wo/PhD. Uitstekend Nederlands.",
    salaris: "Schaal 10, trede 0: ca. € 3.496 bruto/mnd + IKB 16,5%", duur: "2 jaar, verschillende plaatsingen",
    deadline: "Aanmelding verwacht ± maart–april 2027 (2025: 27 mrt–10 apr; 2026: begin–half april). Oriëntatiedagen juni.",
    fit: 3, tip: "De beste route naar BZ zolang IBBZ dicht is. Kijk goed naar je afstudeerdatum: die bepaalt of je in 2027 nog binnen de termijn valt. Schrijf je in voor updates." },
  { n: "Internationaal Beleidsmedewerker BZ (IBBZ)", org: "Ministerie van Buitenlandse Zaken", status: "dicht", statusLabel: "2026: alleen interne werving",
    eisen: "Master, sterke internationale affiniteit, Nederlandse nationaliteit, veiligheidsonderzoek.",
    salaris: "Rijksschaal (indicatief 10–11)", duur: "3 jaar, inclusief plaatsing op een post",
    deadline: "BZ publiceert in september 2027 informatie over een eventuele externe ronde.",
    fit: 3, tip: "Vanwege bezuinigingen werft BZ in 2026 alleen intern. Wie al via het Rijkstraineeprogramma of een andere functie binnen het Rijk werkt, maakt bij interne werving kans." },
  { n: "Junior Professional Officer (JPO) — Nederland", org: "BZ via Nedworc Foundation", status: "later", statusLabel: "Waarschijnlijk nog niet: 2 jaar ervaring vereist",
    eisen: "Max. 32 jaar op 31 dec. van het sollicitatiejaar. Master + min. 2 jaar relevante werkervaring na eerste diploma. Nederlandse nationaliteit (of een land op de lijst). Nooit eerder JPO geweest.",
    salaris: "VN P-1/P-2 (P-2 net base $56.046–74.640/jaar + standplaatstoelage)", duur: "2–3 jaar",
    deadline: "Ronde 2026 sloot 10 maart 2026. Volgende ronde vermoedelijk begin 2027 (niet bevestigd).",
    fit: 3, tip: "Hét langetermijndoel voor een VN-loopbaan. Zorg dat je de komende 2 jaar relevante ervaring opbouwt (NGO, overheid, onderzoek) en houd je leeftijd tegen de grens van 32 in de gaten." },
  { n: "UN Young Professionals Programme (YPP)", org: "VN-secretariaat", status: "check", statusLabel: "Check: doet NL dit jaar mee?",
    eisen: "Max. 32 jaar, bachelor, Engels of Frans. Alleen voor nationaliteiten van deelnemende landen (de lijst verschilt per jaar). Nederland stond niet op de lijst van 2025.",
    salaris: "P-1/P-2", duur: "Vaste aanstelling na selectie",
    deadline: "Cyclus 2026: aanmelding rond oktober–november 2026, examengebied vermoedelijk 'development'.",
    fit: 2, tip: "Kijk deze maand op careers.un.org of Nederland op de lijst van 2026 staat." },
  { n: "EU Blue Book traineeship", org: "Europese Commissie e.a.", status: "volgende", statusLabel: "Volgende kans: sessie okt. 2027",
    eisen: "Bachelor, max. 6 weken eerdere EU-werkervaring, twee EU-talen (waarvan één Engels, Frans of Duits).",
    salaris: "ca. € 1.538/mnd (sessie okt. 2026)", duur: "5 maanden (maart of oktober)",
    deadline: "Sessie maart 2027 sloot 4 sept. 2026. Sessie okt. 2027: aanmelding verwacht ± feb–apr 2027 (2026: deadline 7 april).",
    fit: 3, tip: "Maak nu een EU Login aan. Kies DG's als INTPA, ECHO, HOME of het EEAS in je voorkeuren." },
  { n: "EPSO AD5 (generalisten)", org: "EU-instellingen", status: "dicht", statusLabel: "Ronde 2026 gesloten",
    eisen: "Driejarige universitaire opleiding, EU-nationaliteit, twee EU-talen. Geen werkervaring nodig.",
    salaris: "AD5 (ruim boven Nederlandse startsalarissen)", duur: "Reservelijst → vaste baan",
    deadline: "2026: 5 feb–10 mrt 2026, 174.727 sollicitanten voor ca. 1.490 plekken. Er is nog geen nieuwe ronde aangekondigd.",
    fit: 2, tip: "Zeer competitief. Oefen redeneertests en houd EPSO in de gaten voor een nieuwe oproep." },
  { n: "Eurojust traineeship", org: "Eurojust (Den Haag)", status: "check", statusLabel: "Calls via EU Careers",
    eisen: "Universitair diploma, EU-nationaliteit, Engels minimaal B2.", salaris: "ca. € 1.500/mnd",
    duur: "5 maanden (start maart en oktober)", deadline: "Wisselend. De call van 2026 sloot 22 juni 2026.",
    fit: 2, tip: "Kies voor het Genocide Network-secretariaat als dat mogelijk is." },
  { n: "Schuman traineeship", org: "Europees Parlement", status: "check", statusLabel: "2x per jaar",
    eisen: "Universitair diploma, EU-nationaliteit.", salaris: "Betaald (zie EP-site)", duur: "5 maanden",
    deadline: "Doorgaans twee aanmeldrondes per jaar. Check de EP-stagesite.", fit: 2, tip: "Kijk vooral naar DROI (mensenrechten) en DG EXPO." },
  { n: "Traineeship Raad van Europa", org: "Raad van Europa (Straatsburg)", status: "check", statusLabel: "2 sessies per jaar",
    eisen: "Diploma, Engels of Frans.", salaris: "Check of er een vergoeding is (historisch vaak beperkt)", duur: "8 weken – 5 maanden",
    deadline: "Check coe.int (aanmeldperiodes doorgaans enkele maanden vooraf).", fit: 3, tip: "Kies voor afdelingen rond het Europees Hof voor de Rechten van de Mens, het Anti-Folter Comité (CPT) of de Commissaris voor de Mensenrechten." },
  { n: "Funded traineeships EU-delegaties", org: "EEAS", status: "check", statusLabel: "Doorlopend per delegatie",
    eisen: "Recent afgestudeerd, EU-nationaliteit.", salaris: "Maandelijkse vergoeding (verschilt per land)", duur: "Max. ca. 4–6 maanden",
    deadline: "Per delegatie. Voorbeeld: EU-delegatie VS, start mei 2026, deadline 22 feb 2026.", fit: 3, tip: "Een goede manier om veldervaring op te doen. Zoek op eeas.europa.eu naar 'traineeships young graduates'." },
  { n: "ICC Internships & Visiting Professionals", org: "Internationaal Strafhof", status: "check", statusLabel: "Doorlopend",
    eisen: "Diploma (internships ook net na afstuderen), Engels of Frans.", salaris: "Deels onbetaald. Check de beschikbaarheid van een stipendium.", duur: "3–6 maanden",
    deadline: "Doorlopende/periodieke calls op de ICC-careerspagina.", fit: 3, tip: "Bekijk ook de functies als analist bij het OTP en bij het Trust Fund for Victims. Houd rekening met de onzekerheid door de VS-sancties." },
  { n: "OVSE / ODIHR verkiezingswaarneming", org: "OVSE via BZ (NL-pool)", status: "check", statusLabel: "Doorlopend (pool)",
    eisen: "Aanmelding bij de Nederlandse pool voor waarnemers. Ervaring en training zijn een pluspunt.", salaris: "Onkosten plus dagvergoeding", duur: "1–8 weken",
    deadline: "Pool-aanmelding via BZ. Missies volgen de verkiezingskalender.", fit: 2, tip: "Korte missies leveren veldervaring en netwerk op en staan goed op je cv voor een loopbaan bij de OVSE of VN." },
  { n: "UN Volunteers (UNV) — international", org: "UNV", status: "check", statusLabel: "Doorlopend",
    eisen: "Specialist-UNV: vaak 25+ met ervaring. Youth-UNV: 18–29.", salaris: "Volunteer living allowance", duur: "6–12 maanden",
    deadline: "Doorlopend via het UNV-platform. Nederland financierde in 2025 geen UNV-plekken.", fit: 2, tip: "Een realistische manier om veldervaring op te doen voor de JPO-eis." },
  { n: "YEP Programmes (Young Expert)", org: "Nederlandse publiek-private partners", status: "check", statusLabel: "Fase III 2026–2032",
    eisen: "Jonge Nederlandse professionals. Gericht op water en agrifood.", salaris: "Volgens werkgever", duur: "1–2 jaar in het buitenland",
    deadline: "Werving in batches (bijv. Kenia, Ghana, Jordanië).", fit: 1, tip: "Alleen interessant als je de sectoren water of voedselzekerheid wilt verkennen." },
  { n: "Gemeentelijke traineeships", org: "Amsterdam, Den Haag, Utrecht, Rotterdam e.a.", status: "check", statusLabel: "Najaar en voorjaar",
    eisen: "Recent afgestudeerd (hbo/wo).", salaris: "Indicatief schaal 9–10 (cao Gemeenten)", duur: "1–2 jaar",
    deadline: "Werving vaak in het najaar of voorjaar. Kijk op de werkenbij-sites.", fit: 2, tip: "Pas op met traineeships via detacheerders: daar verdien je vaak minder en sta je verder van de organisatie af." },
  { n: "Promotietraject (PhD)", org: "Universiteiten (UvA, Leiden, ISS, UU…)", status: "check", statusLabel: "Doorlopend",
    eisen: "Master (cum laude helpt), onderzoeksvoorstel of sollicitatie op een projectplek.", salaris: "Cao NU promovendus: ca. € 3.200–4.050 bruto/mnd (2026, indicatief)",
    duur: "4 jaar", deadline: "Doorlopend via AcademicTransfer en werkenbij-sites. NWO/ERC-projecten werven vaak in het voorjaar.",
    fit: 3, tip: "Een logische route met jouw cijfers. Het PhD-traject is betaald, en mensenrechten- en conflictonderzoek opent later deuren bij denktanks en IO's." },
  { n: "Junior docent / tutor (university colleges)", org: "AUC, LUC, UCU, UCR", status: "check", statusLabel: "Voorjaar (voor sept.)",
    eisen: "Master, liberal-arts-ervaring is een pluspunt.", salaris: "Cao NU schaal 10–11 (indicatief € 3.700–5.400)", duur: "Vaak 1–2 jaar tijdelijk",
    deadline: "Vacatures verschijnen meestal februari–mei voor het nieuwe studiejaar.", fit: 2, tip: "Je eigen AUC-achtergrond is hier een sterk argument. Je krijgt onderwijservaring en tijd voor je eigen onderzoek." }
];

/* ───────────── Salarisvergelijking (bruto €/mnd, indicatief) ───────────── */
window.SALARISSEN = [
  { label: "Rijk schaal 11", min: 4133, max: 6276, bron: "CAO Rijk per 1-7-2026" },
  { label: "Rijk schaal 10 (Rijkstrainee-start)", min: 3496, max: 5535, bron: "CAO Rijk per 1-7-2026" },
  { label: "Universiteit schaal 10 (junior docent)", min: 3706, max: 5425, bron: "Cao NU 2025 + verhoging juli 2026 (eigen berekening)" },
  { label: "Promovendus (cao NU)", min: 3204, max: 4051, bron: "salaristabel.nl, 2026" },
  { label: "NGO junior beleid/programma", min: 2956, max: 4371, bron: "Indicatie op basis van vacature Oxfam Novib" },
  { label: "EU Blue Book trainee", min: 1538, max: 1538, bron: "Sessie okt. 2026" },
  { label: "Eurojust trainee", min: 1500, max: 1500, bron: "EU Careers" },
  { label: "Clingendael-stage", min: 550, max: 550, bron: "Clingendael 2026" },
  { label: "Oxfam Novib-stage", min: 450, max: 450, bron: "Oxfam Novib" }
];

/* ───────────── Kalender (okt 2026 → eind 2027) ───────────── */
window.KALENDER = [
  { maand: "Okt–nov 2026", items: [
    { t: "UN YPP 2026: check of Nederland op de deelnemerslijst staat en solliciteer zo nodig", type: "io" },
    { t: "Najaarswerving gemeentelijke traineeships", type: "overheid" },
    { t: "Job alerts instellen (Werken voor Nederland, OneWorld, Impactpool, AcademicTransfer)", type: "actie" } ] },
  { maand: "Dec 2026–jan 2027", items: [
    { t: "EU Login aanmaken en Blue Book-profiel voorbereiden", type: "actie" },
    { t: "Raad van Europa- en Schuman-traineeships: aanmeldrondes checken", type: "io" } ] },
  { maand: "Jan–mrt 2027", items: [
    { t: "Verwacht: JPO-ronde (2026 sloot 10 maart). Alleen als je aan de 2-jaar-ervaringseis voldoet", type: "io", verwacht: true },
    { t: "Universiteiten: PhD-vacatures in NWO/ERC-projecten en junior docentfuncties voor sept. 2027", type: "uni" } ] },
  { maand: "Feb–apr 2027", items: [
    { t: "Verwacht: Blue Book-aanmelding voor de sessie van oktober 2027 (2026: deadline 7 april)", type: "io", verwacht: true },
    { t: "Verwacht: aanmelding Rijkstraineeprogramma (2025: 27 mrt–10 apr)", type: "overheid", verwacht: true } ] },
  { maand: "Jun 2027", items: [
    { t: "Oriëntatiedagen Rijkstraineeprogramma (verplicht fysiek)", type: "overheid", verwacht: true } ] },
  { maand: "Aug–sep 2027", items: [
    { t: "Verwacht: Blue Book-aanmelding voor de sessie van maart 2028 (2026: deadline 4 sept.)", type: "io", verwacht: true },
    { t: "BZ publiceert informatie over een eventuele externe IBBZ-werving", type: "overheid" },
    { t: "Start Rijkstraineeprogramma (1 september)", type: "overheid" } ] }
];

/* ───────────── Vacatureplatforms ───────────── */
window.PLATFORMS = [
  { n: "Werken voor Nederland", u: "https://www.werkenvoornederland.nl", d: "Alle Rijksvacatures, traineeships en stages." },
  { n: "Werkenbijdeoverheid / gemeente-sites", u: "https://www.werkenbijdeoverheid.nl", d: "Gemeenten, provincies en waterschappen." },
  { n: "OneWorld vacaturebank", u: "https://www.oneworld.nl/vacatures", d: "De belangrijkste vacaturebank voor de Nederlandse NGO- en OS-sector." },
  { n: "AcademicTransfer", u: "https://www.academictransfer.com", d: "Alle Nederlandse PhD-, onderzoeks- en docentvacatures." },
  { n: "Impactpool", u: "https://www.impactpool.org", d: "VN, IO's en NGO's, met goede filters op junior niveau." },
  { n: "UN Careers", u: "https://careers.un.org", d: "VN-secretariaat, YPP en internships." },
  { n: "UNjobs / UN Talent", u: "https://unjobs.org", d: "Overzicht van alle VN-organisaties." },
  { n: "EU Careers / EPSO", u: "https://eu-careers.europa.eu", d: "EPSO, traineeships en agentschappen (Eurojust, Europol, FRA)." },
  { n: "Devex", u: "https://www.devex.com/jobs", d: "Ontwikkelingssector wereldwijd." },
  { n: "ReliefWeb Jobs", u: "https://reliefweb.int/jobs", d: "Humanitaire functies en consultancies." },
  { n: "Idealist", u: "https://www.idealist.org", d: "Internationale NGO-vacatures." },
  { n: "Clingendael careers", u: "https://careers.clingendael.org", d: "Junior research en stages." },
  { n: "LinkedIn", u: "https://www.linkedin.com/jobs", d: "Zet alerts op 'human rights', 'peacebuilding', 'programme officer' en 'beleidsmedewerker internationaal'." }
];

/* ───────────── Bronnen ───────────── */
window.BRONNEN = [
  ["Werken voor Nederland — Internationaal Beleidsmedewerker BZ (IBBZ)", "https://www.werkenvoornederland.nl/starters/traineeships/internationaal-beleidsmedewerker-buitenlandse-zaken"],
  ["Werken voor Nederland — Het Rijkstraineeprogramma", "https://www.werkenvoornederland.nl/starters/traineeships/het-rijkstraineeprogramma"],
  ["Belastingdienst — Rijkstraineeprogramma (data eerdere rondes)", "https://werken.belastingdienst.nl/stages-traineeships-leerwerktrajecten/traineeships/rijkstraineeprogramma-1"],
  ["Nedworc Foundation — JPO-programma & FAQ", "https://nedworcfoundation.nl/junior-professional-officers-programme/frequently-asked-questions/"],
  ["UNDP JPO Service Centre — Nederland", "https://www.undp.org/jposc/netherlands"],
  ["Center for Intercultural Dialogue — UN YPP 2025-26", "https://centerforinterculturaldialogue.org/2025/11/28/un-young-professionals-programme-2025-26/"],
  ["EU Neighbours East — Blue Book traineeship", "https://euneighbourseast.eu/opportunities/blue-book-traineeship-programme-applications-now-open-for-october-2026-session/"],
  ["Ireland.ie — Blue Book traineeship", "https://api.ireland.ie/en/eu-jobs/blue-book-traineeship-programme/"],
  ["EUtraining — EPSO AD5 2026", "https://eutraining.eu/content/your-complete-guide-2026-epso-ad5-graduates-exam"],
  ["EU Careers — Eurojust traineeships", "https://eu-careers.europa.eu/mt/trainee/traineeships-eurojust"],
  ["NOS — Klever bezuinigt 1 miljard op ngo's", "https://nos.nl/artikel/2544059-minister-klever-voor-ontwikkelingshulp-bezuinigt-1-miljard-op-ngo-s"],
  ["Partos — Jaarverslag 2025", "https://www.partos.nl/wp-content/uploads/2026/04/Jaarverslag-2025-PDF-1.pdf"],
  ["Partos — reactie op beleidskader 2026–2030", "https://www.partos.nl/nieuws/eerste-reactie-partos-op-beleidskader-focus-samenwerken-met-maatschappelijke-organisaties-in-ontwikkelingssamenwerking-2026-2030/"],
  ["ANP — Oproep aan kabinet over ontwikkelingssamenwerking (april 2026)", "https://persportaal.anp.nl/artikel/0d7b972a-f316-4b89-bdaa-ea50eb592bf3/oproep-aan-kabinet-maak-de-beloftes-over-ontwikkelingssamenwerking-waar"],
  ["Binnenlands Bestuur — Aantal rijksambtenaren stijgt", "https://www.binnenlandsbestuur.nl/carriere/aantal-rijksambtenaren-stijgt-externe-inhuur-licht-gedaald"],
  ["Binnenlands Bestuur — Minder externen betekent meer ambtenaren", "https://www.binnenlandsbestuur.nl/bestuur-en-organisatie/bestuurlijke-organisatie/winstwaarschuwing-bzk-minder-externen-betekent-meer"],
  ["salaristabel.nl — CAO Rijksoverheid 2026", "https://salaristabel.nl/artikelen/cao-rijksoverheid-salaris-2026"],
  ["salaristabel.nl — CAO Universiteiten 2026", "https://salaristabel.nl/artikelen/cao-universiteiten-salaris-2026"],
  ["Universiteit Twente (OPUT) — CAO NU 2026-2027", "https://www.utwente.nl/nl/oput/CAO-2026/"],
  ["Al Jazeera — UN cuts 2026 budget by $577m", "https://www.aljazeera.com/news/2025/12/2/un-will-cut-2026-budget-by-577m-by-slashing-workforce"],
  ["ISHR — UN80: human rights budget cuts", "https://ishr.ch/latest-updates/un80-reform-states-endorse-slashing-of-human-rights-budget/"],
  ["Development People — 2026 UN budget cuts & recruitment", "https://www.developmentpeople.com/post/2026-un-budget-cuts-and-how-they-are-affecting-recruitment"],
  ["Al Jazeera — US sanctions ICC president (aug. 2026)", "https://www.aljazeera.com/news/2026/8/18/us-sanctions-international-criminal-court-president-and-trial-lawyer"],
  ["NL Times — Sanctions could cut ICC funds (sept. 2026)", "https://nltimes.nl/2026/09/22/us-sanctions-icc-cut-its-funds-halt-war-crime-prosecutions"],
  ["Business & Human Rights Resource Centre — CSDDD Omnibus", "https://www.business-humanrights.org/de/latest-news/csddd-omnibus/"],
  ["UnJobNet — UN salarissen (P-1/P-2)", "https://www.unjobnet.org/organizations/UN/salaries"],
  ["Onderneming.nl — Werkloosheid maart 2026", "https://www.onderneming.nl/nieuws/economie/werkloosheid-daalt-licht-in-maart-2026/"],
  ["Welingelichte Kringen — Verdwijnt de onderste trede? (Randstad-cijfers)", "https://www.welingelichtekringen.nl/economie/longread-gaat-de-onderste-trede-van-de-carriereladder-verdwijnen"],
  ["Clingendael careers — stages 2026", "https://www.careers.clingendael.org/vacancy-job-2/intern-eu-neighbourhood"],
  ["Oxfam Novib — stage lopen", "https://www.oxfamnovib.nl/en/vacancies/stage-lopen-bij-oxfam-novib"],
  ["Water Alliance — YEP Programmes", "https://wateralliance.nl/en/wanted-dutch-candidates-for-new-yep-positions-abroad/"],
  ["UNV — Full Funding Report 2025", "https://www.unv.org/sites/default/files/FF%20Report%202025.pdf"],
  ["Gemeente Den Haag — Internationale organisaties", "https://www.denhaag.nl/nl/stad-van-vrede-en-recht/internationale-organisaties-in-den-haag"],
  ["Just Peace The Hague — Humanity Hub", "https://www.justpeacethehague.org/en/venue/the-hague-humanity-hub"]
];

/* ───────────── Actuele vacatures (gevonden 8 okt. 2026) ─────────────
 * status: "open" (deadline in de toekomst bevestigd), "onzeker" (gezien, maar
 * deadline of status niet bevestigd), "gesloten" (net gesloten, ter referentie).
 * deadline: "JJJJ-MM-DD" of null. Controleer altijd de officiële vacature.
 */
window.VACATURES = [
  { t: "Schuman traineeship (1 mrt – 31 jul 2027)", org: "Europees Parlement", loc: "Brussel / Luxemburg / Straatsburg / liaisonbureau Den Haag", deadline: "2026-10-31", status: "open", niveau: "Traineeship (betaald)", fit: 3,
    u: "https://ep-stages.gestmax.eu", note: "Universitair diploma en EU-nationaliteit vereist. Kies voor DG EXPO of de subcommissie Mensenrechten (DROI). De deadline is 23:59 Brusselse tijd." },
  { t: "Traineeship North-South Centre (1 mrt – 31 jul 2027)", org: "Raad van Europa — North-South Centre", loc: "Lissabon", deadline: "2026-10-31", status: "open", niveau: "Traineeship (€200/mnd + verzekering)", fit: 2,
    u: "https://www.heysuccess.com/opportunity/North-South-Centre-of-the-Council-of-Europe-Traineeship-(1-March-31-July-2027)-25898", note: "Werkt aan mondiaal burgerschap en jongerenbeleid. Het staat goed op je cv voor de Raad van Europa, maar de vergoeding is laag." },
  { t: "Beleidsondersteuner internationale zaken", org: "Ministerie van Infrastructuur en Waterstaat", loc: "Den Haag", deadline: "2026-10-12", status: "open", niveau: "Schaal 9 (€ 3.579 – € 4.999), hbo-niveau, 32–36 u", fit: 2,
    u: "https://www.werkenvoornederland.nl/vacatures/beleidsondersteuner-internationale-zaken-IM-2026-1184", note: "Onder je niveau, maar wel een directe ingang bij het Rijk via de directie Internationaal (EU, bilateraal, mondiaal). Als rijksmedewerker maak je kans bij interne werving, zoals voor IBBZ in 2026." },
  { t: "Public Information Assistant (G-4)", org: "Internationaal Strafhof (ICC)", loc: "Den Haag", deadline: "2026-10-12", status: "open", niveau: "G-4 (ondersteunend)", fit: 2,
    u: "https://www.icc-cpi.int/jobs/vacancies", note: "Ref. 24545. Een ondersteunende functie, maar wel binnen het Hof. De deadline geldt in Haagse tijd." },
  { t: "Analyst Assistant (G-7)", org: "Internationaal Strafhof (ICC)", loc: "Den Haag", deadline: "2026-10-25", status: "open", niveau: "G-7 (vraagt meestal meerdere jaren ervaring)", fit: 2,
    u: "https://www.icc-cpi.int/jobs/vacancies", note: "Ref. 24523. Analysewerk ligt dicht bij je HRW-onderzoek. Controleer de ervaringseis in de vacaturetekst." },
  { t: "Document Management Assistant (G-4)", org: "Internationaal Strafhof (ICC)", loc: "Den Haag", deadline: "2026-11-01", status: "open", niveau: "G-4 (ondersteunend)", fit: 1,
    u: "https://www.icc-cpi.int/jobs/vacancies", note: "Ref. 24549. Vooral administratief. Alleen interessant om binnen te komen." },
  { t: "Witness Assistant (ad hoc contractor)", org: "Internationaal Strafhof (ICC)", loc: "Den Haag", deadline: "2026-12-31", status: "open", niveau: "Tijdelijk contract", fit: 2,
    u: "https://www.icc-cpi.int/jobs/vacancies", note: "Ref. 24303. Begeleiding van getuigen. Inhoudelijk relevant voor slachtoffer- en getuigenwerk." },
  { t: "Associate Legal Officer (P-2)", org: "Internationaal Strafhof (ICC)", loc: "Den Haag", deadline: "2026-10-09", status: "open", niveau: "P-2 (juridisch)", fit: 1,
    u: "https://www.icc-cpi.int/jobs/vacancies", note: "Ref. 24540. Vraagt waarschijnlijk een rechtenmaster, dus past niet goed bij IDS. Opgenomen ter volledigheid. De deadline is 9 oktober." },
  { t: "Internships Public Information & Outreach", org: "Internationaal Strafhof (ICC)", loc: "Den Haag", deadline: null, status: "onzeker", niveau: "Internship", fit: 2,
    u: "https://unjobs.org/offices/icc_hag", note: "Bijgewerkt op 2 oktober 2026. Er zijn ook taalvarianten (Arabisch, Filipijns). Controleer of afgestudeerden in aanmerking komen en of er een vergoeding is." },
  { t: "Planning, Monitoring, Evaluation & Learning (PMEL)", org: "Amnesty International Nederland", loc: "Amsterdam", deadline: null, status: "onzeker", niveau: "Onbekend", fit: 2,
    u: "https://nl.indeed.com/q-international-amnesty-vacatures.html", note: "Gezien op 3 oktober 2026. Werkt aan rapportages over de impact van Amnesty NL. Controleer de deadline op amnesty.nl/werken-bij-amnesty." },
  { t: "Policy & capacity building officer — Police and Human Rights", org: "Amnesty International (Police & Human Rights Programme)", loc: "Amsterdam", deadline: null, status: "onzeker", niveau: "Onbekend", fit: 3,
    u: "https://www.oneworld.nl/job/policy-and-capacity-building-officer-police-and-human-rights/", note: "Mensenrechten en politie: een goede match. Controleer status, niveau en deadline." },
  { t: "Programme Assistant (vrijwillig, 8–16 u/week)", org: "Amnesty International (Police & Human Rights Programme)", loc: "Amsterdam", deadline: null, status: "onzeker", niveau: "Vrijwilligerswerk", fit: 2,
    u: "https://www.oneworld.nl/job/programme-assistant-volunteer/", note: "Onbetaald, maar te combineren met een baan. Het levert netwerk en een Amnesty-referentie op." },
  { t: "Junior programmamedewerker Migratie & Mensenrechten", org: "Justice & Peace Netherlands", loc: "Den Haag", deadline: null, status: "onzeker", niveau: "Junior", fit: 3,
    u: "https://justiceandpeace.nl/vacancy_category/vacatures/", note: "Gezien via LinkedIn, maar de datum is onduidelijk. Een zeer goede match, dus check dit vandaag." },
  { t: "Junior Programme Officer (24 u/week)", org: "Human Security Collective", loc: "Den Haag", deadline: null, status: "onzeker", niveau: "Junior", fit: 3,
    u: "https://www.hscollective.org/about-us/vacancy/", note: "Start was 1 oktober 2026, dus de vacature is mogelijk al ingevuld. Werkt aan veiligheid, burgerruimte en mensenrechten. Stuur desnoods een open sollicitatie." },
  { t: "Project Officer", org: "Oxfam Novib", loc: "Den Haag", deadline: null, status: "onzeker", niveau: "Medior?", fit: 2,
    u: "https://unjobs.org/offices/oxfam-novib_hag", note: "Geplaatst juli–augustus 2026. Waarschijnlijk gesloten, maar check de Oxfam Novib-vacaturesite." },
  { t: "2 promotieplekken: Government Responses to Internal Displacement (ERC)", org: "Universiteit van Amsterdam", loc: "Amsterdam", deadline: "2026-10-01", status: "gesloten", niveau: "PhD", fit: 3,
    u: "https://werkenbij.uva.nl/en/vacancies/2-phd-positions-government-responses-to-internal-displacement-erc-project-netherlands-15380", note: "Precies jouw terrein, maar net gesloten. Dit type ERC-projectplek komt regelmatig voorbij. Zet een alert op AcademicTransfer en benader de projectleider voor toekomstige plekken." },
  { t: "Junior Humanitarian Programme Officer", org: "Plan International Nederland", loc: "Amsterdam", deadline: "2026-06-10", status: "gesloten", niveau: "Junior (6 mnd)", fit: 3,
    u: "https://www.oneworld.nl/job/junior-humanitarian-programme-officer-2/", note: "Werd eerder gesloten wegens veel reacties. Les: solliciteer in de eerste week na plaatsing." },
  { t: "Junior beleidsmedewerker (schaal 10)", org: "Ministerie van BZK", loc: "Den Haag", deadline: "2026-07-13", status: "gesloten", niveau: "Junior, schaal 10", fit: 2,
    u: "https://www.werkenvoornederland.nl/vacatures/junior-beleidsmedewerker-beleidssecretaris-overheidsbrede-dienstverlening-BZK-2026-8179", note: "Een voorbeeld van een junior rijksfunctie op schaal 10. Zulke functies komen geregeld langs op Werken voor Nederland." },
  { t: "Research Assistant (Energy, Industrialisation & Finance)", org: "ECDPM", loc: "Maastricht / Brussel", deadline: "2026-06-12", status: "gesloten", niveau: "Junior", fit: 2,
    u: "https://jobsin.brussels/jobs/european-centre-for-development-policy-management-research-assistant-energy-industrialisation-and-finance-2026-06/", note: "ECDPM werft meerdere keren per jaar research assistants." }
];
