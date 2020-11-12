var lienzo = document.getElementById('five'); //acceso al elemento con la etiqueta
var ctx = lienzo.getContext('2d'); //acceso al contexto del lienzo con la funciones de dibujar


let widthCanva = lienzo.width;
let heightCanva = lienzo.height;

for (var i = 0; i < 50; i++) {
    yi = 5 * i;
    xf = 5 * i;
    xi = 250 + (5 * i);
    yf = 250 + (5 * i);
    draw("blue", 0, yi, xf, 250);
    draw("red", xi, 250, 500, yf);
}
for (var i = 0; i < 50; i++) {
    yi = 250 + (i * 5);
    xf = 250 - (i * 5);
    xi = 250 + (i * 5);
    yf = 250 - (i * 5);
    draw("green", 0, yi, xf, 250);
    draw("yellow", xi, 250, 500, yf);
}
for (var i = 0; i < 50; i++) {
    xi = 250 + (i * 5);
    yf = 250 - (i * 5);
    yi = 250 + (5 * i);
    xf = 250 - (i * 5);
    draw("violet", xi, 0, 250, yf);
    draw("#66CCFF", 250, yi, xf, 500);
}
for (var i = 0; i < 50; i++) {
    yi = 250 - (5 * i);
    xf = 250 - (5 * i);

    xi = 500 - (5 * i);
    yf = 500 - (5 * i);
    draw("gray", 250, yi, xf, 0);
    draw ("#CC6633",xi,500,250,yf);
    console.log(xi,yf);
}



function draw(color, xi, yi, xf, yf) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.moveTo(xi, yi);
    ctx.lineTo(xf, yf);
    ctx.stroke();
    ctx.closePath();
}
