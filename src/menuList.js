export const addMenuOnClick = () => {
    const menu = document.querySelector('.menu');
    if (menu.hasChildNodes()){
        menu.removeChild(menu.firstChild);
    }
    const menuImg = document.createElement('img');
    menuImg.src = '../imgaes/La Vue.png';
    menuImg.classList.add('menu-img');
  
    
    menu.appendChild(menuImg);
  };