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
        <br/><br/><br/>
        

         <div class="tag-container2"
            v-for="(hash2, j) in hashs2"
            :key="j"
            >
        <div class="contents-tag2">
            <ul class="area2" id="region2">
                <li >
                    <button type="button"
                    @click="changePage3(hash2.hash_name)"
                    :style="hash2.clicked === true ? { 'background-color': '#7bc4c4', 'color' : 'white' } : null"
                    >
                    {{hash2.hash_name}}
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
import {findHashList, findHashList2, selectHashName,findLocationList} from '../service';
import EventBus from './EventBus'


export default {
    name: 'hashtag',
    data(){
        return{
            hashs2: [
                {
                    hash_no: "",
                    hash_name: "",
                    clicked: false,
                }
            ],
            hashs:[
                {
                    hash_no: "",
                    hash_name: "",
                    clicked: false,
                }
            ],
            hashsdata: [],
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
            findHashList2().then(response => this.hashs2 = response.data);

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
            this.hashsdata=ret2.data
            EventBus.$emit('changePage', ret2.data);
            
        },

        async changePage3(hash_name) {
            var ret2 = {};
            var ret3 = {};
            ret2 = await selectHashName({hash_name});
            // console.log(this.hashsdata) // 강남구
            // console.log(ret2.data) // 친구랑

            // #을 기준으로 쪼개고 #구이름 제일 앞이니까 #[0]비교해서 구이름만 비교
            // split로 hash_name 쪼갠다음에 ret2.data랑 this.hashsdata의 hash_name비교하고 ret2.data에 넣어주면 끝

            // const splitdata = ret2.data[0].hash_name.split(' ')
            // console.log(splitdata[0]);

            for (let i = 0; i < this.hashsdata.length; i++){ // 컨텐츠별 해시태그 갯수만큼 돌려줘야함
            const splitdata2 = this.hashsdata[i].hash_name.split(' ');
                for (let j = 0; j < 2; j++) {
                const splitdata = ret2.data[j].hash_name.split(' ');
                if (splitdata[0] == splitdata2[0]) {
                    ret3 = ret2.data[j]
                }
            }
        }
        console.log(123124)
            // console.log(this.splitdata);
            console.log(ret3)
            EventBus.$emit('changePage3', ret3);

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
    grid-template-columns:  1fr 1fr 1fr;
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