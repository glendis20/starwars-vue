<template>
  <div id="datos">
    <div v-for="titles in result.results" :key="titles.episode_id" class="card-deck">
          <div class="card">
              <div v-if="result" class="card-body">
                  <h4 class="card-title">{{titles.title}}</h4>
      </div>
  </div>
  </div>
  </div>
</template>

<script>

import axios from "axios";

export default {
    name: "Hola",
    data: () => ({
       result:[]
    }),
    created() {
        axios.get("https://swapi.dev/api/films").then((result) =>{
           this.result=result.data;
           console.log(result);
        });
    }, 
    }
    </script>
