let aboutLoad = function() {
    const content = document.querySelector('#content');
    const mission = document.createElement('div');
    const address =  document.createElement('div');
    const contact =   document.createElement('div');

    const missionHeader = document.createElement('h2');
    const addressHeader = document.createElement('h2');
    const contactHeader = document.createElement('h2');

    

    missionHeader.textContent = "Mission";
    addressHeader.textContent = "Address";
    contactHeader.textContent = "Contact";

    contact.append(contactHeader);
    mission.append(missionHeader);
    address.append(addressHeader)

    mission.textContent = "In an time where the needs and desires of the individual must be protected and fulfilled, although the current knowledge about eating habits and it's impacts in the matters of health and life quality says that beeing undisciplined is bad, we aim at serving what one wants!"
    address.textContent = "The Cholesterol Empire";
    address.textContent += "Almost The Cofin Street 5432, Yougettingthere \n";
    address.textContent += "The Federated States of Sweetness."
    contact.textContent = "McLovin \nFaterson: 5555-5444 ";
    contact.textContent += "E-mail: eatuntiltheend@realemail.com";

    content.append(mission);
    content.append(address);
    content.append(contact);
}

export default aboutLoad;