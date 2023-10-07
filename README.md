# Microbit-CatchMe

Ce projet agrège les qques scripts qui ont été crées dans le but du Catch/search me.

Ci dessous j'utilise le terme `channel` celui ci correspond au `groupe radio` dans la terminologie microbit

## beacon-renew-random-radiogroup.js

à la mise sous tension choisit un channel au hasard entre 0 et 10 et envoie une trame toutes les 200 ms tout en affichant la trame envoyée et le canal choisi via les leds).
Si pression sur A+B va passer en mode random et changera automatiquement de canal toutes les minutes.

## beacon.js 

à la mise sous tension choisit un channel au hasard entre 0 et 10 et envoie une trame toutes les 200 ms tout en affichant la trame envoyée et le canal choisi via les leds)

## client.js 

à la mise sous tension se positionne sur la canal 5 et affiche un petit carré s'il reçoit une trame.
Il est possible de changer le canal par les boutons A et B, tandis que AB affiche le canal en cours

## scanner.js 

à la mise sous tension se met à scanner les channels de 0 à 10 en restant sur chacun 10" et en attendant une éventuelle trame.
Si une trame est reçue, le scan s'arrête et reste bloqué sur le canal en question
La puissance de reception est également affichée.
Une pression sur AB permet d'afficher le canal

## signalLevel.js

à la mise sous tension se positionne sur la canal 1 et affiche le niveau de reception de façon graphique
Il est possible de changer le canal par les boutons A et B, tandis que AB affiche le canal en cours
