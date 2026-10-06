# Aufgaben – Lektion 01

## ⭐ 1. Das Grundgerüst von Hand

`uebung/index.html` enthält nur einen Kommentar. Lösch ihn und schreib das komplette Grundgerüst **von Hand**: ohne Emmet und ohne abzuschreiben. Erst wenn du wirklich nicht weiterkommst, schau in die README.

Füll dann den `<body>`. Das Thema ist egal, zum Beispiel „Mein letztes Wochenende“ oder „Ein Film, den ich mag“. Die Seite braucht:

- eine Hauptüberschrift `<h1>`
- mindestens zwei Absätze
- in einem Absatz ein Wort, das mit `<strong>` hervorgehoben ist
- einen Link zu einer Website, die du magst: `<a href="https://...">Linktext</a>`
- einen Kommentar

Öffne `check.html`, um deine Seite zu prüfen.

## ⭐ 2. Erst vorhersagen, dann ausprobieren

`uebung/kaputt.html` enthält absichtlich **vier Fehler**.

1. **Öffne die Seite noch nicht im Browser.** Lies erst den Code und schreib auf (auf einen Zettel oder als Kommentar in die Datei), wie die Seite deiner Meinung nach aussehen wird.
2. Öffne sie jetzt mit Live Server. Lagst du richtig?
3. Öffne die DevTools und vergleich den Bereich *Elemente* mit dem Quelltext (`Strg+U`). Wo hat der Browser etwas anders gebaut, als es im Code steht?
4. Behebe alle vier Fehler. Ein Fehler ist auf der Seite gar nicht zu sehen. Den findest du nur in den DevTools.

`check.html` prüft auch diese Datei.

## ⭐⭐ 3. Der Baum

Zeichne den Baum deiner `index.html` auf Papier: `html` ganz oben, darunter `head` und `body`, und so weiter, bis hinunter zu jedem `strong` und `a`. Vergleich deine Zeichnung danach mit dem Bereich *Elemente* in den DevTools.

## ⭐⭐ 4. Was passiert, wenn …?

Probier nacheinander aus, beobachte, und mach die Änderung danach wieder rückgängig (`Strg+Z`):

- Lösch den `<title>`. Was steht jetzt im Browser-Tab?
- Lösch `<!DOCTYPE html>`. Siehst du einen Unterschied? Schau in die Konsole der DevTools (Firefox) oder in den Bereich *Issues* bzw. *Probleme* (Chrome).
- Schreib `<H1>` und `</H1>` in Großbuchstaben. Funktioniert es? (Ja. Trotzdem schreibt man Tags klein, das ist die übliche Konvention.)
- Schreib zwischen zwei Wörter in einem Absatz zehn Leerzeichen und ein paar Leerzeilen. Was zeigt der Browser?

## ⭐⭐⭐ 5. Der Validator

1. Kopier deine `index.html` in den [W3C-Validator](https://validator.w3.org/#validate_by_input). Ist sie fehlerfrei?
2. Bau die vier Fehler aus `kaputt.html` nacheinander in deine `index.html` ein und lass sie jedes Mal neu prüfen. Die Meldungen sind auf Englisch: Kannst du jede einem Fehler zuordnen? Meldet der Validator alle vier?
3. Mach danach alles wieder rückgängig.
