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
         <countdown :time="time" :interval="1000" tag="p" @countdownend="end">
          
          <template slot-scope="props">&nbsp; 


            <div class="block">
                <p class="digit">{{ props.days }}</p>
                <p class="text">Days</p>
            </div>
            <div class="block">
                <p class="digit">{{ props.hours }}</p>
                <p class="text">Hours</p>
            </div>
            <div class="block">
                <p class="digit">{{ props.minutes }}</p>
                <p class="text">Minutes</p>
            </div>
            <div class="block">
                <p class="digit">{{ props.seconds }}</p>
                <p class="text">Seconds</p>
            </div>


          </template>
        </countdown>
      </div>
      <div class="countdown" v-if="time<0">
        <h3>Unlocked Tweet</h3>
        <div class="messagebox">
          <b-form-textarea textarea v-model="message" placeholder="Enter message to be encrypted" :readonly="true" :rows="4"></b-form-textarea >
        </div>
      </div>
      <div class="hash">
        Proof: <pre>{{hash}}</pre>
      </div>
      <div class="hash">
        Algorithm: <pre>{{algo}}</pre>
      </div>
      <div class="hash">
        Posted on: {{postedDate}}
      </div>
      <div class="help">

        <b-link to="/">Create your own Timer Tweet</b-link>
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
      msg: 'Timer Tweet ⏲️',
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
      this.loaded=false
      var audio = new Audio('http://soundbible.com/mp3/Air Plane Ding-SoundBible.com-496729130.mp3')
      audio.play()
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
            alert("Could not find the Tweet URL. Redirecting to home page.")
            vm.$router.push('/')
           }
          });
      this.msg="Timer Tweet 🔓"
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
              vm.algo=data.algo
              vm.hash=data.hash
              vm.revealDate=data.revealDate
              vm.postedDate=data.currentDate
              vm.loaded=true
              vm.calculateDiff()
           }
           else {
            alert("Could not find the Tweet URL. Redirecting to home page.")
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
  color: #FF8926;
}

.countDowner {
  margin: 10px;
  text-align: center;
}
.messagebox {
  max-width: 350px;
  margin-bottom: 30px;
  width:500px;
  margin:auto; 

}
.hash pre {
  display: inline;
}

.block {
    display: inline-flex;
    flex-direction: column;
    margin: 20px;
}

.text {
    color: #FF8926;
    font-size: 20px;
    
    font-weight: 40;
    margin-top:10px;
    margin-bottom: 10px;
    text-align: center;
}

.digit {
    color: #3b3b3b;
    font-size: 50px;
    font-weight: 100;
    
    margin: 10px;
    text-align: center;
}
.help {
  margin: 20px;
  font-size: 30px;
  
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
.block {
    display: inline-flex;
    flex-direction: column;
    margin: 10px;
}

.text {
    color: #FF8926;
    font-size: 13px;
    
    font-weight: 30;
    margin-top:10px;
    margin-bottom: 10px;
    text-align: center;
}

.digit {
    color: #3b3b3b;
    font-size: 30px;
    font-weight: 100;
    
    margin: 10px;
    text-align: center;
} 
}

</style>
