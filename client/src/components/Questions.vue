<template>
  <div class="questions">
    <h1>All questions</h1>
    <div v-if="questions.length > 0" class="table-wrap">
<!--      <div>-->
<!--        <router-link v-bind:to="{ name: 'AddPost' }" class="">Add Post</router-link>-->
<!--      </div>-->
      <table>
        <tr>
          <td align="center">Вопросы:</td>
        </tr>
        <tr v-for="question in questions">
          <td>{{ question.text }}</td>
          <td>{{ question.topic }}</td>
<!--          <td align="center">-->
<!--            <router-link v-bind:to="{ name: 'EditPost', params:-->
<!--              { id: question._id, title: question.title, description: question.description } }">Edit</router-link>-->
<!--            <a href="#" @click="deletePost(question._id)">Delete</a>-->
<!--          </td>-->
        </tr>
      </table>
    </div>
    <div v-else>
      There are no posts.. Lets add one now <br /><br />
      <router-link v-bind:to="{ name: 'AddPost' }" class="add_post_link">Add Post</router-link>
    </div>
  </div>
</template>

<script>

import QuestionsService from "../services/QuestionsService";

export default {
  name: "Questions",

  data() {
    return {
      questions: []
    }
  },

  mounted() {
    this.getQuestions()
  },

  methods: {

    async getQuestions() {
      const response = await QuestionsService.fetchQuestions()
      this.questions = response.data.questions
    }
}

}
</script>

<style type="text/css">
.table-wrap {
  width: 60%;
  margin: 0 auto;
  text-align: center;
}
table th, table tr {
  text-align: left;
}
table thead {
  background: #f2f2f2;
}
table tr td {
  padding: 10px;
}
table tr:nth-child(odd) {
  background: #f2f2f2;
}
table tr:nth-child(1) {
  background: #4d7ef7;
  color: #fff;
}
a {
  color: #4d7ef7;
  text-decoration: none;
}
a.add_post_link {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
}
</style>
