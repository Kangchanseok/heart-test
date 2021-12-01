<template>
  <div class="gallery" style="width: 25rem" >
    <div class="gallery-panel" 
         v-for="location in locations" :key="location.loca_no" 
         @click="goDetail(location.loca_no)"
         >
          <div class="contents">
            <!--  v-if="location.loca_no != ''" -->
          <img class="test" :src= "location.picture1"
           height="320"
           width="350">
          <h3 class="test-text">{{location.title}}</h3>
          <p>{{ location.hash_name }}</p>
      </div>
    </div>
    <infinite-loading @infinite="infiniteHandler" spinner="bubbles">
      <div slot="no-more" style="color:rgb(102,102,102); font-size: 14px; padding: 10px 0px;">No More</div>
      <div slot="no-results" style="color:rgb(102,102,102); font-size: 14px; padding: 10px 0px;">결과가 없어용 ㅠㅠ</div>
    </infinite-loading>
  </div>  
</template>

<script>
import {findLocationList, findHashName} from '../service';
import EventBus from './EventBus'
import InfiniteLoading from 'vue-infinite-loading'
import axios from 'axios';



export default {
    name: 'gallery',
    components: {
      InfiniteLoading
    },

    async created(){
      // created 초기값 지우면 무한반복은 안됨
      // 대신 지우면 null값이 들어간 요소가 하나 나옴
      // 지도나 검색창으로 이동시 기존데이터와 무한스크롤같이 나옴
      // 새로고침하면 기존 데이터 null값으로 변함
      // const ret = await findLocationList();
      // this.locations = ret.data;
      // 지도 router
        if (this.$route.query.hash_name != null) {
          this.locations = this.$route.query.hash_name
        }
      // 해시태그 선택
      await EventBus.$on('changePage', (ret2) =>{
          this.ret2 = ret2;
          this.locations = this.ret2;
      })
    },
         
    data() {
        return {
          startNo:0,
          locations: [
            // {
            //   loca_no:"",
            //   title: "",
            //   picture1: "",
            //   // picture2: "",
            //   // picture3: "",
            //   // picture4: "",
            //   // picture5: "",
            //   // context:"",
            //   // tag:"",
            //   hash_name:"",
            //   hash_no:''
            // }
          ],
        }
    },
    methods:{
      infiniteHandler($state){
        axios.get("http://127.0.0.1:3000/find/location_list" ,{
          params:{
            "startNo":"this.startNo"
          }
        }).then((res) => {
          setTimeout(() =>{
            if(res.data.length){
              this.locations = this.locations.concat(res.data);
              $state.loaded();
              this.startNo += 1
              if(this.locations.length / 10 < 1){
                $state.complete(); // 데이터 없으면 로딩 끝?
              }
            } else {
              $state.complete();
            }
          }, 1000)
        }).catch(err => {
          console.error(err);
        });
      },

     async goDetail(loca_no){
      // console.log(this.$store.getters['choiceSearch'])
      const ret2 = await findHashName({loca_no});
      const {data} = ret2;
      this.hashs = data.hash_name;
      this.$router.push({
      path: `/detail3/locationdetail/${loca_no}`
      })
      },
      
    },
};


</script>

<style >

.gallery {
    flex-wrap: wrap;
    padding: 3rem 0;
    display: grid;
    grid-template-columns:  1fr 1fr 1fr;
    margin-top: 100px;
}

.contents{
    margin: 5px;
    border: 1px solid rgb(196, 196, 196);
    cursor: pointer;
}

/* h3 {
    display: inline-block;
} */
</style>