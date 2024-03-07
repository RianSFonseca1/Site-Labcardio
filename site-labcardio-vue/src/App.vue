<template>
  <NavBar />
  <router-view/>
</template>

<style scoped>

</style>

<script>
  import '../public/index.css'
  import NavBar from './components/NavBar.vue'
  import { initFlowbite } from 'flowbite'

export default {
  mounted(){
    initFlowbite();
  },
  components:{
    NavBar
  }
}
</script>