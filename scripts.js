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

    h1.addEventListener("dblclick", chooseRandomColor1);
    h2.addEventListener("dblclick", chooseRandomColor2);
    h3.addEventListener("dblclick", chooseRandomColor3);
    h4.addEventListener("dblclick", chooseRandomColor4);
    h5.addEventListener("dblclick", chooseRandomColor5);
    h6.addEventListener("dblclick", chooseRandomColor6);

    let colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
        '#E6B333', '#3366E6', '#999966'];

    function chooseRandomColor1() {
        let randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];
        h1.style.color = randomColor;
    }

    function chooseRandomColor2() {
        let randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];
        h2.style.color = randomColor;
    }

    function chooseRandomColor3() {
        let randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];
        h3.style.color = randomColor;
    }

    function chooseRandomColor4() {
        let randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];
        h4.style.color = randomColor;
    }

    function chooseRandomColor5() {
        let randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];
        h5.style.color = randomColor;
    }

    function chooseRandomColor6() {
        let randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];
        h6.style.color = randomColor;
    }

    //let headerArray = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

    // headerArray.addEventListener("dblclick", chooseRandomColor);
})