import { fbIconContact, mailIconContact, otherIconContact, telIconContact, vkIconContact } from "./svg.js";

export const contactItems = (contacts)=> {

    const contactIcon = document.createElement('div');

    contacts.forEach(elem => {            
        const itemContact = document.createElement('a');
        itemContact.classList.add('tbody__contact-item');
        itemContact.setAttribute('data-toggle', 'tooltip');

        if (elem.type === "Telefon" || elem.type === "Extra.Telefon") {
            itemContact.innerHTML = telIconContact;
            itemContact.title = elem.value;
            itemContact.href = "tel:"+elem.value;
            itemContact.classList.add('tel-icon');
            contactIcon.append(itemContact);
        }
        else if (elem.type === "Email") {
            itemContact.innerHTML = mailIconContact;
            itemContact.title = elem.value;
            itemContact.href = "mailto:"+elem.value;
            itemContact.classList.add('mail-icon');
            contactIcon.append(itemContact);
        }
        else if (elem.type === "Facebook") {
            itemContact.innerHTML = fbIconContact;
            itemContact.title = elem.value;
            itemContact.classList.add('fb-icon');
            contactIcon.append(itemContact);
        }
        else if (elem.type === "Vk") {
            itemContact.innerHTML = vkIconContact;
            itemContact.title = elem.value;
            contactIcon.append(itemContact);
        }
        else if (elem.type === "Other") {
            itemContact.innerHTML = otherIconContact;
            itemContact.title = elem.value;
            contactIcon.append(itemContact);
        }
    });


    $(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip();   
    });

    // console.log(contactIcon);
    return contactIcon;
} 

