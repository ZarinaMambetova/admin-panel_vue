<template lang="pug">
  .about
    h1 Страница "Обо мне"
    skillsList(
        v-for="(skillType, index) in skillsTypes"
        :key="index"
        :skillType="skillType"
        :skills="skills"
    )

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
    ...mapActions(['fetchSkills']),
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
