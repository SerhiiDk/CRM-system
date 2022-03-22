import { getClients, searchClientData } from "./clientsAPI.js";
import { createItemTable } from "./createItem.js";
import { createMainContent } from "./mainContent.js";
import {searchClients} from './searchClient.js'

export const createHeader = () => {
    const header = document.createElement('header');
    const headerLogo  = document.createElement('a');
    const headerImg = document.createElement('img');
    const headerForm = document.createElement('form');
    const headerInput = document.createElement('input');
    const headerContent = document.createElement('div');   

    // classList

    header.classList.add('header');
    headerLogo.classList.add('header__logo-link');
    headerImg.classList.add('header__logo-img');
    headerForm.classList.add('header__form');
    headerInput.classList.add('header__form-input');
    headerContent.classList.add('header__content');

    // LogoImg
    headerImg.src = "img/Logo.png";
    headerImg.alt = "Clients Logo";

    // Input
    headerInput.placeholder = "Enter";


    // Actions
    headerInput.addEventListener('input', (e)=> {
        searchClients();
    })


    // add to document

    header.append(headerContent);
    headerLogo.append(headerImg);
    headerForm.append(headerInput);
    headerContent.append(headerLogo, headerForm);

    return header;

};