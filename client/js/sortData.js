import { getClients } from "./clientsAPI.js";
import { createItemTable } from "./createItem.js";

export const sortById = async() => {
    const tbody = document.querySelector('.clients__tbody');
    const sortAllClients = await getClients();


    sortAllClients.sort((a, b) => {
        let nameA = a.id, nameB = b.id;
        if (nameA < nameB){
            return - 1
        }
        if (nameA > nameB) {
            return 1
        }
        return 0

    }) 
    tbody.innerHTML = "";
    sortAllClients.forEach(element => {
        tbody.append(createItemTable(element));
    });
 

}

export const sortBySurname = async () => {
    const tbody = document.querySelector('.clients__tbody');
    const sortAllClients = await getClients();


    sortAllClients.sort((a, b) => {
        let nameA = a.surname.toLowerCase(), nameB = b.surname.toLowerCase();
        if (nameA < nameB){
            return - 1
        }
        if (nameA > nameB) {
            return 1
        }
        return 0

    }) 
    tbody.innerHTML = "";
    sortAllClients.forEach(element => {
        tbody.append(createItemTable(element));
    });
 
}