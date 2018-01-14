const skills = {
    state: {
        data: []
    },
    getters: {
        skills(state) {
            return state.data
        }
    },
    mutations: {
        addnewSkill(state, skill) {
            state.data.push(skill);
        },
        remouveExistedSkill(state,skillID) {
            state.data = state.data.filter(item => item.id !=   skillID)
        }
    },
    actions: {
        fetchSkills({ state }) {
            return fetch("/getSkills")
                .then(response => {
                    return response.json()
                }).then(data => {
                    console.log(data)
                    state.data = data.getSkills
                })
        }
 
        }
        
}

export default skills
