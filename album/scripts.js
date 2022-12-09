function displayBurgerModal() {
    let modal = document.querySelector("#modal-dialog-b");
    modal.style.display = "flex";
    //alert("Customize modal appears");
    // document.querySelector(".modal-dialog").style.display = visible;
}

function closeBurgerModal() {
    let modal = document.querySelector("#modal-dialog-b");
    modal.style.display = "none";
}

function displayHotDogModal() {
    let modal = document.querySelector("#modal-dialog-hd");
    modal.style.display = "flex";
}

function closeHotDogModal() {
    let modal = document.querySelector("#modal-dialog-hd");
    modal.style.display = "none";
}

function displaySubModal(){
    let modal = document.querySelector("#modal-dialog-s");
    modal.style.display = "flex";
}

function closeSubModal(){
    let modal = document.querySelector("#modal-dialog-s");
    modal.style.display = "none";
}

function addToCart() {
    alert("Added to cart");
}