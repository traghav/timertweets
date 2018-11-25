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
  color: #FF8926;
}

#nav a.router-link-exact-active {
  color: #FF8926;
}
.footer{
  position: fixed;
  bottom: 0;
  margin: 10px;
  margin-top: 200px;
  font-size: 18px;
  color: #FF8926;
}
.footer a {
  color: #FF8926;
}
body{
  background: #FCF2CB36 !important;
}

</style>
