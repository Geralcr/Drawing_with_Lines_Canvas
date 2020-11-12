var lienzo = document.getElementById('five'); //acceso al elemento con la etiqueta
var ctx = lienzo.getContext('2d'); //acceso al contexto del lienzo con la funciones de dibujar
var numOfLine = document.getElementById('lineByUser');
var buttonOfLine = document.getElementById('OklineByUser');
var sizesOfCanva = document.getElementsByName('sizeCanva');
var kindOfPictureInCanva = document.getElementsByName('kindOfPicture');
buttonOfLine.addEventListener("click", start);
var widthCanva = lienzo.width;
var heightCanva = lienzo.height;

function draw(color, xi, yi, xf, yf) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.moveTo(xi, yi);
    ctx.lineTo(xf, yf);
    ctx.stroke();
    ctx.closePath();
}
function setValuesOfCanva() {
    for (let dataCanva of sizesOfCanva) {
        if (dataCanva.checked) {
            lienzo.width = dataCanva.value;
            lienzo.height = dataCanva.value;
            widthCanva = lienzo.width;
            heightCanva = lienzo.height;
        }
    }
}
function drawFlower() {
    ctx.clearRect(0, 0, widthCanva, heightCanva);
    var lineByFigure = parseInt(numOfLine.value);
    for (var i = 0; i < lineByFigure; i++) {
        xi = (widthCanva / 2) + (((widthCanva / 2) / lineByFigure) * i);
        yi = ((heightCanva / 2) / lineByFigure) * i;
        xf = ((widthCanva / 2) / lineByFigure) * i;
        yf = (heightCanva / 2) + (((heightCanva / 2) / lineByFigure) * i);
        draw("blue", 0, yi, xf, (heightCanva / 2));
        draw("red", xi, (heightCanva / 2), widthCanva, yf);
    }
    for (var i = 0; i < lineByFigure; i++) {
        xi = (widthCanva / 2) + (((widthCanva / 2) / lineByFigure) * i);
        yi = (heightCanva / 2) + (((heightCanva / 2) / lineByFigure) * i);
        xf = (widthCanva / 2) - (((widthCanva / 2) / lineByFigure) * i);
        yf = (heightCanva / 2) - (((heightCanva / 2) / lineByFigure) * i);
        draw("green", 0, yi, xf, (heightCanva / 2));
        draw("yellow", xi, (heightCanva / 2), widthCanva, yf);
        draw("violet", xi, 0, (widthCanva / 2), yf);
        draw("#66CCFF", (widthCanva / 2), yi, xf, heightCanva);
    }
    for (var i = 0; i < lineByFigure; i++) {
        xi = widthCanva - (((widthCanva / 2) / lineByFigure) * i);
        yi = (heightCanva / 2) - (((heightCanva / 2) / lineByFigure) * i);
        xf = (widthCanva / 2) - (((widthCanva / 2) / lineByFigure) * i);
        yf = heightCanva - (((heightCanva / 2) / lineByFigure) * i);
        draw("gray", (widthCanva / 2), yi, xf, 0);
        draw("black", xi, heightCanva, (widthCanva / 2), yf);
    }

}
function drawStar() {
    ctx.clearRect(0, 0, widthCanva, heightCanva);
    var lineByFigure = parseInt(numOfLine.value);
    for (var i = 0; i < lineByFigure; i++) {
        xi = widthCanva - (((widthCanva / 2) / lineByFigure) * i);
        yi = heightCanva - (((heightCanva / 2) / lineByFigure) * i);
        xf = (widthCanva / 2) - (((widthCanva / 2) / lineByFigure) * i);
        yf = (heightCanva / 2) - (((heightCanva / 2) / lineByFigure) * i);
        draw("#36D5B8", (widthCanva / 2), yi, xf, (heightCanva / 2));
        draw("#36D5B8", xi, (heightCanva / 2), (widthCanva / 2), yf);
    }
    for (var i = 0; i < lineByFigure; i++) {
        xi = (widthCanva / 2) + (((widthCanva / 2) / lineByFigure) * i);
        yi = ((heightCanva / 2) / lineByFigure) * i;
        xf = (widthCanva / 2) - (((widthCanva / 2) / lineByFigure) * i);
        yf = heightCanva - (((heightCanva / 2) / lineByFigure) * i);
        draw("#36D5B8", xi, (heightCanva / 2), (widthCanva / 2), yf);
        draw("#36D5B8", (widthCanva / 2), yi, xf, (heightCanva / 2));
    }
    draw("#36D5B8", 0, (heightCanva / 2), (widthCanva / 2), (heightCanva / 2))
}
function drawSuperStar() {
    ctx.clearRect(0, 0, widthCanva, heightCanva);
    var lineByFigure = parseInt(numOfLine.value);
    for (var i = 0; i < lineByFigure; i++) {
        xi = widthCanva - (((widthCanva / 2) / lineByFigure) * i);
        yi = heightCanva - (((heightCanva / 2) / lineByFigure) * i);
        xf = (widthCanva / 2) - (((widthCanva / 2) / lineByFigure) * i);
        yf = (heightCanva / 2) - (((heightCanva / 2) / lineByFigure) * i);
        draw("#36D5B8", (widthCanva / 2), yi, xf, (heightCanva / 2));
        draw("#36D5B8", xi, (heightCanva / 2), (widthCanva / 2), yf);
    }
    for (var i = 0; i < lineByFigure; i++) {
        xi = (widthCanva / 2) + (((widthCanva / 2) / lineByFigure) * i);
        yi = ((heightCanva / 2) / lineByFigure) * i;
        xf = (widthCanva / 2) - (((widthCanva / 2) / lineByFigure) * i);
        yf = heightCanva - (((heightCanva / 2) / lineByFigure) * i);
        draw("#36D5B8", xi, (heightCanva / 2), (widthCanva / 2), yf);
        draw("#36D5B8", (widthCanva / 2), yi, xf, (heightCanva / 2));
    }
    draw("#36D5B8", 0, (heightCanva / 2), (widthCanva/2), (heightCanva / 2))
    for (var i = 0; i < lineByFigure; i++)//abajo e izquierda
    {
        yi = (heightCanva * 0.8) - (((heightCanva / 2) / lineByFigure) * i);
        xi = widthCanva - yi;
        yf = (heightCanva / 2) + (((heightCanva / 2) / lineByFigure) * i);
        xf = yf;
        yileft = (heightCanva * 0.2) + (((heightCanva / 2) / lineByFigure) * i);
        xileft = yileft;
        xfleft = (widthCanva / 2) - (((widthCanva / 2) / lineByFigure) * i);
        yfleft = heightCanva - xfleft;
        draw("#761DC4", xi, yi, xf, yf);
        draw("#761DC4", xileft, yileft, xfleft, yfleft);
        if (yf == (heightCanva * 0.8) && yfleft == (heightCanva * 0.8)) {
            break;
        }
    }
    for (var i = 0; i < lineByFigure; i++)//arriba y derecha
    {
        yiright = (heightCanva * 0.8) - (((heightCanva / 2) / lineByFigure) * i);
        xiright = yiright;
        yi = (heightCanva * 0.2) + (((heightCanva / 2) / lineByFigure) * i);
        xi = yi;
        xf = (widthCanva / 2) + (((widthCanva / 2) / lineByFigure) * i);
        yf = heightCanva - xf;
        draw("#761DC4", xi, yi, xf, yf);
        draw("#761DC4", xiright, yiright, xf, yf);

        if (yf == (heightCanva * 0.2)) {
            break;
        }
    }
}
function start() {
    setValuesOfCanva();
    for (let picture of kindOfPictureInCanva) {
        if (picture.checked) {
            switch (picture.value) {
                case "flower":
                    drawFlower();
                    break;
                case "starsimple":
                    drawStar();
                    break;
                case "star":
                    drawSuperStar();
                    break;
            
                default:
                    break;
            }
            
        }
    }
}