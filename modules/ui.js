import { info } from "./api.js";

const mainView = document.querySelector("main");

export function modifyMain() {
    for (let i = 0; i < info.length; i++) {
        mainView.innerHTML += `<section>
                                <div></div>
                                <form>
                                    <input type="checkbox" id="background" value="background">
                                    <label for="background">Background</label>
                                </form>
                            </section>`

    }
}