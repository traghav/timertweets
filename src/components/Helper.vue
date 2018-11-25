<template>
  <div class="helper">
    <h1>{{ msg }}</h1>
    <h4>What is this?</h4>
    <p>Timer Tweet is a service to create time locked tweets that only reveal itself in the future.</p>
    <h4>Why though?</h4>
    <p>It's a ticking timebomb really. If you couple it with some meta information about what the hidden message is, it can be used to reveal any information in a time-bound manner.</p>
    <h4>Will the tweet unlock on and display on Twitter as well?</h4>
    <p>Not unless Twitter allows us to edit Tweets and opens an API to edit them. They would revealed on this very site.</p>
    <h4>What is with the Algorithm and the Proof?</h4>
    <p>To make sure the message that is tweeted hasn't been tampered with in any shape or form, a hash of the message is also tweeted out, this can be matched with the hash of the revealed message to ensure the message is indeed the same </p>
    <h4>What is hashing?</h4>
    <p>Aha! you have asked my favourite made up question.</p>
    <p><a href="https://blockgeeks.com/guides/what-is-hashing/">Here </a> <a href="https://www.cs.cmu.edu/~adamchik/15-121/lectures/Hashing/hashing.html">are </a><a href="https://www.youtube.com/watch?v=DMtFhACPnTY">some </a>  <a href="https://www.youtube.com/watch?v=b4b8ktEV4Bg">explainers.</a></p>
    <h4>Features planned, Get in touch, etc.</h4>
    <p>I am thinking of tying the Twitter Search API in the reveal page to show the original tweet at the time of reveal. I don't know how well that will work. If you want to get in touch about this or something else, I am availible on the <a href="https://raghav.cc/hello/">web </a> and <a href="mailto:hello@raghav.cc">email.</a></p>
      
  </div>
</template>
<script>
import crypto from 'crypto'
import firebase from 'firebase'
export default {
  name: 'Helper',
  data() {
    return { 
      msg: 'Timer Tweet 🤷',
      
    }
  },
  methods: {
    
  },
  watch: {

  },
  mounted () {
    
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

a {
  color: #42b983;
}

.helper {
  margin-left: 20px;
  margin-right: 20px;
  width: auto;
  /*width: 500px;*/
  /*text-align: center;*/
}
.helper p {
  font-size: 17px;

}

.hash pre {
  display: inline;
}



@media  (max-width: 450px) {
.countDowner {
  margin: 10px;
  text-align: left;
}
.messagebox {
  max-width: 350px;
  margin-bottom: 30px;
  

}
.help {
  margin: 0px;
  margin-top: 10px;
  font-size: 18px;
  
}

}

</style>
