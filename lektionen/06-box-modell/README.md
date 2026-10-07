# Lektion 06 – Das Box-Modell

Für den Browser ist jedes Element ein rechteckiger Kasten, eine **Box**. Wenn du verstehst, wie groß diese Kästen sind und wie viel Platz zwischen ihnen ist, verstehst du den größten Teil von CSS-Layout.

## Die Kästen sichtbar machen

Schreib das kurz in dein CSS:

```css
* {
  outline: 1px solid red;
}
```

Plötzlich siehst du um jedes Element einen roten Rahmen. Überschriften und Absätze gehen über die ganze Breite, Links und hervorgehobene Wörter sind nur so breit wie ihr Text. Merk dir den Trick: Wenn ein Layout nicht tut, was du willst, zeigt er dir oft sofort, warum.

## Die vier Schichten

Jede Box besteht von innen nach außen aus vier Schichten:

```
┌───────────────── margin ─────────────────┐
│  ┌────────────── border ──────────────┐  │
│  │  ┌─────────── padding ──────────┐  │  │
│  │  │                              │  │  │
│  │  │           content            │  │  │
│  │  │                              │  │  │
│  │  └──────────────────────────────┘  │  │
│  └────────────────────────────────────┘  │
└──────────────────────────────────────────┘
```

| Schicht | Was es ist | Hintergrundfarbe? |
|---|---|---|
| `content` | der Inhalt, also Text oder Bild | ja |
| `padding` | Innenabstand zwischen Inhalt und Rahmen | ja |
| `border` | der Rahmen | eigene Farbe |
| `margin` | Außenabstand zu den Nachbarn | nein, immer durchsichtig |

```css
.karte {
  padding: 1rem;
  border: 2px solid #c9d6d2;
  border-radius: 8px;
  margin-bottom: 1.5rem;
}
```

`border` ist eine Kurzschreibweise für Breite, Stil und Farbe. `border-radius` rundet die Ecken ab.

## Kurzschreibweisen für Abstände

`margin` und `padding` kannst du für jede Seite einzeln setzen, mit `margin-top`, `margin-right`, `margin-bottom` und `margin-left`. Kürzer geht es so:

| Schreibweise | Bedeutung |
|---|---|
| `margin: 1rem;` | überall 1rem |
| `margin: 1rem 2rem;` | oben und unten 1rem, links und rechts 2rem |
| `margin: 1rem 2rem 3rem 4rem;` | oben, rechts, unten, links |

Die Reihenfolge bei vier Werten ist **im Uhrzeigersinn**, oben beginnend.

## Einheiten

| Einheit | Bedeutung | Wofür |
|---|---|---|
| `px` | Pixel | Rahmen, feine Linien |
| `rem` | ein Vielfaches der Grundschriftgröße, meist 16px | Abstände, Schriftgrößen, Breiten |
| `%` | Prozent der Breite des Elternelements | Breiten |

Warum `rem` statt `px`? Manche Menschen stellen in ihrem Browser eine größere Grundschrift ein, weil sie schlecht sehen. Mit `rem` wächst deine Seite mit, mit `px` nicht.

## Block und Inline

Es gibt zwei Grundsorten von Boxen:

- **Block-Elemente** wie `<p>`, `<h1>`, `<ul>`, `<li>`, `<article>` oder `<div>` beginnen in einer neuen Zeile und nehmen die ganze verfügbare Breite ein.
- **Inline-Elemente** wie `<a>`, `<strong>`, `<em>` oder `<span>` fließen im Text mit und sind nur so breit wie ihr Inhalt.

Bei Inline-Elementen funktioniert das Box-Modell nur halb: `width` und `height` werden ignoriert, `margin` oben und unten auch. `padding` oben und unten wird zwar gezeichnet, schiebt aber nichts zur Seite. Der Hintergrund ragt dann einfach in die Zeile darüber.

Mit `display` änderst du die Sorte:

| Wert | Verhalten |
|---|---|
| `block` | wie ein Absatz |
| `inline` | wie ein Wort im Text |
| `inline-block` | fließt im Text mit wie ein Wort, aber `width`, `height`, `margin` und `padding` funktionieren voll |
| `none` | weg, als gäbe es das Element nicht |

## Breite und `box-sizing`

Jetzt kommt die größte Falle in CSS. Was glaubst du, wie breit diese Box auf dem Bildschirm ist?

```css
.box {
  width: 300px;
  padding: 20px;
  border: 5px solid black;
}
```

Nicht 300px, sondern **350px**: 300 für den Inhalt, dazu links und rechts je 20 Padding und 5 Rahmen. `width` meint ursprünglich nur den Inhalt. Das ist fast nie, was man will.

Mit `box-sizing: border-box` meint `width` die Breite einschließlich Padding und Rahmen. Die Box ist dann wirklich 300px breit, und der Inhalt wird entsprechend schmaler. Fast jedes Stylesheet beginnt deshalb so:

```css
* {
  box-sizing: border-box;
}
```

Und noch ein Tipp: Gib Elementen mit Text keine feste Höhe (`height`). Wenn der Text länger wird oder jemand die Schrift vergrößert, läuft er unten aus dem Kasten heraus. Lass die Höhe vom Inhalt bestimmen.

## Zentrieren mit `margin: auto`

```css
main {
  max-width: 40rem;
  margin: 0 auto;
}
```

`max-width` heißt: höchstens so breit, aber schmaler, wenn das Fenster schmaler ist. Der Platz, der rechts und links übrig bleibt, wird mit `auto` gleichmäßig verteilt. So steht der Inhalt in der Mitte.

## Zusammenfallende Abstände

Zwei Absätze untereinander: Der obere hat `margin-bottom: 30px`, der untere `margin-top: 20px`. Der Abstand dazwischen ist nicht 50px, sondern **30px**. Senkrechte Margins von Nachbarn fallen zusammen, und der größere gewinnt. Das heißt auf Englisch *margin collapsing*.

Das ist meistens praktisch, kann aber verwirren: Hat ein Element oben kein Padding und keinen Rahmen, rutscht der `margin-top` seines ersten Kindes nach außen. Dann ist der Abstand plötzlich *über* dem Elternelement statt darin. Die Lösung: dem Elternelement ein `padding` geben.

Waagerechte Margins fallen nie zusammen.

## Das Browser-Stylesheet

Viele Abstände, die du siehst, kommen vom Browser: Der `<body>` hat ringsum `8px` Margin, Überschriften und Absätze haben Margins oben und unten, und Listen sind mit `padding-left` eingerückt. Wenn dich etwas stört, überschreib es einfach.

## Die DevTools

Untersuch ein Element und fahr mit der Maus über seine Zeile im HTML. Die Seite färbt die Schichten ein: Inhalt blau, Padding grün, Margin orange.

Im Bereich **Berechnet** (Firefox: **Layout**) siehst du das Box-Modell als Diagramm, mit allen Werten. Du kannst sie dort sogar per Doppelklick ändern.

**Weiter mit [`aufgaben.md`](aufgaben.md).**
