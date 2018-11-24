<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
      <div class="messagebox">
        <b-form-textarea textarea v-model="tweet" v-on:input="tweetChange()" placeholder="Enter message to be encrypted" :rows="2"></b-form-textarea >
      </div>
      <div class="algo">
        <b-form-select v-model="algo" v-on:input="tweetChange()" class="mb-3" size="sm">
          <option v-for="algo in algos" v-bind:value="algo">
            {{ algo }}
          </option>
        </b-form-select>
      </div>
      <div>
        <div class="hash">Hash: <pre>{{hash}}</pre></div>
      </div>
      <h4>Unlock Tweet after: {{unlockTime}}</h4>
      <div class="expiry">
        <div class="picker">
          <p>Seconds</p>
          <b-form-select v-model="seconds">
            <option v-for="n in 60" :value="n">{{ n }}</option>
          </b-form-select> 
        </div>
        <div class="picker">
          <p>Minutes</p>
          <b-form-select v-model="minutes">
            <option v-for="n in 60" :value="n">{{ n }}</option>
          </b-form-select> 
        </div>
        <div class="picker">
          <p>Hours</p>
          <b-form-select v-model="hours">
            <option v-for="n in 24" :value="n">{{ n }}</option>
          </b-form-select> 
        </div>
        <div class="picker">
          <p>Days</p>
          <b-form-select v-model="days">
            <option v-for="n in 999" :value="n">{{ n }}</option>
          </b-form-select> 
        </div>   
      </div>
      <div class="user">
        <span class="tweet">
          <b-button  variant="primary" v-on:click="sendTweet()">Tweet it !</b-button>
        </span>
        <span class="tweet">
          <b-button  variant="primary" v-on:click="test()">Test it !</b-button>
        </span>

      </div>
  </div>
</template>

<script>
import crypto from 'crypto'
export default {
  name: 'HelloWorld',
  data() {
    return {
      seconds: 0,
      minutes: 0,
      hours: 0,
      days: 0,
      msg: "Timer Tweet 🔒",
      tweet:'',
      composedMessage:'',
      sendCopy:false,
      email:'',
      unlockTime: '',
      hash:'',
      sent:false,
      algos:['MD5','RIPEMD160','SHA1','SHA224','SHA256','SHA384','SHA512'],
      algo:'SHA256'
    }
  },
  methods: {
    tweetChange(){
      if(this.tweet!==''){
        this.computeHash()
      } 
      else this.hash=''
    },
    computeHash(){
      if(this.tweet===''){
        this.hash=''
      }
      else {
      const secret = '';
      this.hash = crypto.createHash(this.algo, secret)
                 .update(this.tweet)
                 .digest('hex');  
      }
      
    },
    computeUnlockTime(){
      var unlockTime=''
      if(this.days!==0)
        unlockTime=this.days+" days "
      if(this.hours!==0)
        unlockTime+=this.hours+" hours "
      if(this.minutes!==0)
        unlockTime+=this.minutes+" minutes "
      if(this.seconds!==0)
        unlockTime+=this.seconds+" seconds"
      this.unlockTime=unlockTime
    },
    encodeQueryData(data) {
     const ret = [];
     for (let d in data)
       ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
     return ret.join('&');
    },
    composeTweet(){
      this.computeUnlockTime();
      this.computeHash();
      const link='https://twitter.com/intent/tweet?'
      var text='This is a locked Tweet. It will be unlocked in '+this.unlockTime+'.\nProof: '+this.hash+"\nFind unlocked tweet at:"

      const tweetData ={
        'text': text,
        'hashtags':[this.algo,'TimerTweets'],
        'url':"https://google.com"
      }
      this.composedMessage=link+this.encodeQueryData(tweetData)
      },
    test(){
      alert("flight")
    },
    dateAdder() {
      var currentDate = new Date()
      var newDate = new Date(currentDate)
      newDate.setDate(newDate.getDate()+this.days)
      newDate.setHours(newDate.getHours()+this.hours)
      newDate.setMinutes(newDate.getMinutes()+this.minutes)
      newDate.setSeconds(newDate.getSeconds()+this.seconds)
      return newDate.toUTCString()
    },
    sendTweet() {
      this.composeTweet()
      window.location = this.composedMessage;
    } 
  },
  watch: {
    algo: function (newAlgo){
      this.algo=newAlgo
      this.computeHash()
    },
    seconds: function(){
      this.computeUnlockTime()
    },
    minutes: function(){
      this.computeUnlockTime()
    },
    hours: function(){
      this.computeUnlockTime()
    },
    days: function(){
      this.computeUnlockTime()
    }

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
.expiry {
  display: flex;
}
.picker {
  margin-right: 10px;
}
.hello {
  margin: 10px;
}


.user{
  margin-top: 10px;
}
.messagebox {
  max-width: 350px;
  margin-bottom: 10px;
}
.algo {
  margin-top: 10px;
  max-width: 350px;
}
.hash pre {
  display: inline;
}
</style>
