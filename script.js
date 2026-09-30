function openImage(image) {

    let modal = document.getElementById("imageModal");

    let modalImage = document.getElementById("modalImage");

    modal.style.display = "flex";

    modalImage.src = image.src;
}


function closeImage() {

    document.getElementById("imageModal").style.display = "none";

}