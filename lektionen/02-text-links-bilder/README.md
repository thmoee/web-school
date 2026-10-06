# Lektion 02 – Text, Listen, Links, Bilder

Mit den Elementen aus dieser Lektion kannst du schon fast jede Textseite bauen. Der wichtigste Teil sind die Pfade am Ende. Dort stolpern fast alle irgendwann.

## Überschriften

Es gibt sechs Ebenen, `<h1>` bis `<h6>`:

```html
<h1>Wandern in den Alpen</h1>
  <h2>Ausrüstung</h2>
    <h3>Schuhe</h3>
    <h3>Rucksack</h3>
  <h2>Touren</h2>
```

Überschriften bilden eine **Gliederung**, wie ein Inhaltsverzeichnis. Dafür gibt es drei Regeln:

- Eine Seite hat genau eine `<h1>`: das Thema der ganzen Seite.
- Keine Ebene überspringen: Auf eine `<h2>` folgt eine `<h3>`, nicht direkt eine `<h4>`.
- Wähl die Ebene nach der Gliederung, nicht nach der Schriftgröße. Wie groß etwas aussieht, regelst du später mit CSS.

Screenreader-Nutzer springen oft von Überschrift zu Überschrift, um sich einen Überblick zu verschaffen. Eine saubere Gliederung hilft also nicht nur dir.

## Absätze und Hervorhebungen

```html
<p>Ein Absatz ist ein Block zusammenhängender Text.</p>
<p>Vergiss <strong>niemals</strong> genug Wasser. Die Hütte ist <em>wirklich</em> weit.</p>
```

- `<strong>` bedeutet: *Das ist wichtig.* Wird fett dargestellt.
- `<em>` bedeutet: *Das ist betont*, so wie man es beim Sprechen betonen würde. Wird kursiv dargestellt.

Es gibt auch `<b>` und `<i>`, die nur fett oder kursiv machen, ohne eine Bedeutung. Nimm lieber `<strong>` und `<em>`, wenn du wichtig oder betont meinst.

`<br>` erzwingt einen Zeilenumbruch innerhalb eines Absatzes, zum Beispiel in einem Gedicht oder einer Adresse. Für Abstand zwischen Absätzen ist es nicht gedacht: Dafür nimmst du einzelne `<p>`, den Abstand regelt CSS.

## Listen

**Ungeordnete Liste** (`<ul>`, *unordered list*): Die Reihenfolge ist egal.

```html
<ul>
  <li>Wanderschuhe</li>
  <li>Regenjacke</li>
  <li>Proviant</li>
</ul>
```

**Geordnete Liste** (`<ol>`, *ordered list*): Die Reihenfolge zählt. Der Browser nummeriert selbst.

```html
<ol>
  <li>Wetterbericht prüfen</li>
  <li>Route planen</li>
  <li>Losgehen</li>
</ol>
```

Ein `<li>` (*list item*) steht immer direkt in einer `<ul>` oder `<ol>`. Listen lassen sich verschachteln: Die innere Liste steht dann *innerhalb* eines `<li>`:

```html
<ul>
  <li>
    Kleidung
    <ul>
      <li>Regenjacke</li>
      <li>Mütze</li>
    </ul>
  </li>
  <li>Proviant</li>
</ul>
```

## Links

```html
<a href="https://www.alpenverein.de">Deutscher Alpenverein</a>
```

Der Text zwischen den Tags ist das, worauf man klickt. Schreib dort etwas Aussagekräftiges hin. „Hier klicken“ sagt nichts darüber, wohin der Link führt.

Was in `href` stehen kann:

| Art | Beispiel | Wohin |
|---|---|---|
| Absolute URL | `https://de.wikipedia.org` | zu einer anderen Website |
| Relativer Pfad | `touren.html` | zu einer Datei auf deiner eigenen Website (mehr dazu unten) |
| Anker | `#ausruestung` | zu einer Stelle auf derselben Seite, und zwar zum Element mit `id="ausruestung"` |
| E-Mail | `mailto:alex@example.com` | öffnet das E-Mail-Programm |

Ein Anker in Aktion:

```html
<a href="#touren">Zu den Touren</a>
...
<h2 id="touren">Touren</h2>
```

Mit `target="_blank"` öffnet sich ein Link in einem neuen Tab. Benutz das sparsam: Die meisten Leute möchten selbst entscheiden, wo sich ein Link öffnet.

## Bilder

```html
<img src="bilder/berg.svg" alt="Ein Berg mit schneebedeckter Spitze vor blauem Himmel" width="640" height="400">
```

- `src` ist der Pfad zur Bilddatei.
- `alt` ist eine Beschreibung des Bildes. Sie wird vorgelesen, wenn jemand das Bild nicht sehen kann, und angezeigt, wenn es nicht lädt. Frag dich: *Was soll jemand wissen, der das Bild nicht sieht?* Ist ein Bild reine Dekoration, schreibst du `alt=""`. Dann wird es übersprungen. Ganz weglassen solltest du `alt` nie.
- `width` und `height` sind optional. Wenn der Browser die Größe vorher kennt, springt die Seite beim Laden nicht hin und her.

Bilder mit Bildunterschrift packst du in eine `<figure>`:

```html
<figure>
  <img src="bilder/berg.svg" alt="Ein Berg mit schneebedeckter Spitze">
  <figcaption>Der Gipfel am frühen Morgen.</figcaption>
</figure>
```

## Pfade

Relative Pfade gehen immer von der Datei aus, **in der der Pfad steht**. Nimm diese Ordnerstruktur:

```
uebung/
├── index.html
├── touren.html
└── bilder/
    └── berg.svg
```

| Du bist in … | und willst zu … | Pfad |
|---|---|---|
| `index.html` | `touren.html` | `touren.html` (gleicher Ordner) |
| `index.html` | `berg.svg` | `bilder/berg.svg` (in den Unterordner hinein) |

Und `..` heißt „einen Ordner nach oben“. Läge `touren.html` in einem Unterordner `seiten/`, dann ginge es von dort zurück zur Startseite mit `../index.html` und zum Bild mit `../bilder/berg.svg`.

Drei Dinge, die oft schiefgehen:

- **Groß- und Kleinschreibung.** `Berg.svg` und `berg.svg` sind auf einem Webserver zwei verschiedene Dateien. Auf deinem Rechner funktioniert es vielleicht trotzdem, online dann nicht mehr. Gewöhn dir an: Dateinamen klein, ohne Leerzeichen und ohne Umlaute.
- **Rückwärts-Schrägstriche.** Im Web immer `/`, nie `\`, auch unter Windows.
- **Pfade von deinem Rechner** wie `C:\Users\alex\Bilder\berg.jpg`. Die gibt es nur auf deinem Computer.

Wenn ein Bild nicht erscheint: Rechtsklick auf die Stelle → Untersuchen, oder schau in die Konsole. Dort steht meist eine Meldung mit dem Pfad, den der Browser vergeblich gesucht hat.

**Weiter mit [`aufgaben.md`](aufgaben.md).**
