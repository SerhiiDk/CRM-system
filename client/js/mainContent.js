import { addNewClientModal } from './addNewClient.js';
import { sortBySurname, sortById } from './sortData.js';
import {svgAddNewUser} from './svg.js';



export const createMainContent = () => {
    const section  = document.createElement('section');
    const container  = document.createElement('container');
    const main  = document.createElement('main');
    const mainHeading  = document.createElement('h1');
    const sortHeading  = document.createElement('thead');
    const theadTr  = document.createElement('tr');
    const sortHeadingId  = document.createElement('td');
    const sortHeadingName  = document.createElement('td');
    const sortHeadingDate  = document.createElement('td');
    const sortHeadingChange  = document.createElement('td');
    const sortHeadingContacts  = document.createElement('td');
    const sortHeadingActions  = document.createElement('td');
    const sortHeadingSpan  = document.createElement('span');
    const addNewBtn  = document.createElement('button');
    const addNewBtnSvg  = document.createElement('span');
    const tableContent  = document.createElement('div');
    const table  = document.createElement('table');
    const tbody  = document.createElement('tbody');
    const createTime  = document.createElement('span');
    const editTime  = document.createElement('span');
    
    // add tbody content

    // CLASSLISTS
    section.classList.add('section__clients')
    container.classList.add('container');
    mainHeading.classList.add('clients__heading');
    tbody.classList.add('clients__tbody', 'tbody__content');
    table.classList.add('clients__table');
    sortHeading.classList.add('clients__sortHeading', 'display-info');
    sortHeadingId.classList.add('display-info__item', 'item-id', 'sort-up', 'press-id');
    sortHeadingName.classList.add('display-info__item', 'item-name', 'sort-down-name');
    sortHeadingActions.classList.add('display-info__item', 'item-action', 'sort-down');
    sortHeadingDate.classList.add('display-info__item', 'item-create', 'sort-down-create');
    sortHeadingChange.classList.add('display-info__item', 'item-change', 'sort-down-change');
    sortHeadingContacts.classList.add('display-info__item','item-contacts');
    sortHeadingActions.classList.add('display-info__item','item-actions');
    sortHeadingSpan.classList.add('display-info__sorting');
    addNewBtn.classList.add('clients__btn');
    addNewBtnSvg.classList.add('clients__btn-svg');
    tableContent.classList.add('clients__content');
    main.classList.add('main');

    theadTr.classList.add('clients__theadTr');
    createTime.classList.add('clients__create-time');
    editTime.classList.add('clients__edit-time');

    //TEXT

    mainHeading.textContent= "Clients";
    addNewBtn.textContent = "Add New User"
    sortHeadingId.textContent = "ID";
    sortHeadingName.textContent = "Full Name";
    sortHeadingDate.textContent = "Date & Time";
    sortHeadingChange.textContent = "Last Changes";
    sortHeadingActions.textContent = "Actions";
    sortHeadingContacts.textContent = "Contacts";
    addNewBtnSvg.innerHTML=svgAddNewUser;
    sortHeadingSpan.textContent = "A-Z";

    // Add a new contact to form

    addNewBtn.addEventListener('click', ()=> {
        document.body.append(addNewClientModal());
    });


    sortHeadingId.addEventListener('click', (e)=> {
        sortById();
    })

    sortHeadingName.addEventListener('click', (e)=>{
        sortBySurname();
    })



    main.append(section);
    section.append(container);
    sortHeadingName.appendChild(sortHeadingSpan);
    sortHeadingDate.append(createTime);
    sortHeadingChange.append(editTime); 
    theadTr.append(
        sortHeadingId, 
        sortHeadingName,
        sortHeadingDate,
        sortHeadingChange,
        sortHeadingContacts,
        sortHeadingActions
    );
    sortHeading.append(theadTr);
    tableContent.append(table);
    // tbody.append(tableData);    
    table.append(sortHeading, tbody);
    addNewBtn.append(addNewBtnSvg);
    container.append(mainHeading, tableContent, addNewBtn);
    

    return {
        main,
        table,
        tbody
    }
}