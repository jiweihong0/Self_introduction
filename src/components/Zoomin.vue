<script>


</script>

<template>
  <div id="card">
    <div class = "container">
        <img src="../image/me.jpg" alt = "no image">
    </div>
    <div id = "content">
        <H3>Hello</H3>
        <p>My name is Wayne ji</p>
        <p>I am a frontend developer</p>
        <p id = "btn">contact me</p>
    </div>
   </div>
</template>

<style scoped>


@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;500;700;900&family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap');

* {
  margin: 0;
  padding: 0;
  font-family: 'Poppins', 'Noto Sans TC', sans-serif;
}
#card {
  width: 95%;
  height: 100%;
  display: flex;
  gap: 5x;
  color: white;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
  overflow: hidden;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 20px;
}
#content {
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  animation:text 5s forwards ease-in-out;
}

.container {
  filter: drop-shadow(10px 10px 10px rgba(0,0,0 / 0.5));
  width: 60%;
  height: 100%;
}
img {
    width: 80%;
    height: 100%;
    object-fit: cover;
    animation: clip-path 5s forwards ease-in-out;
}
#btn {
  background-color: orange;
  color: black;
  padding: 10px 20px;
  border-radius: 5px;
  margin-top: 20px;
  cursor: pointer;
}
#btn:hover {
  color: white ;
  background-color: darkorange;
  border: 1px solid #000;
}
@keyframes clip-path {
    0% {
        clip-path: polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%);
        scale: 1;
        
    }
    100% {
        clip-path: polygon(15% 15%, 15% 85%, 85% 85%, 85% 15%);
        scale: 1.2;
      
    }
}
@keyframes text {
  0% {
    opacity: 0;
    translate: 0 70px;
  }
  35% {
    opacity: 0;
  }
  100% {
    opacity: 1;
    translate: 0 0px
  }
}
</style>