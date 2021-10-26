<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue';
import io from 'socket.io-client';
import {ref} from 'vue';
const socket = io();
let connectionStatus = ref('Attempting to connect');

socket.on('connect', ()=>{
  connectionStatus.value = 'Connected!';
});


</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />  
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <div>{{connectionStatus}}</div>
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
