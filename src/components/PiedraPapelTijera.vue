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
        <div id="TEMA-RESULTADOS">
          User: {{contadorUser}}
          Maquina: {{contadorMaquina}}
          </div>
        <div>{{ResultadoFinal}}</div>
        <div v-if= "this.tateti==true"> 
           <!-- TATETI -->
          <div id="tablero">
            <div>
            <div>El tateti de ORT</div>
            <div><tateti/></div>
          </div>
        </div>
        </div>
        <div class="col-sm" v-if="this.tateti==false">
          <button
            flavour="button"
            class="btn btn-secondary reiniciar"
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
        switch(valor){
         case 1:
          switch(this.random){
           case 3:
            this.Resultado='Ganaste, la maquina eligió Tijera';
            this.contadorUser++;
            this.chequearPartida();
             break;
            case 2:
            this.Resultado='Perdiste, la maquina eligió Papel';
            this.contadorMaquina++;
            this.chequearPartida();
            break;
            default:
              this.Resultado='Empataron';
          }
          break;
          case 2:
          switch(this.random){
            case 1:
            this.Resultado='Ganaste, la maquina eligió Piedra';
            this.contadorUser++;
            this.chequearPartida();
            break;
            case 3:
               this.Resultado='Perdiste, la maquina eligió Tijera';
            this.contadorMaquina++;
            this.chequearPartida();
            break;
            default: 
            this.Resultado='Empataron';
          }
          break;

          case 3:
            switch(this.random){
            case 2:
            this.Resultado='Ganaste, la maquina eligió Papel';
            this.contadorUser++;
            this.chequearPartida();
              break;

            case 1:
            this.Resultado='Perdiste, la maquina eligió Piedra';
            this.contadorMaquina++;
            this.chequearPartida();
              break;

            default:
            this.Resultado='Empataron';

            }
            break;
            default: this.chequearPartida();
            
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
.row{
  margin-top: 250px;
}
.btn{
  margin: 0px 100px;
}

.reiniciar{
  margin-top:30px;
}

#TEMA-RESULTADOS{
font-size:50px;
}
</style>
