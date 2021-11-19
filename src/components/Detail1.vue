<template>
  <div class="gallery"  style="width: 25rem" >
    <div class="gallery-panel"  
         v-for="location in locations" :key="location.loca_no" @click="goDetail(location.loca_no)">
         <!-- <div class="gallery-panel2"
               v-for="hash in hashs" :key="hash.hash_name"> -->
          <div class="contents">
          <img class="test" :src= "location.picture1"
           height="320"
           width="350">
          <h3 class="test-text">{{location.title}}</h3>
          
          <p>{{ location.hash_name }}</p>
          <!-- <p class="test-text"> {{ hash.hash_name }}</p> -->
          
      </div>
    </div>
  </div>
  
  <!-- </div> -->
  
</template>

<script>
import {findLocationList, findHashName} from '../service';



export default {
  // location
  // connection
  // hashtag
    name: 'gallery',

    async created(){
      // var test_li = {}
      var i = 0
      var li = []
      const ret = await findLocationList()
      const {data} = ret;

      console.log(ret.data[0].hash_name)
      this.locations = ret.data;
      // for (i = 0; i<= 10; i++) {
      //   test_li = created2(data[i].loca_no)
      // }
      // console.log(test_li)
      // console.log(data[0].loca_no);

      // const ret2 = await findHashName(data[0].loca_no);
      // const {data2} = ret2;
      // this.hashs = ret2.data2;
      // console.log(data2);

      // console.log(data[1].loca_no);
      // console.log(data[0].loca_no);
    },
    // created2(){
    //   const ret = findHashName()
    //   const {data} = ret;
    //   this.hashs = ret.data;
    //   console.log(123);
    // },

    
    
    
    data() {
        return {
          // hashs:[
          //   {
          //   // hash_no:'',
          //   hash_name: ''
          // }
          // ],
          locations: [
            {
              loca_no:"",
              title: "",
              picture1: "",
              // picture2: "",
              // picture3: "",
              // picture4: "",
              // picture5: "",
              // context:"",
              // tag:"",
              hash_name:""
            }
          ],
          // locations:[]
        };
    },
    // created() {
    //   findLocationList().then(
    //   response =>
    //   this.locations = response.data
    //   );
    // },
    methods:{
     async goDetail(loca_no){
      const ret2 = await findHashName({loca_no})
      console.log(await findHashName({loca_no}))
      const {data} = ret2;
      this.hashs = data.hash_name;
      console.log(data)
      this.$router.push({
      path: `/detail3/locationdetail/${loca_no}`
      })
      },
    }
};

</script>

<style >

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

/* h3 {
    display: inline-block;
} */
</style>