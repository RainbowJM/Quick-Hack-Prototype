import { modifyMain, modifySection, updateMain } from "./ui.js";
import { cleanGeneralData, cleanOwnerData } from "./render.js"
import { loading, hideLoading, errorHandler } from "./state.js";

let url = "https://api.github.com/users/RainbowJM/repos";
export let info;
export let updatedGeneralData;
export let repo;
export let owner;

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
        // modifySection();

        owner = info.map(cleanOwnerData);
        console.log(owner);
        updatedGeneralData = info.map(cleanGeneralData)
        console.log(updatedGeneralData)

        updateMain();

    })
    .catch((error) => {
        alert(error)
        errorHandler();
    });
}

export function fetchReadMe(repoName){
    // console.log(repoName)
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


export function fetchUser(){
    let a = "hello";
    return a;
}
