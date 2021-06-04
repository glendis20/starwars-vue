<template>
  <div id="hola">
    <div class="card-deck px-5 my-5 w-70">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Peliculas</h4>
          <p class="card-text">Aqui puede consultar las peliculas de la saga</p>
        <b-button variant="secondary"
            ><b-icon-camera-reels></b-icon-camera-reels
          ></b-button>
          <span v-show="pelis"><CoPeliculas /></span>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Personajes</h4>
          <p class="card-text">La historia de sus favoritos,aqui!</p>
          <b-button variant="secondary"
            ><b-icon-person-bounding-box></b-icon-person-bounding-box
          ></b-button>
          <span v-show="person"><CoPersonajes/></span>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Naves</h4>
          <p class="card-text">Todo sobre las naves legendarias</p>
          <b-button variant="secondary"
            ><b-icon-caret-up></b-icon-caret-up
          ></b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CoPeliculas from "./CoPeliculas";
import CoPersonajes from "./CoPersonajes";

export default {
  name: "App",
  components: {
    CoPeliculas,
    CoPersonajes,
  },
  data() {
    return {
      pelis: false,
      person: false,
    };
  },
};
</script>




<style scoped>
</style>