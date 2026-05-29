const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");

const vida1Bar = document.getElementById("vida1");
const vida2Bar = document.getElementById("vida2");

const resultado = document.getElementById("resultado");

let p1X = 100;
let p2X = 700;

let vida1 = 100;
let vida2 = 100;

function actualizar() {
    p1.style.left = p1X + "px";
    p2.style.left = p2X + "px";

    vida1Bar.style.width = vida1 + "%";
    vida2Bar.style.width = vida2 + "%";
}

document.addEventListener("keydown", (e) => {

    if (vida1 <= 0 || vida2 <= 0) return;

    // Movimiento jugador 1
    if (e.key === "a") p1X -= 20;
    if (e.key === "d") p1X += 20;

    // Movimiento jugador 2
    if (e.key === "ArrowLeft") p2X -= 20;
    if (e.key === "ArrowRight") p2X += 20;

    // Ataque jugador 1
    if (e.key === "f") {
        if (Math.abs(p1X - p2X) < 80) {
            vida2 -= 10;
        }
    }

    // Ataque jugador 2
    if (e.key === "l") {
        if (Math.abs(p1X - p2X) < 80) {
            vida1 -= 10;
        }
    }

    if (vida1 <= 0) {
        resultado.textContent = "¡Jugador 2 Gana!";
    }

    if (vida2 <= 0) {
        resultado.textContent = "¡Jugador 1 Gana!";
    }

    actualizar();
});

actualizar();