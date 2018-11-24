<template>
  <div class="about">
    <Countdowner msg="Welcome to Your Vue.js App"/>
  </div>
</template>
<script>
// @ is an alias to /src
import Countdowner from '@/components/Countdowner.vue'

export default {
  name: 'home',
  components: {
    Countdowner
  }
}
</script>
