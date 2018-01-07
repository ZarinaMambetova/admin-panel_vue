<template lang="pug">
    div
        .title {{ skillType }}
        table.table
            skillitem(
                v-for="skill in skills"
                :key="skill.id"
                :skill="skill"
                v-if="checkskillType(skillType) == skill.type"
                @remouveSkill="remouveSkill"
            )
            .add-button
                button(
                    type="button"
                    @click="addnewSkill"
                ) Добавить новый 
                input(
                    type="text"
                    v-model="newSkill"
                    @keydown.enter="addSkill"
                    :class="{error: validation.hasError('newSkill')}"
                )
            div {{validation.firstError('newSkill')}}
                

</template>

<script>
import {mapMutations} from 'vuex';
import { Validator } from 'simple-vue-validator';


export default {
      mixins: [require('simple-vue-validator').mixin],
  validators: {
      newSkill(value) {
 return Validator.value(value).required('Поле не может быть пустым')
      }
     
  },
    props: {
        skillType: String,
        skills: Array
    },
    data() {
        return {
            newSkill: ''
        }
    },
    methods: {
        ...mapMutations(['addnewSkill', 'remouveExistedSkill']),
        addSkill() {
            this.$validate().then(success => {
                if (!success) return;
            this.addnewSkill({
                id: Math.round(Math.random() * 1000000),
                name: this.newSkill,
                percents: 0,
                type: this.checkskillType(this.skillType)
            });
            this.newSkill = '';
            this.validation.reset();
            });
        },
         remouveSkill(skillID) { 
             this.remouveExistedSkill(skillID)

         },
        checkskillType(skillType) {
            switch (skillType) {
               case 'Frontend':
                return 1
               case 'Workflow':
                 return 2
               case 'Backend':
                    return 3
            }
        }
    },
        components: {
       skillitem: require('./skillitem')
    }
};
</script>
<style src="../styles/components/skillList.scss" lang="scss" scoped>
</style>
