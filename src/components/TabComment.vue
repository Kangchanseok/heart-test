<template>
    <div>
        <main id="app" class="pagebody">
  <nav>
    <ul class="sidenav__tabs">
      <li class="sidenav__tab" v-for="category in categories" v-bind:key="category.id" @click="selectedCategory = category" :class="{ 'active-tab': selectedCategory == category }">
        {{ category }}
        <p class="sidenav__tab__info">{{ categoryCount(category).length }} Bookmarks</p>
      </li>
    </ul>
  </nav>
  <section class="rightsection">  
      <ul>
        <li class="linkli__header">{{ selectedCategory }} ({{ categoryCount(selectedCategory).length }})</li>
        <li v-for="link in filteredLinks" v-bind:key="link.id" :class="{current: selectedCategory == link.category }" class="linkli">
          <a class="flexleft" target="_blank" href="">
            <p class="linkli__title">{{ link.title }}</p>
            <p class="linkli__url">{{ link.url }}</p>
          </a>
          <a @click.prevent.stop="deleteItem(link)" class="btn deletebutton" href="#">Delete</a>
          
        </li>
      </ul>
  </section>
</main>

    </div>
</template>

<script>
export default {
    data(){
        return{
                links: [
      {
        title: "내가 쓴 댓글의 글 제목은 여기에",
        category: "댓글",
        url: "내가 쓴 내용은 여기에?"
      },
      {
        title: "강남에 엄청 맛있는 집이 있다던데 ",
        category: "댓글",
        url: "ㄴ그런곳은 없어여.... 그냥 빨리 먹는게 답"
      },
      {
        title: "압구정 비트카페 주소 알수있나요?",
        category: "Q&A",
        url: "ㄴ답변 준비중입니다."
      },
      {
        title: "Cedward - id pariatur nostrud ex",
        category: "Research",
        url: "https://Exozent.com/veniam/ut/culpa"
      }
    ],
    categories: [],
    selectedCategory: ''
        };
    },
computed: {
    filteredLinks() {
      return this.links.filter(link => {
        return link.category.match(this.selectedCategory);
        });
    }
},
methods: {
    getCategories() {
      let categoriesSet = new Set();
      this.links.forEach((link) => {
        categoriesSet.add(link.category);
      });
      this.categories = Array.from(categoriesSet);
    },
    categoryCount(category) {
      return this.links.filter(link => {
        return link.category.match(category);
      });
    },
    deleteItem(link) {
      if (confirm("Are you sure?")) {
        let index = this.links.indexOf(link);
        this.links.splice(index, 1);
      }
    }
  },
  created() {
    this.getCategories();
    this.selectedCategory = this.categories[0];
}
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&display=swap'); 
*{
  font-family: 'Nanum Gothic', sans-serif;
}
body {
    background-color: #e8e7e5;
    font-family: 'Nanum Gothic', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    min-height: 100vh;
}
.pagebody {
    display: flex;
    width: 100%;
    padding-right: 0;
    
}
a {
    text-decoration: none;
}
.btn {
    font-family: 'Open Sans', sans-serif;
    font-size: .9em;
    padding: .5em 1em;
    color: white;
    transition: all 200ms;
    letter-spacing: .1em;
    border: none;
    border-radius: 2px;
    background-color: #7bc4c4;
}
.btn:hover {
    cursor: pointer;
    box-shadow: 0px 0px 0px 1px white, 0px 0px 0px 3px #248b81;
}
.btn:active {
    background-color: #248b81;
}
/* Sidenav */
.sidenav__tabs {
    text-align: right;
    background-color: #7bc4c4;
    box-shadow: 1px 1px 3px 0 rgba(0, 0, 0, 0.3);
}
.sidenav__tab {
    align-self: flex-start;
    width: 100px;
    list-style-type: none;
    /*   border-bottom: 1px solid #ccc; */
    padding: .6em .4em .6em .8em;
    color: rgb(255, 255, 255);
    font-size: 1.1em;
    letter-spacing: 0;
    transition: all 300ms;
}
.sidenav__tab:hover {
    background-color: #248b81;
    cursor: pointer;
    box-shadow: 0 5px 5px -2px rgba(0, 0, 0, 0.22);
}
.sidenav__tab__info {
    font-size: .65em;
    margin-top: 3px;
    color: rgb(255, 255, 255);
    font-style: italic;
    letter-spacing: 0;
}
.active-tab {
    background-color: #248b81;
    box-shadow: 0 5px 5px -2px rgba(0, 0, 0, 0.22);
}
/* End Sidenav */
.rightsection {
    width: 100%;
    margin-left: 10px;
    background-color: white;
    box-shadow: 1px 1px 3px 0 rgba(0, 0, 0, 0.3);
    align-self: flex-start;
    border-radius: 2px;
}
.rightsection ul{
  padding-left: 0;
  list-style: none;
  margin-bottom: 0;
}
/* Styles for Link box li */
.linkli__header {
    background-color: #7bc4c4;
    color: white;
    padding: .7em;
    text-align: center;
    font-style: italic;
    border-top-right-radius: 2px;
    border-top-left-radius: 2px;
}
.linkli {
    display: flex;
    border-top: 1px solid #ddd;
    padding: 1em;
    background-color: white;
}
.linkli:first-child {
    border-top: none;
}
.linkli:last-child {
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
}
.linkli__title {
    font-size: 1.2em;
    margin-bottom: 8px;
}
.linkli__url {
    font-style: italic;
    font-size: 0.8em;
    color: #777;
}
.flexleft {
    color: #333300;
    width: 100%;
}
.deletebutton {
    align-self: center;
    box-shadow: 1px 1px 3px 0 rgba(0, 0, 0, 0.3);
}
/* End style for Link box li */
</style>