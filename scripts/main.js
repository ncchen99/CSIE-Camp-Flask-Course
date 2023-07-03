function changeImage(src) {
    document.querySelector("img").src = "../images/" + src + ".png";
}

function pop() {
    changeImage("unko_gorilla");
    setTimeout(changeImage, 200, "gorilla_banana");
}

document.querySelector("body").addEventListener("click", pop);

