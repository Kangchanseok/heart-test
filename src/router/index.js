import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Board from '@/components/Board'
import ContentDetatil from '@/components/ContentDetail'
import Create from '@/components/Create'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/board/free',
      name: 'Board',
      component: Board
    },
    {
      path: '/board/free/detail/:contentNo',
      name: 'ContentDetail',
      component: ContentDetatil
    },
    {
      path: '/board/free/create/:contentNo?',
      name: 'Create',
      component: Create
    },
    // {
    //   path: '/board/free/commentcreate/:commentNo?',
    //   name: 'CommentCreate',
    //   component: CommentCreate
    // }

  ]
})