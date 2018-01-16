const posts = {
    namespaced: true,
    state: {
        data: []
    },
    getters: {
        posts: ({ data }) => (data)
    },
    mutations: {
        addBlogPost(state, post) {
            state.data.push(post)
        }
    },
    actions: {
      
            fetchPosts({ state }) {
                // Get запрос что бы попросить данные у сервера
                return fetch("/getPosts")
                    .then(response => {
                        return response.json()
                    }).then(data => {
                        state.data = data.getPosts
                    })
            },
            savePosts({ state }) {
                const data = JSON.stringify(state.data)
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
        }

   
}

export default posts