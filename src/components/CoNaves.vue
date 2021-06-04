<template>
  <div id="datos">
    <div v-for="name in result.results" :key="name.name" class="card-deck">
          <div class="card">
              <img class="card-img-top" src="holder.js/100x180/" alt="">
              <div v-if="result" class="card-body">
                  <h4 class="card-title">{{name.name}}</h4>
              </div>
          </div>
      </div>
      pagin
  </div>
</template>

<script>

import axios from "axios";

export default {
    data: () => ({
        result:[]
    }),
    created() {
        axios.get("https://swapi.dev/api/starships/").then((result) =>{
           this.result=result.data;
           console.log(result);
        });
    }, 
    }
</script>