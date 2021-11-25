<template>
  <div>
    <br/>
    <a class="btn btn-primary" href="/#/board/free">목록으로</a>
    <b-container>
      <br/>
    <b-card >
      <div class="content-detail-content-info">
        <div class="content-detail-content-info-left">
          <div class="content-detail-content-info-left-number">
            {{contentNo}}
          </div>
        </div>

          <div class="content-detail-content-info-center">
          <div class="content-detail-content-info-center-subject">
            {{title}}
          </div>
        </div>

        <div class="content-detail-content-info-right">
          <div class="content-detail-content-info-right-user">
            작성자: {{user}}
          </div>
          <div class="content-detail-content-info-right-regdate">
            등록일: {{regdate}}
          </div>
        </div>
      </div>
      
      <div class="content-detail-content" >
        {{context}}
      </div>

      <div class="content-detail-button">
        <b-button variant="outline-success" @click="updateData">수정</b-button>
        <b-button variant="outline-danger" @click="deleteData">삭제</b-button>
      </div>
      <div class="content-detail-comment">
        <CommentList :contentNo="contentNo"/>
      </div>
    </b-card>
    </b-container>
  </div>
</template>

<script>
import CommentList from "./CommentList";
import {findContent, deleteContent} from '../service'

export default {
  name: "ContentDetail",
  components: {
    CommentList,
  },
  async created(){
      const ret = await findContent({content_no: Number(this.$route.params.contentNo)})
      const {data} = ret;
      this.title = data.title;
      this.context = data.context;
      this.user = data.user_name;
      this.regdate = data.regdate;
      // this.comment_no = data.comment_no;
  },
  data() {
    const contentNo = Number(this.$route.params.contentNo);
    return {
      contentNo: contentNo,
      title: '',
      context:'', 
      user:'', 
      regdate:'' ,
      // comment_no : ''
    };
  },
  methods: {
    async deleteData() {
      alert('글을 삭제합니다');
       await deleteContent({content_no: this.contentNo}),
        this.$router.push({
        path: '/board/free'
      })
    },
    async updateData() {
      this.$router.push({
        path: `/board/free/create/${this.contentNo}`
      })
    }
    
  },
};
</script>
<style scoped>
.content-detail-content-info {
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
}
.content-detail-content-info-left {
  width: 300px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}
.content-detail-content-info-center {
  width: 300px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}
.content-detail-content-info-right {
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}
.content-detail-content {
  border: 1px solid black;
  margin-top: 1rem;
  padding-top: 1rem;
  min-height: 300px;
}
.content-detail-button {
  border: 1px solid black;
  margin-top: 1rem;
  padding: 2rem;
  
}
.content-detail-comment {
  border: 1px solid black;
  margin-top: 1rem;
  padding: 2rem;
}
</style>