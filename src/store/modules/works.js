const works = {
    namespaced: true,
    state: {
        data: {}
        
    },
    actions: {
        addNewWork({ state, rootGetters }, fields) {
            fetch('/addwork', {
                method: 'post',
                // headers: {
                //     'Content-Length': file.length,
                //     'Authorization' : 'Bearer <authorization token>',
                //     'Content-Type': 'multipart/form-data'
                // },
                body: fields
            })
        }
    }
}


export default works
// console.log('hello')