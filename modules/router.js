import { fetchUser } from "./api.js"
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
    let hi = fetchUser();
    routerView.innerHTML = `<section id="about">
                                <h1></h1>
                                <div></div>
                            </section>`;

    console.log(hi);
}

function home() {
    window.location = "index.html"
}

function notFound() {
    routerView.innerHTML = "<h1>404 - Page Not Found</h1>";
}