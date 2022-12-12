import { page, render } from './lib.js'
import { getUserData } from './util.js';
import { showCatalog } from './views/catalog.js';
import { showCreate } from './views/create.js';
import { showDetails } from './views/details.js';
import { showEdit } from './views/edit.js';
import { showHome } from './views/home.js';
import { showLogin } from './views/login.js';
import { updateNav } from './views/nav-logout.js';
import { showRegister } from './views/register.js';

// --INITIAL STEPS--
// 1. delete mocha dependency from package.json
// 2. npm i
// 3.make example.html file
// 3. npm start
// 4. cd server -> node server.js


// --DON'T FORGET--
// 1. to have .js on all imports
// 2. to add <script src="/src/app.js" type="module"></script> to index.html
// 3. refresh!

//maybe the container will have different id???
const main = document.querySelector('main');

page(decorateContext);
page('/', showHome);
page('/catalog', showCatalog);
page('/create', showCreate);
page('/login', showLogin);
page('/register', showRegister);
page('/details/:id', showDetails);
page('/edit/:id',showEdit);


updateNav();
page.start();
//add all of the pages

function decorateContext(ctx, next) {
    ctx.render = renderMain;
    ctx.updateNav = updateNav;

    const user = getUserData();
    if (user) {
        ctx.user = user;
    }

    next();
}

function renderMain(content) {
    render(content, main)
}



