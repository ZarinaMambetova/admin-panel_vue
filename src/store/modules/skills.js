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
            console.log('11')
            state.data.push(skill);
            console.log(state.data)
            console.log(skill)
        },
        remouveExistedSkill(state,skillID) {
            state.data = state.data.filter(item => item.id !=   skillID)
        }
    },
    actions: {
        fetchSkills({ state }) {
            // Get запрос что бы попросить данные у сервера
            return fetch("/getSkills")
                .then(response => {
                    return response.json()
                }).then(data => {
                    state.data = data.getSkills
                })
        },
        saveSkill({ state }) {
            const data = JSON.stringify(state.data)
            // POST Запрос что бы отправить данные на сервер
            fetch('/addSkills', {
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
    }
        
}

export default skills
