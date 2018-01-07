<template lang="pug">
    tr
        td  {{skill.name}}
        td
            input(
                type="text"
                :value="skill.percents")

        td %
            button(
                type="button"
                @click="remouveSkill"
                ) Удалить

</template>

<script>
export default {
    props: {
        skill: Object

    },
    methods: {
        remouveSkill() {
            this.$emit('remouveSkill', this.skill.id);
        }
    }

}
</script>

<style  lang="scss" scoped>
</style>
