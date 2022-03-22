import { closeContactBtn } from './svg.js';

export const createContact = () => {

    const newContactBlock = document.createElement('div');
    const contactsSelect = document.createElement('select');
    const newContactInput = document.createElement('input');
    const deleteContactBtn = document.createElement('button');
    const closeContactBtnSvg = document.createElement('span');


    // Class lists

    newContactBlock.classList.add('contacts__content');
    contactsSelect.classList.add('contacts__select');
    newContactInput.classList.add('contacts__input');
    newContactInput.required = true;
    deleteContactBtn.classList.add('contacts__close-btn');
    closeContactBtnSvg.classList.add('contacts__close-btn--svg');
    deleteContactBtn.title = 'Delete contact';
    deleteContactBtn.setAttribute('data-toggle', 'tooltip');


    // Components content
    closeContactBtnSvg.innerHTML = closeContactBtn;
    newContactInput.placeholder = "Enter information";
    
    const contactValues = ['Telefon', 'Extra.Telefon', 'Email', 'Vk', 'Facebook', 'Other'];


    contactValues.forEach(item => {
        let option = document.createElement('option');
        option.value = item;
        option.innerHTML = item;
        contactsSelect.appendChild(option);
    });


    deleteContactBtn.append(closeContactBtnSvg);
    newContactBlock.append(contactsSelect, newContactInput,
        deleteContactBtn)

    
    deleteContactBtn.addEventListener('click', (e)=> {
        e.preventDefault();
        newContactBlock.remove();
        document.querySelector('.modal__btn--add').disabled = false;
    })

    $(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip();   
    });


    return {
        newContactInput,
        newContactBlock,
        contactsSelect,
        deleteContactBtn
    }

    


};