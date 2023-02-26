
<template>
  <div class = "container">
      <img src = "../image/1.jpg" alt = "no image">
      <img src = "../image/2.jpg" alt = "no image">
      <img src = "../image/3.jpg" alt = "no image">
  </div>
</template>

<style scoped>
.container {
  width: 50vw;
  height: 100%;
  display: flex;
  gap: 20px;
  flex-wrap: nowrap;
  overflow: hidden;
  justify-content: center;    
  margin: auto;
}
img {
    max-height: 300px;
    max-width: 300px;
    flex:  1 1;
    border:  1px solid rgba(255,255,255,0.5);
    background-size: cover;
    background-position: center;
    opacity: 0.4;
    transition: 0.6s ease-in-out;
}
img:hover {
    opacity: 1;
    flex: 2 ;
    border:  1px solid #fff;
}

</style>