<template>
  <div class="text-center">
    <v-carousel>
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          src: "./s1.jpg"
        },
        {
          src: "./s2.jpg"
        },
        {
          src: "./s1.jpg"
        },
        {
          src: "./s2.jpg"
        }
      ]
    };
  }
};
</script>
