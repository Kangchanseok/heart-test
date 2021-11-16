<template>
  <div class="gallery"  style="width: 25rem" >
    <div class="gallery-panel"  
         v-for="location in locations" :key="location.loca_no">
        <div class="contents">
          <img class="test" :src= "location.picture1"
           height="320"
           width="350"
           >

           <div class="test-text2" style="width:500px height:500px" @click="goDetail">{{location.loca_no}}</div>
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
              loca_no:'',
              title: "",
              picture1: "",
              picture2: "",
              picture3: "",
              picture4: "",
              picture5: "",
              context:"",
              tag: ""
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
      goDetail(event){
        // console.log(document.addEventListener('click', this.goDetail))
        
        // console.log(event.target.innerText);
        // var test = document.querySelector(".test-text2")
        console.log(event)
        var locaNo = event.target.innerText;
        // var locaNo = event.currentTarget.className;        
        this.$router.push({
        path: `/detail3/locationdetail/${locaNo}`
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