import { html } from '../lib.js'

// const homeTemplate = () => html`
// <section class="welcome-content">
//     <article class="welcome-content-text">
//         <h1>We Care</h1>
//         <h1 class="bold-welcome">Your Pets</h1>
//         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
//     </article>
//     <article class="welcome-content-image">
//         <img src="./images/header-dog.png" alt="dog">
//     </article>
// </section>`;

// export function showHome(ctx){
//     ctx.render(homeTemplate());
// }

const homeTemplate = () => html`
<section id="welcomePage">
    <div id="welcome-message">
        <h1>Welcome to</h1>
        <h1>My Music Application!</h1>
    </div>

    <div class="music-img">
        <img src="./images/musicIcons.webp">
    </div>
</section>`;

export function showHome(ctx){
    ctx.render(homeTemplate());
}