<template>
  <div class="gallery"  style="width: 25rem" >
    <div class="gallery-panel"  
         v-for="location in locations" :key="location.loca_no" @click="goDetail(location.loca_no)">
         <div class="gallery-panel2"
               v-for="hash in hashs" :key="hash.hash_name">
          <div class="contents">
          <img class="test" :src= "location.picture1"
           height="320"
           width="350">
          <h3 class="test-text">{{location.title}}</h3>
          <p class="test-text"> {{ hash.hash_name }}</p>
      </div>
    </div>
  </div>
  
  </div>
  
</template>

<script>
import {findLocationList, findHashName} from '../service';



export default {
    name: 'gallery',
    async created(){
      const ret = await findLocationList()      
      this.locations = ret.data;
    },

    // async created2(){
    //   const ret2 = await findHashName(this.location.loca_no)
    //   this.hashs = ret2.data;
    // },
    
    
    data() {
        return {
          hashs:[
            {
            hash_name: ''
          }
          ],
          locations: [
            {
              loca_no:'',
              title: "",
              picture1: "",
              picture2: "",
              picture3: "",
              picture4: "",
              picture5: "",
              context:""
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
     async goDetail(event){
        console.log(event);
      const ret2 = await findHashName(event)
      const {data} = ret2;
      console.log(findHashName({event}))
      console.log(data.hash_name);
      // this.hashs = ret2.data;
      this.$router.push({
      path: `/detail3/locationdetail/${event}`
      })
      },
    }
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
</style>