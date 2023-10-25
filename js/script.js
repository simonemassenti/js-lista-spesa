const shoppingList = ["Maialetto", "Culurgiones", "Seadas", "Fregola", "Biscotti di Fonni", "Salsiccia secca", "Pecorino"];

const listElem = document.querySelector("ul");

let list = "";

let i = 0;

while (i < shoppingList.length) {
    list += `<li>${shoppingList[i]}</li>`
    i++;
    console.log(i);
}

listElem.innerHTML = list;
