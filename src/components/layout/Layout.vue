<template>
  <div class="d-flex flex-column flex-root">
    <div class="d-flex flex-column flex-row-fluid wrapper">
      <Topbar></Topbar>
      <div class="d-flex flex-column-fluid">
        <!-- <div
          :class="{
            'container-fluid': contentFluid,
            container: !contentFluid,}"> -->
            <div class="contentFluid">
          <transition name="route">
            <router-view />
          </transition>
        </div>
      </div>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Topbar from "@/components/layout/Topbar.vue";
import Footer from "@/components/layout/Footer.vue";

export default {
  name: "Layout",
  components: {
    Topbar,
    Footer,
  },
};
</script>
