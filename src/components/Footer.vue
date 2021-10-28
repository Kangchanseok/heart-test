<template>
<footer>
<div class="rela-block footer-section">
    <h2 class="small-header top-link">Back to Top</h2>
    <div class="rela-block social-buttons-container">
        <div class="social-button facebook-button"></div>
        <div class="social-button twitter-button"></div>
        <div class="social-button instagram-button"></div>
        <div class="social-button behance-button"></div>
    </div>
    <p>Classic deluxe custom designer luxury prestige high-quality premium select gourmet pocket pencil sharpener.<br>
        Yours for the asking, no purchase necessary. It's our way of saying thank you.</p>
</div>
</footer> 





</template>


<script>
export default {
  name:"Footer",
  data(){
    return {};
  },

  mounted(){
    window.smoothscroll = () => {
      let currentScroll = document.documentElement.scrollTop || document.body.scrollTop
      if (currentScroll > 0) {
        window.requestAnimationFrame(window.smoothscroll)
        window.scrollTo(0, Math.floor(currentScroll - (currentScroll / 5)))
      }
    }
    window.addEventListener('scroll', this.catchScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.catchScroll)
  },
  methods: {
    backToTop(){
      window.smoothscroll()
      this.$emit('scrolled')
    }      
  },

}
</script>




<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&display=swap');

.small-header {
  font-family: 'Nanum Gothic', sans-serif;
  text-transform: uppercase;
  text-align: center;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 8px;
  margin-bottom: 20px;
}

.footer-section p{
    text-align: center;
    font-family: 'Nanum Gothic', sans-serif;
} 


.footer-section {
  padding: 75px 0;
  background: #7bc4c4;
  color: #fff;
}
.footer-section .small-header {
  margin-bottom: 20px;
}
.footer-section .top-link {
  cursor: pointer;
}
.social-buttons-container {
  min-height: 100px;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto 20px;
  text-align: center;
}
.social-button {
  display: inline-block;
  position: relative;
  transform: scale(0.75);
  height: 75px;
  width: 75px;
  background-size: cover !important;
  transition: 0.3s ease;
  margin: 14px 2px;
  cursor: pointer;
}
.social-button:hover {
  transform: scale(1);
  transition: 0.3s cubic-bezier(0.3, 0.2, 0, 2.5);
}
.social-button.twitter-button {
  background: url("https://cdn4.iconfinder.com/data/icons/liu-square-blac/60/twitter-square-social-media-256.png") no-repeat center;
}
.social-button.facebook-button {
  background: url("https://cdn4.iconfinder.com/data/icons/liu-square-blac/60/facebook-square-social-media-256.png") no-repeat center;
}
.social-button.instagram-button {
  background: url("https://cdn4.iconfinder.com/data/icons/liu-square-blac/60/instagram-square-social-media-256.png") no-repeat center;
}
.social-button.behance-button {
  background: url("https://cdn4.iconfinder.com/data/icons/liu-square-blac/60/behance-square-social-media-256.png") no-repeat center;
}


</style>