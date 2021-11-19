<template>
    <!-- <form @submit.prevent="onSubmit($event.target.value)"> -->
        <!-- <div id="app"
        v-on:keyup.down="selectValue('down')"
        v-on:keyup.up="selectValue('up')">
        <input type="text" v-model="inputValue" placeholder="검색어를 입력하세요" autofocus @keyup="onKeyup">
        <button type="reset" @click="onClickResetBtn" v-show="inputValue.length" class="btn-reset"></button>
        </div> -->
        <div class="wrap">
  <div id="app"
       v-on:keyup.down="selectValue('down')"
       v-on:keyup.up="selectValue('up')">
    <div class="search">
      <input 
            type="text"
            class="s"
            placeholder="'#'을 입력하세요"
            v-on:input="searchQuery=$event.target.value"
            @keyup.enter="onSubmit($event.target.value)"
            
            />
      <button
        @click.prevent="onSubmit($event.target.value)" 
        type="submit"
        class="search_searchButton"
      >
        <img src="@/assets/search.svg" alt="search" />
      </button>

             <!-- v-model="searchQuery" autofocus @keyup="onKeyup" -->
      <!-- <button type="reset" @click="onClickResetBtn" v-show="searchQuery.length" class="btn-reset"></button> -->
      <!-- link추가와 최근검색어 기능 넣을지? -->
      <!-- input값 감싸서 상세검색페이지에 보내면 hashtag값 선택 -->
      <!-- vuex??사용해야되나 -->
      <!-- 키보드로도 선택이 가능한데 필요한가??.. -->
      <ul class="r" tabindex="0"
          v-bind:class="{ show: isActive }"
          >
        <li tabindex="-1"
            v-for="(el, index) in filterList" :key="index"
            v-on:click="changeValue(el.name)"
            v-on:keyup.enter="selectValue('enter', el.name)"
            >
          <span>{{ el.name }}</span>
        </li>
      </ul>
    </div>
  </div>
</div>
    <!-- </form> -->
</template>

