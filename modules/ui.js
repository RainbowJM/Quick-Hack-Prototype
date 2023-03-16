import { fetchReadMe, info, repo, updatedGeneralData} from "./api.js";

const mainView = document.querySelector("main");
const sectionView = document.querySelector("main section ul")
let counter = 1;
let repoName;

export function modifyMain() {
    for (let i = 0; i < info.length; i++) {
        mainView.innerHTML += `<section>
                                    <h1></h1>
                                    <div></div>
                                    <p></p>
                                    <ul></ul>
                                </section>`;
    }
}
export function modifySection(){
    for (let i = 0; i < info.length; i++) {
        sectionView.innerHTML += `<li><a href="${info}">ReadMe</li>`;
    }
}
export function updateMain() {
    for (let i = 0; i < info.length; i++) {
        let section = document.querySelector("main section:nth-of-type("+counter+") h1");
        let div = document.querySelector("main section:nth-of-type("+counter+") div");
        let p = document.querySelector("main section:nth-of-type("+counter+") p");
        
        section.innerHTML = updatedGeneralData[i].name;
        div.innerHTML = updatedGeneralData[i].issues + " issues"
        p.innerHTML = updatedGeneralData[i].language

        fetchReadMe(updatedGeneralData[i].name)

        counterUp();
    }
}

function counterUp() {
    counter++
}