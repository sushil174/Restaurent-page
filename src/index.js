import homeLoad from './home.js';
import menuLoad from './menu.js';
import aboutLoad from './about.js';
import './style.css'

let main = (function() {
    const content = document.querySelector("#content");
    const buttons = document.querySelectorAll('button');
    homeLoad()
    buttons[0].setAttribute('style','font-weight: 1000;')

    let removeAll = function() {
        while(content.firstChild){
            content.removeChild(content.lastChild)
        }
    }

    let tabs = function(e) {
        buttons[0].setAttribute('style','font-weight: 400;')
        buttons[1].setAttribute('style','font-weight: 400;')
        buttons[2].setAttribute('style','font-weight: 400;')
        e.target.setAttribute('style','font-weight: 1000;')
    }

    buttons[0].addEventListener('click', (e) => {
        removeAll();
        homeLoad();
        tabs(e);
    })
 
    buttons[1].addEventListener('click', (e) => {
        removeAll();
        menuLoad();
        tabs(e);
    })

    buttons[2].addEventListener('click', (e) => {
        removeAll();
        aboutLoad();
        tabs(e);
    })
})();
