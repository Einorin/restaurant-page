export const contact = () => {
    const menu = document.querySelector('.menu');
    if (menu.hasChildNodes()){
        menu.removeChild(menu.firstChild);
    }
    const contactImage = document.createElement('img');
    contactImage.src = '../imgaes/contact.png'
    contactImage.classList.add('menu-img');

    menu.appendChild(contactImage);
}



