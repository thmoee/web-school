# Lektion 10 – Responsive Design

Deine Seite wird auf einem Handy mit 360px Breite angesehen, auf einem Laptop mit 1400px und auf einem Monitor mit 2500px. Manchmal hochkant, manchmal quer, manchmal mit doppelt so großer Schrift. **Responsive** heißt: Die Seite funktioniert überall gut. Nicht nur „passt irgendwie drauf“, sondern ist angenehm zu lesen und zu bedienen.

## Der viewport-Meta-Tag

Den kennst du seit Lektion 01:

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

Ohne ihn tut ein Handy so, als wäre sein Bildschirm 980px breit, und verkleinert die ganze Seite, bis sie draufpasst. Dann ist alles winzig, und man muss zoomen. Mit dem Tag sagt die Seite: „Ich komme mit schmalen Bildschirmen klar, zeig mich in echter Größe.“ Das stimmt aber nur, wenn das CSS auch mitspielt.

## Fließend statt fest

Die meisten Probleme auf dem Handy kommen von festen Breiten:

```css
/* bricht auf jedem Bildschirm unter 960px */
body {
  width: 960px;
}

/* passt sich an */
body {
  max-width: 60rem;
}
```

Faustregel: `width` mit festen Werten nur für kleine Dinge wie Symbole. Für alles Große nimmst du `max-width`, `%`, `fr` oder lässt den Browser die Breite selbst bestimmen.

Bilder sind von Natur aus so breit wie die Bilddatei. Diese Regel gehört deshalb in jedes Stylesheet:

```css
img {
  display: block;
  max-width: 100%;
  height: auto;
}
```

Das Bild wird nie breiter als sein Container und behält beim Verkleinern sein Seitenverhältnis. Die Attribute `width` und `height` im HTML solltest du trotzdem behalten: Daraus kennt der Browser das Seitenverhältnis schon, bevor das Bild geladen ist, und die Seite springt nicht.

## Manches passt sich schon von selbst an

Du kennst schon zwei Werkzeuge, die ganz ohne weitere Regeln mit jeder Breite klarkommen:

- `flex-wrap: wrap` mit einer Basisbreite wie `flex: 1 1 15rem` (Lektion 08)
- `repeat(auto-fill, minmax(13rem, 1fr))` (Lektion 09)

Nimm sie, wo es geht. Für alles andere gibt es Media Queries.

## Media Queries

Eine Media Query ist eine Bedingung. Die Regeln darin gelten nur, wenn sie erfüllt ist:

```css
.beitraege {
  display: grid;
  gap: 1.5rem;
}

@media (min-width: 40rem) {
  .beitraege {
    grid-template-columns: 1fr 1fr;
  }
}
```

Die Beiträge stehen untereinander. Ab einer Fensterbreite von 40rem stehen sie zu zweit nebeneinander. Die Regeln in der Media Query haben übrigens keine höhere Spezifität. Sie gewinnen nur, weil sie weiter unten stehen. Media Queries gehören deshalb ans Ende des Stylesheets oder direkt unter die Regel, die sie ändern.

`rem` in Media Queries bezieht sich immer auf die Grundschriftgröße des Browsers, meist 16px. 40rem sind also meist 640px. Stellt jemand eine größere Schrift ein, schaltet das Layout entsprechend früher um. Genau das will man.

Es gibt auch eine neuere Schreibweise, die du manchmal sehen wirst: `@media (width >= 40rem)` bedeutet dasselbe wie `@media (min-width: 40rem)`.

## Mobile first

Es gibt zwei Wege, eine Seite responsiv zu bauen:

**Desktop first:** Erst das breite Layout, dann mit `max-width` für schmale Bildschirme wieder zurückbauen:

```css
.beitraege { grid-template-columns: 1fr 1fr 1fr; }

@media (max-width: 40rem) {
  .beitraege { grid-template-columns: 1fr; }
}
```

**Mobile first:** Erst das schmale Layout, dann mit `min-width` für breite Bildschirme erweitern:

```css
.beitraege { display: grid; }

@media (min-width: 40rem) {
  .beitraege { grid-template-columns: 1fr 1fr 1fr; }
}
```

Nimm **mobile first**. Das schmale Layout ist fast immer das einfachere: alles untereinander, in der Reihenfolge des HTML. Das ist schon der Normalzustand. Für breite Bildschirme fügst du dann nur noch etwas hinzu, statt Dinge rückgängig zu machen.

## Wo gehören die Umbrüche hin?

Die Stellen, an denen das Layout umschaltet, heißen **Breakpoints**. Such sie nicht nach Gerätegrößen aus, denn es gibt Tausende verschiedene Geräte. Mach das Fenster stattdessen langsam breiter. Wenn etwas komisch aussieht, etwa zu lange Zeilen oder zu viel leerer Platz, dann ist das dein Breakpoint.

Die meisten Seiten kommen mit zwei oder drei Breakpoints aus.

## Schrift, die mitwächst

Eine `<h1>` mit 2.5rem ist auf dem Handy oft zu groß. Mit `clamp()` wächst sie mit der Fensterbreite:

```css
h1 {
  font-size: clamp(1.75rem, 1rem + 3vw, 2.5rem);
}
```

Gelesen: mindestens 1.75rem, höchstens 2.5rem, dazwischen `1rem + 3vw`. Die Einheit `vw` ist ein Hundertstel der Fensterbreite. Der `rem`-Anteil sorgt dafür, dass die Schrift trotzdem größer wird, wenn jemand die Grundschrift vergrößert.

## Finger sind keine Mauszeiger

Auf dem Handy tippt man mit dem Finger. Links und Knöpfe sollten deshalb mindestens etwa **44 × 44 Pixel** groß sein und nicht zu dicht beieinander stehen. Ein großzügiges `padding` an Links in der Navigation hilft.

Und: Auf einem Touchscreen gibt es kein `:hover`. Alles, was nur beim Drüberfahren mit der Maus erscheint, ist dort unerreichbar. Mehr dazu in Lektion 11.

## Testen in den DevTools

Chrome und Firefox haben einen **Gerätemodus**: `Strg+Umschalt+M` bei geöffneten DevTools. Oben wählst du ein Gerät oder ziehst die Breite mit der Maus. Chrome zeigt dort auch Balken für deine Media Queries an, die du direkt anklicken kannst. Falls du sie nicht siehst: Im Menü mit den drei Punkten oben rechts im Gerätemodus kannst du sie einschalten.

Der Gerätemodus ist gut, aber kein echtes Handy. Schau dir deine Seite ab und zu auch auf einem echten Gerät an.

## Andere Media Queries

Media Queries fragen nicht nur nach der Breite:

| Media Query | Bedeutung |
|---|---|
| `@media print` | beim Drucken |
| `@media (orientation: landscape)` | im Querformat |
| `@media (hover: hover)` | das Gerät hat eine Maus oder etwas Ähnliches |
| `@media (prefers-color-scheme: dark)` | dunkles Farbschema gewünscht (Lektion 11) |
| `@media (prefers-reduced-motion: reduce)` | weniger Bewegung gewünscht (Lektion 11) |

**Weiter mit [`aufgaben.md`](aufgaben.md).**
