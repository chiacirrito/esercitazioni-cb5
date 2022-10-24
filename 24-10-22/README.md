Esercizio
Sulla base del giorno, creare una nuova cartella sul vostro sistema (locale), chiamata esercitazioni-CB5.

Inizializzare la cartella sopra a GIT (git init)
Creare la relativa cartella di esercitazione al suo interno (es. 24-10-22)
Procedere con la consegna Javascript: creare i soliti files html e css, aggiungere javascript con un button al cui click faccia comparire un alert.
In remoto (GitHub), creare una repository con lo stesso nome (esercitazioni-CB5)
Seguire i passaggi che enuncia GitHub e collegare la repository (esercitazioni-CB5) locale a quella remota
Una volta risolti i problemi relativi ai permessi Github, allora procedere col push
Attenzione, importante
Risolvere i problemi di permessi GitHub
Attenzione al progetto da inizializzare a git: sarà non la cartella del giorno, ma la cartella esercitazioni-CB5. Quindi occhio al percorso sul terminale.

Lista processi generici git:

git add (con puntino seleziona tutto, o possiamo anche sel. singoli file)
git commit -m MESSAGGIO_DEL_COMMIT (crea un nuovo commit della repository)
git push (invia tutto in remoto)
comandi utili:

git status - verifica eventuali modifiche alla repository
git diff - riporta nel terminale il codice relativo alle modifiche
git log - mostra la lista dei commits
git branch - mostra la lista dei branches
git checkout -b NOME_BRANCH - crea e vi si posiziona su una branch
git remote -v - visualizza il percorso remoto della repository (se questa è stata inserita precedentemente)
git config --list - mostra i dati relativi all'utente