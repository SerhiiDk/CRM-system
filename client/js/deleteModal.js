import { deleteClient } from "./clientsAPI.js";
import { closeModalBtn} from "./svg.js";

export const deleteModal = (cliendId)=> {
    console.log(cliendId, 'THIS IS CLIENT ID');
    const deleteMainDiv = document.createElement('div');
    const deleteMainContent = document.createElement('div');
    const deleteHeading = document.createElement('h3');
    const deleteInfo = document.createElement('p');
    const deleteBtnAccept = document.createElement('button');
    const deleteBtnCanceled = document.createElement('button');
    const deleteBtnClosed = document.createElement('button');
    const deleteBtnClosedSvg = document.createElement('span');
    

    // Contents

    deleteHeading.textContent = "Delete Client";
    deleteInfo.textContent = "Do you really want to delete the client?";
    deleteBtnAccept.textContent = "Delete";
    deleteBtnAccept.type = "submit";
    deleteBtnCanceled.textContent = "Cancel";
    deleteBtnClosedSvg.innerHTML = closeModalBtn;

    // Class Lists

    // const test = createItemTable();
    deleteMainDiv.classList.add('common-modal','modal-active');
    deleteMainContent.classList.add('common-modal__content', 'modal-active', 'modal-delete');
    deleteBtnClosed.classList.add('modal__btn--close');
    deleteHeading.classList.add('delete-modal__heading');
    deleteInfo.classList.add('delete-modal__info');
    deleteBtnAccept.classList.add('delete-modal__btn--delete');
    deleteBtnCanceled.classList.add('modal__btn--cancel');


    deleteBtnClosed.addEventListener('click',() => {

        deleteMainDiv.remove();
    });

    document.addEventListener('click', (event)=> {
        if(event.target == deleteMainDiv){
            deleteMainDiv.remove();
        }
    });
    
    deleteBtnAccept.addEventListener('click', async (e)=>{
        location.reload();
        await deleteClient("DELETE", cliendId);
        deleteMainDiv.remove();
    })
    deleteBtnCanceled.addEventListener('click', ()=>{
        deleteMainDiv.remove();
    })

    // Appned to content

    deleteBtnClosed.append(deleteBtnClosedSvg);
    deleteMainContent.append(deleteHeading,deleteBtnClosed, deleteInfo, deleteBtnAccept,deleteBtnCanceled);
    deleteMainDiv.append(deleteMainContent);
    
    return deleteMainDiv;

}