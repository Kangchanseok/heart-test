<template>

    <div class="hashtag" >

        <!-- <div class="tag-container"
            v-for="hash in hashs"
            :key="hash.hash_no"
            > -->

            <div class="tag-container"
            v-for="(hash, i) in hashs"
            :key="i"
            >
        <div class="contents-tag">
            <ul class="area" id="region">
                <li >
                    <button type="button"
                    @click="[changeColor(hash.hash_no, $event),changePage(hash.hash_name)]"
                    :style="hash.clicked === true ? { 'background-color': '#7bc4c4', 'color' : 'white' } : null"
                    >
                    {{hash.hash_name}}
                    <!-- v-bind:class="[index.isClicked ? 'select': '']" -->
                      <!-- :class= "{btn: changePage}" -->
                      <!-- :aria-pressed="changePage(hash.hash_name) ? 'true' : 'false'" -->
                     <!-- @click="changePage(hash.hash_name)"> -->
                    <!-- @click="isActives(hash.hash_no)"> -->
                    </button>
                </li>
            </ul>
            </div>
        </div>
        
        <br/><br/>
        <div class="line3"></div>

         <div class="tag-container2"
            v-for="(hash2, j) in hashs2"
            :key="j"
            >
            
        <div class="contents-tag2">
          
            <ul class="area2" id="region2">
                <li >
                    <button type="button"
                    @click="[changeColor2(hash2.hash_no, $event),changePage3(hash2.hash_name)]"
                    :style="hash2.clicked === 1 ? { 'background-color': '#7bc4c4', 'color' : 'white' } : null"
                    >
                    {{hash2.hash_name}}
                    <!-- v-bind:class="[index.isClicked ? 'select': '']" -->
                      <!-- :class= "{btn: changePage}" -->
                      <!-- :aria-pressed="changePage(hash.hash_name) ? 'true' : 'false'" -->
                     <!-- @click="changePage(hash.hash_name)"> -->
                    <!-- @click="isActives(hash.hash_no)"> -->
                    </button>
                </li>
            </ul>
            </div>
        </div>
        </div>

</template>

<script>
import {findHashList, findHashList2, findHashList3, selectHashName, findLocationList, selectheart} from '../service'
import EventBus from './EventBus'

