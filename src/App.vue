<template>
  <div id="app"> 
    <div>
    <PiedraPapelTijera msg="Piedra papel o tijeras"/>
    </div>
</div>
</template>

<script>
import PiedraPapelTijera from './components/PiedraPapelTijera.vue'


export default {
  name: 'app',
  components: {
    PiedraPapelTijera
  }
}

</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

@import url("https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap");
* {
  font-family: "Roboto Mono", monospace;
}

#nav {
  padding: 30px;
}
body,
html {
  height: 100%;
  background-color: #a1b5d8;
}
#tablero {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.leftDisplay {
  float: left;
  width: 200px;
}

.rigthDisplay {
  float: right;
  width: 200px;
margin-top: 60px;
}
</style>
