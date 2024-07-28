let aboutLoad = function() {
    const content = document.querySelector('#content');
    const about = document.createElement('div');
    about.classList.add('about');

    const mission = document.createElement('div');
    const address =  document.createElement('div');
    const contact =   document.createElement('div');

    const missionHeader = document.createElement('h2');
    const addressHeader = document.createElement('h2');
    const contactHeader = document.createElement('h2');

    missionHeader.textContent = "Mission";
    addressHeader.textContent = "Address";
    contactHeader.textContent = "Contact";

    const missionLi = document.createElement('li');
    missionLi.textContent = "At Sweet Scoop Ice Cream, our mission is to bring joy to every scoop. We believe that ice cream is more than just a treat; it's a moment of happiness, a burst of flavor, and a timeless tradition. Our goal is to create an unforgettable experience for our customers by offering the finest, handcrafted ice cream made from the highest quality ingredients.";

    const addressLi_1 = document.createElement('li');
    addressLi_1.textContent = "Scoops of Joy Ice Cream Shop";

    const addressLi_2 = document.createElement('li');
    addressLi_2.textContent = "1234 Sweet Treats Lane";

    const addressLi_3 = document.createElement('li');
    addressLi_3.textContent = "Flavorville, CA 90210."


    const contactLi_1 = document.createElement('li');
    contactLi_1.textContent = "Kiryu Sento: 5555-5444 ";

    const contactLi_2 = document.createElement('li');
    contactLi_2.textContent = "E-mail: scoopicecream@gmail.com";


    contact.append(contactHeader);
    mission.append(missionHeader);
    address.append(addressHeader);

    mission.append(missionLi);
    address.append(addressLi_1);
    address.append(addressLi_2);
    address.append(addressLi_3);
    contact.append(contactLi_1);
    contact.append(contactLi_2);
    about.append(mission);
    about.append(address);
    about.append(contact);

    content.append(about);
}

export default aboutLoad;