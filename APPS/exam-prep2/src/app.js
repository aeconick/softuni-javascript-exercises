import { page, render } from './lib.js'
import { getUserData } from './util.js';
import { showCatalog } from './views/catalog.js';
import { showCreate } from './views/create.js';
import { showDetails } from './views/details.js';
import { showEdit } from './views/edit.js';
import { showHome } from './views/home.js';
import { showLogin } from './views/login.js';
import { updateNav } from './views/nav.js';
import { showRegister } from './views/register.js';

//maybe the container will have different id???
const main = document.getElementById('main-content');

page(decorateContext);
page('/', showHome);
page('/home', showHome);
page('/catalog', showCatalog);
page('/search', ()=>console.log('search'));
page('/login', showLogin);
page('/register', showRegister);
page('/create', showCreate);
page('/details/:id', showDetails);
page('/edit/:id', showEdit);

updateNav();
page.start();

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



