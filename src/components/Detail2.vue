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
                    @click="[changePage(hash.hash_name), changeColor(hash.hash_no, $event)]"
                    :style="hash.clicked === true ? { 'background-color': '#7bc4c4', 'color' : 'white' } : null">
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
            // activeItem: true,
            // isClicked: false,
            // textColor: false,
            // clicked: false,
            // isclicked: false,
            hashs:[
                {
                    hash_no: "",
                    hash_name: "",
                    clicked: false,
                }
            ]
        }
    },
    created() {
      findHashList().then(response => this.hashs = response.data);

       EventBus.$on('changePage2', (name) =>{
            this.name = name;
            // this.locations = this.name;
            console.log(name);
            console.log(this.name)
            // changeColor(hash_no)
            
            // console.log(changeColor(hash_no))
            })  
      },
    methods:{
        // refreshValue: function(element) {
        // this.hashs.forEach((e, i) => {
        //     if (e.hash_no == element.hash_no) {
        //         console.log(this.hashs[i].isClicked)
        //         this.hash[i].isClicked = true
        //     }
        // });
        // selectItem(i) {
                // this.isClicked = !this.isClicked
        //         this.$set(this.isClicked, i, true) = !this.$set(this.isClicked, i, false)
        // },

        // changeCheck(index){
        //     console.log(this.list[index])
        //     this.list[index] = !this.list[index];
        // },
        changeColor: function(e) {
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
            // this.isclicked = !this.isclicked
            // // this.$store.commit('hash', hash_name)
            const ret2 = await selectHashName({hash_name});
            // // this.$store.commit('hash', ret2.data)
            // // console.log(ret2.data);
            EventBus.$emit('changePage', ret2.data);
        
        }
        

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