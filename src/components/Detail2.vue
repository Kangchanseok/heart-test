<template>
    <div class="hashtag" >
        
        <!-- <div class="tag-container"
            v-for="hash in hashs"
            :key="hash.hash_no"
            > -->
            
            <div class="tag-container"
            v-for="(hash, i) in hashs"
            :key="i"
            >
        <div class="contents-tag">
            <ul class="area" id="region">
                <li >
                    <button type="button"
                    @click="[changeColor(hash.hash_no, $event),changePage(hash.hash_name)]"
                    :style="hash.clicked === true ? { 'background-color': '#7bc4c4', 'color' : 'white' } : null"
                    >
                    {{hash.hash_name}}
                    <!-- v-bind:class="[index.isClicked ? 'select': '']" -->
                      <!-- :class= "{btn: changePage}" -->
                      <!-- :aria-pressed="changePage(hash.hash_name) ? 'true' : 'false'" -->
                     <!-- @click="changePage(hash.hash_name)"> -->
                    <!-- @click="isActives(hash.hash_no)"> -->
                    </button>
                </li>
            </ul>
            </div>
        </div>
        </div>
    
</template>
       
<script>
import {findHashList, selectHashName,findLocationList} from '../service';
import EventBus from './EventBus'


export default {
    name: 'hashtag',
    data(){
        return{
            hashs:[
                {
                    hash_no: "",
                    hash_name: "",
                    clicked: false,
                }
            ]
        }
    },
    async created() {
    //   findHashList().then(response => this.hashs = response.data);
      if (this.$route.query.locationhash != null || this.$route.query.searchhash != null) {
          var locationhash = null
          if (this.$route.query.locationhash != null) {
            locationhash = '#'+this.$route.query.locationhash
          }
          if (this.$route.query.searchhash != null) {
              locationhash = this.$route.query.searchhash
          }
        const ret10 = await findHashList({locationhash})
        for (let i = 0; i < 25; i++) { // 해쉬태그 넣을때마다 숫자 바꿔주자..
            if (ret10.data[i].hash_name == locationhash) {
                console.log(ret10.data[i].clicked)
                ret10.data[i].clicked = true
            }
            // this.hashs = ret10.data[i]
        }
        this.hashs = ret10.data
        } else {
            findHashList().then(response => this.hashs = response.data);

        }
    //    EventBus.$on('changePage2', (name) =>{
    //         this.name = name;
    //         }) 
      },
    methods:{
        changeColor(e) {
            // const count = true
            if (this.hashs[e-1].clicked === true) {
                this.hashs[e-1].clicked = false
            } else {
                for (let i = 0; i < 25; i++) {
                    this.hashs[i].clicked = false
                }
                this.hashs[e-1].clicked = true
            } 
        },

        async changePage(hash_name){
            var ret2 = {};
            var count = 0
            console.log(count)
            for (let i = 0; i < 25; i++) {
            if (this.hashs[i].clicked == true) {
                count += 1
                console.log(this.hashs[i].clicked)
            }
        }
        console.log(count)
        console.log(hash_name)
        if (count == 0) {
                ret2 = await findLocationList();
            } else if (count == 1) {
                ret2 = await selectHashName({hash_name});
            }
            EventBus.$emit('changePage', ret2.data);
            
        },
        // changePage11(){
        //      findHashList().then(response => this.hashs = response.data);
        // }
        

        // async changePage(hash_name){
        //     // this.$store.commit('choiceSearch', hash_name)
        //     const ret = await selectHashName({hash_name})
        //     this.$store.commit('choiceSearch', ret.data)
        //     const test = this.$store.getters[sibal()]
            
            // var ret2 = ret.data;
            //  console.log(ret2);
            // this.$store.commit('choiceSearch', hash_name)
            // const test = this.$store.getters['justtest']

           
        // }
    }
}

</script>


<style scoped>

.hashtag{
    background-color: rgb(243, 243, 243);
    border-radius: 10px;
    padding: 8px;
    position: absolute;
    left: 1200px;
    top: 300px;

    display: grid;
    grid-template-columns:  1fr 1fr;
}


.contents-tag li button {
    padding: 7px 20px;
    /* border-top-left-radius: 35px;
    border-top-right-radius: 35px;
    border-bottom-left-radius: 35px;
    border-bottom-right-radius: 35px; */
    border:none;
}

ul{
    display: block;
}

li{
    list-style: none;
}

.btn{
    border: 0 none;
    cursor: pointer;
    
}
.btn:hover{
    color: #ffffff;
    background-color: #7bc4c4;
}
.btn{
    background-color: #7bc4c4;
}
.active {
    color: blue
}
</style>