<template>
  <div class="gallery" style="width: 25rem">
    <div class="gallery-panel"
         v-for="user in users" :key="user.loca_no">{{user.title}}
        <div class="contents">
           
            <img 
            class="test"
            :src="photo.img"
            @click="link"
            height="320"
            width="350"
            />
        
            <h3 class="test-text">{{ photo.title }}</h3>
            <p class="test-text"> {{ photo.tag }}</p>

      <!-- <button class="like" v-on:click="like" >
        <svg class="heart"  id="heart" xmlns="http://www.w3.org/2000/svg" 
            width="20"  viewBox="0 0 32 31"><title>heart</title><g  stroke-width="2">
            <path id="heart" d="M10.55 2.31a8.07 8.07 0 0 0-8.07 8.08c0 3.15 2.16 5.66 4.28 7.61 3.35 3.44 6.46 7.37 9.59 11.08 
            2.92-3.86 5.48-7.41 8.91-11.36 1.72-2.24 4.71-4.18 4.7-7.33a8.07 8.07 0 0 0-0.79-3.49l0.02-0.06-0.05-0.01a8.07 8.07 0 0 0-12.85-2.26l-0.12 0.02a8.07 8.07 0 0 0-5.62-2.28z" 
            stroke-linecap="round" stroke-linejoin="round" v-bind:fill="like_color"></path></g></svg>
        <span></span>
      </button> -->



        </div>
    
    </div>
  </div>
</template>

<script>
// 백 -> store -> 해당 페이지 data -> 페이지 렌더링
import {findLocationList} from '../service';

export default {
    name: 'gallery',
    // props: ["img", "title","tag","link"],
    data() {
        return {
          users: []
            // liked:false,
            // like_color:'',
            // photos: [
            //     {
            //         img: "https://i.postimg.cc/635Gr8rN/Deoksugung.jpg",
            //         title: this.title,
            //         tag: "#궁궐 #가을여행 #경복궁 #종로구 #단풍",
            //         link: "https://unsplash.com/photos/Y7IilZ5VLdA"
            //     },
            //     {
            //         img: "https://i.postimg.cc/k5w2g7kY/Gyeonghuigung.jpg",
            //         title: "인생샷 찍기 좋은 경복궁 ",
            //         tag: "#종로구 #궁궐 #청계천 #야간개장",
            //     },
            //     {
            //         img: "https://i.postimg.cc/W15D2NRW/cait-ellis-Erld-XTq-Xv0-unsplash.jpg",
            //         title: "명동엔 이제 볼게 없나",
            //         tag: "#명동성당 #중구 ",
            //     },
            //     {
            //         img: "https://i.postimg.cc/fTwTkGf6/robson-hatsukami-morgan-ku9-Ftte6-Ymo-unsplash.jpg",
            //         title: "Bundo Kim"
            //     },
            //     {
            //         img: "https://images.unsplash.com/photo-1554296759-ec7c058ecf9c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=872&q=80",
            //         title: "Bundo Kim"
            //     },
            //     {
            //         img: "https://images.unsplash.com/photo-1546385040-d48180ede560?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2231&q=80",
            //         title: "Bundo Kim"
            //     },
            //     {
            //         img: "https://images.unsplash.com/photo-1549221428-495f00892696?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2174&q=80",
            //         title: "Bundo Kim"
            //     },
            //     {
            //         img: "https://images.unsplash.com/photo-1526199119161-4be1e3368d52?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2874&q=80",
            //         title: "Bundo Kim"
            //     },
            //     {
            //         img: "https://images.unsplash.com/photo-1601900264210-57ec0215c3b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80",
            //         title: "Bundo Kim"
            //     },
            //     {
            //         img: "https://images.unsplash.com/photo-1628532430664-ef7e7b7b941f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80",
            //         title: "Bundo Kim"
            //     },
            //     {
            //         img: "https://images.unsplash.com/photo-1540998263728-032f59903a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
            //         title: "Bundo Kim"
            //     },
            //     {
            //         img: "https://images.unsplash.com/photo-1522641258421-11cd8678f308?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80",
            //         title: "Bundo Kim"
            //     },
            // ]
        }
    },
    created() {
      findLocationList().then(response => this.users = response.data).catch();
    },
  // methods: {
  //   like(){
  //    if(this.liked === false){
  //      this.like_color = 'rgb(255, 54, 54)'
  //      this.liked = true
  //    }else{
  //      this.like_color = '',
  //      this.liked = false
  //    }
  //   }
  // }
};

</script>

<style>

.gallery {
    
    flex-wrap: wrap;
    padding: 3rem 0;
    
    display: grid;
    grid-template-columns:  1fr 1fr 1fr;
}

.contents{
    margin: 5px;
    border: 1px solid rgb(196, 196, 196);
    cursor: pointer;
    
}




h3 {
    display: inline-block;
}



/* .like a,
button {
  color: rgba(0,0,0,0.7);
}

button {
  background: none;
  font: inherit;
  padding: 0.3em 1em;
  display:flex;
  align-items:center;
  transition:0.1s ease;
}
  
  button:hover{
    background:rgba(0,0,0,0.03);
  }



.heart{
  transition:all .1s ease;
  stroke:#ff3636;
  fill:none;
  margin-right:10px;
}



button:active .heart{
  transform:scale(0.9)
} */


</style>