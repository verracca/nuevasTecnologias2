<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-sm" v-if="this.contadorUser<3 && this.contadorMaquina<3">
          <button
            id="piedra"
            flavour="button"
            class="btn btn-secondary"
            v-on:click="eleccion(1)">
          </button>
          <button
            id="papel"
            flavour="button"
            class="btn btn-secondary"
            v-on:click="eleccion(2)">
          </button>
          <button
            id="tijeras"
            flavour="button"
            class="btn btn-secondary"
            v-on:click="eleccion(3)">
          </button>
        </div>
        <div>{{Resultado}}</div>
        <div>
          User: {{contadorUser}}
          Maquina: {{contadorMaquina}}
          </div>
        <div>{{ResultadoFinal}}</div>
        <div v-if="this.tateti"> 
           <!-- TATETI -->
          <div id="tablero">
            <div>
            <div>El tateti de ORT</div>
            <div><tateti/></div>
          </div>
        </div>
        </div>
        <div class="col-sm" v-if="!this.tateti">
          <button
            flavour="button"
            class="btn btn-secondary"
            v-on:click="reiniciar()">
            Reiniciar Partida
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "PiedraPapelTijera",
  
  data: function(){
      return{
          Resultado:'',
          ResultadoFinal:'',
          contadorUser:0,
          contadorMaquina:0,
          random:0,
          tateti:false
      }
  },
  methods: {
    eleccion(valor){
        this.random = Math.floor(Math.random() * 4);
        if(valor==1){
          if(this.random==3){
            this.Resultado='Ganaste, la maquina eligió Tijera';
            this.contadorUser++;
            this.chequearPartida();
          }else if(this.random==2){
            this.Resultado='Perdiste, la maquina eligió Papel';
            this.contadorMaquina++;
            this.chequearPartida();
          }else{
            this.Resultado='Empataron';
          }
        }else if(valor==2){
          if(this.random==1){
            this.Resultado='Ganaste, la maquina eligió Piedra';
            this.contadorUser++;
            this.chequearPartida();
          }else if(this.random==3){
            this.Resultado='Perdiste, la maquina eligió Tijera';
            this.contadorMaquina++;
            this.chequearPartida();
          }else{
            this.Resultado='Empataron';
          }
        }else {
          if(this.random==2){
            this.Resultado='Ganaste, la maquina eligió Papel';
            this.contadorUser++;
            this.chequearPartida();
          }else if(this.random==1){
            this.Resultado='Perdiste, la maquina eligió Piedra';
            this.contadorMaquina++;
            this.chequearPartida();
          }else{
            this.Resultado='Empataron';
          }
        }
    },
    reiniciar(){
          this.Resultado='',
          this.ResultadoFinal='',
          this.contadorUser=0,
          this.contadorMaquina=0
    },
    chequearPartida(){
      if(this.contadorUser==3 && this.contadorMaquina<3){
        this.Resultado='';
        this.ResultadoFinal='Felicitaciones, ganaste la partida';
        this.tateti=true;
      }else if(this.contadorUser<3 && this.contadorMaquina==3){
        this.Resultado='';
        this.ResultadoFinal='La maquina ganó esta partida';
      }
    }
  }
};
</script>


<style scoped>
#app {
  height: 100px;
  display: flex;
  flex-direction: column;
  max-width: 300px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  font-family: "Open Sans", sans-serif;
}
#piedra{
background: url('../imagenes/piedra.png') center;
 width:160px;
 height:190px;
 color:white;
 border: none;
 outline:none;
}
#papel{
background: url('../imagenes/papel.png');
width:160px;
 height:190px;
 color:white;
 border: none;
 outline:none;
}
#tijeras{
background: url('../imagenes/tijeras.png');
width:160px;
 height:190px;
 color:white;
 border: none;
 outline:none;
}
</style>
