import { editAlbum, getSingleAlbumById } from '../api/data.js';
import { html } from '../lib.js';
import { createSubmitHandler } from '../util.js';

// const editTemplate = (pet, onEdit) => html`
// <section id="editPage">
//     <form @submit=${onEdit} class="editForm">
//         <img src="./images/editpage-dog.jpg">
//         <div>
//             <h2>Edit PetPal</h2>
//             <div class="name">
//                 <label for="name">Name:</label>
//                 <input name="name" id="name" type="text" .value=${pet.name}>
//             </div>
//             <div class="breed">
//                 <label for="breed">Breed:</label>
//                 <input name="breed" id="breed" type="text" .value=${pet.breed}>
//             </div>
//             <div class="Age">
//                 <label for="age">Age:</label>
//                 <input name="age" id="age" type="text" .value=${pet.age}>
//             </div>
//             <div class="weight">
//                 <label for="weight">Weight:</label>
//                 <input name="weight" id="weight" type="text" .value=${pet.weight}>
//             </div>
//             <div class="image">
//                 <label for="image">Image:</label>
//                 <input name="image" id="image" type="text" .value=${pet.image}>
//             </div>
//             <button class="btn" type="submit">Edit Pet</button>
//         </div>
//     </form>
// </section>`;

// export async function showEdit(ctx) {
//     const id = ctx.params.id;
//     const pet = await getById(id);

//     ctx.render(editTemplate(pet, createSubmitHandler(onEdit)));

//     async function onEdit({ name, breed, age, weight, image }) {
//         if (name == '' || breed == '' || age == '' || weight == '' || image == '') {
//             return alert('All fields are required!');
//         }

//         await editPet(id, {
//             name,
//             breed,
//             age,
//             weight,
//             image
//         });

//         ctx.page.redirect('/catalog/' + id);
//     }
// }

const editTemplate = (album, onEdit) => html`
        <section class="editPage">
            <form @submit=${onEdit}>
                <fieldset>
                    <legend>Edit Album</legend>
        
                    <div class="container">
                        <label for="name" class="vhide">Album name</label>
                        <input id="name" name="name" class="name" type="text" .value=${album.name}>
        
                        <label for="imgUrl" class="vhide">Image Url</label>
                        <input id="imgUrl" name="imgUrl" class="imgUrl" type="text" .value=${album.imgUrl}>
        
                        <label for="price" class="vhide">Price</label>
                        <input id="price" name="price" class="price" type="text" .value=${album.price}>
        
                        <label for="releaseDate" class="vhide">Release date</label>
                        <input id="releaseDate" name="releaseDate" class="releaseDate" type="text" .value=${album.releaseDate}>
        
                        <label for="artist" class="vhide">Artist</label>
                        <input id="artist" name="artist" class="artist" type="text" .value=${album.artist}>
        
                        <label for="genre" class="vhide">Genre</label>
                        <input id="genre" name="genre" class="genre" type="text" .value=${album.genre}>
        
                        <label for="description" class="vhide">Description</label>
                        <textarea name="description" class="description" rows="10" cols="10">${album.description}</textarea>
        
                        <button class="edit-album" type="submit">Edit Album</button>
                    </div>
                </fieldset>
            </form>
        </section>`;

export async function showEdit(ctx) {
    const id = ctx.params.id;
    const album = await getSingleAlbumById(id);

    ctx.render(editTemplate(album, createSubmitHandler(onEdit)));

    async function onEdit({ name, imgUrl, price, releaseDate, artist, genre, description }) {
        if (name == '' || imgUrl == '' || price == '' || releaseDate == '' || artist == '' || genre == '' || description == '') {
            return alert('All fields are required!');
        }
        
        await editAlbum(id, {
            name,
            imgUrl,
            price,
            releaseDate,
            artist,
            genre,
            description
        });

        ctx.page.redirect('/details/' + id);
    }
}