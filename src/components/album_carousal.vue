<template>
    <v-carousel height="675px">
    <v-carousel-item
      v-for="(item,i) in imageList()"
      :key="i"
      :src="item"
      style="height: auto"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    props:["name","category"],
    name:'album',
    data () {
      return {
        categories: {
            images:["static/img/kids/kids1.jpg", "static/img/kids/kids2.jpg","static/img/kids/kids3.jpg","static/img/kids/kids4.jpg","static/img/kids/kids5.jpg","static/img/kids/kids6.jpg","static/img/kids/kids7.jpg","static/img/kids/kids8.jpg","static/img/kids/kids9.jpg"],
            kids:["static/img/kids/kids1.jpg","static/img/kids/kids2.jpg","static/img/kids/kids3.jpg","static/img/kids/kids4.jpg","static/img/kids/kids5.jpg","static/img/kids/kids6.jpg","static/img/kids/kids7.jpg","static/img/kids/kids8.jpg","static/img/kids/kids9.jpg"],
            friendship:["static/img/friendship/friendship1.jpg", "static/img/friendship/friendship2.jpg","static/img/friendship/friendship3.jpg","static/img/friendship/friendship4.jpg","static/img/friendship/friendship5.jpg","static/img/friendship/friendship6.jpg","static/img/friendship/friendship7.jpg","static/img/friendship/friendship8.jpg","static/img/friendship/friendship9.jpg"],
            seasons:["static/img/seasons/seasons1.jpg", "static/img/seasons/seasons2.jpg","static/img/seasons/seasons3.jpg","static/img/seasons/seasons4.jpg","static/img/seasons/seasons5.jpg","static/img/seasons/seasons6.jpg","static/img/seasons/seasons7.jpg","static/img/seasons/seasons8.jpg","static/img/seasons/seasons9.jpg","static/img/seasons/seasons10.jpg","static/img/seasons/seasons11.jpg","static/img/seasons/seasons12.jpg","static/img/seasons/seasons13.jpg"],
            concerts:["static/img/concert/concert1.jpg", "static/img/concert/concert2.jpg","static/img/concert/concert3.jpg","static/img/concert/concert4.jpg","static/img/concert/concert5.jpg","static/img/concert/concert6.jpg","static/img/concert/concert7.jpg","static/img/concert/concert8.jpg"],
            landscape:["static/img/landscape/landscape1.jpg", "static/img/landscape/landscape2.jpg","static/img/landscape/landscape3.jpg","static/img/landscape/landscape4.jpg","static/img/landscape/landscape5.jpg","static/img/landscape/landscape6.jpg","static/img/landscape/landscape7.jpg","static/img/landscape/landscape8.jpg","static/img/landscape/landscape9.jpg"],        
        }
      }
    },
    methods :{
      imageList: function() {
            console.log("Getting images");
            console.log( "props", this.category );
            return this.categories[ this.category ]
            // return this.images2;
        }
    }
  }
</script>
<style>
</style>
