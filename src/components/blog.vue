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
          //- div {{validation.firstError('fields.title')}}
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
          //- div {{validation.firstError('fields.text')}}
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
import { mapGetters, mapMutations, mapActions } from 'vuex'
import { Validator } from 'simple-vue-validator';



export default {
//       mixins: [require('simple-vue-validator').mixin],
//  validators: {
//       'fields.title'(value) {
//  return Validator.value(value).required('Поле не может быть пустым')
//       },
//      'fields.text'(value) {
//  return Validator.value(value).required('Поле не может быть пустым')
//       }
//   },
      
  data () { 
    return {
      fields: {
        title: '',
        date: '',
        text: ''
      }
    }
  },

  methods: {
    ...mapActions('posts', ['savePosts']),
    addPost() {
        const article = {
          title: this.fields.title,
          date: this.fields.date,
          text: this.fields.text
        }
          const data = JSON.stringify(article)
    // POST Запрос что бы отправить данные на сервер
    fetch('/addPosts', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: data
    }).then(response => {
        console.log(response)
    })

    }
  //   ...mapMutations('posts', ['addBlogPost']),
  //   addPost() {
  //     const fieldsData = clone(this.fields)
  //     this.addBlogPost(fieldsData)
  //   }
  // },
  // computed: {
  //   ...mapGetters('posts', ['posts'])
  // },
  // mounted() {
  }
 
}
</script>
<style src="../styles/components/blog.scss" lang="scss" scoped>
</style>
