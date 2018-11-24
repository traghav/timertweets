<template>
  <div class="countDowner">
    <h1>{{ msg }}</h1>

    <div class="user">
     <countdown :time="time" :interval="100" tag="p" @countdownend="end">
    <template slot-scope="props">New Year Countdown：{{ props.days }} days, {{ props.hours }} hours, {{ props.minutes }} minutes, {{ props.seconds }} seconds.</template>
    </countdown>

    </div>
  </div>
</template>

<script>
import crypto from 'crypto'
export default {
  name: 'Countdowner',
  data() {
    var now=new Date()
    var newDate = new Date(now)
    
    
    newDate.setSeconds(newDate.getSeconds()+5)
    var x=newDate.toUTCString()
    var p=Date.parse(x)
    return { 
      uurl: this.$route.params.uurl,
      msg: this.$route.params.uurl,
      time: p-now
    }
  },
  methods: {
    end(){
      alert("Ended")
    }
  },
  watch: {

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
}



</style>
