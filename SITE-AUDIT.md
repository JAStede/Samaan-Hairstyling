# Samaan Hairstyling — controle 22 oktober 2026

Bron: main op commit e08d9652b37e82af7151d4745a0b689b2d8a6071 (16 oktober 2026).
Wijzigingen staan op fix/site-audit-2026-10-22; nog niet samengevoegd met main.

## Exacte locaties

Alle oorspronkelijke HTML-bestanden bestaan uit één regel. De generieke social-links, demofooter, cookie-demotekst en preview staan dus oorspronkelijk allemaal op regel 1. De aangepaste bestanden zijn leesbaar over meerdere regels verdeeld.

| Bestand | Footerbeeldtoelichting | Instagram | TikTok | Google-reviewknop | Informatiebalk |
|---|---:|---:|---:|---:|---:|
| 404.html | 56 | 80 | 88 | 103 | 125 |
| contact.html | 122 | 146 | 154 | 169 | 191 |
| dames.html | 274 | 298 | 306 | 321 | 343 |
| fotoalbum.html | 64 | 88 | 96 | 111 | 133 |
| heren.html | 154 | 178 | 186 | 201 | 223 |
| index.html | 120 | 144 | 152 | 102 | 189 |
| prijzen.html | 294 | 318 | 326 | 341 | 363 |

## Wat is aangepast

- De zeven generieke Instagram- en zeven generieke TikTok-links zijn vervangen door verborgen links. Geen links naar platformhomepages meer.
- De echte URL's hoeven straks alleen in assets/app.js, regels 4 en 5, ingevuld te worden. De bestaande iconen verschijnen dan op alle pagina's.
- Demo door LJ Studio verwijderd uit de zeven footers; een korte toelichting over sfeerbeelden blijft staan omdat het nog gegenereerde foto's zijn.
- Cookie-demotekst en de betekenisloze knop 'Alles toestaan' vervangen door een informatiebalk met 'Begrepen'. Dit introduceert geen toestemmingsmechanisme voor Google Maps; de kaart laadt nog rechtstreeks.
- Hoofdknoppen voor afspraken leiden naar contact.html#afspraak.
- Contactdatum: minimumdatum in Europe/Amsterdam; opnieuw controleren bij focus, wijziging, terugkeer naar de tab, pageshow en verzenden. Foutmelding voor verstreken datums. Ook namen met uitsluitend spaties geweigerd.
- Contactformulier blijft een WhatsApp-aanvraag; geen bevestigde reservering of beschikbaarheidsagenda.
- Google-reviewsectie op homepage (regels 95–104), reviewknop in alle footers en responsive styling.
- Actieve navigatie en zichtbare toetsenbordfocus toegevoegd. Geblokkeerde lokale opslag breekt het script niet meer.

## Nog benodigde echte waarden

| Waarde | Status | Plaats |
|---|---|---|
| Instagram | Kandidaat gevonden: https://www.instagram.com/samaanhairstyling/ ; nog bevestigen | assets/app.js:4 |
| TikTok | Exacte profiel-URL ontbreekt | assets/app.js:5 |
| Google-bedrijfsprofiel | Gevonden bij vermelding met passend adres en telefoon; Google zelf gaf een toestemmingsscherm | https://www.google.com/maps?cid=1954973399178327517 |
| Reviewcitaten | Nog geen originele reviewteksten met auteur/datum uit Google opgehaald | Nog niet toegevoegd; geen verzonnen citaten, score of aantallen |
| Directe 'Schrijf een review'-link | Officiële deelbare reviewlink of verifieerbaar Place ID nodig | Nog niet toegevoegd |
| Echt logo | Huidig assets/logo-placeholder.svg is een tekstlogo, geen overgenomen origineel | Alle HTML-pagina's |
| Eigen salon- en behandelfoto's | Huidige foto's zijn gegenereerd | assets/*.webp en fotoalbum.html |

Google-profielbron: https://beauty.vindlokaal.eu/kapper/gouda/samaan-hair-beauty/
Instagram-kandidaat: zoekresultaat op Instagram zelf. De profielpagina kon niet volledig worden geladen.
Geen Facebook-link aanwezig in de actuele HTML. README vermeldde die nog ten onrechte.

## Overige verbeterpunten

- Canonical, og:url, absolute og:image en sitemap ontbreken. Eerst definitieve publicatie-URL bevestigen; bestaande samaanhairstyling.nl toont nog een andere website.
- Geen privacyverklaring in deze repository; beschrijf de feitelijke inzet van Google Maps, Google Fonts en WhatsApp op basis van de afspraken van de ondernemer.
- Google-preview is nog een voorbeeld, geen live Google-integratie. Behouden omdat deze eerder expliciet is gevraagd.
- 404.html gebruikt relatieve verwijzingen; bij foutpaden met extra mapniveau kunnen stijlen en links verkeerd worden opgelost. Definitieve hostingbasis nodig voor een vaste oplossing.
- Openingstijden en beschikbare dagdelen niet verzonnen. Alleen Middag, Avond en Geen voorkeur uit de bestaande afspraakkeuzes behouden.
- Vervang het beeldmateriaal eerst door echte salonfoto's voordat het fotoalbum als portfolio wordt gepresenteerd.
- Visuele beoordeling op echte iPhone/Android en desktop staat nog open; deze controle was op broncode en programmagedrag.

## Uitgevoerde verificatie

- Alle zeven HTML-pagina's: één H1 aangetroffen, lokale verwijzingen gecontroleerd tegen repositorybestanden, JSON-LD parseert.
- Geen generieke Instagram-/TikTok-doelpagina's meer.
- Datumgedrag getest met het daadwerkelijke inline formulierscript: gisteren, vorige week en een datum die bij Nederlandse middernacht verlopen is worden geweigerd; vandaag, toekomstige datum en leeg optioneel datumveld worden toegelaten.
- Syntaxis assets/app.js gecontroleerd.
- Geen live WhatsApp-bericht verstuurd, geen review geplaatst.
