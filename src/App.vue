<script setup lang="ts">
import Desktop from './components/Desktop.vue';
import Toolbar from './components/Toolbar.vue';
import StartNav from './components/StartNav.vue';
import { ref } from 'vue';
const showNav = ref<boolean>(false);

  const toggleNav = () =>{
    showNav.value= !showNav.value; 
  }

</script>

<template>
  <Desktop />
  <Toolbar @toggle-nav="toggleNav"/>
  <StartNav :open="showNav" :toggle-funct="toggleNav"/>
</template>

<style></style>
