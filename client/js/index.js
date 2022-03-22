import {createHeader} from './header.js';
import {createMainContent} from './mainContent.js';
import {getClients} from './clientsAPI.js';
import { createItemTable } from './createItem.js';

const createApp = async () => {
    const clients =  await getClients();
    const header = createHeader();
    const mainSection = createMainContent();
    document.body.append(header,mainSection.main);
    
    for (const client of clients) {
        document.querySelector('.clients__tbody').append(createItemTable(client))
    }
}
createApp();