import _ from 'lodash';

function component() {
    var element = document.createElement('div');
  
       // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    console.log('element');
  }
  
  document.body.appendChild(component());