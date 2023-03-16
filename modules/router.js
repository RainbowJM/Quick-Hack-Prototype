import { owner } from "./api.js";

const routerView = document.querySelector("main");

export function onRouteChanged() {
    const hash = window.location.hash;

    if (!(routerView instanceof HTMLElement)) {
        throw new ReferenceError("No router view element available for rendering");
    }

    switch (hash) {
        case '#about':
            about();
            break;
        case "#home":
            home();
            break;
        default:
            notFound();
            break;
    }
}

function about() {
    routerView.innerHTML = `<section id="about">
                                <h2>Jevona Magdalena</h2>
                                <div></div>
                            </section>`;

    const h1 = document.querySelector("div");
    h1.innerHTML = owner[0].owner

    console.log(owner);
}

function home() {
    window.location = "index.html"
}

function notFound() {
    routerView.innerHTML = "<h1>404 - Page Not Found</h1>";
}