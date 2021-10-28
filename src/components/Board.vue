<template >
  
  <div>
     <b-container> <!-- fields 속성을 사용해서 보여주고 싶은 컬럼만 사용 가능! -->
     <div class="boardName">고객센터</div>
    <b-table class="board" 
     striped hover 
    :per-page="perPage" 
    :current-page="currentPage" 
    :items="items" 
    :fields="fields" 
    @row-clicked="rowClick"></b-table>
     </b-container>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      align="center"
    ></b-pagination>

     <b-button variant="outline-primary" @click="writeContent">글쓰기</b-button>
  </div>

</template>

<script>
import data from '@/data';
import {findContentList} from '../service';


export default {
  name: 'Board',
  async created(){
    const ret = await findContentList()
    this.items = ret.data;
  },
  data() {
    // 글번호 역순 정렬
// let items = data.Content.sort((a,b) => {return b.content_no - a.content_no})
// // map으로 모든 객체배열에 user_name을 추가해주고...
// // filter로 user_no 가져와서 no랑 name 연결해주는 작업
// // 좀 더 숙련해야할듯
// items = items.map(contentItem => {return {...contentItem, user_name: data.User.filter(userItem => userItem.user_no === contentItem.user_no)[0].name}})
    return {
      currentPage: 1,
      perPage: 10,
      fields: [
        {
          key: 'content_no',
          label: '글번호',
        },
        {
          key: 'title',
          label: '제목',
        },
        // {
        //   key: 'regdate',
        //   label: '등록일'
        // },
        {
          key: 'user_name',
          label: '작성자'
        },
      ],
      items: []
    };
  },
  computed: {
    rows(){
      return this.items.length
    }
  },
    methods: {
    rowClick(item, index, e) {
      this.$router.push({
        path: `/board/free/detail/${item.content_no}`
      })
    },
    writeContent() {
      this.$router.push({
        path: '/board/free/create'
      })
    }
  }
  
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&display=swap'); 

* {
  font-family: 'Nanum Gothic', sans-serif;
  

}
.board{
  margin-top: 20px;

}
.boardName{
  text-align: left;
  font-weight: bold;
  font-size: 35px;
  margin-bottom: 40px;
  margin-top: 20px;
}
</style>