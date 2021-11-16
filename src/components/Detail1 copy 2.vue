<template>
  <div class="gallery" style="width: 25rem">
    <div class="gallery-panel"
         v-for="location in locations" :key="location.loca_no">
        <div class="contents">
          <img class="test" :src= "location.picture"
           height="320"
           width="350"
           @click="goDetail">

           
            <h3 class="test-text">{{location.title}}</h3>
            <p class="test-text"> {{ location.tag }}</p>
      
        </div>
    </div>
  </div>
</template>

<script>
import {findLocationList} from '../service';


export default {
    name: 'gallery',
    async created(){
      const ret = await findLocationList()
      this.locations = ret.data;
    },
    data() {
        return {
          locations: [
            {
              loca_no: "",
              title: "",
              picture: "",
              tag: "#강남구 #친구랑"
            }
          ],
          locations:[]
        };
    },
    // created() {
    //   findLocationList().then(
    //   response =>
    //   this.locations = response.data
    //   );
    // },
    methods:{
      goDetail(location){
        this.$router.push({
        path: `/detail3/locationdetail/${location.loca_no}`
      })
      }
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