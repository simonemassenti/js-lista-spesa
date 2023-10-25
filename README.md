## Lista della spesa con ciclo while

**Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.**

### DATI

- Lista della spesa.

### LOGICA

- Prendere l'elemento ul dal documento html;
- Creare una variabile stringa vuota che conterrà l'elemento li con all'interno un elemento della lista della spesa;
- Inizializzare un indice che ci permetterà di scorrere il vettore all'interno del ciclo while;
- Impostare il ciclo while che cicla solo quando l'indice è minore della lunghezza del vettore;
- Dentro il ciclo viene concatenata una stringa che contiene l'elemento HTML li che a sua volta contiene l'elemento del vettore indicato dall'indice.
- Una volta che l'indice raggiunge la lunghezza del vettore siu esce dal ciclo while.

### OUTPUT
Viene inserita all'interno dell'elemento ul la lista di elementi li creata all'interno del ciclo, permettendo così la visualizzazione nel documento html della lista della spesa