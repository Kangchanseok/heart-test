<template>
  <div>
    <br/>
    <b-container>
    <b-input  v-model="subject" placeholder="제목을 입력해 주세요"></b-input>
    </b-container>
    <br/>
    <b-container>
    <b-form-textarea size="lg"
      v-model="context"
      placeholder="내용을 입력해 주세요"
      rows="3"
      max-rows="6"
    ></b-form-textarea>
    </b-container>
    <!-- 업데이트모드가 true면 content update 하고 false면 그냥 새걸로 upload -->
    <br/>
    <br/>
    <b-button variant="primary" @click="updateMode ? updateContent() : uploadContent()">저장</b-button>
    <b-button @click="updateMode ? cancle2(): cancle()">취소</b-button>
  </div>
</template>

<script>
import data from '@/data';
import {addContent, modifyContent, findContent} from '../service';

export default {
  name: 'Create',
  data() {
    return {
      subject: '',
      context: '',
      userNo: 1,
      regdate: '',
      content_no: Number(this.$route.params.contentNo),
      updateMode: this.$route.params.contentNo > 0 ? true : false
    };
  },

  async created() {
    if (this.$route.params.contentNo > 0) {
        // contentno가 존재하면 전에 있던것들을 불러와라
      const ret = await findContent({ content_no: Number(this.$route.params.contentNo)})
      const {data} = ret;
      this.subject = data.title;
      this.context = data.context;
      this.regdate = data.regdate;
    }
  },

  methods: {
    async uploadContent() {
        // 역순으로 하게 만드는게 items
      let items = data.Content.sort((a,b) => {
        return b.content_no - a.content_no;
        });
     // 제일 최신것이 items 배열 첫번째보다 1씩 오른것 -> 글번호 자동으로 1씩 증가
    const content_no = items[0].content_no + 1
     await addContent({
       user_no: this.userNo,
       title: this.subject,
       context: this.context,
       regdate:this.regdate,
     });
      this.$router.push({
        path: '/board/free/'
      });
    },
    async updateContent() {
      await modifyContent({           
        title: this.subject,
        context: this.context,
        content_no: Number(this.$route.params.contentNo)
      });
      this.$router.push({
        path: '/board/free/'
      });
    },
    cancle() {
      this.$router.push({
        path: '/board/free/'
      });
    },
    cancle2(){
      this.$router.push({
        path: `/board/free/detail/${this.content_no}`
      })
    }
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&display=swap'); 

* {
  font-family: 'Nanum Gothic', sans-serif;
  

}
</style>