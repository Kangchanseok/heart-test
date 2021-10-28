<template>
<div id="hero-slides">
    <div id="header">
      <!-- <div id="logo"></div> -->
      <!-- <div id="menu"></div> -->
        <div id="hamburger">
          <div class="slice"></div>
          <div class="slice"></div>
          <div class="slice"></div>
        <!-- </div> -->
      </div>
    </div>
    <div id="slides-cont">
      <div class="button" id="next"></div>
      <div class="button" id="prev"></div>
      <div id="slides">
        <div class="slide" style="background-image: url(https://drive.google.com/file/d/120nXsZBZhJdejmDQ_xkwJjfd7ypNDCrH/view?usp=sharing)">

          <div class="icons">
            <div class="views"><i class="ion-eye"></i>9,280</div> 
            <div class="love"><i class="ion-heart"></i>2,341</div>
          </div>

          <div class="number">01</div>
          <div class="body">            
            <div class="location">Gyeonghuigung, South Korea</div>
            <div class="headline">Photo by Bundo Kim</div><a href="https://unsplash.com/photos/Y7IilZ5VLdA" target="_blank">
              <div class="link">View on Unsplash</div></a>
          </div>
        </div>
        <div class="slide" style="background-image: url(../src/assets/Popular/Deoksugung.jpg)">

          <div class="icons">
            <div class="views"><i class="ion-eye"></i>8,731</div> 
            <div class="love"><i class="ion-heart"></i>3,011</div>
          </div>

          <div class="number">02</div>
          <div class="body">
            <div class="location">Mong Kok, Hong Kong</div>
            <div class="headline">Photo by Ryan Tang</div><a href="https://unsplash.com/photos/t9mr0d1igac" target="_blank">
              <div class="link">View on Unsplash</div></a>
          </div>
        </div>
        <div class="slide" style="background-image: url(https://alca.tv/static/u/9b5f71cb-34a3-4fb4-a3a6-0ce9557c0acd_opt.png)">

          <div class="icons">
            <div class="views"><i class="ion-eye"></i>10,239</div> 
            <div class="love"><i class="ion-heart"></i>6,593</div>
          </div>

          <div class="number">03</div>
          <div class="body">
            <div class="location">Incheon, South Korea</div>
            <div class="headline">Photo by Steve Roe</div><a href="https://unsplash.com/photos/73aocAAt7rs" target="_blank">
              <div class="link">View on Unsplash</div></a>
          </div>
        </div>
        <div class="slide" style="background-image: url(https://alca.tv/static/u/10cfd52d-e217-41e9-bb8b-ad43384a5e63_opt.png)">

          <div class="icons">
            <div class="views"><i class="ion-eye"></i>928</div> 
            <div class="love"><i class="ion-heart"></i>198</div>
          </div>

          <div class="number">04</div>
          <div class="body">
            <div class="location">Wan Chai, Hong Kong</div>
            <div class="headline">Photo by Sean Foley</div><a href="https://unsplash.com/photos/aPDCEoW7B78" target="_blank">
              <div class="link">View on Unsplash</div></a>
          </div>
        </div>
        <div class="slide" style="background-image: url(https://alca.tv/static/u/b9669f2a-17fc-47dc-b6b5-3f863004efa8_opt.png)">

          <div class="icons">
            <div class="views"><i class="ion-eye"></i>928</div> 
            <div class="love"><i class="ion-heart"></i>198</div>
          </div>


          <div class="number">05</div>
          <div class="body">
            <div class="location">Shibuya-ku, Japan</div>
            <div class="headline">Photo by Alex Knight</div><a href="https://unsplash.com/photos/Akz00I_GGjU" target="_blank">
              <div class="link">View on Unsplash</div></a>
          </div>
        </div>
        <div class="slide" style="background-image: url(https://alca.tv/static/u/31979576-5060-4513-aae2-b379b87e7fe6_opt.png)">

          <div class="icons">
            <div class="views"><i class="ion-eye"></i>928</div> 
            <div class="love"><i class="ion-heart"></i>198</div>
          </div>

        <div class="number">06</div>
          <div class="body">
            <div class="location">Tokyo, Japan</div>
            <div class="headline">Photo by Benjamin Hung</div><a href="https://unsplash.com/photos/pTn26knnKVw" target="_blank">
              <div class="link">View on Unsplash</div></a>
          </div>
        </div>
        <div class="slide" style="background-image: url(https://alca.tv/static/u/429b83b8-1ad4-4450-b0de-0a0c1073cf1e_opt.jpg)">

          <div class="icons">
            <div class="views"><i class="ion-eye"></i>928</div> 
            <div class="love"><i class="ion-heart"></i>198</div>
          </div>

          <div class="number">07</div>
          <div class="body">
            <div class="location">Taipei City, Taiwan</div>
            <div class="headline">Photo by Jesus In Taiwan</div><a href="https://unsplash.com/photos/v63B_MUiFw8" target="_blank">
              <div class="link">View on Unsplash</div></a>
          </div>
        </div>
      </div>
      <div id="next-catch"></div>
      <div id="prev-catch"></div>
    </div>

  </div>