export default {
  name: 'hashtag',
  data () {
    return {
      hashs2: [
        {
          hash_no: '',
          hash_name: '',
          clicked: 0
        }
      ],
      hashs: [
        {
          hash_no: '',
          hash_name: '',
          clicked: false
        }
      ],
      hashsdata: [],
      hashsdata2: []
    }
  },
  async created () {
    //   findHashList().then(response => this.hashs = response.data);
    if (this.$route.query.locationhash != null || this.$route.query.searchhash != null) {
      var locationhash = null
      if (this.$route.query.locationhash != null) {
        locationhash = '#' + this.$route.query.locationhash
      }
      if (this.$route.query.searchhash != null) {
        locationhash = this.$route.query.searchhash
      }
      const ret10 = await findHashList({locationhash})
      for (let i = 0; i < 25; i++) { // 해쉬태그 넣을때마다 숫자 바꿔주자..
        if (ret10.data[i].hash_name == locationhash) {
          console.log(ret10.data[i].clicked)
          ret10.data[i].clicked = true
        }
        // this.hashs = ret10.data[i]
      }
      // search는 전체 for문
      this.hashs = ret10.data
    } if (this.$route.query.locationhash != null || this.$route.query.searchhash != null) {
      var locationhash = null
      if (this.$route.query.locationhash != null) {
        locationhash = '#' + this.$route.query.locationhash
      }
      if (this.$route.query.searchhash != null) {
        locationhash = this.$route.query.searchhash
      }
      const ret11 = await findHashList2({locationhash})
      for (let i = 0; i < 2; i++) { // 해쉬태그 넣을때마다 숫자 바꿔주자..
        if (ret11.data[i].hash_name == locationhash) {
          ret11.data[i].clicked = 1
        }
        // this.hashs = ret10.data[i]
      }
      // search는 전체 for문
      this.hashs2 = ret11.data
    } else {
      findHashList().then(response => this.hashs = response.data)
      findHashList2().then(response => this.hashs2 = response.data)
    }
    //    EventBus.$on('changePage2', (name) =>{
    //         this.name = name;
    //         })
  },
  methods: {
    changeColor (e) {
      // const count = true
      if (this.hashs[e - 1].clicked === true) {
        this.hashs[e - 1].clicked = false
      } else {
        for (let i = 0; i < 25; i++) {
          this.hashs[i].clicked = false
        }
        this.hashs[e - 1].clicked = true
      }
    },
    // 친구끼리 선택되어져있으면 전체 렌더링x
    async changePage (hash_name) {
      var ret2 = {}
      var ret3 = []
      var cc = []
      var count = 0
      var check_hash = 0
      var check_location = 0
      var check_locationname = ''
      var check_hashname = []
      for (let i = 0; i < 25; i++) {
        if (this.hashs[i].clicked == true) {
          count += 1
        }
      }
      for (let j = 0; j < this.hashs2.length; j++) {
        if (this.hashs2[j].clicked == 1) {
          check_hashname.push(this.hashs2[j].hash_name) // 가족끼리 담음
          check_hash += 1
        }
      }
      // 1. 가족끼리 선택 후  지역을 선택했을경우(지역만 load됨 -> 교집합)
      // 2. 지역 해제했을경우(전체렌더링 됨 -> 가족끼리만 나오게)
      if (check_hash > 0) {
        for (let k = 0; k < this.hashs.length; k++) { // 지역이 클릭되었는지 구분
          if (this.hashs[k].clicked == true) {
            check_locationname = this.hashs[k].hash_name
            check_location += 1
          }
        }
        if (check_location > 0) { // 지역과 가족끼리가 선택된 상태
          hash_name = check_locationname
          ret2 = await selectHashName({hash_name})
          for (let l = 0; l < ret2.data.length; l++) {
            var splitdata2 = ret2.data[l].hash_name.split(' ')
            for (let m = 0; m < splitdata2.length; m++) {
              for (let n = 0; n < check_hashname.length; n++) {
                if (splitdata2[m] == check_hashname[n]) {
                  console.log(ret2[l])
                  ret3.push(ret2.data[l])
                }
              }
            }
          }
          ret2 = ret3
        } else if (check_location == 0) { // 지역 클릭했다 클릭해제한 상태
          for (let o = 0; o < check_hashname.length; o++) {
            hash_name = check_hashname[o]
            cc.push(await selectHashName({hash_name}))
          }
          for (let c = 0; c < cc.length; c++) {
            var justcount = cc[c].data
            for (let b = 0; b < justcount.length; b++) {
              ret3.push(justcount[b])
            }
          }
          ret2 = ret3
        }
        // 지역은 클릭해제된 상태, 가족끼리는 선택된 상태 -> else if문 사용
      }
      // 3. 지역x, 가족끼리x 상태
      if (count == 0 && check_hash == 0) {
        ret2 = await findLocationList()
      } else if (count == 1 && check_hash == 0) { // 4. 지역만 선택되었을경우
        ret2 = await selectHashName({hash_name})
        console.log(ret2.data[0])
      }
      console.log(ret3.length)
      if (ret3.length != 0) {
        this.hashsdata = ret2
        var user = this.$store.state.account.user
        var clickheart = await selectheart({user})
        for (let i = 0; i < ret2.length; i++) {
          for (let j = 0; j < clickheart.length; j++) {
            if (ret2.data[i].title == clickheart[j].title) {
              ret2.data[i].liked = true
              ret2.data[i].like_color = 'red'
            }
          }
        }
        EventBus.$emit('changePage', ret2)
      } else if (ret3.length == 0) {
        this.hashsdata = ret2.data
        var user = this.$store.state.account.user
        var clickheart = await selectheart({user})
        for (let i = 0; i < ret2.data.length; i++) {
          for (let j = 0; j < clickheart.length; j++) {
            if (ret2.data[i].title == clickheart[j].title) {
              ret2.data[i].liked = true
              ret2.data[i].like_color = 'red'
            }
          }
        }
        EventBus.$emit('changePage', ret2.data)
      }
    },

    async changePage3 (hash_name) {
      var ret3 = []
      var splitdata2 = []
      var count = 0
      var check_name = []
      var check_name2 = []
      var count_click = 0
      var count_click2 = 0
      var check_hashs2 = 0
      var ret2 = await selectHashName({hash_name}) // 가족끼리 데이터 가져옴
      // hashsdata --> 지역해시태그 정보 담고있음
      // hashs2 --> 친구끼리 ~~ 가족끼리 해시태그
      for (let i = 0; i < 25; i++) {
        // 클릭 검증
        if (this.hashs[i].clicked == true) {
          // hashsdata에는 정보가 있는 상태니까 hashs에 데이터가 있는지 없는지만 확인 --> 강남구랑 hash_name이랑 비교
          count += 1
        }
      }
      // 지역 클릭 안된상태
      if (count == 0) {
        console.log(123)
        // 1. click된 값만 데이터를 가지고 있어야 하고 push값도 초기화
        for (let i = 0; i < this.hashs2.length; i++) {
          // clicked을 기준으로 잡음, click된 요소가 몇개인지 확인
          if (this.hashs2[i].clicked == true) {
            check_name.push(this.hashs2[i].hash_name)
            count_click += 1
          }
        }
        // 클릭된 값이 0보다 클경우 무조건 들어옴
        if (count_click > 0) {
          // null 값이면 그냥 넣어줌
          if (this.hashsdata2 == null) {
            for (let l = 0; l < ret2.data.length; l++) {
              this.hashsdata2.push(ret2.data[l])
              var cs = this.hashsdata2
              ret3 = cs
            }
          } else { // null이 검증 후 push
            this.hashsdata2 = []
            for (let k = 0; k < check_name.length; k++) {
              hash_name = check_name[k]
              console.log(hash_name)
              var ret7 = await selectHashName({hash_name})
              console.log(ret7.data)
              for (let m = 0; m < ret7.data.length; m++) {
                this.hashsdata2.push(ret7.data[m])
                var cs = this.hashsdata2
                ret3 = cs
              }
            }
          }
          // this.hashsdata2 = [] // 초기화
          // for (let l = 0; l < ret2.data.length; l++) {
          //     this.hashsdata2.push(ret2.data[l])
          //     var cs = this.hashsdata2
          //     ret3 = cs;
          // }
        } else {
          this.hashsdata2 = []
          for (let i = 0; i < 25; i++) {
            if (this.hashs[i].clicked == true) {
              count_click2 += 1
            }
          } if (count_click2 == 0) {
            var aa = await findLocationList()
            ret3 = aa.data
          }
          //     if(this.hashs[i].clicked == true){ // 지역 선택되어져 있으면 지역 데이터 렌더링 시키고
          //         ret3 = this.hashsdata;
          //         console.log(123)
          //     } else if (this.hashs[i].clicked == false) { // 지역 선택 x면 전체 렌더링
          //         ret3 = await findLocationList();
          //         console.log(1234)
          //     }
          // }
        }
      }
      // 지역 클릭된상태
      else if (count == 1) {
        for (let k = 0; k < this.hashs2.length; k++) {
          // clicked을 기준으로 잡음, click된 요소가 몇개인지 확인
          if (this.hashs2[k].clicked == true) {
            count_click += 1
          }
        }
        // 친구끼리 선택x
        if (count_click == 0) {
          for (let l = 0; l < this.hashs.length; l++) {
            if (this.hashs[l].clicked == true) {
              hash_name = this.hashs[l].hash_name
              var bb = await selectHashName({hash_name})
              ret3 = bb.data
              // console.log(this.hashs[l].hash_name)
            }
          }
          // for (let l = 0; l < this.hashsdata.length; l++) {
          //     ret3.push(this.hashsdata[l])
          // }
        } else { // 친구끼리 선택o
          for (let t = 0; t < this.hashs2.length; t++) {
            if (this.hashs2[t].clicked == 1) {
              check_name2.push(this.hashs2[t].hash_name) // hashs2의 클릭된 hash_name
            }
          }
          for (let i = 0; i < this.hashsdata.length; i++) {
            // TODO : hash2의 어떤 것이 click상태이고 아닌지를 판단해줘야 할 듯
            // hash2의 click을 한번 돌려야돼
            var splitdata2 = this.hashsdata[i].hash_name.split(' ')
            // #가족끼리가 있는지 확인하는 반복문
            for (let j = 0; j < splitdata2.length; j++) {
              this.hashsdata2.push(ret2.data[i])
              for (let r = 0; r < check_name2.length; r++) {
                if (splitdata2[j] == check_name2[r]) {
                  check_hashs2 += 1
                  ret3.push(this.hashsdata[i])
                }
              }
            }
          }
        }
      }
      console.log(ret3)
      // // 테마별 중복
      // for (let j = 0; j < this.hashs2.length; j++) {
      //     if (this.hashs2[j].clicked == 1) {
      //         console.log(123123)
      //     }
      // }
      // ----------------------------------------
      // for(let k = 0; k<ret2.data.length; k++) {
      // console.log(this.hashs[k].clicked)
      // // console.log(this.hashsdata)

      // if (this.hashs[k].clicked == true) {
      //     for (let i = 0; i < this.hashs.length; i++) {
      //         const splitdata2 = this.hashsdata[i].hash_name.split(' ');
      //         console.log(splitdata2[0])
      //         console.log(this.hashsdata[i].hash_name)

      //         for (let j = 0; j < this.hashs2.length; j++) {
      //             const splitdata = ret2.data[j].hash_name.split(' ');
      //             console.log(splitdata[0])
      //             if (splitdata[0] == splitdata2[0]) {
      //                 ret3 = ret2.data[j]
      //             }
      //         }
      //     }
      //     console.log(ret3)
      //     console.log(123)
      // } else if(this.hashs[k].clicked == false && this.hashs2[k].clicked == 1) {
      //     for (let i = 0; i < ret2.data.length ; i++){
      //         // ret3.push(ret2.data[i])
      //         this.hashsdata2.push(ret2.data[i]);
      //         const dupleret3 = this.hashsdata2;
      //         const unique = dupleret3.filter((element,index) => {return dupleret3.indexOf(element) === index;});
      //         ret3 = unique;
      // }
      // console.log(ret3)
      // console.log(12345678)
      // }
      // }
      // ----------------------------------------
      // ----------------------------------------
      //     console.log(this.hashs2[0].hash_no)
      //     console.log(ret2.data)
      //     for (let k = 0; k< 25 ; k++){
      //         // hashs2[i].hash_no > 25
      //     if(this.hashs[k].hash_no < 26){
      //     // 지역 해시태그 클릭시 데이터 들어감
      //     for (let i = 0; i < this.hashsdata.length; i++){ // 컨텐츠별 해시태그 갯수만큼 돌려줘야함
      //     const splitdata2 = this.hashsdata[i].hash_name.split(' ');
      //         for (let j = 0; j < 2; j++) {
      //         const splitdata = ret2.data[j].hash_name.split(' ');
      //         if (splitdata[0] == splitdata2[0]) {
      //             ret3 = ret2.data[j]
      //             }
      //         }
      //     } console.log(123)
      // }    // 지역해시태그 없이 클릭했을때 이동
      //     else if (this.hashs2[k].hash_no >= 26) {dvc
      //     for (let i = 0; i < 2 ; i++){
      //         ret3 = ret2.data[i]
      //     }
      //     console.log(12345)
      // }
      //     }
      // ----------------------------------------
      // console.log(123124)
      // console.log(this.splitdata);
      // console.log(ret3)
      var user = this.$store.state.account.user
        var clickheart = await selectheart({user})
        for (let i = 0; i < ret3.length; i++) {
          for (let j = 0; j < clickheart.length; j++) {
            if (ret3[i].title == clickheart[j].title) {
              ret3[i].liked = true
              ret3[i].like_color = 'red'
            }
          }
        }
      EventBus.$emit('changePage3', ret3)
    },
    changeColor2 (e) {
      var e2 = 0
      e2 = e - 26
      if (this.hashs2[e2].clicked == 0) {
        this.hashs2[e2].clicked = 1
      } else {
        this.hashs2[e2].clicked = 0
      }
      // const count = true
      // if (this.hashs2[e].clicked === true) {
      //     this.hashs2[e].clicked = false
      //     console.log(this.hashs2[e].clicked)
      // } else {
      //     for (let i = 0; i < 2; i++) {
      //         this.hashs2[i].clicked = false
      //     }
      //     this.hashs2[e].clicked = true
      //     console.log(this.hashs2[e].clicked)
      // }
    }
    // changePage11(){
    //      findHashList().then(response => this.hashs = response.data);
    // }

    // async changePage(hash_name){
    //     // this.$store.commit('choiceSearch', hash_name)
    //     const ret = await selectHashName({hash_name})
    //     this.$store.commit('choiceSearch', ret.data)
    //     const test = this.$store.getters[sibal()]

    // var ret2 = ret.data;
    //  console.log(ret2);
    // this.$store.commit('choiceSearch', hash_name)
    // const test = this.$store.getters['justtest']

    // }
  }
}

