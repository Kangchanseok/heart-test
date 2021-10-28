<template>
  <div id="app">
    <!-- <Header /> -->
      <!-- <Main /> -->

    <Navbar />
    <router-view/>
    <!-- <Home /> -->
    <BackToTop />
    <Footer />
    
    
  </div>
</template>


<script>
import Navbar from '@/components/Navbar'
import Main from '@/components/Main'
import Footer from '@/components/Footer'
import Login from '@/components/Login'
import Register from '@/components/Register'
import BackToTop from '@/components/BackToTop'
import Home from '@/components/Home'

export default {
  name: 'App',
  components: {
    Navbar,
    Main,
    Login,
    Register,
    BackToTop,
    Home,
    Footer
  }
}
</script>



<!--script>
// import Header from '@/components/Header'
// export default {
//   name: 'App',
//   components: {
//     Header,
//   }
// }
// </-script -->



<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
