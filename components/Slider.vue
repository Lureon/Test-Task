<template>
  <label class="switchWrapper">
    <input @click="HandleClick" type="checkbox">
    <span class="slider round" />
  </label>
</template>

<script>
  export default {
    methods: {
      HandleClick() {
        this.$store.commit('store/SwitchClick')
        this.$axios.$post('http://localhost:4200', {
          switch: this.$store.state.store.switch
        })
      }
    }
  }
</script>

<style scoped>
  .switchWrapper {
    position: relative;
    display: inline-block;
    width: 37px;
    height: 20px;
    color: white;
    font-size: 6px;
  }

  .switchWrapper input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    border: 1px solid black;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }

  .slider:before {
    position: absolute;
    display: flex;
    content: "ON";
    height: 16px;
    width: 16px;
    left: 1px;
    bottom: 1px;
    align-items: center;
    justify-content: center;
    background-color: #9013FE;
    -webkit-transition: .4s;
    transition: .4s;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(17px);
    -ms-transform: translateX(17px);
    transform: translateX(17px);
    content: "OFF";
    background-color: #BD10E0;
  }

  .slider.round {
    border-radius: 37px;
  }

  .slider.round:before {
    border-radius: 50%;
  }

</style>
