import _ from 'lodash'
import Lion from './utilities'
// import { NAME as NAME_OF_UCHIBO } from './utilities'
// import * as utilities from './utilities'
// import { NAME, NiJou } from './utilities'

console.log(Lion.say());
// console.log(utilities.NiJou(10));

function component() {
	const element = document.createElement('div');
	const array = ['Hello!', 'Webpack!!'];
	element.innerHTML = _.join(array, ' ')
	return element;
}

document.body.appendChild(component());