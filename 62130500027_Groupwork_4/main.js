const app = {
    data() {
        return {
            tasks: [{
                    url: 'https://images.unsplash.com/photo-1511561415413-c643d4969838?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
                    heart: false,
                    alt: 'Wolf'
                },
                {
                    url: 'https://images.unsplash.com/photo-1491485880348-85d48a9e5312?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
                    heart: false,
                    alt: 'Cat'
                },

                {
                    url: 'https://images.unsplash.com/photo-1517649281203-dad836b4abe5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
                    alt: 'Lion',
                    heart: false
                }
            ],
            form: {
                text: "",
                search: false,
            },
        }
    },
    methods: {
        toggleDone(index) {
            this.tasks[index].heart = !this.tasks[index].heart
        },
        search() {
            this.form.search = !this.form.search;
        },
    },
    computed: {
        countdone() {
            return this.tasks.filter(i => i.heart).length
        },
        searching() {
            return this.tasks.filter((member) => {
                return member.alt.toLowerCase().includes(this.form.text.toLowerCase());
            });
        },
    }
}

Vue.createApp(app).mount('#app')