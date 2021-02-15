import Vue from 'vue'
import Router from 'vue-router'

import Posts from '../components/Posts'
import AddPost from '../components/AddPost'
import EditPost from "../components/EditPost"
import Questions from "../components/Questions";

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/posts',
      name: 'Posts',
      component: Posts
    },
    {
      path: '/posts/add',
      name: 'AddPost',
      component: AddPost
    },
    {
      path: '/posts/:id/edit',
      name: 'EditPost',
      component: EditPost
    },
    {
      path: '/questions',
      name: 'Questions',
      component: Questions
    }
  ]
})
