# Aufgaben – Lektion 00

## ⭐ 1. Deine erste Seite, live

1. Öffne `uebung/index.html` in VS Code und schau dir den Code an. Du musst noch nicht alles verstehen.
2. Rechtsklick auf die Datei → **Open with Live Server**.
3. Ordne VS Code und den Browser nebeneinander an.
4. Ersetze in der `<h1>` die Wörter `DEIN NAME` durch deinen Namen und speichere. Die Seite im Browser aktualisiert sich von selbst.

## ⭐ 2. Die Seite anpassen

In der Datei stehen Kommentare (`<!-- ... -->`), die sagen, was du ändern sollst:

- Ändere den Text im `<title>`. Wo taucht er im Browser auf?
- Schreib einen Absatz über dich: `<p>Hier steht dein Text.</p>`
- Ergänze die Liste, sodass sie drei Dinge enthält, die du gern machst. Jeder Eintrag steht in einem eigenen `<li>`.

## ⭐ 3. Prüfen

Öffne `check.html` mit Live Server. Für jede Anforderung siehst du einen grünen Haken oder ein rotes Kreuz mit einem Tipp. Lass den Tab offen: Er prüft bei jedem Speichern neu.

## ⭐ 4. Dein erster Commit

Richte Git ein, wie es in der README unter „Git: Zwischenstände speichern“ steht. Dann im Terminal:

1. `git status`: Welche Datei wird als geändert angezeigt?
2. `git diff`: Findest du deine Änderungen wieder? Rot ist alt, grün ist neu. Mit `q` kommst du wieder raus.
3. `git add .` und danach noch einmal `git status`. Was hat sich verändert?
4. `git commit -m "Lektion 00: Erste Seite angepasst"`
5. `git log --oneline`: Ganz oben steht jetzt dein Commit.

## ⭐ 5. Entwicklertools: Elemente

1. Rechtsklick auf deine Überschrift im Browser → **Untersuchen**.
2. Im Elemente-Bereich ist die `<h1>` jetzt markiert. Doppelklick auf den Text und ändere ihn. Was passiert auf der Seite?
3. **Bevor du neu lädst:** Überleg dir, was nach dem Neuladen (`F5`) zu sehen sein wird. Dann lade neu. Lagst du richtig? Warum ist das so?

## ⭐⭐ 6. Entwicklertools: Konsole

Öffne die Konsole in den DevTools und tippe diese Zeilen nacheinander ein, jeweils mit `Enter`:

```js
2 + 2
document.title
document.querySelector("h1").textContent
document.querySelector("h1").textContent = "Hallo aus der Konsole!"
```

Was passiert bei jeder Zeile? Die letzte Zeile ist ein Vorgeschmack auf Modul 3: Mit Code die Seite verändern.

> Tipp die Zeilen ab, statt sie zu kopieren. Beim ersten Einfügen in die Konsole blockieren Chrome und Firefox nämlich und verlangen, dass du erst einen Satz wie „allow pasting“ eintippst. Das ist ein Schutz gegen Betrüger, die Leute dazu bringen, fremden Code in ihre Konsole zu kopieren.

## ⭐⭐ 7. Hinter die Kulissen schauen

Öffne eine beliebige Website, z. B. Wikipedia.

1. Drück `Strg+U`. Das zeigt den **Quelltext**, also das HTML, das der Browser bekommen hat. Finde den `<title>`.
2. Untersuche mit Rechtsklick → Untersuchen ein paar Dinge auf der Seite: eine Überschrift, einen Link, ein Bild.

Du wirst vieles noch nicht verstehen, das ist normal. Achte darauf, was dir schon bekannt vorkommt.

## ⭐⭐ 8. Zurück zum letzten Commit

1. Lösch in `uebung/index.html` die komplette Liste und speichere. Die Seite ist jetzt „kaputt“.
2. Schau mit `git status` und `git diff` nach, was Git bemerkt hat.
3. **Bevor du den nächsten Befehl ausführst:** Was glaubst du, wie die Datei danach aussieht?
4. `git restore uebung/index.html`
5. Schau in VS Code und im Browser nach. Lagst du richtig?

## ⭐⭐⭐ 9. Ohne Live Server

Öffne `uebung/index.html` per Doppelklick im Dateimanager statt mit Live Server.

- Was ist anders an der Adresse in der Adressleiste?
- Ändere etwas und speichere. Was passiert im Browser?
- Öffne auch `check.html` per Doppelklick. Was zeigt die Seite an?
