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
                    @click="changePage(hash.hash_name) , changeColor(hash.hash_no, $event)"
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
import {findHashList, selectHashName} from '../service';
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
    // locationhash
    // searchhash
    // console.log(this.$route.query.locationhash)
    // console.log(this.$route.query.searchhash)
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
        for (let i = 0; i < 25; i++) {
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
       EventBus.$on('changePage2', (name) =>{
            this.name = name;
            })  
      },
    methods:{
        changeColor(e) {
            // const count = true
            if (this.hashs[e-1].clicked === true) {
                this.hashs[e-1].clicked = false
            } else {
                this.hashs[e-1].clicked = true
            }
            // console.log(clicked)
            // this.$set(this.clicked, e, 'true')
        },

        async changePage(hash_name){
            // const test = []
            // if (test in hash_name) {
                
            // }
            // else {}
            // test.append(hash_name)
            const ret2 = await selectHashName({hash_name});
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
    border-top-left-radius: 35px;
    border-top-right-radius: 35px;
    border-bottom-left-radius: 35px;
    border-bottom-right-radius: 35px;
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