import { createItemTable } from "./createItem.js";

export const getClients = async () => {
    const response = await fetch('http://localhost:3000/api/clients', {
        method: "GET"
    });
    const result  = await response.json();
    return result;
    
}

export const createClient = async (client) => {
    const response = await fetch('http://localhost:3000/api/clients', {
        headers: {'Content-type': 'application/json'},
        method: "POST",
        body: JSON.stringify(client)
    });
    const result  = await response.json();
}


export const deleteClient = async(method, id) => {
    const response = await fetch(`http://localhost:3000/api/clients/${id}`, {
        headers: {'Content-type': 'application/json'},
        method,
    });
}

export const changeClientData = async(client, method, id)=> {
    try {
        const response = await fetch(`http://localhost:3000/api/clients/${id}`,{
            headers: {'Content-type': 'application/json'},
            method,
            body: JSON.stringify(client)       
            }
        )
        const getData = await response.json();
        console.log(getData, 'RESULT')
        return getData;
        
    } catch (error) {
        console.log(error);
    }

}


export const searchClientData = async (name) => {
    const response = await fetch(`http://localhost:3000/api/clients?search=${name}`,
    {
        method: "GET"
    });
    const result = await response.json();
    return result;
}



export const sortClientsId = async () => {
    const response = await fetch('http://localhost:3000/api/clients', {
        method: "GET"
    });

    const result  = await response.json();
    return result;
}