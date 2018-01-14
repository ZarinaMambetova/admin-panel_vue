<template lang="pug">
  .div
    h2.title Страница "Мои работы"
    .form
      h3.title Добавить работу
      .row
        input(
          placeholder="Название проекта"
          type="text"
          v-model="fields.title"
          :class="{error: validation.hasError('fields.title')}"
        )
        div {{validation.firstError('fields.title')}}
      .row
        input.tech(
          placeholder="Технологии"
          type="text"
          v-model="fields.tech"
          :class="{error: validation.hasError('fields.tech')}"
        )
        div {{validation.firstError('fields.tech')}}
      .row
        label.upload
          input.type-file(
            type="file"
            @change="getFile($event)"
              )
         
          .icon
          .upload__text Загрузить картинку
      .row
          button(
                type="button"
                :disabled="!fields.file || validation.hasError('fields.file')"
                @click="sendData"
                     ) Добавить

          
</template>

<script>
import {mapMutations} from 'vuex';
import { Validator } from 'simple-vue-validator';

export default {
    mixins: [require('simple-vue-validator').mixin],
  validators: {
      'fields.title'(value) {
 return Validator.value(value).required('Поле не может быть пустым')
  },
        'fields.tech'(value) {
 return Validator.value(value).required('Поле не может быть пустым')
      },
     'fields.file': (value) => {
      return Validator.custom(() => {
        if (Validator.isEmpty(value)) return
        const allowedTypes = ['application/pdf', 'application/zip']
        if (!_.includes(allowedTypes, value.type)) {
          return 'Недопустимый формат файла, разрешены только .zip и .pdf'
        }
      })
    }
  },
  data: () => ({
    fields: {
      title: '',
      tech: '',
      file: null
    }
  }),
  methods: {
    ...mapMutations('works', ['addNewWork']),
    getFile(event) {
      const file = event.target.files[0]
      this.fields.file = file
    },
    sendData() {
      this.$validate().then(success => {
        if (!success) return
        const formData = new FormData()
        formData.append('file', this.fields.file)
        formData.append('tech', this.fields.tech)
        formData.append('title', this.fields.title)
        this.addNewWork(formData)
      })
    }
  },
}
</script>

<style src="../styles/components/works.scss" lang="scss">

</style>
