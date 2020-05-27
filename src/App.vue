<template>
    <div id="app">
      <h1>Hello!</h1>
      <vMainWrapper/>
    </div>
</template>
<script>
import vMainWrapper from "./components/v-main-wrapper/index";
export default {
  name: "App",
  components: {
    vMainWrapper
  }
};
</script>

<style lang="scss">
#app {
  max-width: 1240px;
  margin: 0 auto;
}
</style>
