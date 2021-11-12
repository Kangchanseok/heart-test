<template>
    <div class="hashtag" >
        <div class="tag-container"
            v-for="hash in hashs"
            :key="hash.hash_no">
        <div class="contents-tag">
            <ul class="area" id="region">
                <li>
                    <button type="button" :class= "{btn: isActive}" @click="isActive = !isActive" :aria-pressed= "isActive ? 'true' : 'false' ">
                        <span >{{hash.hash_name}}</span>
                    </button>
                </li>
            </ul>
        </div>
        </div>
    </div>
</template>




<script>
import {findHashList} from '../service';

export default {
    name: 'hashtag',
    // props: ["id","name","title"],
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
    created() {
      findHashList().then(response => this.hashs = response.data);
}
}
</script>


<style scoped>

.hashtag{
    background-color: rgb(243, 243, 243);
    border-radius: 10px;
    padding: 8px;
    position: absolute;
    left: 1150px;
    top: 140px;

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