import { changeClientData } from "./clientsAPI.js";
import { createContact } from "./createContact.js";
import { deleteModal } from "./deleteModal.js";
import { createModalWithForm } from "./modalWindowForm.js"
import { changeBtn } from './svg.js'


export const changeClient = (data)=> {
    // console.log(data.name, 'THIS IS CNAHGE DATA!')
    const changeMainDiv = document.createElement('div');
    const changeMainContent = document.createElement('div');
    const changeMainGetId = document.createElement('span');

    // const idInfo = data.id.substr(0,6);

    changeMainDiv.classList.add('common-modal','modal-active');
    changeMainContent.classList.add('common-modal__content', 'modal-active',);
    changeMainGetId.classList.add('common-modal__id-client');

    const getForm = createModalWithForm();

    // Get client info
    getForm.modalHeading.textContent = "Edit Client Info";
    changeMainGetId.textContent = "ID: " + data._id.substr(0,6);
    getForm.inputName.value = data.name;
    getForm.requiredName.textContent = "";
    getForm.surNameInput.value = data.surname;
    getForm.requiredSurname.textContent = "";
    getForm.inputLastName.value = data.lastName;
    getForm.cancelBtn.textContent = "Delete contact";
    

    document.addEventListener('click', (event)=> {
        if(event.target == changeMainDiv){
            changeMainDiv.remove();
        }
    });

    getForm.cancelBtn.addEventListener('click', ()=>{
        changeMainDiv.remove();
        document.body.append(deleteModal(data.id));
    });

    getForm.modalCloseBtn.addEventListener('click', ()=> {
        changeMainDiv.remove();
    })
    
    for (const  value of  Object.values(data.contacts)) {
        const createCont = createContact();
        createCont.contactsSelect.value = value.type;
        createCont.newContactInput.value = value.value;
        createCont.newContactBlock.append(createCont.contactsSelect, createCont.newContactInput, createCont.deleteContactBtn);
        getForm.contactBlock.append(createCont.newContactBlock);
      }
      

    getForm.saveBtn.addEventListener('click', async ()=> {
        let contacts = [];
        let clientObj = {};
        console.log(data, 'THIS IS ID')
        let contactType = document.querySelectorAll('.contacts__select');
        let contactInput = document.querySelectorAll('.contacts__input');
 

        for (let i = 0; i < contactType.length; i++) {
            contacts.push({
                type: contactType[i].value,
                value:contactInput[i].value
            })
        }

        clientObj.name = getForm.inputName.value;
        clientObj.surname = getForm.surNameInput.value;
        clientObj.lastName = getForm.inputLastName.value;
        clientObj.contacts = contacts;
        console.log(clientObj, 'THIS New OBJ');
        await changeClientData(clientObj, "PATCH", data._id);
        changeMainDiv.remove();
    });

    getForm.modalHeading.append(changeMainGetId);
    changeMainContent.append(getForm.modalHeading, getForm.modalForm);
    
    changeMainDiv.append(changeMainContent);

    return {changeMainDiv, changeMainContent}
}