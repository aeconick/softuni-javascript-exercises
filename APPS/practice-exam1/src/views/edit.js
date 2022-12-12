import { editById,getById } from '../api/data.js';
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

const editTemplate = (offer, onEdit) => html`<section id="edit">
    <div class="form">
        <h2>Edit Offer</h2>
        <form @submit=${onEdit} class="edit-form">
            <input type="text" name="title" id="job-title" placeholder="Title" .value=${offer.title} />
            <input type="text" name="imageUrl" id="job-logo" placeholder="Company logo url" .value=${offer.imageUrl} />
            <input type="text" name="category" id="job-category" placeholder="Category" .value=${offer.category} />
            <textarea id="job-description" name="description" placeholder="Description" rows="4" cols="50">${offer.description}</textarea>
            <textarea id="job-requirements" name="requirements" placeholder="Requirements" rows="4"
                cols="50">${offer.requirements}</textarea>
            <input type="text" name="salary" id="job-salary" placeholder="Salary" .value=${offer.salary} />

            <button type="submit">post</button>
        </form>
    </div>
</section>`;

export async function showEdit(ctx) {
    const id = ctx.params.id;
    const offer = await getById(id);

    ctx.render(editTemplate(offer, createSubmitHandler(onEdit)));

    async function onEdit({ title, imageUrl, category, description, requirements, salary }) {
        if (title == '' || imageUrl == '' || category == '' || description == '' || requirements == '' || salary == '') {
            return alert('All fields are required!');
        }

        await editById(id, { title, imageUrl, category, description, requirements, salary });

        ctx.page.redirect('/details/' + id);
    }
}