<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script src="https://www.gstatic.com/firebasejs/5.5.9/firebase.js"></script>
<script>
  var config = {
    apiKey: "AIzaSyCz4Aq-6-bgRJA0tnE9yiMcLIhno_bvGK4",
    authDomain: "timertweets.firebaseapp.com",
    databaseURL: "https://timertweets.firebaseio.com",
    projectId: "timertweets",
    storageBucket: "",
    messagingSenderId: "787420252046"
  };
  firebase.initializeApp(config);
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
