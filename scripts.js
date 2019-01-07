document.addEventListener("DOMContentLoaded", function(){
let headerContainer = document.createElement('div');
headerContainer.className = 'header-container';

document.body.appendChild(headerContainer);

let h1 = document.createElement('h1');
let h1Text = document.createTextNode('This is an h1');
h1.appendChild(h1Text);

headerContainer.appendChild(h1);
})