import homeLoad from './home.js';
import menuLoad from './menu.js';
import aboutLoad from './about.js';


let main = (function() {
    homeLoad()
    const content = document.querySelector("#content");
    const buttons = document.querySelectorAll('button');

    let removeAll = function() {
        while(content.firstChild){
            content.removeChild(content.lastChild)
        }
    }

    buttons[0].addEventListener('click', () => {
        removeAll();
        homeLoad();
    })
 
    buttons[1].addEventListener('click', () => {
        removeAll();
        menuLoad()
    })

    buttons[2].addEventListener('click', () => {
        removeAll();
        aboutLoad()
    })
})();
