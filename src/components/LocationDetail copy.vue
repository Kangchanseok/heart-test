<template>
  <div class="test3">
    <div v-for="locationdetail in locationdetails" :key="locationdetail.detail_no">
      <div class="test-title">
          <h1>{{locationdetail.title}}</h1>
          <p>상세페이지 어떻게 꾸미지 망했당</p>
      </div>

<div class="line"></div>

    <!-- <div class="test-contents"
         v-for="img in imgs"
         :key="img.id"> -->
        <div class="contents-Detail">
            <img 
            class="test"
            :src= "locationdetail.picture1"
            height="500"
            width="600"
            />
            <img 
            class="test"
            :src= "locationdetail.picture2"
            height="500"
            width="600"
            />
            <img 
            class="test"
            :src= "locationdetail.picture3"
            height="500"
            width="600"
            />
        </div>
    <!-- </div> -->
    
    <Backtotop />
    

    <div class="test-taglist">
        <ul class="taglist">
            <li>
                <a href="/about"><span>#여행</span></a>
            </li>
            <li>
                <a href="/about"><span>#캠핑</span></a>
            </li>
            <li>
                <a href="/about"><span>#가을</span></a>
            </li>
            <li>
                <a href="/about"><span>#겨울</span></a>
            </li>
            <li>
                <a href="/about"><span>#인생샷</span></a>
            </li>
            <li>
                <a href="/about"><span>#어떻게 꾸며야할까아아아아</span></a>
            </li>
        </ul>
    </div>

    <div style="border: 3px solid black; padding: 100px; ">{{locationdetail.context}}</div>
    <br/>
    <br/>
    <div class="line"></div>

 <div class="comment-box" id="comment">
        <div class="loader" v-show="loading" >
          <span class="spinner"></span>  
        </div>
        
        <form action="" method="post" @submit.prevent="submit">
          <textarea v-model="data.message" class="input-message" name="message" id="message" rows="3" placeholder="Your comment..." required></textarea>
          <input v-model="data.name" class="input-name" type="text" name="name" placeholder="Your Name" required>
          <input :disabled="loading" type="submit" value="Comment">
        </form>
    </div>

      
    </div>
  </div>



</template>

<script>
import Backtotop from '@/components/BackToTop.vue';
import {findLocationDetailList, findLocation} from '../service';



export default {
    name: 'test3',
    components:{
        Backtotop,
    },
    async created2(){
      const response = await findLocation({detail_no: Number(this.$route.params.detailNo)})
      const {data2} = response;
      this.title = data2.title;
      this.picture1 = data2.picture1;
      this.picture1 = data2.picture2;
      this.picture1 = data2.picture3;
      this.picture1 = data2.picture4;
      this.picture1 = data2.picture5;
      this.context = data2.context;
    },
    data(){
      const detailNo = Number(this.$route.params.detailNo);
        return{
            loading: false,
            data: {},
            locationdetails: [
                {
                 detailNo: detailNo,
                 title:"",
                 picture1:"",
                 picture2:"",
                 picture3:"",
                 picture4:"",
                 picture5:"",
                 context:""   
                }
            ]
        }
    },
    created(){
      findLocationDetailList().then(response => this.locationdetails = response.data);
    },
        methods: {
      submit() {
        this.loading = true;
        // Save Comment
        this.$http.post('http://localhost:3434', this.data).then((response) => {
          // success callback
          // fire event for comment
          this.$emit('commented', response.data);  
          // Clear the message
          this.data.message = "";
          this.loading = false;
        // }, //(response) => {
        //   // error callback
        //   this.loading = false;
        });
      }
    }
}
</script>

<style>

.test-title h1 {
    padding-top: 100px;

    
}

.test-title p {
    padding-bottom: 70px;

    
}


.contents3 h2{
    padding: 100px;
    padding-bottom: 20px;

    
}


.test-taglist{
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    padding: 0;
    z-index: 1;
    display: block;
    padding-bottom: 10px;
    left: 380px;
}


.test-taglist ul{
    padding: 15px 0 0 15px;
    list-style: none;
    
}

.test-taglist ul li {
    float: left;
    width: auto;
    padding: 5px;
    
}

.test-taglist ul li a:hover {
    color: #ffffff;
    background-color: #7bc4c4;
}

.test-taglist ul li a span{
    display: inline-block;
    height: 38px;
    line-height: 38px;
    padding: 0 20px;
}


.test-taglist ul li a {
    display: inline-block;
    overflow: hidden;
    background: #fff;
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    color: #777;
    border: 1px solid #d8d7d7;
    border-radius: 7px;
    
}

a:link{
    text-decoration: none;
    
}

.line{
    width: 100%;
    height: 2px;
    background:rgb(187, 187, 187);
    padding-bottom: 2px;
    margin-bottom: 10px;
}

/* 댓글창  */
  .comment-box {
    background-color: #FFF; 
    width: 50%;
    margin: auto;
    /* box-shadow: 0 4px 8px rgba(0,0,0, 0.1); */
    padding: 100px;
  }
  .comment-box form {
    padding: 1rem;
  }
  .comment-box input, .comment-box textarea {
    font-size: .8em;
    width: 97.3%;
    padding: .6em;
    border: 1px solid #EEE;
    background-color: #f7f7f7;
    display: block;
    margin-bottom: 1em;
    font-family: 'Raleway', sans-serif;
    transition: all ease 0.3s;
  }
  .comment-box input:focus, .comment-box textarea:focus {
    border-color: #47b784;
    outline: none;
    box-shadow: inset 0 0 3px #DDD;
  }
  .comment-box input[type="submit"] {
    margin-bottom: 0;
    width: 30%;
    background-color: #47b784;
    color: #FFF;
    border-color: #47b784;
    font-weight: bold;
    text-transform: uppercase;
  }
  .comment-box input[type="submit"]:focus {
    background-color: #36495d;
  }
  .comment-box input[type="submit"]:disabled {
    opacity: 0.6
  }
  #comment {
    position: relative;
  }
  #comment .spinner {
    margin-top: 5em;
    z-index: 999;
  }
  #comment .loader {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0.8);
    z-index: 2;
  }

</style>