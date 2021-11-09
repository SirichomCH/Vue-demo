<template>
  <nav class="navbar">
    <div class="menu">
      <div class="brand">
        <b-icon icon="exclude" class="icon"></b-icon>
        SirichomCH
      </div>
      <ul class="nav">
        <li>
          <router-link to="/profile"> Profile </router-link>
        </li>
        <li>
          <router-link to="/gallery">Gallery</router-link>
        </li>
      </ul>
    </div>
    <ul class="nav">
      <li>
        <a href="https://line.me/ti/p/ERIDpc7sVr" target="_blank">
          <b-img
            right
            src="media/logo/line.png"
            color="white"
            width="25px"
            height="25px"
            class="mt-2"
            rounded
            alt="Rounded image"
          ></b-img>
        </a>
      </li>
      <li>
        <a href="https://github.com/SirichomCH" target="_blank">
          <b-img
            right
            src="media/logo/github.png"
            color="white"
            width="25px"
            height="25px"
            class="mt-2"
            rounded
            alt="Rounded image"
          ></b-img>
        </a>
      </li>
      <li>
        <a href="/files/Sirichom_Resume.pdf" download
          ><b-button variant="light">
            <b-icon icon="cloud-download-fill"></b-icon>
            Resume
          </b-button></a
        >
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: "Topbar",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Prompt&display=swap");

.navbar {
  font-family: "Prompt", sans-serif;
  justify-content: space-between;
  font-weight: 150;
  font-size: 18px;
  display: flex;
  background-image: url("~@/assets/bg.jpg");
  background-size: cover;
}

.navbar .menu {
  display: flex;
}

.navbar a {
  color: rgb(255, 255, 255);
}

.navbar a:hover {
  color: rgb(47, 137, 255);
}

.navbar .brand {
  font-family: "Prompt", sans-serif;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0px 25px;
  font-weight: 1000;
  font-size: 22px;
  color: rgb(255, 255, 255);
}

.navbar .brand .icon {
  font-family: "Prompt", sans-serif;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 1000;
  font-size: 22px;
  margin-right: 5px;
  color: rgb(255, 255, 255);
}

.navbar .nav {
  list-style: none;
}

.navbar .nav li {
  display: inline-block;
  padding: 15px 10px;
}
</style>
