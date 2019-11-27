export default class tablero {
    constructor() {
        this.celdas = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ];
    }

    modificarTablero(x, y, ficha) {
        if (this.celdas[x][y] !== '') {
            return false;
        }

        this.celdas[x][y] = ficha;
        return true;
    }

    jugadorTiene3EnLinea(ficha) {
        // Filas 
        for (let i = 0; i < 3; i++) {
            if (this.celdas[0][i] === ficha && this.celdas[1][i] === ficha && this.celdas[2][i] === ficha) {
                return true;
            }
        }

        // Columnas
        for (let i = 0; i < 3; i++) {
            if (this.celdas[i][0] === ficha && this.celdas[i][1] === ficha && this.celdas[i][2] === ficha) {
                return true;
            }
        }

        // Diagonales
        if (this.celdas[0][0] === ficha && this.celdas[1][1] === ficha && this.celdas[2][2] === ficha) {
            return true;
        }
        if (this.celdas[2][0] === ficha && this.celdas[1][1] === ficha && this.celdas[0][2] === ficha) {
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