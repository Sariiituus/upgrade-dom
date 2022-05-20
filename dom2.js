// 2.1 Inserta dinamicamente en un html un div vacio con javascript.
let newDiv = document.createElement('div');
document.body.appendChild(newDiv);


// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
let newDiv2 = document.createElement('div');
newDiv2.appendChild(document.createElement('p'));
document.querySelector('body').appendChild(newDiv2);


// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
let newDiv3 = document.createElement('div');

for (let i = 0; i < 6; i++) {
    newDiv3.appendChild(document.createElement('p'));
}

document.querySelector('body').appendChild(newDiv3);


// 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
let newP = document.createElement('p');
newP.innerText = 'Soy dinámico!';
document.querySelector('body').appendChild(newP);


// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
let h2 = document.querySelector('h2.fn-insert-here');
h2.innerText = 'Wubba Lubba dub dub';



// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

let newUl = document.createElement('ul');
for (let i = 0; i < apps.length; i++) {
    let newLi = document.createElement('li');
    newLi.innerText = apps[i];

    newUl.appendChild(newLi);
}

document.body.appendChild(newUl);



// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
let nodos = document.querySelectorAll('.fn-remove-me');
for (let i = 0; i < nodos.length; i++) {
    document.body.removeChild(nodos[i]);
}


//2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
//Recuerda que no solo puedes insertar elementos con .appendChild.
let parr = document.createElement('p');
parr.innerText = 'Voy en medio!';

document.body.insertBefore(parr,document.querySelectorAll('div')[1]);

// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
document.querySelectorAll('div.fn-insert-here').forEach((elemento) => {
    let p = document.createElement('p');
    p.innerText = 'Voy dentro!';
    elemento.appendChild(p);
});

