# Aufgaben – Lektion 02

In dieser Lektion baust du einen **Steckbrief** über ein Thema, das dich interessiert: ein Hobby, ein Spiel, eine Stadt, ein Tier, eine Band … Hauptsache, du hast etwas dazu zu sagen.

In `uebung/` liegen schon eine `index.html` mit Grundgerüst und ein Bild `bilder/berg.svg`. Wenn du eigene Bilder benutzen willst, leg sie in den Ordner `bilder/`.

## ⭐ 1. Gliederung und Text

- Eine `<h1>` mit deinem Thema
- Ein einleitender Absatz
- Mindestens zwei Abschnitte mit einer `<h2>`, darunter jeweils Text
- Mindestens einmal `<strong>` oder `<em>`, aber nur, wo es inhaltlich passt

## ⭐ 2. Listen

- Eine ungeordnete Liste mit mindestens drei Einträgen (z. B. „Was man dafür braucht“)
- Eine geordnete Liste mit mindestens drei Einträgen (z. B. „Meine Top 3“ oder eine Anleitung)

## ⭐ 3. Ein Bild

Bau ein Bild ein, entweder `bilder/berg.svg` oder ein eigenes. Schreib einen guten `alt`-Text dazu.

Test: Ändere den Pfad kurz absichtlich in etwas Falsches. Was zeigt der Browser jetzt an? Was steht in der Konsole?

## ⭐ 4. Links

- Ein Link zu einer externen Website zu deinem Thema
- Leg eine zweite Seite an, zum Beispiel `mehr.html` mit weiteren Infos oder deinen Quellen. Sie braucht ein eigenes Grundgerüst.
- Verlinke von `index.html` auf die zweite Seite und von der zweiten Seite zurück auf `index.html`.

Prüf alles mit `check.html`.

## ⭐⭐ 5. Pfad-Rätsel

Gegeben ist diese Website:

```
website/
├── index.html
├── kontakt.html
├── bilder/
│   ├── logo.png
│   └── urlaub/
│       └── strand.jpg
└── blog/
    ├── artikel-1.html
    └── artikel-2.html
```

Welcher Pfad gehört in `src` bzw. `href`? Schreib deine Antworten auf, bevor du nachschaust.

1. In `index.html`: das Bild `logo.png`
2. In `index.html`: ein Link zu `artikel-1.html`
3. In `blog/artikel-1.html`: ein Link zu `artikel-2.html`
4. In `blog/artikel-1.html`: ein Link zurück zu `index.html`
5. In `blog/artikel-2.html`: das Bild `strand.jpg`
6. In `kontakt.html`: das Bild `strand.jpg`

Die Antworten stehen in `loesung/pfad-raetsel.md`.

## ⭐⭐ 6. Inhaltsverzeichnis

Füg oben auf `index.html` ein kleines Inhaltsverzeichnis ein: eine Liste mit Links, die zu deinen `<h2>`-Abschnitten springen. Dafür brauchen die Überschriften eine `id`.

## ⭐⭐⭐ 7. Für Fortgeschrittene

- Pack dein Bild in eine `<figure>` mit `<figcaption>`.
- Verschachtle eine Liste in einer anderen.
- Mach ein Bild zu einem Link. Dafür kommt das `<img>` in ein `<a>`. Welchen `alt`-Text braucht das Bild jetzt? Tipp: Was soll ein Screenreader beim Link vorlesen?

## Projekt-Schritt

Lies [`projekt/README.md`](../../projekt/README.md) und entscheide dich für ein Thema für dein Kursprojekt. Sammle schon mal Inhalte: ein paar Texte, ein paar Bilder. In Lektion 03 baust du daraus die erste Seite.
