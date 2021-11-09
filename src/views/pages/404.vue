<template>
  <div class="error404">
      <div class="errorCode">404</div>
      <h3 class="errorMessage">Page not found</h3>
  </div>
</template>

<style scoped>

.error404{
    position: fixed;
    display: flex;
    width: 100%;
    height: 100%;
    background: rgb(20,16,16);
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.error404 .errorCode{
    color: rgb(146,52,52);
    font-size: 145px;
}

</style>