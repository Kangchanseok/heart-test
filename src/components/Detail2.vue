<template>
    <div class="hashtag" >
        
        <div class="tag-container"
            v-for="hash in hashs"
            :key="hash.hash_no">
            
        <div class="contents-tag">
            <ul class="area" id="region">
                <li>
                    <button type="button" 
                    :class= "{btn: isActive}"
                    @click="changePage(hash.hash_name)"> 
                    <!-- @click="isActives(hash.hash_no)"> -->
                        <span >{{hash.hash_name}}</span>
                    </button>
                </li>
            </ul>
            </div>
        </div>
        </div>
        
    
</template>




<script>
import {findHashList, selectHashName} from '../service';

export default {
    name: 'hashtag',
    data(){
        return{
            isActive:false,
            hashs:[
                {
                    hash_no: "",
                    hash_name: "",
                }
            ]
        }
    },
    hashlist() {
        // 반복문
        // 조건
        // 나오는 결과값만 
    },
    created() {
      findHashList().then(response => this.hashs = response.data);
      },
    methods:{
        isActives(e) {
            
            // console.log(e)
            //    console.log(event.target.innerText);
        },
        async changePage(hash_name){
            const ret = await selectHashName({hash_name})
            const {data} = ret;
            console.log({data})
            
        }
               
            // 비동기 써서 데이터 넘어오면 바껴야댐
            // if (event.target  '#') {
            //     console.log(123);
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


</style>