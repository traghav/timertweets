<template>
  <div class="countDowner">
    <h1>{{ msg }}</h1>
    <div class="loading" v-if="loaded===false">
    <h2>Loading Tweet
      <img src="../assets/loader.gif">
    </h2>
    
    </div>
    <div class="loading" v-if="loaded">
      

      <div class="countdown" v-if="time>0">
        <h3>Tweet unlocks in</h3>
         <countdown :time="time" :interval="1000" tag="h3" @countdownend="end">
          
        <template slot-scope="props">&nbsp; {{ props.days }} days, {{ props.hours }} hours, {{ props.minutes }} minutes, {{ props.seconds }} seconds</template>
        </countdown>
      </div>
      <div class="countdown" v-if="time<0">
        <div class="messagebox">
          <b-form-textarea textarea v-model="message" placeholder="Enter message to be encrypted" :readonly="true" :rows="4"></b-form-textarea >
        </div>
        <div class="hash">
          Proof: <pre>{{hash}}</pre>
        </div>
        <div class="hash">
          Algorithm: <pre>{{algo}}</pre>
        </div>
        <div class="hash">
          Posted Date: {{postedDate}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import crypto from 'crypto'
import firebase from 'firebase'
export default {
  name: 'Countdowner',
  data() {
    return { 
      uurl: this.$route.params.uurl,
      msg: 'Timer Tweet 🔒',
      time: 0,
      loaded: false,
      message:'',
      hash:'',
      algo:'',
      revealDate:'',
      postedDate:''
    }
  },
  methods: {
    end(){
      this.calculateDiff()
    },
    calculateDiff(){
      var now=new Date()
      var revealDateObj=Date.parse(this.revealDate)
      this.time=revealDateObj-now
    }
  },
  watch: {

  },
  mounted () {
    
    const vm=this;
    firebase.database().ref('tweets/'+this.uurl).once('value').then(function(snapshot) {var data = (snapshot.val() && snapshot.val()) || 'null';
           if(data!='null'){
              vm.message=data.tweet
              vm.algo=data.algo
              vm.hash=data.hash
              vm.revealDate=data.revealDate
              vm.postedDate=data.currentDate
              vm.loaded=true
              vm.calculateDiff()
           }
           else {
            alert("Could not find the Tweet URL")
            vm.$router.push('/')
           }
          });
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.countDowner {
  margin: 10px;
  text-align: center;
}
.messagebox {
  max-width: 350px;
  margin-bottom: 10px;
}
.hash pre {
  display: inline;
}
.countdown h4 {
  display: inline;
}
.countdown h3 {
  
  font-family: 'Share Tech Mono', monospace;
    color: #2b2b2b;
    
    /*position: absolute;*/
    /*left: 50%;*/
    /*top: 50%;*/
   
    
}

</style>
