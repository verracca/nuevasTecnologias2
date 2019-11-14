export default class tablero {
    constructor() {
        this.celdas = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ];
    }

    modificarTablero(x, y, jugador) {
        if (this.celdas[x][y] !== '') {
            return false;
        }

        this.celdas[x][y] = jugador;
        return true;
    }

    jugadorTiene3EnLinea(jugador) {
        // Filas 
        for (let i = 0; i < 3; i++) {
            if (this.celdas[0][i] === jugador && this.celdas[1][i] === jugador && this.celdas[2][i] === jugador) {
                return true;
            }
        }

        // Columnas
        for (let i = 0; i < 3; i++) {
            if (this.celdas[i][0] === jugador && this.celdas[i][1] === jugador && this.celdas[i][2] === jugador) {
                return true;
            }
        }

        // Diagonales
        if (this.celdas[0][0] === jugador && this.celdas[1][1] === jugador && this.celdas[2][2] === jugador) {
            return true;
        }
        if (this.celdas[2][0] === jugador && this.celdas[1][1] === jugador && this.celdas[0][2] === jugador) {
            return true;
        }

        return false;
    }

    juegoTerminado() {
        return !this.hayCasillerosLibres() || this.jugadorTiene3EnLinea('x') || this.jugadorTiene3EnLinea('o');
    }

    hayCasillerosLibres() {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (this.celdas[i][j] === '') {
                    return true;
                }
            }
        }
        return false;
    }
}