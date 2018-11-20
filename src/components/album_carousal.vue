<template>
    <v-carousel>
    <v-carousel-item
      v-for="(item,i) in images"
      :key="i"
      :src="i"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    data () {
      return {
            images:["static/img/kids/kids1.jpg", "static/img/kids/kids2.jpg","static/img/kids/kids3.jpg","static/img/kids/kids4.jpg","static/img/kids/kids5.jpg","static/img/kids/kids6.jpg","static/img/kids/kids7.jpg","static/img/kids/kids8.jpg","static/img/kids/kids9.jpg"]        
      }
    }
  }
</script>
