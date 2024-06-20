<template>
  <div>
    Оставить коментарий
    <div>
      name {{ author }}
      <input
        name="author"
        :value="this.author"
        id="author"
        @input.prevent="changeNewComment"
        autocomplete="off"
      />
    </div>
    <div>
      text {{ message }}
      <input name="message" type="text" :value="message" id="text" />
    </div>

    <div>
      <button>getData</button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {},
  data() {
    return {
      author: '1',
      message: '',
      date: ''
    }
  },
  methods: {
    changeNewComment(event) {
      console.log(event)
    }
  }
}
</script>

<style></style>
