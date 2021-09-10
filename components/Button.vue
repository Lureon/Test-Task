<template>
    <button @click="HandlePress">Войти</button>
</template>

<script>
    export default {
      methods: {
        HandlePress() {
          this.$store.commit('store/ButtonPress')
          this.$axios.$post('http://localhost:4200', {
            'button pressed': this.$store.state.store.button.pressed
          })
        }
      }
    }
</script>

<style scoped>

  button {
    height: 34px;
    display: inline-flex;
    padding: 0px 65px;
    justify-content: center;
    align-items: center;
    width: auto;
    border: none;
    border-radius: 20px;
    background-color: #ffffff;
    color: #000000;
    font-family: Comfortaa,serif;
    font-weight: bold;
    font-size: 28px;
  }

  button:active{
    background-color: #cccccc;
  }
</style>
