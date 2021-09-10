<template>
  <input @input="HandleInput" type="text" placeholder="Имя пользователя" v-model="text">
</template>

<script>
    export default {
        data() {
          return {
            text: '',
          }
        },
        methods: {
          HandleInput() {
            this.$store.commit('store/SetInput', this.text)
            this.$axios.$post('http://localhost:4200', {
              input: this.$store.state.store.input
            })
          }
        }
    }
</script>

<style scoped>
  input {
    height: 34px;
    width: 100%;
    border: none;
    border-radius: 20px;
    background-color: #ffffff;
    font-size: 28px;
    text-align: center;
    font-family: Comfortaa;
  }
  input:focus{
    outline: none;
  }

  input::placeholder {
    color: rgba(0,0,0,0.5);
  }
</style>
