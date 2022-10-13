import "./styles/main.scss";

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}


function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = "Bonk";
  
    return element;
  }
  
  document.body.appendChild(component());