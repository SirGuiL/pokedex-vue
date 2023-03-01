<script setup>
import {onMounted , ref} from "vue";
import axios from 'axios';

onMounted(async () => {
  fetchPokemon();
})

const canShow = ref(false);
const pokemons = ref([]);
const colors = ref([]);

const fetchPokemon = async () => {
  const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`
  
  for (let i = 1; i <= 151; i++) {
    pokemons.value.push(await axios.get(getPokemonUrl(i)))
  }
  pokemons.value.map((pokemon) => {
    switch (pokemon.data.types[0].type.name) {
      case 'steel':
        colors.value[pokemon.data.id] = '#f4f4f4';
        break;
      case 'fire':
        colors.value[pokemon.data.id] = '#FDDFDF';
        break;
      case 'grass':
        colors.value[pokemon.data.id] = '#DEFDE0';
        break;
      case 'electric':
        colors.value[pokemon.data.id] = '#FCF7DE';
        break;
      case 'water':
        colors.value[pokemon.data.id] = '#DEF3FD';
        break;
      case 'ice':
        colors.value[pokemon.data.id] = '#DEF3FD';
        break;
      case 'ghost':
        colors.value[pokemon.data.id] = '#c5c4c9';
        break;
      case 'ground':
        colors.value[pokemon.data.id] = '#f4e7da';
        break;
      case 'rock':
        colors.value[pokemon.data.id] = '#d5d5d4';
        break;
      case 'fairy':
        colors.value[pokemon.data.id] = '#fceaff';
        break;
      case 'poison':
        colors.value[pokemon.data.id] = '#98d7a5';
        break;
      case 'bug':
        colors.value[pokemon.data.id] = '#f8d5a3';
        break;
      case 'dragon':
        colors.value[pokemon.data.id] = '#97b3e6';
        break;
      case 'psychic':
        colors.value[pokemon.data.id] = '#eaeda1';
        break;
      case 'flying':
        colors.value[pokemon.data.id] = '#F5F5F5';
        break;
      case 'fighting':
        colors.value[pokemon.data.id] = '#E6E0D4';
        break;
      case 'normal':
        colors.value[pokemon.data.id] = '#F5F5F5';
        break;
    }
  })

  console.log(pokemons)
  canShow.value = true;
}
</script>

<template>
  <div class="container mx-auto">
    <h1>Pokedex</h1>
    <div  v-if="!canShow">
      <div role="status" class="space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center" :style="x != 0 ? 'margin-top: 20px' : ''" v-for="x in 5">
        <div class="flex items-center w-8 justify-center h-60 bg-gray-400 rounded sm:w-96 dark:bg-gray-700" v-for="n in 4">
        </div>
      </div>
    </div>
    <ul v-if="canShow" class="pokedex">
      <li v-for="p in pokemons" :class="`card ${p.data.types[0].type.name}`" :style="`background: ${colors[p.data.id]}`">
        <img :src="p.data.sprites.front_default" class="card-image" :alt="p.data.name">
        <h2 class="card-text">
          {{ p.data.id }}. {{ p.data.name }}
        </h2>
        <div class="flex justify-center">
          <p :class="`card-subtitle p-1 ${type.slot == 1 && p.data.types.length > 1 ? 'pr-2' : 'pl-2'}`" :style="type.slot == 1 && p.data.types.length > 1 ? 'border-right: 1px solid #666' : ''" v-for="type in p.data.types">
            {{ type.type.name }}
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>
