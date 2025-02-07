<script setup>
// import HelloWorld from './components/HelloWorld.vue'
import FlexPicture from './components/FlexPicture.vue';
import Zoomin from './components/Zoomin.vue';
import Contact from './components/Contact.vue';
import Resume from './components/Resume.vue';
import Counts from './components/Counts.vue';
</script>

<template>
  <div id="background">

    <Zoomin/>
    <FlexPicture />
    <Resume />
    <Contact />
    <!-- <Counts /> -->
    <!-- <HelloWorld msg="Vite + Vue3" /> -->
  </div>
</template>

<style scoped>
#background {
  background-color: #000;
  margin: auto;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
}
html {
  font-family: "Zen Dots", "share tech mono", sans-serif;
}
</style>
