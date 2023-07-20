export function home(){
    const menu = document.querySelector('.menu');
    if (menu.hasChildNodes()){
        menu.removeChild(menu.firstChild);
    }
} 