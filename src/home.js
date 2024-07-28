import ice from './images/ice.jpg';

const homeLoad = function() {
    const content = document.querySelector('#content');
    const home = document.createElement('div');
    home.classList.add('home');
    const img = document.createElement('img');
    img.classList.add('home-img');
    img.src = ice;
    const heading = document.createElement('p');
    const name = document.createElement('span');
    name.textContent =  "Sweet Scoops Ice Cream";
    const info = document.createElement('p');
    heading.textContent = "Welcome to ";
    heading.append(name)
    info.textContent = "At Sweet Scoops, we believe that every day is a good day for ice cream. Nestled in the heart of town, our shop is a haven for ice cream lovers of all ages. Whether you're looking for a classic cone, a decadent sundae, or a refreshing sorbet, we have something to delight your taste buds.";
    home.append(heading);
    home.append(img);
    home.append(info);
    content.append(home)
}

export default homeLoad;
