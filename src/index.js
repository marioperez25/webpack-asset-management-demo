import _ from 'lodash';
import printMe from './print.js';
import './style.css';
import Icon from './icon.png';
import Data from './data.xml';

function component() {
    const parentElement = document.createElement('section');
    const element = document.createElement('div');
    const myIcon = new Image();
    const btn = document.createElement('button');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    // Add the image to our existing div.    
    myIcon.src = Icon;
    element.appendChild(myIcon);

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
    parentElement.appendChild(element);
    parentElement.appendChild(btn);

    console.log(Data);
    return parentElement;
}

document.body.appendChild(component());