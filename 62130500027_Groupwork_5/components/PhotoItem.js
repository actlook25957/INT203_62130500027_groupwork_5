app.component("photo-items", {
    props: {
        task: Object,
    },
    template:
        /*html*/ `
       <div class = "flex">
      

        
          <img @click="clickModal(task)" :src="task.url" alt="task.alt" class="w-1/2 rounded shadow " />
          <p class="place-self-center ml-16 ">{{task.alt}}</p>
          <p class="place-self-center"><i v-show="task.heart" class="fas fa-heart text-red-600 ml-5 "></i></p>
          <i v-show="!task.done "
            class="text-black transition duration-500 far fa-2x fa-heart hover:text-pink-500 place-self-center ml-10"
            @click="clickLike(task)"></i>
          <i v-show="task.done "
            class="text-pink-500 transition duration-500 fas fa-2x fa-heart place-self-center ml-10"
            @click="clickLike(task)"></i>
        
        

      </div>
   `,
    methods: {
        clickLike(task) {
            this.$emit("when-like", task);
        },
        clickModal(task) {
            this.$emit("when-toggleview", task);
        },
    }
});