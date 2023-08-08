import { pageContent } from './pageContent.js';
import { addMenuOnClick } from './menuList.js';
import { aboutRest } from './about.js';
import { contact } from './contact.js';
import { home } from './home.js';
import './style.css'


pageContent();

const nav1 = document.querySelector('.nav1');
nav1.addEventListener('click',home)

const nav2 = document.querySelector('.nav2');
nav2.addEventListener('click',addMenuOnClick);

const nav3 = document.querySelector('.nav3')
nav3.addEventListener('click',aboutRest)

const nav4 = document.querySelector('.nav4');
nav4.addEventListener('click', contact)





