import { deleteById, displayLikeButton, getById, getLikesById, likeAlbum } from '../api/data.js';
import { html, nothing } from '../lib.js';

const detailsTemplate = (album, isOwner, notAuthor, onDelete, notLiked,onLike,totalLikes) => html`<section id="details">
    <div id="details-wrapper">
        <p id="details-title">Album Details</p>
        <div id="img-wrapper">
            <img src=${album.imageUrl} alt="example1" />
        </div>
        <div id="info-wrapper">
            <p><strong>Band:</strong><span id="details-singer">${album.singer}</span></p>
            <p>
                <strong>Album name:</strong><span id="details-album">${album.album}</span>
            </p>
            <p><strong>Release date:</strong><span id="details-release">${album.release}</span></p>
            <p><strong>Label:</strong><span id="details-label">${album.label}</span></p>
            <p><strong>Sales:</strong><span id="details-sales">${album.sales}</span></p>
        </div>
        <div id="likes">Likes: <span id="likes-count">${totalLikes}</span></div>
        <div id="action-buttons">
            ${notAuthor && notLiked ? html`<a @click=${onLike} href="javascript:void(0)" id="like-btn">Like</a>` : nothing}
            ${isOwner
        ? html`<a href="/edit/${album._id}" id="edit-btn">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>` : nothing}
        </div>
    </div>
</section>`;

export async function showDetails(ctx) {
    const id = ctx.params.id;

    const album = await getById(id);

    const hasUser = Boolean(ctx.user);
    //const ownerId = ctx.user._id;
    let ownerId = null;
    if (ctx.user) {
        ownerId = ctx.user._id;
    }

    const isOwner = album._ownerId == ownerId;
    const notAuthor = hasUser && !isOwner;

    const notLiked = !Boolean(await displayLikeButton(album._id, ownerId));

    const totalLikes = await getLikesById(album._id);

    ctx.render(detailsTemplate(album, isOwner, notAuthor, onDelete, notLiked,onLike,totalLikes));

    async function onLike(){
        await likeAlbum({albumId:album._id});
        showDetails(ctx);
    }

    async function onDelete() {
        const choice = confirm('Are you sure you want to delete this album?');
        if (choice) {
            await deleteById(id);
            ctx.page.redirect('/catalog');
        }
    }
}