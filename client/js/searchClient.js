import { searchClientData, getClients } from "./clientsAPI.js";
import { createItemTable } from "./createItem.js";

export const searchClients = async () => {
    const getInputValue = document.querySelector('.header__form-input');
    const tbody = document.querySelector('.clients__tbody');
    const getClient = await searchClientData(getInputValue.value);

    // console.log(getClient, "THIS IS FROM GET");
    const getAllClients = await getClients();
    tbody.innerHTML ="";
    getClient.forEach(element => {
        tbody.append(createItemTable(element));
    });
 

    


}