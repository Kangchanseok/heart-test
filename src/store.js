import Vue from "vue";
import Vuex from "vuex";
// import detail1 from '@/components/detail1'

Vue.use(Vuex);

export const store = new Vuex.Store({
state:{
    // state는 컴포넌트 간에 공유할 data 속성을 의미함
    hash_name: '',
    // locations: []
},
mutations:{
    // changePage: function (state, payload){
    //     return state.hash_name;
    // }
},
getters:{

},
actions:{

}
});