<script>
import { findHashNo} from '../service'
var names = [
  { name: '#송파구' },
  { name: '#송파구 잠실' },
  { name: '#잠실 카트장' },
  { name: '#잠실 놀거리' },
  { name: '#잠실 카페' },
  { name: '#송리단길' },
  { name: '#서울시' },
  { name: '#서리단길' },
  { name: '#석가래' },
  { name: '#잠자리' },
  { name: '#강남구' }
]
export default {
  data () {
    return {
      isActive: false,
      searchQuery: '',
      names: names,
    }
  },
  // watch:{
  //       value(newVal, oldVal){
  //         console.log(newVal)
  //           this.searchQuery = newVal
  //       }
  //     },
  methods: {
        async onSubmit(hash_name){
      // hashname은 #이 안 붙어서 검색할수도있음(사용자가)
      // 조건문으로 #이 없다면 넣어줌
      if (hash_name.indexOf('#') == -1) {
        hash_name= '#'.concat(hash_name)
      }
      const ret = await findHashNo({hash_name})
      const {data} = ret;
      console.log(data.hash_no);
      this.$router.push ({
          path: '/detail3'
      })
      
      
    //   const ret = await findLocation({loca_no: Number(this.$route.params.locaNo)})
    //   this.items = ret.data;
      // 1. #hashname으로 구분된 것들을 axios.get으로 해당 hashdata받아옴
      // 1-1. hashid만 받아오고 상세검색에서 선택되게 하는게 나으려나? 이게 낫겠다
      // 2. 받아오고 링크로 넘겨주면서 해시 선택되게 할거임
      // node axios쿼리문 추가하면 끝, 비동기처리해야함 -> async, await
    //     axios.get(url[config]).then(res => {
    //       console.log(config)
    //   })
      // vuex로 보내거나
      // axios로 hashname db로 보내줌
      // axios.post()
      // this.$emit('@submit',this.searchQuery.trim())
      },
    //     onClickResetBtn(){
    //         this.searchQuery = ''
    //         this.$emit('@reset')
    //     },
    //     onKeyup(){
    //         if(this.searchQuery.length === 0){
    //             this.$emit('@reset')
    //         }
    //     },
    changeValue (str) {
      console.log(`change value: ${str}`)
      this.isActive = false
      this.searchQuery = ''
      document.querySelector('.s').value = str
    },
    selectValue (keycode, str) {
      if (this.isActive === true) {
        const hasClass = document.querySelector('.r').classList.contains('key')
        if (keycode === 'down') {
          if (!hasClass) {
            const thisEl = document.querySelectorAll('.r li')[0]
            document.querySelector('.r').classList.add('key')
            thisEl.classList.add('sel')
            thisEl.focus()
          } else {
            const lastEl = document.querySelector('.r li:last-child')
            const thisEl = document.querySelector('.r li.sel')
            const nextEl = thisEl.nextElementSibling
            if (!lastEl.classList.contains('sel')) {
              thisEl.classList.remove('sel')
              nextEl.classList.add('sel')
              nextEl.focus()
            }
          }
        }
        if (keycode === 'up' && hasClass) {
          const firstEl = document.querySelectorAll('.r li')[0]
          const thisEl = document.querySelector('.r li.sel')
          const prevEl = thisEl.previousElementSibling
          if (!firstEl.classList.contains('sel')) {
            thisEl.classList.remove('sel')
            prevEl.classList.add('sel')
            prevEl.focus()
          } else {
            document.querySelector('.s').focus()
          }
        }
        if (keycode === 'enter' && hasClass) {
          this.changeValue(str)
        }
      }
    }
  },
  computed: {
    filterList () {
      const str = this.searchQuery
      const reg = /[^가-힣ㄱ-ㅎㅏ-ㅣa-zA-Z0-9|#|\s]/.test(str)
      console.log(`typing value: ${str}`)
      if (reg === false && str !== '' && str !== ' ') {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.isActive = true
        console.log(this.isActive)
        console.log(2)
        return this.names.filter((el) => {
          return el.name.match(str)
        })
      } else {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.isActive = false
      }
    }
  }
}
</script>

<style scoped>
html, body {
  height: 100%;
}
body {
  background-color: #ddd;
  font-size: 14px;
  color: #333;
}
strong {
  font-weight: bold;
}
.wrap {
  display: table;
  padding: 40px 20px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
#app {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
}
#app .search .r {
  display: none;
  position: absolute;
  left: 302px;
  top: 222px;
  width: 626px;
  height: 156px;
  overflow-y: auto;
  list-style: none;
  
  
}
#app .search .r.show {
  display: block;
  
}
#app .search .r li {
  margin-top: -1px;
  padding: 0 20px;
  width: 100%;
  height: 40px;
  background-color: #fff;
  box-sizing: border-box;
  border: 1px solid rgb(255, 255, 255);
  outline: none;
  font-size: 16px;
  line-height: 40px;
  cursor: pointer;
  
}
#app .search .r li:hover, #app .search .r li.sel {
  background-color: #7bc4c4;
}
#app .search p {
  padding: 10px 0;
  text-align: right;
  font-size: 12px;
  
}
.search {
    display: flex;
    height: 40px;
    margin: 0 auto;
    width: 50%;
}
.s {
    width: 100%;
    color: rgb(0, 0, 0);
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    
    border: 2px solid #ffffff;
    border-right: none;
    border-radius: 6px 0 0 6px;
    padding: 6px 10px;
    height: inherit;
    outline: none;
}
.s::placeholder {
    color: rgb(0, 0, 0);
}
.search_searchButton {
    height: inherit;
    
    color: #fff;
    border: 0px solid #ffffff;
    border-radius: 0 6px 6px 0;
    border-left: none;
    cursor: pointer;
    font-size: 20px;
    
    
}
.search_searchButton img {
    width: 20px;
    height: 20px;
    
    
}
</style>
