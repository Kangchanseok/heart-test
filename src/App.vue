<template>
  <div id="app">

    <Navbar />
    <router-view :key="$route.fullPath"/> 
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
import Popular2 from '@/components/Popular2'
import Detail1 from '@/components/Detail1'
import Detail2 from '@/components/Detail2'
import Detail3 from '@/components/Detail3'
import LocationDetail from '@/components/LocationDetail'
import Search from '@/components/Search'
import Mypage from '@/components/Mypage'


export default {
  name: 'App',
  components: {
    Navbar,
    Main,
    Login,
    Register,
    BackToTop,
    Home,
    Footer,
    Popular2,
    Detail1,
    Detail2,
    Detail3,
    LocationDetail,
    Search,
    Mypage
    
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
