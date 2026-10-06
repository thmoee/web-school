# Lektion 03 – Semantische Struktur

Bisher hast du einzelne Inhalte ausgezeichnet: Überschriften, Absätze, Listen. Jetzt geht es um den Aufbau der ganzen Seite: Wo ist der Kopf, wo die Navigation, wo der Hauptinhalt?

## Das Problem: Div-Suppe

So sehen viele Webseiten im Inneren aus:

```html
<div class="kopf">
  <div class="logo"><b>Brettspielclub Würfelglück</b></div>
  <div class="menue">
    <a href="#">Start</a> | <a href="#">Termine</a>
  </div>
</div>
<div class="inhalt">
  <div class="beitrag">
    <div class="titel"><b>Neues Spiel im Regal</b></div>
    Seit dieser Woche steht ein neues Spiel im Regal.<br><br>
    Am Freitag erklären wir die Regeln.
  </div>
</div>
```

Im Browser sieht das gar nicht schlecht aus, mit etwas CSS sogar richtig gut. Aber für den Browser sind das nur Kästen in Kästen. Er weiß nicht, dass „Neues Spiel im Regal“ eine Überschrift ist oder dass die Links eine Navigation bilden. Die Klassennamen wie `kopf` oder `titel` sind nur für Menschen lesbar, und auch nur für die, die Deutsch können.

Das ist ein Problem für:

- **Menschen mit Screenreader.** Ein Screenreader liest die Seite vor. Nutzer springen dabei gezielt zur Navigation, zum Hauptinhalt oder von Überschrift zu Überschrift. In der Div-Suppe gibt es nichts, wohin man springen könnte.
- **Suchmaschinen und andere Programme**, zum Beispiel die Leseansicht im Browser. Sie müssen raten, was wichtig ist.
- **Dich selbst.** In drei Monaten weißt du nicht mehr, welches `</div>` zu welchem `<div>` gehört.

## Semantisch heißt: nach Bedeutung

HTML-Elemente beschreiben, was ein Inhalt **ist**, nicht wie er aussieht. Für den Aufbau einer Seite gibt es diese Elemente:

| Element | Bedeutung |
|---|---|
| `<header>` | Kopfbereich: Name der Seite, Logo, oft die Navigation |
| `<nav>` | eine Gruppe von Links zum Navigieren, meist das Hauptmenü |
| `<main>` | der Hauptinhalt der Seite, **genau einmal** pro Seite |
| `<article>` | ein in sich geschlossener Inhalt, der auch allein Sinn ergibt: ein Beitrag, eine Nachricht, ein Rezept |
| `<section>` | ein thematischer Abschnitt, fast immer mit eigener Überschrift |
| `<aside>` | Ergänzendes, das man auch weglassen könnte: ein Infokasten, eine Seitenleiste |
| `<footer>` | Fußbereich: Impressum, Kontakt, Copyright |

Ein typisches Gerüst:

```html
<body>
  <header>
    <h1>Brettspielclub Würfelglück</h1>
    <nav>
      <ul>
        <li><a href="index.html">Start</a></li>
        <li><a href="termine.html">Termine</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <article>
      <h2>Neues Spiel im Regal</h2>
      <p>Seit dieser Woche steht ein neues Spiel im Regal.</p>
      <p>Am Freitag erklären wir die Regeln.</p>
    </article>
  </main>

  <footer>
    <p>© 2026 Brettspielclub Würfelglück</p>
  </footer>
</body>
```

Die Navigation ist eine Liste von Links. Deshalb steht sie meistens in einer `<ul>`. Die Striche `|` zwischen den Links fallen weg, das Aussehen regelst du später mit CSS.

## `<article>` oder `<section>`?

Frag dich: **Könnte man diesen Teil herauslösen und woanders veröffentlichen**, zum Beispiel in einem Newsletter? Dann ist es ein `<article>`. Ist es nur ein Kapitel eines größeren Ganzen, das allein keinen Sinn ergibt, dann ist es eine `<section>`.

Im Zweifel ist das nicht schlimm. Wichtiger als die perfekte Wahl ist, dass überhaupt eine sinnvolle Struktur da ist.

## Und `<div>` und `<span>`?

Die sind nicht verboten. `<div>` (ein Block) und `<span>` (ein Stück im Text) sind **neutrale Behälter ohne Bedeutung**. Du brauchst sie, wenn du etwas für CSS gruppieren willst und kein anderes Element passt. Das kommt in Modul 2 öfter vor.

Die Reihenfolge ist: Erst nach einem passenden Element suchen. Nur wenn keins passt, `<div>` oder `<span>` nehmen.

## Kleine Helfer

Ein Datum, das auch Programme verstehen:

```html
<time datetime="2026-10-09">Freitag, 9. Oktober</time>
```

Der Text ist für Menschen, `datetime` für Maschinen, im Format Jahr-Monat-Tag. Mit Uhrzeit: `datetime="2026-10-09T19:00"`.

Ein Zitat:

```html
<blockquote>
  <p>Das beste Spiel ist das, bei dem alle am Tisch lachen.</p>
</blockquote>
```

## Ausprobieren: So sieht ein Screenreader deine Seite

Die DevTools zeigen dir, wie Hilfsprogramme deine Seite verstehen:

- **Firefox:** DevTools → Bereich **Barrierefreiheit**
- **Chrome:** DevTools → Elemente → rechts der Reiter **Barrierefreiheit** (eventuell hinter `»` versteckt)

Dort siehst du einen zweiten Baum. Bei der Div-Suppe besteht er fast nur aus Text. Bei einer semantischen Seite findest du Einträge wie *banner* (der `<header>`), *navigation*, *main* und *contentinfo* (der `<footer>`). Diese Bereiche heißen **Landmarks**. Zwischen ihnen springen Screenreader-Nutzer hin und her.

Firefox hat außerdem eine **Leseansicht** (das Buch-Symbol in der Adressleiste). Sie funktioniert mit semantischem HTML deutlich besser.

## Die Faustregel

Frag nicht: *Wie soll das aussehen?* Frag: **Was ist das?**

**Weiter mit [`aufgaben.md`](aufgaben.md).**
