# Web-Schule

Ein Kurs für HTML, CSS und TypeScript, ohne Framework. Du lernst, wie Webseiten wirklich funktionieren: erst der Inhalt (HTML), dann das Aussehen (CSS), dann das Verhalten (TypeScript).

## So funktioniert der Kurs

Jede Lektion ist ein Ordner in `lektionen/` und immer gleich aufgebaut:

```
lektionen/01-html-grundlagen/
  README.md      ← die Erklärung, ca. 10–15 Minuten Lesezeit
  aufgaben.md    ← was du tun sollst
  uebung/        ← hier arbeitest du
  loesung/       ← eine mögliche Lösung
  check.html     ← prüft deine Übung automatisch
```

Der Ablauf:

1. Lies die `README.md`. Probier die Beispiele direkt aus, statt nur zu lesen.
2. Arbeite die `aufgaben.md` durch und bearbeite dabei die Dateien in `uebung/`.
3. Öffne `check.html` mit Live Server (wie das geht, steht in Lektion 00). Ein grüner Haken heißt erfüllt, bei einem roten Kreuz steht ein Tipp dabei.
4. Erst wenn du es selbst versucht hast: Vergleich deine Lösung mit `loesung/`. Es gibt fast immer mehrere richtige Lösungen.
5. Speicher deinen Stand mit einem Git-Commit (siehe Lektion 00).

Die Aufgaben haben drei Stufen:

- ⭐ **Grundlage**: solltest du machen
- ⭐⭐ **Vertiefung**: macht dich sicherer
- ⭐⭐⭐ **Herausforderung**: wenn du Lust auf mehr hast

## Das Kursprojekt

Neben den Übungen baust du über den ganzen Kurs eine eigene Website zu einem Thema deiner Wahl. Sie wächst mit jedem Modul: erst der Inhalt, dann das Design, dann die Interaktion. Mehr dazu in [`projekt/README.md`](projekt/README.md).

## Lehrplan

| Modul | Lektion | Thema |
|---|---|---|
| 0 – Einrichtung | [00](lektionen/00-einrichtung/README.md) | Editor, Live Server, Entwicklertools, Git |
| 1 – HTML | [01](lektionen/01-html-grundlagen/README.md) | Grundgerüst, Elemente, Attribute |
| | [02](lektionen/02-text-links-bilder/README.md) | Text, Listen, Links, Bilder |
| | [03](lektionen/03-semantik/README.md) | Semantische Struktur |
| | [04](lektionen/04-formulare/README.md) | Formulare |
| 2 – CSS | [05](lektionen/05-css-grundlagen/README.md) | CSS einbinden, Selektoren, Kaskade und Spezifität |
| | [06](lektionen/06-box-modell/README.md) | Das Box-Modell |
| | [07](lektionen/07-schrift-farben/README.md) | Schrift, Farben und Custom Properties |
| | [08](lektionen/08-flexbox/README.md) | Flexbox |
| | [09](lektionen/09-grid/README.md) | Grid |
| | [10](lektionen/10-responsive/README.md) | Responsive Design |
| | [11](lektionen/11-zustaende-dark-mode/README.md) | Zustände, Übergänge und Dark Mode |
| 3 – TypeScript | | folgt |
| 4 – Abschlussprojekt | | folgt |

**Los geht's mit [Lektion 00](lektionen/00-einrichtung/README.md).**

## Wenn du nicht weiterkommst

1. Lies die Fehlermeldung oder den Tipp in `check.html` genau.
2. Schau in den Entwicklertools nach (Rechtsklick → Untersuchen).
3. Erklär das Problem laut, jemandem oder einer Gummiente. Oft fällt dir die Lösung dabei selbst ein.
4. Frag in der Gruppe. Zeig dabei deinen Code und sag, was du erwartet hast und was stattdessen passiert ist.

Gute Nachschlagewerke: [MDN Web Docs](https://developer.mozilla.org/de/) (die beste Referenz für alles im Web, teilweise auf Deutsch) und [SELFHTML](https://wiki.selfhtml.org/) (deutsch).
