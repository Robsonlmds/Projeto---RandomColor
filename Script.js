document.addEventListener("keyup", function (event) {
    if (event.keyCode === 32) {

        changeColor();
    }
});

function changeColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    Color.innerHTML = "#" + randomColor;

    const rgbColor = hexToRgb("#" + randomColor);
    document.getElementById("RgbColor").innerHTML = `RGB: ${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}`;

    setBg();
};

function hexToRgb(hex) {
    const bigint = parseInt(hex.substring(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    return { r: r, g: g, b: b };
};