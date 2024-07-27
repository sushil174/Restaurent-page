import _1 from './images/choco-cake.webp';
import _2 from './images/cream-cake.webp';
import _3 from './images/lemon-ice.webp';
import _4 from './images/muffins.webp';
import _5 from './images/tartufo.webp';

const menuLoad = function() {
    const cards_name = [
        {   
            img: _5,
            name: "Tartufo",
            discription: "Tartufo is a classic Italian dessert that you can make at home. It requires some patience as there is freezing time involved. Rolling the tartufos in pistachio and cookie crumbs is extra delicious. "
        },

        {
            img: _1,
            name: "Easy Chocolate Fudge Cake",
            discription: "My mother has been baking this cake for parties for 55 years. People have me make it for every party I go to. It is wonderful and very easy."
        },

        {
            img: _4,
            name: "Banana Oatmeal Muffins",
            discription: "These healthy oatmeal banana nut muffins are sure to give you energy that will last an entire day."
        },

        {
            img: _2,
            name: "Red, White, and Blue Ice-Cream Cake",
            discription: "Celebrate the 4th of July with a sweet salute! This patriotic spin on ice-cream cake is the coolest dessert of the summer!"
        },


        {
            img: _3,
            name: "Lemon Ice",
            discription: "A nice and easy, healthy option for those with ice-cream machines and a little extra time. Deliciously creamy yet also light and refreshing!"
        }

    ];

    const content = document.querySelector('#content');
    const main = document.querySelector('div');
    main.classList.add('menu');
    for(let i=0;i<cards_name.length;i++){
        const card = document.createElement('div');
        card.classList.add('.card')
        const name = document.createElement('p');
        const info = document.createElement('p');
        name.textContent = cards_name[i].name;
        info.textContent = cards_name[i].discription;
        const img = new Image();
        img.src = cards_name[i].img;
        card.append(name);
        card.append(img);
        card.append(info);
        main.append(card)
    }
    content.append(main)
}

export default menuLoad;