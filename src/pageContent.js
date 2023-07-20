export function pageContent(){
    const content = document.querySelector('.content');
    const nav = document.createElement('div');
    nav.classList.add('nav');

    const navItem1 = document.createElement('nav');
    navItem1.classList.add('nav1')
    navItem1.textContent='La Vue De Vue';

    const navItem2 = document.createElement('nav');
    navItem2.classList.add('nav2')
    navItem2.textContent = 'Menu List';

    const navItem3 = document.createElement('nav');
    navItem3.classList.add('nav3')
    navItem3.textContent = 'About';

    const navItem4 = document.createElement('nav');
    navItem4.classList.add('nav4')
    navItem4.textContent = 'Contact';

    nav.appendChild(navItem1)
    nav.appendChild(navItem2)
    nav.appendChild(navItem3)
    nav.appendChild(navItem4)
    content.appendChild(nav)

    const menu = document.createElement('div');
    menu.classList.add('menu')
    content.appendChild(menu)
}