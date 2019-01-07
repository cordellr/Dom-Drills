document.addEventListener("DOMContentLoaded", function () {
    let headerContainer = document.createElement('div');
    headerContainer.className = 'header-container';
    document.body.appendChild(headerContainer);

    let h1 = document.createElement('h1');
    let h1Text = document.createTextNode('This is an h1');
    h1.appendChild(h1Text);
    headerContainer.appendChild(h1);

    let h2 = document.createElement('h2');
    let h2Text = document.createTextNode('This is an h2');
    h2.appendChild(h2Text);
    headerContainer.appendChild(h2);

    let h3 = document.createElement('h3');
    let h3Text = document.createTextNode('This is an h3');
    h3.appendChild(h3Text);
    headerContainer.appendChild(h3);

    let h4 = document.createElement('h4');
    let h4Text = document.createTextNode('This is an h4');
    h4.appendChild(h4Text);
    headerContainer.appendChild(h4);

    let h5 = document.createElement('h5');
    let h5Text = document.createTextNode('This is an h5');
    h5.appendChild(h5Text);
    headerContainer.appendChild(h5);

    let h6 = document.createElement('h6');
    let h6Text = document.createTextNode('This is an h6');
    h6.appendChild(h6Text);
    headerContainer.appendChild(h6);

    h1.className = 'h1';
    h2.className = 'h2';
    h3.className = 'h3';
    h4.className = 'h4';
    h5.className = 'h5';
    h6.className = 'h6';

    let colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
        '#E6B333', '#3366E6', '#999966'];

    function chooseRandomColor () {
        let randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];
        return randomColor;
    }

    h1.addEventListener("dblclick", function(){
        let randomColor = chooseRandomColor ();
        h1.style.color = randomColor;
    });

    h2.addEventListener("dblclick", function(){
        let randomColor = chooseRandomColor ();
        h2.style.color = randomColor;
    });

    h3.addEventListener("dblclick", function(){
        let randomColor = chooseRandomColor ();
        h3.style.color = randomColor;
    });

    h4.addEventListener("dblclick", function(){
        let randomColor = chooseRandomColor ();
        h4.style.color = randomColor;
    });

    h5.addEventListener("dblclick", function(){
        let randomColor = chooseRandomColor ();
        h5.style.color = randomColor;
    });

    h6.addEventListener("dblclick", function(){
        let randomColor = chooseRandomColor ();
        h6.style.color = randomColor;
    });

let listBtn = document.createElement("button");
listBtn.className = "list button";
let btnText = document.createTextNode("Click to add new list item");
listBtn.appendChild(btnText);
headerContainer.appendChild(listBtn);

let list = document.createElement('ul');
headerContainer.appendChild(list);

let listCount = 0;

function addToList() {
    listCount ++;
    let li = document.createElement('li');
    let liText = document.createTextNode("This is list item " + listCount)
    li.appendChild(liText);
    list.appendChild(li);
};

listBtn.addEventListener("click", addToList);

})