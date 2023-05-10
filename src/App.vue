<template>
  <v-app>
    <v-main>
      <Navbar/>
      <router-view style="height:100%"/>
      <Footer/>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar'
import Footer  from './components/Footer'
export default {
  name: 'App',
  data: () => ({
    
  }),
  components : {
    Navbar,
    Footer
  }
};
</script>

