app.component("photo-search", {
    props: {
        form: Object,
    },
    template:
        /*html*/ `<div><span :class="{'hidden' : form.search }"><i class="fas fa-search mt-6" @click="search"></i></span>
      <span :class="{'hidden' : !form.search}">
        <input
          class="mt-6 rounded ml-2 w-96 px-2 py-1 border-2 border-black mx-2 placeholder-opacity-50 placeholder-gray-500 focus:outline-none"
          placeholder="Please enter text for searching photos" v-model="form.text">
        <button class="mx-2 rounded text-white px-4 py-2 bg-blue-500 " @click="search">Cancel</button>
      </span> </div>
   `,
    methods: {
        search() {
            this.form.search = !this.form.search;
        },
        cancel() {
            this.form.search = !this.form.search
            this.form.text = '';
        },
    }
});