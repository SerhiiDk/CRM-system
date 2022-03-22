import { createClient} from './clientsAPI.js';
import {createModalWithForm} from './modalWindowForm.js';

export const addNewClientModal = () => {
    const createForm = createModalWithForm();

    const modalBlock = document.createElement('div');
    const modalContent = document.createElement('div'); 

    modalBlock.classList.add('common-modal', 'modal-active');
    modalContent.classList.add('modal__main-content', 'common-modal__content','modal-active');

    createForm.modalForm.classList.add('modal__add-client');

    modalBlock.append(modalContent);
    modalContent.append(createForm.modalCloseBtn, createForm.modalHeading, createForm.modalForm);

    document.addEventListener('click', (event)=> {
        if(event.target == modalBlock){
            modalBlock.remove();
        }
    });


    createForm.modalCloseBtn.addEventListener('click', ()=> {
        modalBlock.remove();
    });


    createForm.modalForm.addEventListener('submit', async (e)=> {

        let contacts = [];
        let clientObj = {};

        let contactType = document.querySelectorAll('.contacts__select');
        let contactInput = document.querySelectorAll('.contacts__input');
 

        for (let i = 0; i < contactType.length; i++) {
            contacts.push({
                type: contactType[i].value,
                value:contactInput[i].value
            })
        }


        document.querySelectorAll('contacts__input').forEach(elem => {
            console.log(elem);
        })
        clientObj.name = createForm.inputName.value;
        clientObj.surname = createForm.surNameInput.value;
        clientObj.lastName = createForm.inputLastName.value;

        const sortContacts = contacts.sort((a,b)=> (a.type < b.type ? 1 : -1))
        clientObj.contacts = sortContacts;
        await createClient(clientObj);

    })



    return modalBlock;

}