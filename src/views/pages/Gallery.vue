<template>
  <div>
    <div class="text-center">
      <b-button variant="outline-info" class="item-center mt-3"
        ><h1>Gallery Page</h1></b-button
      >
    </div>
    <div class="row mt-5">
        <img
        v-for="(image, i) in images"
        :key="i"
          class="text-center col-md-6 mb-5 col-lg-3"
          width="250px"
          height="220px"
          rounded
          alt="Rounded image"
          :src="image"
          @click="index = i"
        />
        <vue-gallery-slideshow
          :images="images"
          :index="index"
          @close="index = null"
        ></vue-gallery-slideshow>
      </div>
    </div>
</template>

<script>
import VueGallerySlideshow from "vue-gallery-slideshow";

export default {
  name: "Gallery",
  components: {
    VueGallerySlideshow,
  },
  data() {
    return {
      images: [
        "../media/img/fruit-01.jpg",
        "../media/img/fruit-02.jpg",
        "../media/img/fruit-03.jpg",
        "../media/img/fruit-04.jpg",
        "../media/img/fruit-05.jpg",
        "../media/img/fruit-06.jpg",
        "../media/img/fruit-07.jpg",
        "../media/img/fruit-08.jpg",
        "../media/img/fruit-09.jpg",
        "../media/img/fruit-10.jpg",
        "../media/img/fruit-11.jpg",
        "../media/img/fruit-12.jpg",
      ],
      index: null,
    };
  },
};
</script>
