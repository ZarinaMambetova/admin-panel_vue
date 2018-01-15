<template lang="pug">
  .about
    h2 Страница "Обо мне"
    div.list
        skillsList(
            v-for="(skillType, index) in skillsTypes"
            :key="index"
            :skillType="skillType"
            :skills="skills"
        )
    button(
                type="button"
                @click="saveSkill"
                     ) Сохранить

</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
   data() {
        return {
            skillsTypes: ['Frontend', 'Workflow', 'Backend'],
        }
    },
     computed: {
    ...mapGetters(['skills'])
  },
    methods: {
        ...mapActions(['fetchSkills', 'saveSkill']),
    },
    created() {
        this.fetchSkills();
        
    },
    components: {
       skillsList: require('./skillsList'),
    }
}
</script>

<style src="../styles/components/about.scss" lang="scss" scoped>
</style>
