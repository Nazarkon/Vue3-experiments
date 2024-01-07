<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from "./components/HelloWorld.vue";

import styles from './assets/example.module.css';

// import logo from './assets/logo.png';

// const logo = new URL('./assets/logo.png', import.meta.url).href;

// console.log(logo);

import { developerMood } from './data.json'

console.log(developerMood, 'jsonData');

const autoImportedModules = import.meta.globEager('./autoImports/*.js')

console.log(autoImportedModules, 'autoImportedModules');

console.log(import.meta.env);

console.log(styles)
</script>

<template>
  <img alt="Vue logo" src="./assets/tiny-vue-logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" />
  <h1 :class="styles.example">Hello Css Module</h1>
</template>

<style>
#app {

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
