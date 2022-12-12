import { getAll } from '../api/data.js';
import { html, nothing } from '../lib.js'

// const catalogTemplate = (pets) => html`
// <section id="dashboard">
//     <h2 class="dashboard-title">Services for every animal</h2>
//     <div class="animals-dashboard">
//         ${pets.length == 0 ? html`<div>
//             <p class="no-pets">No pets in dashboard</p>
//         </div>`: pets.map(petCardTemplate)}
//     </div>
// </section>`;

// const petCardTemplate = (pet) => html`
//         <div class="animals-board">
//             <article class="service-img">
//                 <img class="animal-image-cover" src=${pet.image}>
//             </article>
//             <h2 class="name">${pet.name}</h2>
//             <h3 class="breed">${pet.breed}</h3>
//             <div class="action">
//                 <a class="btn" href="/catalog/${pet._id}">Details</a>
//             </div>
//         </div>`;

// export async function showCatalog(ctx) {
//     const pets = await getAll();
//     ctx.render(catalogTemplate(pets));
// }

const catalogTemplate = (albums, hasUser) => html`
        <section id="catalogPage">
            <h1>All Albums</h1>
            ${albums.length > 0 ?
            albums.map(album => albumTemplate(album,hasUser))
            : html`<p>No Albums in Catalog!</p>`}
        </section>`;

const albumTemplate = (album, hasUser) => html`
        <div class="card-box">
            <img src=${album.imgUrl}>
            <div>
                <div class="text-center">
                    <p class="name">Name: ${album.name}</p>
                    <p class="artist">Artist: ${album.artist}</p>
                    <p class="genre">Genre: ${album.genre}</p>
                    <p class="price">Price: $${album.price}</p>
                    <p class="date">Release Date: ${album.releaseDate}</p>
                </div>
                <div class="btn-group">
                    ${hasUser ? html`<a href="/details/${album._id}" id="details">Details</a>` : nothing}
                </div>
            </div>
        </div>`;

export async function showCatalog(ctx) {
    const hasUser = ctx.user;
    const albums = await getAll();
    ctx.render(catalogTemplate(albums, hasUser));
}

