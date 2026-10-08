# Lektion 05 – CSS-Grundlagen

Mit Modul 1 hast du den Inhalt gebaut. Jetzt kommt das Aussehen. In dieser Lektion lernst du, wie CSS aufgebaut ist und wie der Browser entscheidet, welche Regel gewinnt, wenn sich zwei widersprechen.

## Eine Seite ohne CSS ist nicht ganz ohne CSS

Auch eine Seite ohne eigenes CSS hat schon ein Aussehen: `<h1>` ist groß und fett, Links sind blau und unterstrichen, der `<body>` hat einen kleinen Rand. Das kommt aus dem **Browser-Stylesheet**, das jeder Browser mitbringt. Dein eigenes CSS ergänzt und überschreibt es.

## Eine Regel

```css
h1 {
  color: darkgreen;
  font-size: 2.5rem;
}
```

| Teil | Beispiel | Bedeutung |
|---|---|---|
| Selektor | `h1` | Für welche Elemente gilt die Regel? |
| Deklarationsblock | `{ … }` | Alles zwischen den geschweiften Klammern |
| Eigenschaft | `color` | Was soll sich ändern? |
| Wert | `darkgreen` | Wie soll es aussehen? |

Jede Deklaration endet mit einem Semikolon. Kommentare schreibst du in CSS so: `/* Kommentar */`.

## CSS einbinden

Das CSS steht in einer eigenen Datei, zum Beispiel `stil.css`. Im `<head>` jeder HTML-Seite verweist du darauf:

```html
<link rel="stylesheet" href="stil.css">
```

Für `href` gelten dieselben Pfad-Regeln wie bei Links und Bildern (Lektion 02). Der Vorteil: Eine einzige CSS-Datei gestaltet alle Seiten deiner Website. Wenn du eine Farbe änderst, ändert sie sich überall.

Es gibt noch zwei andere Wege, die du kennen solltest, aber selten brauchst:

```html
<!-- Ein <style>-Element im <head>: gilt nur für diese eine Seite -->
<style>
  h1 { color: darkgreen; }
</style>

<!-- Das style-Attribut: gilt nur für dieses eine Element -->
<h1 style="color: darkgreen">Hallo</h1>
```

Beides vermischt Inhalt und Aussehen wieder. Bleib bei der eigenen Datei.

## Die ersten Eigenschaften

| Eigenschaft | Beispielwerte | Wirkung |
|---|---|---|
| `color` | `darkgreen`, `#1f7a3d` | Textfarbe |
| `background-color` | `lightyellow`, `#fdf3d7` | Hintergrundfarbe |
| `font-family` | `Georgia, serif` | Schriftart |
| `font-size` | `1.25rem` | Schriftgröße |
| `font-weight` | `bold`, `normal` | fett oder nicht |
| `font-style` | `italic`, `normal` | kursiv oder nicht |
| `text-decoration` | `none`, `underline` | Unterstreichung |
| `text-align` | `left`, `center` | Ausrichtung |

Farben kannst du als Namen schreiben (`darkgreen`) oder als Hex-Code (`#1f7a3d`). Mehr zu Farben, Schriften und Einheiten wie `rem` kommt in Lektion 06 und 07.

## Selektoren

| Selektor | Trifft | Beispiel |
|---|---|---|
| `p` | alle `<p>` | |
| `.hinweis` | alle Elemente mit `class="hinweis"` | `<p class="hinweis">` |
| `#kontakt` | das Element mit `id="kontakt"` | |
| `h1, h2` | alle `<h1>` **und** alle `<h2>` | |
| `nav a` | jedes `<a>`, das irgendwo in einer `<nav>` steckt | |
| `nav > ul` | nur `<ul>`, die *direkt* in einer `<nav>` stecken | |
| `p.hinweis` | `<p>` mit der Klasse `hinweis`, aber kein anderes Element | |
| `*` | alles | |

Das Leerzeichen in `nav a` ist wichtig: Es bedeutet „steckt in“. `nav a` und `nav, a` sind zwei völlig verschiedene Selektoren.

Ein Element kann mehrere Klassen haben, getrennt durch Leerzeichen: `class="hinweis wichtig"`. Benenn Klassen nach dem, was etwas **ist**, nicht danach, wie es aussieht. `warnung` bleibt richtig, wenn du die Farbe später änderst, `rot` nicht.

