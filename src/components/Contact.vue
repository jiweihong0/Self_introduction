<script>
</script>
<template>
<div class="neon">
  <a  style="--color:#2ecce0" href="https://github.com/jiweihong0">Github</a>
  <a style="--color:#fccf31" href="jiweihong0@gmail.com">Email</a>
  <a style="--color:#fa7c49" href="https://www.instagram.com/_hong_203/">Instagram</a>
  <a style="--color:#2575fc" href="https://www.facebook.com/profile.php?id=100003961956018">Facebook</a>
</div>
        
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;500;700;900&family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap');

html {
  font-family: "poppins", "Noto Sans TC", sans-serif;
  font-weight: 300;
}

a{
    text-decoration-style: none;
}
.neon {
  font-size: 3rem;
  min-height: 100%;
  display: flex;
  place-content: center;
  overflow-x: hidden;
  color: rgba(255, 255, 255, 0.5);
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
}

.neon > a{
  animation: neon 5s steps(1) infinite;
}

@keyframes neon {
  5%,
  9%,
  13%,
  25% {
    color: rgba(255, 255, 255, 0.5);
    text-shadow: none;
  }
  7%,
  11%,
  15%,
  19%,
  30%,
  100% {
    color: var(--color);
    text-shadow: 0px 0px 5px var(--color), 0px 0px 20px var(--color),
      0px 0px 50px var(--color), 0px 0px 70px var(--color);
  }
}

</style>