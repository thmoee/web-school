# Lektion 08 – Flexbox

Bisher stehen Block-Elemente immer untereinander. Für eine Navigation, eine Reihe von Karten oder einen Kopfbereich mit Logo links und Menü rechts brauchst du sie aber nebeneinander. Dafür gibt es **Flexbox**.

## Ein Container, viele Kinder

```css
.reihe {
  display: flex;
}
```

Mit `display: flex` wird ein Element zum **Flex-Container**. Seine direkten Kinder heißen **Flex-Items**, und die stehen jetzt nebeneinander. Nur die direkten Kinder, nicht die Enkel.

Flexbox ordnet Items in **einer** Richtung an: entweder in einer Zeile oder in einer Spalte. Für zwei Richtungen gleichzeitig, also ein Raster, gibt es Grid. Das kommt in Lektion 09.

## Zwei Achsen

```
          Hauptachse →
        ┌─────┬─────┬─────┐
Quer-   │  A  │  B  │  C  │
achse   │     │     │     │
  ↓     └─────┴─────┴─────┘
```

- Die **Hauptachse** ist die Richtung, in der die Items aufgereiht werden. Normalerweise von links nach rechts.
- Die **Querachse** steht senkrecht dazu.

Mit `flex-direction: column` drehst du das um: Die Hauptachse geht dann von oben nach unten, die Querachse von links nach rechts. Alles, was jetzt kommt, richtet sich nach diesen Achsen und nicht nach „waagerecht“ und „senkrecht“.

## Verteilen auf der Hauptachse: `justify-content`

| Wert | Ergebnis |
|---|---|
| `flex-start` | alle am Anfang (Standard) |
| `flex-end` | alle am Ende |
| `center` | alle in der Mitte |
| `space-between` | erstes ganz am Anfang, letztes ganz am Ende, der Rest gleichmäßig dazwischen |
| `space-around` | gleich viel Platz um jedes Item |

## Ausrichten auf der Querachse: `align-items`

| Wert | Ergebnis |
|---|---|
| `stretch` | alle so hoch wie der Container (Standard) |
| `flex-start` | alle oben |
| `center` | alle mittig |
| `flex-end` | alle unten |
| `baseline` | die erste Textzeile aller Items auf einer Linie |

Der Standard `stretch` erklärt, warum Karten in einer Flex-Reihe automatisch gleich hoch sind.

## Abstand: `gap`

```css
.reihe {
  display: flex;
  gap: 1rem;
}
```

`gap` setzt Abstand *zwischen* die Items, nicht an den Rand. Das ist viel einfacher als Margins an jedem Item.

## Umbrechen: `flex-wrap`

Normalerweise quetscht Flexbox alle Items in eine Zeile, auch wenn sie nicht hineinpassen. Mit `flex-wrap: wrap` dürfen sie in die nächste Zeile umbrechen.

## Wie breit wird ein Item? `flex`

Am Item selbst steuerst du mit `flex`, wie es wächst und schrumpft:

```css
.karte {
  flex: 1 1 15rem;
}
```

Die drei Zahlen sind:

1. **grow:** Wie viel vom freien Platz bekommt das Item? `0` heißt nichts, `1` heißt einen gleichen Anteil wie alle anderen mit `1`.
2. **shrink:** Darf das Item schmaler werden, wenn es eng wird? `1` heißt ja, `0` heißt nein.
3. **basis:** Wie breit ist das Item, bevor verteilt wird?

Zusammen mit `flex-wrap: wrap` heißt das: Jede Karte ist ungefähr 15rem breit. Passen drei in eine Zeile, stehen drei nebeneinander und teilen sich den Rest. Passt nur eine, steht jede allein und ist so breit wie der Container. Das Layout passt sich an die Bildschirmbreite an, ganz ohne Media Queries.

Kurzformen, die du oft sehen wirst:

| Kurzform | Bedeutung |
|---|---|
| `flex: 1` | nimm einen gleichen Anteil des Platzes |
| `flex: none` | bleib genau so groß, wie du bist |

## Der Trick mit `margin: auto`

In einem Flex-Container schluckt ein Margin mit `auto` den ganzen freien Platz. Damit schiebst du ein einzelnes Item ans Ende:

```css
.abmelden {
  margin-left: auto;
}
```

Oder, in einer Spalte, ganz nach unten mit `margin-top: auto`.

## Eine Falle: Margins

Erinnerst du dich an die zusammenfallenden Margins aus Lektion 06? In einem Flex-Container fallen Margins **nicht** zusammen. Machst du eine Karte voller Absätze zum Flex-Container, werden die Abstände zwischen den Absätzen plötzlich doppelt so groß. Die Lösung: Margins nur noch in eine Richtung setzen, zum Beispiel nur `margin-bottom`, oder gleich `gap` benutzen.

## Typische Muster

**Kopfbereich mit Logo links und Menü rechts:**

```css
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
```

**Etwas genau in die Mitte setzen**, waagerecht und senkrecht:

```css
.buehne {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 20rem;
}
```

Jahrzehntelang war das eines der schwierigsten Probleme in CSS. Mit Flexbox sind es drei Zeilen.

## Die DevTools

Im Bereich *Elemente* steht neben jedem Flex-Container ein kleines Schild `flex`. Klick darauf: Die Seite zeigt dir die Items, die Abstände und den freien Platz. In Chrome gibt es im Bereich *Stile* neben `display: flex` außerdem ein Symbol, mit dem du `justify-content` und `align-items` per Klick durchprobieren kannst.

**Weiter mit [`aufgaben.md`](aufgaben.md).**
