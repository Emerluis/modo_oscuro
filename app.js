/*const boton = document.querySelector('#boton');
const prefresDarkScheme = window.matchMedia('(prefers-color-scheme: dark)')

boton.addEventListener('click', () => {
    console.log('diste click')
    console.log(prefresDarkScheme)
    if (prefresDarkScheme.matches) {
        document.body.classList.toggle('light-theme')
        document.getElementById.toggle("body-dark-theme");
    } else {
        document.body.classList.toggle('dark-theme')
    }
})*/

function myFunction() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}






/*Si clicamos en el botón del sol, borrarémos la clase css dark-mode del div 
con id page y se aplicará el estilo active al sol*/
document.getElementById('id-sun').onclick = function(){
  document.getElementById('page').classList.remove('dark-mode')
  document.getElementById('id-moon').classList.remove('active')
  this.classList.add('active')
}
/*Si clicamos en el botón de la luna, añadiremos la clase css dark-mode del div 
con id page y se aplicará el estilo active a la luna*/
document.getElementById('id-moon').onclick = function(){
  document.getElementById('page').classList.add('dark-mode')
  document.getElementById('id-sun').classList.remove('active')
  this.classList.add('active')
}