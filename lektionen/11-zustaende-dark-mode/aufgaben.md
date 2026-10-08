# Aufgaben – Lektion 11

In `uebung/` liegt die Seite „Mitmachen“ des Brettspielclubs mit dem Anmeldeformular aus Lektion 04. Sie hat schon ein Stylesheet, aber noch keine Zustände. Und zwei Dinge darin sind kaputt.

## ⭐ 1. Hover für Links

Die Links in der Navigation und im Footer sollen zeigen, dass man sie anklicken kann, wenn die Maus darüber ist. Zum Beispiel: Die Navigationslinks werden unterstrichen, die Footer-Links verlieren ihre Unterstreichung. Der Knopf „Mitmachen“ wird dunkler.

Denk dran: Auf dem Handy gibt es kein Hover. Es darf also nur ein Extra sein.

## ⭐ 2. Erst vorhersagen: Der Hover, der nicht will

Im Stylesheet steht schon eine Regel `button:hover`, die den Knopf „Anmelden“ dunkler machen soll. Fahr mit der Maus darüber: Nichts passiert.

1. Bevor du in die DevTools schaust: Lies alle Regeln, die den Knopf treffen, und rechne ihre Spezifität aus. Welche gewinnt beim Hover und warum?
2. Prüf deine Vermutung. Untersuch den Knopf und klick im Bereich *Stile* auf `:hov`. Dort kannst du den Zustand `:hover` erzwingen, ohne die Maus darüber zu halten. Welche Deklaration ist durchgestrichen?
3. Repariere es, **ohne** `!important`. Es gibt mehrere Wege. Welcher macht das Stylesheet insgesamt am einfachsten?

## ⭐ 3. Mit der Tastatur durchs Formular

1. Klick in die Adressleiste und drück dann so lange `Tab`, bis du im Formular bist. Füll es nur mit der Tastatur aus. Weißt du immer, wo du gerade bist?
2. Such im Stylesheet die Regel, die schuld ist, und lies den Kommentar darüber.
3. Lösch die Regel und gib stattdessen allem, was den Fokus bekommen kann, mit `:focus-visible` einen gut sichtbaren eigenen Fokusring.
4. Probier es wieder mit der Tastatur. Und dann mit der Maus: Was ist der Unterschied zwischen einem Textfeld und dem Knopf?

## ⭐ 4. Sanfte Übergänge

Gib dem Knopf „Anmelden“ und dem Knopf „Mitmachen“ einen Übergang für die Hintergrundfarbe. Probier verschiedene Dauern aus: 0.1s, 0.3s, 1s. Was fühlt sich gut an? Am Ende soll es höchstens eine halbe Sekunde sein.

## ⭐ 5. Dark Mode

1. Schalt in den DevTools den Dark Mode ein (wie, steht in der README). Was passiert mit der Seite? Und was mit den Formularfeldern?
2. Schreib eine Media Query für `prefers-color-scheme: dark`, die die Farb-Variablen neu setzt. Ändere dafür keine anderen Regeln.
3. Setz `color-scheme: light dark;` in `:root` und schau dir die Formularfelder und die Checkbox noch einmal an.
4. Prüf den Kontrast aller Texte im Dark Mode, auch auf dem Knopf und in der Navigation. Wird der Knopf beim Hover im Dark Mode noch sichtbar anders?

Prüf mit `check.html`. Er schaltet den Dark Mode für den Test selbst ein, du musst dafür nichts umstellen.

## ⭐⭐ 6. Falsch ausgefüllt

Felder, die falsch ausgefüllt sind, sollen einen roten Rahmen bekommen. Probier zuerst `:invalid` und lad die Seite neu. Was ist das Problem? Probier dann `:user-invalid`.

## ⭐⭐ 7. Weniger Bewegung

Schalt alle Übergänge ab, wenn jemand weniger Bewegung eingestellt hat. Teste es mit der Emulation in Chrome unter *Rendering*.

## ⭐⭐ 8. Checkboxen in deiner Farbe

Mit `accent-color` färbst du Checkboxen und Radio-Buttons ein, ohne sie nachzubauen. Gib ihnen die Akzentfarbe, auch im Dark Mode.

## ⭐⭐⭐ 9. `light-dark()`

Statt einer Media Query kannst du jede Farbe mit `light-dark()` gleich für beide Modi angeben: `--farbe-text: light-dark(#2b2b2b, #e8e6e1);`. Damit das funktioniert, muss `color-scheme: light dark` gesetzt sein.

Bau deinen Dark Mode in einer Kopie des Stylesheets so um. Welche Variante findest du übersichtlicher?

## Projekt-Schritt

Das ist der letzte Schritt von Modul 2:

- Gib allen Links und Knöpfen in deinem Projekt einen Hover-Zustand und einen gut sichtbaren Fokusring. Prüf jede Seite einmal nur mit der Tastatur.
- Bau einen Dark Mode, indem du deine Farb-Variablen neu setzt. Prüf den Kontrast in beiden Modi.

Öffne dann [`projekt/check.html`](../../projekt/check.html) und prüf, ob dein Projekt den Meilenstein für Modul 2 erreicht hat.
