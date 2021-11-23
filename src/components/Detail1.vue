<template>
  <div class="gallery"  style="width: 25rem" >
    <div class="gallery-panel"  
         v-for="location in locations" :key="location.loca_no" 
         @click="goDetail(location.loca_no)">
          <div class="contents">
          <img class="test" :src= "location.picture1"
           height="320"
           width="350">
          <h3 class="test-text">{{location.title}}</h3>
          <p>{{ location.hash_name }}</p>          
      </div>
    </div>
  </div>  
</template>

<script>
import {findLocationList, findHashName, selectHashName} from '../service';
import EventBus from './EventBus'



export default {
    name: 'gallery',
    async created(){
        const ret = await findLocationList();
        this.locations = ret.data;
        // return locations;
      // },
      // mounted(){
      EventBus.$on('changePage', (hash_name) => {
        this.hash_name = hash_name;
        const res2 = selectHashName({hash_name}).then(function(res){
          return res.data;
        }).catch(function(error){
          console.log(error);
        });
        console.log(res2);
        console.log(this.locations);
        // console.log(ret.data);
        this.locations = res2;
        return res2;
      })
      },
         
    data() {
        return {
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
          // locations:[
          //   {
          //     loca_no:"",
          //     title: "",
          //     picture1: "",
          //     // picture2: "",
          //     // picture3: "",
          //     // picture4: "",
          //     // picture5: "",
          //     // context:"",
          //     // tag:"",
          //     hash_name:""
          //   }
          // ]
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
      // console.log(await findHashName({loca_no}))
      const {data} = ret2;
      this.hashs = data.hash_name;
      // console.log(data)
      this.$router.push({
      path: `/detail3/locationdetail/${loca_no}`
      })
      },
      ham1(){
        created()
      },
      ham2(){
        mounted()
      }
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