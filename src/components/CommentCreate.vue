<template>
  <div class="comment-create">
    <b-input-group :prepend="name" class="mt-3">
      <b-form-textarea
        id="textarea"
        v-model="context"
        :placeholder="isSubComment ? '댓글에 댓글을 달아주세요' : '댓글을 달아주세요'"
        rows="3"
        max-rows="6"
      ></b-form-textarea>
      <b-input-group-append>
        <b-button class="writeBtn" variant="outline-primary" @click="isSubComment ? createSubComment() : createComment()">작성하기</b-button>
        <!-- <b-button variant="info" @click="updateMode2 ? modifyCoComment():createComment()">수정하기</b-button> -->
      </b-input-group-append>
    </b-input-group>
  </div>
</template>
<script>
import data from "@/data";
import {addComment, addSubComment, modifyComment} from '../service'

export default {
  name: "CommentCreate",
  props: {
    contentNo: Number,
    reloadComments: Function,
    reloadSubComments: Function,
    subCommentToggle: Function,
    modifyToggle: Function,
    isSubComment: Boolean,
    commentNo: Number,
  },
  data() {
    return {
      name: "강찬석",
      context: "",
      updateMode2: this.$route.params.commentNo > 0 ? true : false
    };
  },
  methods: {
    async createComment() {
      await addComment({user_no:1,
       content_no:this.contentNo,
       context:this.context
        });
        
      this.reloadComments();
      this.subCommentToggle();
      this.context = "";
    },

    

    async createSubComment() {
      await addSubComment({
       user_no:1,
       comment_no:this.commentNo,
       context:this.context});
          
      this.reloadSubComments();
      this.subCommentToggle();
      this.context = "";
    },
    // async modifyCoComment(){
    //   await modifyComment({
    //     context: this.context , 
    //     comment_no: Number(this.$route.params.commentNo)

    //     })
    //   this.$router.push({
    //     path: `/board/free`
    //   })
    // }
  }
};
</script>
<style scoped>
.comment-create {
  display: flex;
  margin-bottom: 1em;
}
.writeBtn{
  margin-left: 20px;
  margin-top: 20px;
}
</style>