Eine `id` darf es pro Seite nur einmal geben. Für CSS nimmst du fast immer Klassen. Warum, siehst du gleich.

## Die Kaskade: Wer gewinnt?

Oft treffen mehrere Regeln auf dasselbe Element:

```css
p { color: black; }
.hinweis { color: darkred; }
```

Ein `<p class="hinweis">` wird dunkelrot. Der Browser entscheidet in dieser Reihenfolge:

1. **Spezifität:** Der genauere Selektor gewinnt.
2. **Reihenfolge:** Sind beide gleich genau, gewinnt die Regel, die weiter unten steht.

Die Spezifität kannst du ausrechnen. Zähl drei Dinge:

| | Zählt | Beispiel |
|---|---|---|
| A | IDs | `#kontakt` |
| B | Klassen, Attribute und Pseudoklassen (wie `:hover`, kommt in Lektion 11) | `.hinweis` |
| C | Elemente | `p`, `nav` |

Verglichen wird zuerst A, dann B, dann C, wie bei einem Wettrennen mit drei Runden:

| Selektor | A, B, C |
|---|---|
| `p` | 0, 0, 1 |
| `nav a` | 0, 0, 2 |
| `.hinweis` | 0, 1, 0 |
| `nav .aktiv` | 0, 1, 1 |
| `#kontakt` | 1, 0, 0 |

Eine einzige Klasse schlägt also beliebig viele Elemente, und eine einzige ID schlägt beliebig viele Klassen. Genau deshalb sind IDs in CSS unpraktisch: Wer eine ID-Regel überschreiben will, braucht wieder eine ID. Mit Klassen bleibt alles auf einer Ebene und gut beherrschbar.

Über allen Selektoren steht das `style`-Attribut. Und darüber noch `!important`, das du hinter einen Wert schreiben kannst. Benutz es nicht: Es löst ein Problem, indem es ein größeres schafft.

## Vererbung

Manche Eigenschaften gehen von einem Element auf alles darin über:

```css
body {
  font-family: Georgia, serif;
  color: #333;
}
```

Jetzt haben auch alle Absätze, Listen und Überschriften diese Schrift und diese Farbe. Das ist praktisch: Die Grundschrift der Seite setzt du einmal am `<body>`.

Vererbt werden vor allem Eigenschaften rund um Text: `color`, `font-…`, `line-height`, `text-align`. Rahmen, Abstände und Hintergründe werden **nicht** vererbt. Sonst hätte jedes Element in einem Kasten wieder einen eigenen Kasten.

Wichtig: Vererbung ist schwächer als jede Regel. Hat ein Element eine eigene Regel, egal wie unspezifisch, dann gilt die, und nicht das, was vom Elternelement kommt.

## CSS verzeiht auch

Wie bei HTML gibt es keine Fehlermeldung. Der Browser überspringt einfach, was er nicht versteht, und macht mit dem Rest weiter:

```css
h1 {
  colour: darkgreen;   /* unbekannte Eigenschaft: ignoriert */
  font-size: 2.5 rem;  /* Leerzeichen vor der Einheit: ungültig, ignoriert */
  color: darkgreen     /* Semikolon fehlt … */
  font-weight: bold;   /* … also ist auch das hier kaputt */
}
```

## Die DevTools für CSS

Rechtsklick auf ein Element → Untersuchen. Rechts neben dem HTML siehst du den Bereich **Stile** (in Firefox: **Regeln**). Dort steht jede Regel, die das Element trifft, die stärkste oben.

- **Durchgestrichen** heißt: Diese Deklaration wird von einer stärkeren Regel überschrieben.
- **Gelbes Warndreieck** oder **durchgestrichen mit Hinweis** heißt: Der Browser versteht die Deklaration nicht.
- Mit den Häkchen schaltest du Deklarationen an und aus. Du kannst Werte direkt anklicken und ändern, auch mit den Pfeiltasten. Wie bei HTML gilt das nur bis zum Neuladen.
- Ganz unten steht, was vom Browser-Stylesheet kommt und was geerbt ist.

Der Bereich **Berechnet** zeigt, welcher Wert am Ende tatsächlich gilt.

**Weiter mit [`aufgaben.md`](aufgaben.md).**
