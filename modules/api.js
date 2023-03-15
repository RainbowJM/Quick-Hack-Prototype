import { modifyMain, updateMain } from "./ui.js";
import { cleanGeneralData } from "./render.js"

const url = "https://api.github.com/users/RainbowJM/repos";
export let info;
export let updatedGeneralData;

export function fetchData() {
    fetch(url)
    .then((r) => {
        if (r.status >= 200 && r.status <= 299) {
            return r.json();
        } else {
            throw Error(r.statusText);
        }
    })
    .then((json) => {
        // hideLoading();

        info = json;
        modifyMain();
        updatedGeneralData = info.map(cleanGeneralData)
        updateMain();
        console.log(info)
        console.log(updatedGeneralData)
        // setData(counter);
    })
    .catch((error) => {
        alert(error)
        // errorHandler();
    });
}