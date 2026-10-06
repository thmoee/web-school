# Aufgaben – Lektion 03

## ⭐ 1. Vorher: Wie sieht die Div-Suppe aus?

Mach zuerst eine Kopie von `uebung/index.html` und nenn sie `original.html` (in VS Code: Rechtsklick auf die Datei → Kopieren, dann Rechtsklick auf den Ordner → Einfügen, dann umbenennen). So kannst du später vergleichen.

Öffne `uebung/index.html` mit Live Server. Die Seite des Brettspielclubs sieht auf den ersten Blick in Ordnung aus.

Öffne jetzt den Bereich **Barrierefreiheit** in den DevTools (siehe README) und schau dir den Baum an. Gibt es dort eine Überschrift? Eine Navigation?

## ⭐ 2. Die Div-Suppe aufräumen

Bau `uebung/index.html` so um, dass sie semantisches HTML verwendet. **Der Inhalt bleibt gleich**, nur die Elemente ändern sich. Kein Satz soll verloren gehen.

Geh dafür Stück für Stück vor und frag dich jedes Mal: *Was ist das?*

- Der Kopfbereich mit dem Namen des Clubs und dem Menü
- Das Menü selbst (die `|` zwischen den Links brauchst du nicht mehr)
- Der Hauptinhalt
- Die beiden Beiträge mit ihren Titeln
- Der Kasten „Nächstes Treffen“
- Der Fußbereich

Achte auch auf die Details:

- Die Titel in `<b>` sind eigentlich Überschriften. Welche Ebene haben sie?
- `<br><br>` trennt Absätze. Was wäre das richtige Element dafür?
- Am Ende sollte kein einziges `<div>` mehr nötig sein.

Die Links führen alle zu `#`, also nirgendwohin. Das ist hier in Ordnung.

Prüf mit `check.html`.

## ⭐ 3. Nachher: Vergleichen

Schau dir wieder den Bereich **Barrierefreiheit** an und vergleich ihn mit `original.html`. Was hat sich verändert? Findest du die Landmarks *banner*, *navigation*, *main* und *contentinfo*?

## ⭐⭐ 4. Datumsangaben

Pack alle Datumsangaben in ein `<time>`-Element mit passendem `datetime`-Attribut.

## ⭐⭐ 5. Leseansicht

Öffne die Seite in Firefox und aktivier die Leseansicht (Buch-Symbol in der Adressleiste). Wie sieht die Seite dort aus? Probier das auch mit `original.html`. Bietet Firefox die Leseansicht dort überhaupt an?

## ⭐⭐⭐ 6. Screenreader ausprobieren

Probier einen echten Screenreader aus:

- **Windows:** [NVDA](https://www.nvaccess.org/) (kostenlos) oder die eingebaute Sprachausgabe (`Strg+Windows+Enter`)
- **macOS:** VoiceOver (`Cmd+F5`)
- **Linux:** Orca (oft schon installiert, `Super+Alt+S`)

Lass dir die Seite vorlesen und versuch, nur mit der Tastatur zur Navigation und zum Hauptinhalt zu springen. Die Tastenkürzel für Landmarks und Überschriften findest du in der Hilfe des jeweiligen Screenreaders. Es fühlt sich am Anfang ungewohnt an, aber danach siehst du Webseiten mit anderen Augen.

## Projekt-Schritt

Jetzt startet dein Kursprojekt. Leg `projekt/index.html` an:

- Grundgerüst mit passendem `<title>`
- `<header>` mit dem Namen deiner Website als `<h1>` und einer `<nav>`
- `<main>` mit den ersten Inhalten zu deinem Thema: Absätze, Listen, mindestens ein Bild
- `<footer>`

Plan schon mal eine zweite Seite ein und verlinke sie in der Navigation. Was dein Projekt am Ende von Modul 1 können soll, prüft [`projekt/check.html`](../../projekt/check.html).
