# Your Fotobox – modernisierte Website

Modernisierte, responsive Website für **Your Fotobox** (Fotobox mieten für Events,
Hochzeiten & Firmenfeiern). Neuentwurf der bisherigen Jimdo-Seite als schlanke,
schnelle statische Website – ohne Framework, ohne Build-Schritt.

## Inhalt

| Datei | Zweck |
|---|---|
| `index.html` | Startseite (Single-Page mit Ankernavigation) |
| `impressum.html` | Impressum |
| `datenschutz.html` | Datenschutzerklärung |
| `widerruf.html` | Widerrufsrecht |
| `styles.css` | Komplettes Stylesheet (Mint/Petrol-Design) |
| `main.js` | Menü, FAQ-Akkordeon, Scroll-Animationen |

## Abschnitte der Startseite

Hero · „Passend für jedes Event" · Vorteile · Ablauf (3 Schritte) ·
Pakete (Digital 199 € · Drucker 300 € · Rundum sorglos) · Über uns · FAQ · Kontakt · Footer.

## Design

- Farbwelt übernommen & aufgefrischt: Mint `#afd3d3`, Petrol `#417575` / `#2f5454`, Shade `#6eaeae`
- Schriften: **Poppins** (Headlines) + **Roboto** (Text) via Google Fonts
- Sticky-Header mit mobilem Burger-Menü, schwebender WhatsApp-Button
- Responsive (CSS Grid/Flexbox), `prefers-reduced-motion` berücksichtigt
- Dezente Scroll-Reveal-Animationen (IntersectionObserver)

## Übernommene echte Daten

- Telefon/WhatsApp: **0151 72380615** · E-Mail: **info@yourfotobox.de**
- Buchungskalender: calendarapp.de · Abholung: Stuttgart, Aspach, Gaildorf
- Betreiber: K&B Events GbR (Aspach) & Stepline IT (Stuttgart-Feuerbach)
- Impressum & Datenschutz aus dem Original übernommen

> Hinweis: Widerrufstext ist eine Vorlage und sollte vor Veröffentlichung
> rechtlich geprüft werden. Das Hero-Bild ist ein Platzhalter (Unsplash) und
> kann durch ein eigenes Foto ersetzt werden.

## Lokal ansehen / hosten

Reine statische Dateien – einfach alle in ein Verzeichnis legen. Lokal z. B.:

```bash
python3 -m http.server 8000
# dann http://localhost:8000 öffnen
```

Zum Hosten die Dateien auf einen beliebigen Webspace / Netlify / GitHub Pages laden.
