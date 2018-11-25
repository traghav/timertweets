<template>
  <div id="app">
    <div id="nav">
      

    </div>
    <router-view/>
    <div class="footer">
      <b-link to="/help">What even is this? </b-link>/
      <a href="https://raghav.cc">raghav.cc</a> / 
      <a href="https://twitter.com/raghavtosh">@raghavtosh</a>
    </div>
  </div>
</template>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
}


#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.footer{
  position: absolute;
  bottom: 0;
  margin: 10px;
  font-size: 18px;
  color: #F20000;
}
</style>
