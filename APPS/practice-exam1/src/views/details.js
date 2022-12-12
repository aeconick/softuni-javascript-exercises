import { deleteById, getById } from '../api/data.js';
import { html, nothing } from '../lib.js';

// const detailsTemplate = (pet, donations, hasUser, canDonate, isOwner, onDelete, onDonate) => html`
// <section id="detailsPage">
//     <div class="details">
//         <div class="animalPic">
//             <img src=${pet.image}">
//         </div>
//         <div>
//             <div class="animalInfo">
//                 <h1>Name: ${pet.name}</h1>
//                 <h3>Breed: ${pet.breed}</h3>
//                 <h4>Age: ${pet.age}</h4>
//                 <h4>Weight: ${pet.weight}</h4>
//                 <h4 class="donation">Donation: ${donations}$</h4>
//             </div>
//             ${petControls(pet, donations, hasUser, canDonate, isOwner, onDelete, onDonate)}
//         </div>
//     </div>
// </section>`;

// function petControls(pet, donations, hasUser, canDonate, isOwner, onDelete, onDonate) {
//     if (hasUser == false) {
//         return nothing;
//     }
//     if (canDonate) {
//         return html`
//         <div class="actionBtn">
//             <a @click=${onDonate} href="javascript:void(0)" class="donate">Donate</a>
//         </div>`;
//     }
//     if (isOwner) {
//         return html`
//         <div class="actionBtn">
//             <a href="/edit/${pet._id}" class="edit">Edit</a>
//             <a @click=${onDelete} href="javascript:void(0)" class="remove">Delete</a>
//         </div>`;
//     }
// }

// export async function showDetails(ctx) {
//     const id = ctx.params.id;

//     const requests = [
//         getById(id),
//         getDonations(id),
//     ];

//     const hasUser = Boolean(ctx.user);

//     if (hasUser) {
//         requests.push(getOwnDonation(id, ctx.user._id));
//     }
//     const [pet, donations, hasDonation] = await Promise.all(requests);

//     const isOwner = hasUser && ctx.user._id == pet._ownerId;
//     const canDonate = !isOwner && hasDonation == 0;

//     ctx.render(detailsTemplate(pet, donations * 100, hasUser, canDonate, isOwner, onDelete, onDonate));

//     async function onDelete() {
//         const choice = confirm('Are you sure you want to delete this pet?');
//         if (choice) {
//             await deleteById(id);
//             ctx.page.redirect('/');
//         }
//     }

//     async function onDonate() {
//         await donate(id);
//         ctx.page.redirect('/catalog/' + id);
//     }
// }

const detailsTemplate = (offer, isOwner, notAuthor,onDelete) => html`<section id="details">
    <div id="details-wrapper">
        <img id="details-img" src=${offer.imageUrl} alt="example1" />
        <p id="details-title">${offer.title}</p>
        <p id="details-category">
            Category: <span id="categories">${offer.category}</span>
        </p>
        <p id="details-salary">
            Salary: <span id="salary-number">${offer.salary}</span>
        </p>
        <div id="info-wrapper">
            <div id="details-description">
                <h4>Description</h4>
                <span>${offer.description}</span>
            </div>
            <div id="details-requirements">
                <h4>Requirements</h4>
                <span>${offer.requirements}</span>
            </div>
        </div>
        <p>Applications: <strong id="applications">1</strong></p>

        <div id="action-buttons">
            ${isOwner ? html`<a href="/edit/${offer._id}" id="edit-btn">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>`: nothing}
            ${notAuthor ? html`<a href="" id="apply-btn">Apply</a>` : nothing}
        </div>
    </div>
</section>`;

export async function showDetails(ctx) {
    const id = ctx.params.id;

    const offer = await getById(id);

    const hasUser = Boolean(ctx.user);
    const ownerId = ctx.user._id;

    const isOwner = offer._ownerId == ownerId;
    const notAuthor = hasUser && !isOwner;

    ctx.render(detailsTemplate(offer, isOwner, notAuthor,onDelete));

    async function onDelete() {
        const choice = confirm('Are you sure you want to delete this pet?');
        if (choice) {
            await deleteById(id);
            ctx.page.redirect('/catalog');
        }
    }
}