import {svgAddNewContact, closeModalBtn, activeAddBtn} from './svg.js';
import {createContact} from './createContact.js';

export const createModalWithForm = () => {
    const modalHeading  = document.createElement('h2');
    const modalCloseBtn  = document.createElement('button');
    const modalCloseBtnSvg  = document.createElement('span');
    const modalForm = document.createElement('form');
    const surNameInput = document.createElement('input');
    const surNameLabel = document.createElement('label');
    const inputNameLabel = document.createElement('label');
    const inputName = document.createElement('input');
    const inputLastName = document.createElement('input');
    const inputLastLabel = document.createElement('label');
    const saveBtn = document.createElement('button');
    const cancelBtn = document.createElement('button');
    const requiredName = document.createElement('span');
    const requiredSurname = document.createElement('span');
    const addContact = document.createElement('button');
    const addContactSvg = document.createElement('span');
    const contactBlock = document.createElement('div');
    const saveSpiner  = document.createElement('span');
    // const createNewContactData = createContact();


    // Class Lists

    modalHeading.classList.add('modal__heading');
    modalCloseBtn.classList.add('modal__btn--close');
    modalCloseBtnSvg.classList.add('modal__btn--close-svg');
    modalForm.classList.add('modal__form');
    surNameInput.classList.add('modal__surName-input', 'modal-input');
    surNameLabel.classList.add('modal__surName--label', 'modal-label');
    inputName.classList.add('modal__name--input','modal-input');
    inputNameLabel.classList.add('modal__name--label','modal-label');
    inputLastName.classList.add('modal__lastName--input','modal-input');
    saveBtn.classList.add('modal__btn--save');
    cancelBtn.classList.add('modal__btn--cancel');
    requiredName.classList.add('modal__required--name');
    requiredSurname.classList.add('modal__required--surName');
    addContact.classList.add('modal__btn--add');
    addContactSvg.classList.add('modal__btn--add-svg');
    contactBlock.classList.add('modal__new--contact');
    saveSpiner.classList.add('modal__spinner');

    // Names

    modalHeading.textContent  = "New Client";
    // modalCloseBtn.textContent = "X";
    surNameInput.placeholder = "Surname";
    surNameInput.required = true;
    inputName.placeholder = "Name";
    inputName.required = true;
    inputLastName.placeholder = "LastName";
    saveBtn.textContent = "Save";
    saveBtn.type ="submit";
    cancelBtn.textContent = "Cancel";
    requiredName.textContent = "*";
    requiredSurname.textContent = "*";
    addContact.textContent = "Add new contact";
    addContact.type = "button";
    addContactSvg.innerHTML = svgAddNewContact;
    modalCloseBtnSvg.innerHTML = closeModalBtn;
    modalCloseBtn.type = "button";
    cancelBtn.type = "button";  
    saveSpiner.innerHTML = activeAddBtn;

    // Add components to DOM
    // saveBtn.append(saveSpiner);
    surNameLabel.append(surNameInput,requiredSurname );
    inputNameLabel.append(inputName, requiredName);
    inputLastLabel.append(inputLastName);
    addContact.append(addContactSvg);
    contactBlock.append(addContact);
    modalCloseBtn.append(modalCloseBtnSvg);


    inputName.addEventListener('input', ()=> {
        if (inputName.value.length >= 1) {
            requiredName.remove();
        }
        else {
            inputNameLabel.append(requiredName);
        }
    });

    surNameInput.addEventListener('input', ()=> {
        if (surNameInput.value.length >= 1) {
            requiredSurname.remove();
        }
        else {
            surNameLabel.append(requiredSurname);
        }
    });

    addContact.addEventListener("click", ()=> {

        const contactsItem = document.getElementsByClassName('contacts__content');
        
        if (contactsItem.length < 9){
            const contactItem = createContact();
            contactBlock.append(contactItem.newContactBlock);
            if (contactsItem.length > 5 ){ 
                document.querySelector('.common-modal__content').style.top = "70%";
            }
            else {
                document.querySelector('.common-modal__content').style.top = "50%";
            }
        } else {
            const contactItem = createContact();
            contactBlock.append(contactItem.newContactBlock);
            addContact.disabled = true;
        }
    })


    modalForm.append(
        modalHeading,
        modalCloseBtn,
        surNameLabel,
        inputNameLabel,
        inputLastName,
        contactBlock,
        saveBtn,
        cancelBtn
    );

    return {
            modalForm,
            modalCloseBtn,
            modalHeading,
            cancelBtn,
            saveBtn,
            surNameInput,
            inputName,
            inputLastName,
            surNameLabel,
            inputNameLabel,
            contactBlock,
            requiredName,
            requiredSurname
        }

}