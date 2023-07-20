export function aboutRest(){
    const menu = document.querySelector('.menu');
    if (menu.hasChildNodes()){
        menu.removeChild(menu.firstChild);
    }
    const about = document.createElement('img');
    about.src = '../imgaes/about.png'
    about.classList.add('menu-img');
  
    
    menu.appendChild(about);
} 