import { info, updatedGeneralData} from "./api.js";

const mainView = document.querySelector("main");
let counter = 1;

export function modifyMain() {
    for (let i = 0; i < info.length; i++) {
        mainView.innerHTML += `<section>
                                <h1></h1>
                                <div></div>
                                <form>
                                    <input type="checkbox" id="background" value="background">
                                    <label for="background">Background</label>
                                </form>
                            </section>`
    }
}

export function updateMain() {
    for (let i = 0; i < info.length; i++) {
        let section = document.querySelector("main section:nth-of-type("+counter+") h1")
        
        section.innerHTML = updatedGeneralData[i].name
        counterUp();
    }
}

function counterUp() {
    counter++
}