import { modifyMain, updateMain } from "./ui.js";
import { cleanGeneralData } from "./render.js"
import { loading, hideLoading, errorHandler } from "./state.js";

let url = "https://api.github.com/users/RainbowJM/repos";
export let info;
export let updatedGeneralData;
export let repo;

export function fetchData() {
    loading();
    fetch(url)
    .then((r) => {
        if (r.status >= 200 && r.status <= 299) {
            return r.json();
        } else {
            throw Error(r.statusText);
        }
    })
    .then((json) => {
        hideLoading();

        info = json;

        modifyMain();
        updatedGeneralData = info.map(cleanGeneralData)
        updateMain();

    })
    .catch((error) => {
        alert(error)
        errorHandler();
    });
}

export function fetchReadMe(repoName){
    console.log(repoName)
    url = `https://api.github.com/repos/RainbowJM/${repoName}/readme`;
    fetch(url)
    .then((r) => {
        if (r.status >= 200 && r.status <= 299) {
            return r.json();
        } else {
            throw Error(r.statusText);
        }
    })
    .then((json) => {
        hideLoading();

        repo = json;

        // console.log(repo)
        // modifyMain();
        // console.log(info)
        // updatedGeneralData = info.map(cleanGeneralData)
        // console.log(updatedGeneralData)
        // updateMain();
    })
    .catch((error) => {
        alert(error)
        errorHandler();
    });
}

