<template lang="pug">
  .background
    .wrapper
      Bar
      Button
      IconButton
      Slider

      p State: {{this.$store.state.store}}

</template>

<script>

</script>

<style scoped>
  @font-face {
    font-family: 'Comfortaa';
    font-style: normal;
    font-weight: 700;
    font-display: auto;
    src: url('assets/fonts/Comfortaa-VariableFont_wght.ttf') format('truetype');
  }

  .background {
    background: linear-gradient(to bottom right, lightgray, lightpink);
    justify-content: center;
    display: flex;
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    width: 50%;
    align-items: center;
    justify-content: space-around;
    font-family: Comfortaa,serif;
    height: 800px;
  }
</style>
