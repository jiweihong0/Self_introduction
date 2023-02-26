<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FlexPicture',
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    },
    width: {
      type: String,
      required: true
    },
    height: {
      type: String,
      required: true
    },
    class: {
      type: String,
      required: false
    }
  }
})

</script>

<template>
  <div class = "container">
      <img src = "https://picsum.photos/200/300" alt = "no image">
      <img src = "https://picsum.photos/200/300" alt = "no image">
      <img src = "https://picsum.photos/200/300" alt = "no image">
  </div>
</template>

<style scoped>
.container {
  width: 50vw;
  height: 500px;
  display: flex;
  gap: 30px;
  margin-bottom: 20px;
  overflow: hidden;
}
img {
    flex:  1 1;
    border:  1px solid rgba(255,255,255,0.5);
    background-size: cover;
    background-position: center;
    opacity: 0.4;
    transition: 0.5s ease-in-out;
}
img:hover {
    opacity: 1;
    flex: 10 1;
    border:  1px solid #fff;
}

</style>