import contactImg from '../imgaes/contact.png'

export const contact = () => {
    const menu = document.querySelector('.menu');
    if (menu.hasChildNodes()){
        menu.removeChild(menu.firstChild);
    }
    const contactImage = document.createElement('img');
    contactImage.src = contactImg
    contactImage.classList.add('menu-img');

    menu.appendChild(contactImage);
}