</template>


<script>
export default {
//     methods: {
//   goToPage(pageNumber = 0) {
// 	currentPage = Math.min(maxPageCount(), Math.max(0, pageNumber));
// 	console.log(currentPage);
// 	hero.style.setProperty('--page', currentPage);
// },
//   sleep(time) {
// 	return new Promise(res => setTimeout(res, time));
// },
//   hoverSlide(index) {
// 	index in slideChildren &&
// 		slideChildren[index].classList.add('hover');
// },
//   unhoverSlide(index) {
// 	index in slideChildren &&
// 		slideChildren[index].classList.remove('hover');
// },
//     },
}
</script>



<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&display=swap');


.icons{
  display: inline-block;
  margin-top: 10px;
  margin-left: 280px;
}
#hero-slides {
  
  --page: 0;
  height: 100vh;
  /* background: #25303c; */
  background : #ffffff;
  background: linear-gradient(90deg, #7bc4c4 0%, #7bc4c4 100%);
  
  
  overflow: hidden;
}
#hero-slides #header {
  height: 12vh;
  line-height: 12vh;
  padding: 0 3vw;
  position: relative;
  
}
#hero-slides #header #logo {
  font-size: 2.5vh;
  font-style: italic;
}
#hero-slides #header #logo:before {
  content: "The";
  text-transform: uppercase;
  font-weight: 100;
  margin-right: 0.4em;
}
#hero-slides #header #logo:after {
  content: "Wall";
  text-transform: uppercase;
  font-weight: 800;
}
#hero-slides #header #menu {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  cursor: pointer;
  padding: 0 3vw;
}
#hero-slides #header #menu:before {
  font-size: 1.75vh;
  content: "Play Demo";
  margin-right: 0.5em;
  text-transform: uppercase;
}
#hero-slides #header #menu #hamburger {
  display: inline-block;
}
#hero-slides #header #menu #hamburger .slice {
  background: white;
  height: 0.2vh;
  width: 1vw;
}
#hero-slides #header #menu #hamburger .slice:not(:last-child) {
  margin-bottom: 0.5vh;
}
#hero-slides #slides-cont {
  position: relative;
  --button-height: 6vh;
  --button-spacing: 0.2vh;
}
#hero-slides #slides-cont .button {
  width: 5vw;
  height: var(--button-height);
  
  background: #0d96f2;
  position: absolute;
  right: 5.375vw;
  top: 38vh;
  z-index: 100;
  cursor: pointer;
}
#hero-slides #slides-cont .button:before, #hero-slides #slides-cont .button:after {
  line-height: var(--button-height);
  position: absolute;
  margin-left: -0.25vw;
  pointer-events: none;
  transform: scale(0.75, 1.5);
  transition: 125ms ease-in-out;
}
#hero-slides #slides-cont .button:before {
  left: 50%;
}
#hero-slides #slides-cont .button:after {
  opacity: 0;
}
#hero-slides #slides-cont .button:hover:before, #hero-slides #slides-cont .button:hover:after {
  transition: 250ms ease-in-out;
}
#hero-slides #slides-cont .button:hover:before {
  opacity: 0;
}
#hero-slides #slides-cont .button:hover:after {
  left: 50% !important;
  opacity: 1;
}
#hero-slides #slides-cont #next {
  margin-top: calc(-1 * (var(--button-height) + var(--button-spacing)));
}
#hero-slides #slides-cont #next:before, #hero-slides #slides-cont #next:after {
  content: ">";
}
#hero-slides #slides-cont #next:after {
  left: 30%;
}
#hero-slides #slides-cont #next:hover:before {
  left: 70%;
}
#hero-slides #slides-cont #prev {
  margin-top: var(--button-spacing);
  opacity: calc(var(--page) + 0.5);
  transition: 500ms opacity;
}
#hero-slides #slides-cont #prev:before, #hero-slides #slides-cont #prev:after {
  content: "<";
}
#hero-slides #slides-cont #prev:after {
  left: 70%;
}
#hero-slides #slides-cont #prev:hover:before {
  left: 30%;
}
#hero-slides #slides-cont #next-catch,
#hero-slides #slides-cont #prev-catch {
  width: 10vw;
  height: 76vh;
  position: absolute;
  top: 0;
  z-index: 90;
}
#hero-slides #slides-cont #next-catch {
  right: 0;
}
#hero-slides #slides-cont #prev-catch {
  left: 0;
}
#hero-slides #slides {
  --slides-height: 76vh;
  width: auto;
  height: var(--slides-height);
  padding: 0 10vw;
  
  font-size: 0;
  white-space: nowrap;
  position: absolute;
  transform: translate3D(calc(var(--page) * -80vw), 0, 0);
  transition: 1500ms transform cubic-bezier(0.7, 0, 0.3, 1);
}
#hero-slides #slides .slide {
  display: inline-block;
  vertical-align: top;
  font-size: 1.5vw;
  width: 24em;
  height: var(--slides-height);
  margin: 0 1.333em;
  background: #101419;
  
  color: white;
  background-size: cover;
  background-position: center;
  white-space: normal;
  word-break: break-word;
  position: relative;
}
#hero-slides #slides .slide:before {
  content: "";
  display: block;
  background: linear-gradient(180deg, rgba(86, 97, 108, 0) 0%, rgba(33, 52, 69, 0.7) 100%);
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
#hero-slides #slides .slide .number {
  position: absolute;
  top: 2em;
  left: 2em;
  filter: drop-shadow(0 2px 1px rgba(0, 0, 0, 0.5));
}
#hero-slides #slides .slide .number, #hero-slides #slides .slide .number:before, #hero-slides #slides .slide .number:after {
  vertical-align: middle;
}
#hero-slides #slides .slide .number:before, #hero-slides #slides .slide .number:after {
  display: inline-block;
  content: "";
  height: 0.133em;
  margin-top: -0.2em;
  background: white;
}
#hero-slides #slides .slide .number:before {
  width: 0;
  margin-left: 0;
}
#hero-slides #slides .slide .number:after {
  width: 3em;
  margin-left: 1em;
}
#hero-slides #slides .slide .body {
  position: absolute;
  bottom: 2em;
  left: 2em;
  right: 2em;
  
}
#hero-slides #slides .slide .location,
#hero-slides #slides .slide .headline {
  
  position: relative;
  bottom: 0;
  cursor: default;
}
#hero-slides #slides .slide:before,
#hero-slides #slides .slide .number:before,
#hero-slides #slides .slide .number:after,
#hero-slides #slides .slide .location,
#hero-slides #slides .slide .headline,
#hero-slides #slides .slide .link {
  transition: 375ms cubic-bezier(0.7, 0, 0.3, 1);
}
#hero-slides #slides .slide .location {
  font-weight: 100;
  margin-bottom: 1.5em;
  transition-delay: 60ms;
}
#hero-slides #slides .slide .headline {
  font-size: 2.667em;
  font-weight: 900;
  transition-delay: 50ms;
}
#hero-slides #slides .slide .link {
  display: inline-block;
  background: #0d96f2;
  padding: 0.5em 1.25em;
  color: rgb(255, 255, 255);
  font-size: 1.33em;
  opacity: 0;
  position: absolute;
  bottom: -2em;
  pointer-events: none;
  transition-delay: 25ms;
}
#hero-slides #slides .slide.hover:before, #hero-slides #slides .slide:hover:before {
  opacity: 1;
}
#hero-slides #slides .slide.hover:before,
#hero-slides #slides .slide.hover .number:before,
#hero-slides #slides .slide.hover .number:after,
#hero-slides #slides .slide.hover .location,
#hero-slides #slides .slide.hover .headline,
#hero-slides #slides .slide.hover .link, #hero-slides #slides .slide:hover:before,
#hero-slides #slides .slide:hover .number:before,
#hero-slides #slides .slide:hover .number:after,
#hero-slides #slides .slide:hover .location,
#hero-slides #slides .slide:hover .headline,
#hero-slides #slides .slide:hover .link {
  transition: 500ms cubic-bezier(0.7, 0, 0.3, 1);
}
#hero-slides #slides .slide.hover .number:before, #hero-slides #slides .slide:hover .number:before {
  width: 3em;
  margin-right: 1em;
}
#hero-slides #slides .slide.hover .number:after, #hero-slides #slides .slide:hover .number:after {
  width: 0;
  margin-right: 0;
}
#hero-slides #slides .slide.hover .location, #hero-slides #slides .slide:hover .location {
  transition-delay: 0;
  bottom: 4em;
}
#hero-slides #slides .slide.hover .headline, #hero-slides #slides .slide:hover .headline {
  transition-delay: 100ms;
  bottom: 1.5em;
}
#hero-slides #slides .slide.hover .link, #hero-slides #slides .slide:hover .link {
  bottom: 0;
  opacity: 1;
  transition-delay: 250ms;
  pointer-events: auto;
}
#hero-slides #footer {
  height: 12vh;
  font-size: 1vh;
}
#hero-slides #footer #dribbble {
  border-radius: 2vh;
  position: absolute;
  bottom: 4vh;
  right: 4vh;
  transition: 300ms cubic-bezier(0.7, 0, 0.3, 1);
  padding-left: 1.5vh;
}
#hero-slides #footer #dribbble:before, #hero-slides #footer #dribbble:after {
  vertical-align: middle;
  transition: inherit;
}
#hero-slides #footer #dribbble:before {
  display: inline;
  content: "View original Dribbble";
  font-size: 2vh;
  opacity: 0;
  transform: translate3D(-200px, 0, 0);
}
#hero-slides #footer #dribbble:after {
  content: "";
  display: inline-block;
  width: 4vh;
  height: 4vh;
  margin-left: 1vh;
  background-image: url("https://alca.tv/static/u/82fde61b-28ef-4f17-976e-8f1abb5a1165.png");
  background-size: contain;
  background-position: center;
}
#hero-slides #footer #dribbble.hover, #hero-slides #footer #dribbble:hover {
  background: #e94e89;
}
#hero-slides #footer #dribbble.hover:before, #hero-slides #footer #dribbble:hover:before {
  opacity: 1;
  transform: translate3D(0, 0, 0);
  transition-delay: 50ms;
}
#hero-slides #footer #dribbble.hover:after, #hero-slides #footer #dribbble:hover:after {
  filter: saturate(0%) contrast(200%) brightness(200%) invert(100%);
}
@media (min-width: 1200px) and (max-width: 1699px) {
  body {
    --slides-per-page: 3;
  }
  #hero-slides #slides .slide {
    font-size: 1vw;
  }
}
@media (min-width: 1700px) {
  body {
    --slide-per-age: 4;
  }
  #hero-slides #slides .slide {
    font-size: 0.75vw;
  }
}
</style>