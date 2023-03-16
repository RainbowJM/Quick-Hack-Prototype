const loader = document.querySelector(".loading");

export function errorHandler() {

}

export function loading(){
    loader.classList.add("display");
}

export function hideLoading(){
    loader.classList.remove("display");
}