

const celdas = document.querySelectorAll('.cell');
let turnos = true; // true = X, false = O
let gameActive = true; // Para controlar si el juego sigue activo

// las combinaciones de victorias
const combinaciones_win = [
  [0, 1, 2], 
  [3, 4, 5], 
  [6, 7, 8], 
  [0, 3, 6], 
  [1, 4, 7], 
  [2, 5, 8], 
  [0, 4, 8], 
  [2, 4, 6]  
];

celdas.forEach((celda, index) => {
  celda.addEventListener('click', () => {
    
    if (celda.textContent.trim() !== "" || !gameActive) return;

    // verificamos cual es el jugador actual.
    const jugador_actual = turnos ? "X" : "O";
    celda.textContent = jugador_actual;
    celda.classList.add(turnos ? "x" : "o"); 

    // if para mirar si hay un win.
    if (checkWinner(jugador_actual)) {
      alert(`¡${jugador_actual} Ganador!!!`);
      gameActive = false;
      tablero(jugador_actual)
      
      return;
    }

    // posible empate
    if (empate()) {
            alert("Hubo un empate");
            gameActive = false;
            return;
    }
    // se cambia el valor, turno a turno.
    turnos = !turnos;
  });
});

//******************************************************* */
function checkWinner(player) {
 
  for (let i = 0; i < combinaciones_win.length; i++) {
    const [a, b, c] = combinaciones_win[i];
    
    if (celdas[a].textContent === player && celdas[b].textContent === player && celdas[c].textContent ===player) {
      return true; 
    }
  }
  return false; 
}

function empate() {
  // se revisa  todas las celdas
  for (let i = 0; i < celdas.length; i++) {
    // Si encontramos una celda vacía es porque no hay empate.
    if (celdas[i].textContent === "") {
      return false;
    }
  }
  return true; 
}

let jugadorX = 0
let jugadorO = 0
let draw = 0

function tablero(jugador) {
    if(jugador === 'X') {
        jugadorX++
        const x = document.getElementById("jugador-x")
        x.textContent = jugadorX
    } else if ( jugador === "O") {
        jugadorO++
        const o = document.getElementById("jugador-o")
        o.textContent = jugadorO
    } else {
        draw++
        const empatacion = document.getElementById("empates")
        empatacion.textContent = draw
    }
}