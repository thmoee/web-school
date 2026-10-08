# Lektion 09 – Grid

Flexbox ordnet Dinge in einer Richtung an. **Grid** ordnet sie in zwei Richtungen gleichzeitig an, in Zeilen und Spalten, wie eine Tabelle. Damit baust du Raster aus Karten und das Layout ganzer Seiten.

## Ein erstes Raster

```css
.galerie {
  display: grid;
  grid-template-columns: 200px 200px 200px;
  gap: 1rem;
}
```

Mit `display: grid` wird ein Element zum **Grid-Container**. Seine direkten Kinder verteilt der Browser der Reihe nach in die Zellen: das erste Kind in die erste Spalte, das zweite in die zweite, das dritte in die dritte, das vierte wieder in die erste Spalte der nächsten Zeile. Zeilen entstehen automatisch, so viele wie nötig.

`gap` funktioniert wie bei Flexbox: Abstand zwischen den Zellen, nicht am Rand.

## Die Einheit `fr`

Feste Breiten sind unpraktisch, denn der Bildschirm ist mal breiter und mal schmaler. Deshalb gibt es bei Grid die Einheit `fr`, ein Anteil (*fraction*) am freien Platz:

```css
grid-template-columns: 1fr 1fr 1fr;   /* drei gleich breite Spalten */
grid-template-columns: 2fr 1fr;       /* links doppelt so breit wie rechts */
grid-template-columns: 15rem 1fr;     /* links fest, rechts der ganze Rest */
```

Für viele gleiche Spalten gibt es `repeat()`. `repeat(4, 1fr)` ist dasselbe wie `1fr 1fr 1fr 1fr`.

## Ein Raster, das sich selbst anpasst

Das hier ist eine der nützlichsten Zeilen in ganz CSS:

```css
.galerie {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(13rem, 1fr));
  gap: 1rem;
}
```

Von innen nach außen gelesen:

- `minmax(13rem, 1fr)`: Eine Spalte ist mindestens 13rem breit und höchstens einen Anteil am freien Platz.
- `repeat(auto-fill, …)`: So viele Spalten, wie hineinpassen.

Bei 1000px passen vier Spalten hinein, bei 600px zwei, auf dem Handy eine. Und die Spalten sind dabei immer gleich breit und füllen die ganze Zeile. Das ist ähnlich wie `flex-wrap` mit `flex: 1 1 15rem` aus Lektion 08. Der Unterschied: Bei Grid sind auch die Karten in der letzten Zeile so breit wie die darüber, bei Flexbox füllen sie die letzte Zeile ganz aus.

## Linien und Platzieren

Zwischen und neben den Spalten liegen **Linien**, nummeriert ab 1. Bei drei Spalten gibt es vier Linien:

```
  1       2       3       4
  │ Sp. 1 │ Sp. 2 │ Sp. 3 │
```

Damit kannst du ein Item gezielt platzieren oder über mehrere Zellen strecken:

```css
.gross {
  grid-column: 1 / 3;   /* von Linie 1 bis Linie 3, also zwei Spalten */
}

.breit {
  grid-column: span 2;  /* zwei Spalten breit, wo auch immer es landet */
}

.ganz {
  grid-column: 1 / -1;  /* von der ersten bis zur letzten Linie */
}
```

Dasselbe geht für Zeilen mit `grid-row`. Mit `-1` zählst du von hinten, `-1` ist also immer die letzte Linie.

Passt ein breites Item nicht mehr in die aktuelle Zeile, rutscht es in die nächste. Dabei bleiben Lücken stehen. Mit `grid-auto-flow: dense` füllt der Browser solche Lücken mit späteren Items auf, verändert dabei aber die Reihenfolge.

## Bereiche mit Namen

Für das Layout einer ganzen Seite kannst du die Bereiche benennen und das Raster fast wie eine Zeichnung hinschreiben:

```css
body {
  display: grid;
  grid-template-columns: 1fr 16rem;
  grid-template-areas:
    "kopf   kopf"
    "inhalt seite"
    "fuss   fuss";
  gap: 1.5rem;
}

header { grid-area: kopf; }
main   { grid-area: inhalt; }
aside  { grid-area: seite; }
footer { grid-area: fuss; }
```

Jede Zeichenkette ist eine Zeile, jedes Wort eine Spalte. Steht ein Name in mehreren Zellen nebeneinander oder untereinander, erstreckt sich der Bereich über alle. Ein Punkt `.` ist eine leere Zelle. Die Bereiche müssen immer Rechtecke sein.

Das Schöne daran: Willst du das Layout ändern, zum Beispiel die Seitenleiste nach links, änderst du nur die Zeichnung. Das HTML bleibt, wie es ist. In Lektion 10 nutzt du das für Handy und Desktop.

## Flexbox oder Grid?

| | Flexbox | Grid |
|---|---|---|
| Richtungen | eine: Zeile **oder** Spalte | zwei: Zeilen **und** Spalten |
| Wer bestimmt die Größe? | eher der Inhalt | eher das Raster |
| Typisch für | Navigation, Knopfreihen, Kopfbereich, Inhalt einer Karte | Kartenraster, Galerien, Seitenlayout |

Die beiden schließen sich nicht aus. Sehr oft ist die Seite ein Grid, der Kopfbereich darin ein Flex-Container, und jede Karte im Kartenraster wieder ein Flex-Container.

## Die DevTools

Neben jedem Grid-Container steht im Bereich *Elemente* ein Schild `grid`. Klick darauf: Die Seite zeigt das Raster mit nummerierten Linien und, wenn es welche gibt, den Namen der Bereiche. Im Bereich *Layout* kannst du einstellen, was angezeigt werden soll.

**Weiter mit [`aufgaben.md`](aufgaben.md).**
