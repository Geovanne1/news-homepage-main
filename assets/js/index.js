const body = document.querySelector('main')
const imageMenu = document.querySelector('.menu')
const menuNavegacao = document.querySelector('nav')

let estado = 0;

imageMenu.addEventListener('click', () => {
  console.log(estado)
  if (estado === 0) {
    menuNavegacao.style.display = 'block'
    imageMenu.src = './assets/images/icon-menu-close.svg'
    estado +=1
      
    } else if (estado === 1) {
      menuNavegacao.style.display = 'none'
      imageMenu.src = './assets/images/icon-menu.svg'
      estado -=1
    }
  }
)

body.addEventListener('click', () => {
  if(estado === 1) {
    menuNavegacao.style.display = 'none'
      imageMenu.src = './assets/images/icon-menu.svg'
      estado -=1
  }
})