import { modifyMain } from "./ui.js";

const url = "https://api.github.com/users/RainbowJM/repos";
export let info;

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

        // setData(counter);
    })
    .catch((error) => {
        alert(error)
        // errorHandler();
    });
}