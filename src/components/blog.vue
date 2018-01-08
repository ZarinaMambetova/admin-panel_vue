<template lang="pug">
  .blog
    h2.title Страница "Блог"
    .container
      .form.col
        h3.form-title Добавить запись
        .row
          input(
            type="text",
            placeholder="Название"
            v-model="fields.title"
          )
        .row
          input(
            type="date",
            v-model="fields.date"
          )
        .row
          textarea.input.blog-textarea(
            type="text" 
            placeholder="Содержание"
            v-model="fields.text"
          )
        .row
          button(
            type="button"
            @click="addPost"
          ) Добавить

      .table.col
        table.posts
          tr(v-for="(post, index) in posts")
            td {{post.title}}
            td {{post.date}}
            td {{post.text}}
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'

import { Validator } from 'simple-vue-validator';


export default {
      mixins: [require('simple-vue-validator').mixin],

      
  data: () => ({
    fields: {
      title: '',
      date: '',
      text: ''
    }
  }),
  methods: {
    ...mapMutations('posts', ['addBlogPost']),
    addPost() {
      const fieldsData = _.clone(this.fields)
      this.addBlogPost(fieldsData)
    }
  },
  computed: {
    ...mapGetters('posts', ['posts'])
  },
  mounted() {
  }
}
</script>
<style src="../styles/components/blog.scss" lang="scss" scoped>
</style>
