# Lektion 11 – Zustände, Übergänge und Dark Mode

Eine Seite ist nicht nur ein Bild. Man fährt mit der Maus über Links, springt mit der Tastatur durch Formulare, und manche Menschen haben ihr Gerät auf dunkel gestellt. In dieser letzten CSS-Lektion reagiert deine Seite darauf.

## Pseudoklassen

Eine **Pseudoklasse** trifft ein Element nur in einem bestimmten Zustand. Sie beginnt mit einem Doppelpunkt:

```css
a:hover {
  text-decoration: none;
}
```

| Pseudoklasse | Trifft, wenn … |
|---|---|
| `:hover` | die Maus über dem Element ist |
| `:active` | das Element gerade gedrückt wird |
| `:focus` | das Element den Fokus hat, also Tastatureingaben bekommt |
| `:focus-visible` | das Element den Fokus hat **und** der Browser meint, dass man das sehen sollte, vor allem bei Bedienung mit der Tastatur |
| `:visited` | ein Link schon besucht wurde |
| `:checked` | eine Checkbox oder ein Radio-Button angehakt ist |
| `:disabled` | ein Formularfeld abgeschaltet ist |
| `:user-invalid` | ein Feld falsch ausgefüllt ist, nachdem jemand es bearbeitet hat |
| `:first-child`, `:nth-child(2)` | das Element das erste oder zweite Kind seines Elternelements ist |

Bei der Spezifität zählt eine Pseudoklasse wie eine Klasse. `a:hover` hat also 0, 1, 1 und ist damit stärker als `nav a` mit 0, 0, 2. Aber schwächer als jede Regel mit einer ID. Das wird dir in den Aufgaben begegnen.

## Fokus: Wo bin ich gerade?

Viele Menschen bedienen Webseiten mit der Tastatur: Mit `Tab` springen sie von Link zu Link und von Feld zu Feld. Damit sie wissen, wo sie sind, zeigt der Browser um das Element mit dem Fokus einen Rahmen, den **Fokusring**.

Manche finden diesen Rahmen hässlich und schreiben:

```css
/* Bitte nie so! */
:focus {
  outline: none;
}
```

Damit ist die Seite für alle, die die Tastatur benutzen, praktisch unbedienbar. Wenn dir der Fokusring des Browsers nicht gefällt, ersetz ihn durch einen eigenen, aber entfern ihn nie ersatzlos:

```css
:focus-visible {
  outline: 3px solid var(--farbe-akzent);
  outline-offset: 2px;
}
```

`outline` ist ein Rahmen, der keinen Platz einnimmt. Er verschiebt also nichts, wenn er erscheint. `outline-offset` setzt ihn ein Stück nach außen.

Warum `:focus-visible` statt `:focus`? Klickst du einen Knopf mit der Maus an, hat er danach auch den Fokus. Einen Rahmen braucht dort aber niemand, du weißt ja, wo du geklickt hast. `:focus-visible` greift nur, wenn der Fokus wirklich sichtbar sein sollte. Bei Textfeldern ist das immer der Fall, bei Knöpfen nur bei Bedienung mit der Tastatur.

## Hover ist nur ein Extra

Auf einem Handy gibt es keinen Mauszeiger, also auch kein `:hover`. Ein Hover-Effekt darf deshalb zeigen, dass etwas anklickbar ist, aber er darf nichts verstecken, was man unbedingt braucht. Ein Menü, das nur beim Drüberfahren aufklappt, ist auf dem Handy unerreichbar.

## Übergänge

Ändert sich ein Wert durch einen Zustand, springt er normalerweise sofort um. Mit `transition` gleitet er:

```css
.knopf {
  background-color: var(--farbe-akzent);
  transition: background-color 0.2s ease;
}

.knopf:hover {
  background-color: var(--farbe-akzent-dunkel);
}
```

Die drei Werte sind: welche Eigenschaft, wie lange, und in welcher Kurve. Ein paar Hinweise:

- Der Übergang steht in der Regel **ohne** `:hover`. Dann gleitet es beim Hineinfahren und beim Hinausfahren.
- Kurz ist besser. 0.15 bis 0.3 Sekunden fühlen sich flott an. Alles über einer halben Sekunde wirkt träge.
- Nenn die Eigenschaften einzeln, statt `transition: all` zu schreiben. Sonst gleitet auch, was gar nicht gleiten soll.
- Mehrere Eigenschaften trennst du mit Komma: `transition: background-color 0.2s, transform 0.2s;`

Mit `transform` kannst du ein Element verschieben, drehen oder vergrößern, ohne dass sich etwas anderes auf der Seite bewegt: `transform: translateY(-2px)` hebt es zwei Pixel an, `transform: scale(1.05)` vergrößert es um 5 %.

## Weniger Bewegung

Manchen Menschen wird von Bewegung auf dem Bildschirm schwindlig oder übel. Sie können das im Betriebssystem einstellen, und deine Seite kann darauf reagieren:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    transition: none !important;
  }
}
```

Hier ist `!important` ausnahmsweise in Ordnung: Die Regel soll wirklich jeden Übergang abschalten, egal wie spezifisch er ist.

## Dark Mode

Viele Menschen stellen ihr Gerät auf ein dunkles Farbschema. Mit einer Media Query fragst du das ab:

```css
@media (prefers-color-scheme: dark) {
  body {
    color: #e8e6e1;
    background-color: #161b1a;
  }
}
```

Jetzt zahlen sich die Custom Properties aus Lektion 07 aus. Statt jede Regel einzeln zu überschreiben, setzt du nur die Variablen neu:

```css
:root {
  --farbe-text: #2b2b2b;
  --farbe-hintergrund: #fffdf7;
  --farbe-akzent: #1f6f5c;
}

@media (prefers-color-scheme: dark) {
  :root {
    --farbe-text: #e8e6e1;
    --farbe-hintergrund: #161b1a;
    --farbe-akzent: #7fd1b9;
  }
}
```

Alle Regeln, die `var(--farbe-…)` benutzen, sind damit automatisch dunkel. Ein paar Dinge, auf die du achten solltest:

- Dunkel heißt nicht schwarz. Ein sehr dunkles Grau oder Grün ist angenehmer als `#000`, und der Text muss nicht reinweiß sein.
- Akzentfarben müssen im Dark Mode meist **heller** werden, sonst haben sie zu wenig Kontrast. Prüf den Kontrast in beiden Modi.
- Mit `color-scheme` sagst du dem Browser, dass deine Seite beide Schemata kann. Dann färbt er auch Formularfelder, Scrollbalken und Checkboxen passend ein:

```css
:root {
  color-scheme: light dark;
}
```

## Dark Mode testen

Du musst dafür nicht dein ganzes System umstellen:

- **Chrome:** DevTools → Menü mit den drei Punkten → *Weitere Tools* → *Rendering*. Dort gibt es eine Einstellung, mit der du `prefers-color-scheme: dark` emulierst.
- **Firefox:** DevTools → *Inspektor* → im Bereich *Regeln* gibt es oben zwei Knöpfe mit Sonne und Mond.

Im Bereich *Rendering* von Chrome kannst du übrigens auch `prefers-reduced-motion` emulieren.

**Weiter mit [`aufgaben.md`](aufgaben.md).**
