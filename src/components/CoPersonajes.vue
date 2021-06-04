cartas
<template>
  <div id="pers">
      <div v-for="name in result.results" :key="name.name" class="card-deck">
          <div class="card">
              <div v-if="result" class="card-body">
                  <h4 class="card-title">{{name.name}}</h4>
  </div>
   </div>
    </div>
     </div>
</template>

<script>
import axios from "axios";   

//const requestOne = "https://swapi.dev/api/films"
//const requestTwo = "https://swapi.dev/api/people"
//const requestThree = "https://swapi.dev/api/starships"

export default {
    name: "Hola",
    data: () => ({
       result:[]
    }),
    created() {
        console.log("copersonas");
        axios.get("https://swapi.dev/api/people/").then((result) =>{
           this.result=result.data;
           console.log(result);
        });
    }, 
}
</script>