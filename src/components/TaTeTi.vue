<template>
  <div class="tateti-tablero">
    <!-- doble for para dibujar el tablero  -->
    <div v-for="(n, columna) in 3" :key="n">
      <div v-for="(n, fila) in 3" :key="n">

        <celda
          @click="realizaMovimiento(fila, columna)"
          :ficha="tablero.celdas[fila][columna]"
        ></celda>
      </div>
    </div>

    <div v-if="juegoTerminado">{{ mensajeFinal }}</div>
  </div>
</template>

<script>
import tablero from "../tablero";
export default {
  data() {
    return {
      juegoTerminado: false,
      mensajeFinal: "",
      tablero: new tablero()
    };
  },
  props: {
    turno: String
  },
  methods: {
    realizaMovimiento(x, y) {
      if (this.juegoTerminado) {
        return;
      }
      if (!this.tablero.modificarTablero(x, y, "x")) {
        // Movimiento invalido
        return;
      }
      this.$forceUpdate();
      if (this.tablero.juegoTerminado()) {
        this.juegoTerminado = true;
        this.mensajeFinal = this.tablero.jugadorTiene3EnLinea("x")
          ? "Ganaste!🙌"
          : "Empate";
        return;
      }

      this.turnoComputadora();

      if (this.tablero.juegoTerminado()) {
        this.juegoTerminado = true;
        this.mensajeFinal = this.tablero.jugadorTiene3EnLinea("o")
          ? "Ups! Perdiste...😘"
          : "Empate";
      }
      this.$forceUpdate();
    },
    elegirPosicion() {
      return Math.floor(Math.random() * 3);
    },
    turnoComputadora() {
      if (this.tablero.juegoTerminado()) {
        return;
      }
      let movimientoValido = false;
      while (!movimientoValido) {
        let x = this.elegirPosicion();
        let y = this.elegirPosicion();
        movimientoValido = this.tablero.modificarTablero(x, y, "o");
      }
    }
  }
};
</script>
<style>
.tateti-tablero {
  display: flex;
  justify-content: center;
  width: 204px;
  height: 204px;
}
</style>
