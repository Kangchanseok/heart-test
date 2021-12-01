<template>
  <div class="test">
    <div>
      <div class="test-title">
          <h1>{{title}}</h1>
          <p>{{context1}}</p>
      </div>

<div class="line"></div>
        <div class="contents-Detail" v-if="picture6 != null">
            <img 
            class="test"
            :src= "picture2"
            height="500"
            width="600"
            />
            <div>{{context2}}</div>
            <img 
            class="test"
            :src= "picture3"
            height="500"
            width="600"
            />
            <div>{{context3}}</div>
            <img 
            class="test"
            :src= "picture4"
            height="500"
            width="600"
            />
            <div>{{context4}}</div>
            <img 
            class="test"
            :src= "picture5"
            height="500"
            width="600"
            />
            <div>{{context5}}</div>
            <img 
            class="test"
            :src= "picture6"
            height="500"
            width="600"
            />
            <div>{{context6}}</div>
        </div>
   

    <div style="border: 3px solid black; padding: 100px; margin-top: 20px;
    margin-left:100px; margin-right:100px; ">{{context7}}</div>
    <br/>
    <br/>
    <div class="line"></div>

    <div class="content-detail-comment">
        <LocationCommentList :locaNo="locaNo"/>
      </div>

 
     </div>
  </div>
</template>

<script>
import Backtotop from '@/components/BackToTop.vue';
import {findLocation} from '../service';
import LocationCommentList from './LocationCommentList';

export default {
    name: 'LocationDetail',
    components:{
        Backtotop,
        LocationCommentList
    },
    async created(){
      const ret = await findLocation({loca_no: Number(this.$route.params.locaNo)})
      console.log(this.$route.params.locaNo)
      const {data} = ret;
      this.title = data.title;
      this.picture1 = data.picture1;
      this.picture2 = data.picture2;
      this.picture3 = data.picture3;
      this.picture4 = data.picture4;
      this.picture5 = data.picture5;
      this.context1 = data.context1;
      this.context2 = data.context2;
      this.context3 = data.context3;
      this.context4 = data.context4;
      this.context5 = data.context5;
      this.picture6 = data.picture6;
      this.context6 = data.context6;
      this.context7 = data.context7;
      this.tag = data.tag;
      
    },
    data(){
      const locaNo = Number(this.$route.params.locaNo);
        return{
          locaNo: locaNo,
          title: '',
          picture1: "",
          picture2:'',
          picture3:'',
          picture4:'',
          picture5:'',
          context1: '',
          context2:'',
          context3:'',
          context4:'',
          context5:'',
          picture6:'',
          context6:'',
          context7:'',
          tag:''            
        };
    },
    // created(){
    //   findLocationDetailList().then(response => this.data2 = response.data);
    // },
        methods: {
      
    }
};
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
.content-detail-comment {
  border: 1px solid black;
  margin-top: 1rem;
  padding: 2rem;
  margin-left: 100px;
  margin-right: 100px;
}


</style>