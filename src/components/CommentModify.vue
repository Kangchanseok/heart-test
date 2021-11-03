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
        
      </b-input-group-append>
    </b-input-group>
  </div>
</template>

<script>

export default {
    name: CommentModify,
    components:{
        
    },



        
    
}
</script>