</script>

<style scoped>
.contents-tag{
  text-align: center;
  align-items: center;
}
.hashtag{
    background-color: rgb(243, 243, 243);
    border-radius: 10px;
    padding: 20px;
    /* display: block; */
    /* -webkit-box-pack: end; */
    /* -ms-flex-pack: end; */
    /* justify-content: flex-end; */
    position: absolute;
   
    left: 1300px;
    top: 400px;
    display: grid;
    grid-template-columns:  1fr 1fr 1fr;
    
}
.hashtag li button {
  
    padding: 7px 3px;
    border-top-left-radius: 35px;
    border-top-right-radius: 35px;
    border-bottom-left-radius: 35px;
    border-bottom-right-radius: 35px;
    border:none;
    width: 80px;
    text-align: center;
    
}
ul{
    display: block;
    padding: 0;
    margin: 0;
    font-size: 13px;
    align-items: center;
    
    
}
li{
    list-style: none;
    
    align-items: center;
    text-align: center;
    
}
button{
    border: 0 none;
    cursor: pointer;
    /* background-color: rgb(243, 243, 243); */
display: block
    
}
button:hover{
    color: #ffffff;
    background-color: #7bc4c4;
}
/* .line3{
  border: 1px solid rgb(207, 207, 207);
  
} */


</style>
