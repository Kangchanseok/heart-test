<template>
  <div>
    <div class="comment-list-item">
      <div class="comment-list-item-name">
        <div>{{name}}</div>
        <div>{{commentObj.regdate}}</div>
      </div>
      <div class="comment-list-item-context">{{commentObj.context}}</div>
      <div class="comment-list-item-button">
        <b-button variant="info" @click="modifyCoData">수정</b-button>
        <b-button variant="info" @click="deleteCoData">삭제</b-button>
        <b-button variant="info" @click="subCommentToggle">대댓글 달기</b-button>
      </div>
    </div>
    <template v-if="subCommentCreateToggle">
      <CommentCreate
        :isSubComment="true"
        :commentNo="commentObj.comment_no"
        :reloadSubComments="reloadSubComments"
        :subCommentToggle="subCommentToggle"
      />
    </template>
    <template v-if="subCommentList.length > 0">
      <div
        class="comment-list-item-subcomment-list"
        :key="item.subcomment_no"
        v-for="item in subCommentList"
      >
        <div class="comment-list-item-name">
          <div>{{item.user_name}}</div>
          <div>{{item.regdate}}</div>
        </div>
        <div class="comment-list-item-context">{{item.context}}</div>
        <div class="comment-list-item-button">
          <b-button variant="info">수정</b-button>
          <b-button variant="info"  @click="deleteScData">삭제</b-button>
        </div>
      </div>
    </template>
  </div>
</template>
<script>
import data from "@/data";
import CommentCreate from "./CommentCreate";
import {findSubComment, deleteComment, deleteSubComment} from '../service';
import CommentList from './CommentList';

export default {
  name: "CommentListItem",
  props: {
    commentObj: Object
  },
  components: {
    CommentCreate
  },
  async created(){
    const ret = await findSubComment({comment_no});
    this.subCommentList = ret.data;
  },
  data() {
    return {
      name: data.User.filter(
        item => item.user_no === this.commentObj.user_no
      )[0].name,
      subCommentList: [],
      subCommentCreateToggle: false
    };
  },
  methods: {
    subCommentToggle() {
      this.subCommentCreateToggle = !this.subCommentCreateToggle;
    },
    async reloadSubComments() {
      const ret = await findSubComment({comment_no: this.commentObj.comment_no});
      this.subCommentList = ret.data;
    },
    async deleteCoData(){
      // commentObj 써서 삭제 해결!!
      await deleteComment({comment_no: this.commentObj.comment_no})
      this.$router.push({
        path: `/board/free`
      })
    },
    async modifyCoData(){
      this.$router.push({
        path: `/board/free/commentcreate/${this.commentObj.comment_no}`
    })
  },
      async deleteScData(){
      await deleteSubComment({subcomment_no: this.subCommentList.subcomment_no})
      this.$router.push({
        path: `/board/free`
      })
    }
  }
};
</script>
<style scoped>
.comment-list-item {
  display: flex;
  justify-content: space-between;
  padding-bottom: 1em;
}
.comment-list-item-name {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 0.5px solid black;
  padding: 1em;
}
.comment-list-item-context {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50em;
  border: 0.5px solid black;
}
.comment-list-item-button {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 0.5px solid black;
  padding: 1em;
}
.btn {
  margin-bottom: 1em;
}
.comment-list-item-subcomment-list {
  display: flex;
  justify-content: space-between;
  padding-bottom: 1em;
  margin-left: 10em;
}
</style>