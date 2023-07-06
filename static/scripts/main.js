let count = parseInt(document.querySelector("#pop").textContent);

function changeImage(src) {
    document.querySelector("img").src = "static/images/" + src + ".png";
}

function update() {
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'update', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onload = function () {
        console.log(this.responseText);
    };
    xhr.send(`count=${count}`);
}

document.body.onmousedown = function () {
    count += 1;
    document.querySelector("#pop").textContent = count;
    update();
    changeImage("unko_gorilla");
}
document.body.onmouseup = function () {
    changeImage("gorilla_banana");
}

