import {changeBtn, deleteBtn, activeDeleteBtn} from './svg.js';
import { deleteModal } from './deleteModal.js';
import {changeClient} from './changeModal.js';
import { contactItems } from './contactItem.js';


export const createItemTable = (data) => {


    const clientBlock = document.createElement('tr');
    const clientId = document.createElement('span');
    const clientFullName = document.createElement('td');
    const clientCreate = document.createElement('td');
    const clientChanged = document.createElement('td');
    const clientCreateTime = document.createElement('span');
    const clientChangedTime = document.createElement('span');
    const clientContacts = document.createElement('td');
    const clientActions = document.createElement('td');
    const actionChanged = document.createElement('button');
    const actionDelete = document.createElement('button');
    const actionChangedSvg = document.createElement('span');
    const actionDeleteSvg = document.createElement('span');
    // const editModalData = changeClient(data);


    // Test Block
    clientId.textContent = data._id.substr(0,6);  
    clientFullName.textContent = data.name +  " " + data.surname + " " + data.lastName;
    clientCreate.textContent = data.createdAt.substr(0, 10) + " ";
    clientCreateTime.textContent = data.createdAt.substr(11, 5);
    clientChanged.textContent = data.updatedAt.substr(0, 10) + " ";
    clientChangedTime.textContent = data.updatedAt.substr(11, 5);
    // clientContacts.textContent = "Cleints Contact";


    actionChanged.textContent = "Change";
    actionDelete.textContent = "Delete";
    actionChangedSvg.innerHTML = changeBtn;
    actionDeleteSvg.innerHTML = deleteBtn;


    // Class lists

    clientBlock.classList.add('tbody__block');
    clientId.classList.add('tbody__id');
    clientFullName.classList.add('tbody__fullName');
    clientCreate.classList.add('tbody__createTime-elem');
    clientChanged.classList.add('tbody__changeTime-elem');
    clientCreateTime.classList.add('tbody__createTime-elem-child');
    clientChangedTime.classList.add('tbody__changeTime-elem-child');
    clientActions.classList.add('tbody__action-elem');
    actionChanged.classList.add('tbody__changeBtn', 'change-active');
    actionDelete.classList.add('tbody__deleteBtn');
    actionChangedSvg.classList.add('tbody__changeBtn--svg');
    actionDeleteSvg.classList.add('tbody__deleteBtn--svg')
    clientContacts.classList.add('tbody__clients-contact')
    // Appends components

    clientContacts.append(contactItems(data.contacts));
    clientCreate.append(clientCreateTime);
    clientChanged.append(clientChangedTime);
    actionChanged.append(actionChangedSvg);
    actionDelete.append(actionDeleteSvg);
    clientActions.append(actionChanged, actionDelete)
    

    // Events Handlers
    actionDelete.addEventListener('click', (e)=> {
        document.body.append(deleteModal(data._id));
    });

    actionChanged.addEventListener('click', (e)=>{
        document.body.append(changeClient(data).changeMainDiv);
    });


    clientBlock.append(
        clientId,
        clientFullName,
        clientCreate,
        clientChanged,
        clientContacts,
        clientActions
    )    

    return clientBlock;



}