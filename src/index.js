import _ from 'lodash';
import './style.css';
import Icon from './icon.png';
import Data from './data.xml';

function component() {
    const element = document.createElement('div');
    const myIcon = new Image();

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    // Add the image to our existing div.    
    myIcon.src = Icon;
    element.appendChild(myIcon);
    console.log(Data);
    return element;
}

document.body.appendChild(component());