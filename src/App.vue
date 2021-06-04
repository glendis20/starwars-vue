<template>
  <div id="app">
    <CoMenu/>
  <div>
    <CoAlbum/>
  </div>
  </div>
</template>

<script>
import CoAlbum from "./components/CoAlbum"
import CoMenu from "./components/CoMenu"

export default {
  name: 'App',
  components: {
    CoAlbum,
    CoMenu,
  }
}
</script>

<style>
#app{
  background-color: rgb(59, 55, 55);
  min-height: 100vh;
  margin: 0;
  display: flex;
  flex-direction: column;
}
#titulo{
  color: aliceblue;
  font: 200px;
  display: inline-block;
  vertical-align: middle;
  width: 30px;
}
</style>
