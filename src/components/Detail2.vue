<template>
    <div class="hashtag" >
        <div class="tag-container"
            v-for="tag in tags"
            :key="tag.id">
        <div class="contents-tag">
            <ul class="area" id="region">
                <li>
                    <button type="button" class="btn">
                        <span>{{tag.name}}</span>
                    </button>
                </li>
            </ul>


        </div>


        </div>
        
    </div>
</template>




<script>
export default {
    name: 'hashtag',
    props: ["id","name","title"],
    data(){
        return{
            tags:[
                {
                    id: "1",
                    name: "강남구",
                    title: ""
                },
                {
                    id: "2",
                    name: "도봉구",
                    title: ""
                },
                {
                    id: "3",
                    name: "동대문구",
                    title: ""
                },
                {
                    id: "4",
                    name: "동작구",
                    title: ""
                },
                {
                    id: "5",
                    name: "마포구",
                    title: ""
                },
                {
                    id: "6",
                    name: "서대문구",
                    title: ""
                },
                {
                    id: "7",
                    name: "서초구",
                    title: ""
                },
                {
                    id: "8",
                    name: "성동구",
                    title: ""
                },
                {
                    id: "9",
                    name: "성북구",
                    title: ""
                },
                {
                    id: "10",
                    name: "송파구",
                    title: ""
                },
                {
                    id: "11",
                    name: "양천구",
                    title: ""
                },
                {
                    id: "12",
                    name: "강동구",
                    title: ""
                },
                {
                    id: "13",
                    name: "영등포구",
                    title: ""
                },
                {
                    id: "14",
                    name: "용산구",
                    title: ""
                },
                {
                    id: "15",
                    name: "은평구",
                    title: ""
                },
                {
                    id: "16",
                    name: "종로구",
                    title: ""
                },
                {
                    id: "17",
                    name: "중구",
                    title: ""
                },
                {
                    id: "18",
                    name: "중랑구",
                    title: ""
                },
                {
                    id: "19",
                    name: "강북구",
                    title: ""
                },
                {
                    id: "20",
                    name: "강서구",
                    title: ""
                },
                {
                    id: "21",
                    name: "관악구",
                    title: ""
                },
                {
                    id: "22",
                    name: "광진구",
                    title: ""
                },
                {
                    id: "23",
                    name: "구로구",
                    title: ""
                },
                {
                    id: "24",
                    name: "금천구",
                    title: ""
                },
                {
                    id: "25",
                    name: "노원구",
                    title: ""
                },





            ]
        }
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


</style>