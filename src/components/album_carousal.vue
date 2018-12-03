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
            kids:["static/img/kids/kids1.jpg"],
            Xkids:["static/img/kids/kids1.jpg","static/img/kids/kids2.jpg","static/img/kids/kids3.jpg","static/img/kids/kids4.jpg","static/img/kids/kids5.jpg","static/img/kids/kids6.jpg","static/img/kids/kids7.jpg","static/img/kids/kids8.jpg","static/img/kids/kids9.jpg"],
            friendship:["static/img/friendship/friendship1.jpg", "static/img/friendship/friendship2.jpg","static/img/friendship/friendship3.jpg","static/img/friendship/friendship4.jpg","static/img/friendship/friendship5.jpg","static/img/friendship/friendship6.jpg","static/img/friendship/friendship7.jpg","static/img/friendship/friendship8.jpg","static/img/friendship/friendship9.jpg"],
            seasons:["static/img/seasons/seasons1.jpg", "static/img/seasons/seasons2.jpg","static/img/seasons/seasons3.jpg","static/img/seasons/seasons4.jpg","static/img/seasons/seasons5.jpg","static/img/seasons/seasons6.jpg","static/img/seasons/seasons7.jpg","static/img/seasons/seasons8.jpg","static/img/seasons/seasons9.jpg","static/img/seasons/seasons10.jpg","static/img/seasons/seasons11.jpg","static/img/seasons/seasons12.jpg","static/img/seasons/seasons13.jpg"],
            concerts:["static/img/concerts/concert1.jpg", "static/img/concerts/concert2.jpg","static/img/concerts/concert3.jpg","static/img/concerts/concert4.jpg","static/img/concerts/concert5.jpg","static/img/concerts/concert6.jpg","static/img/concerts/concert7.jpg","static/img/concerts/concert8.jpg"],
            landscape:["static/img/landscape/landscape1.jpg", "static/img/landscape/landscape2.jpg","static/img/landscape/landscape3.jpg","static/img/landscape/landscape4.jpg","static/img/landscape/landscape5.jpg","static/img/landscape/landscape6.jpg","static/img/landscape/landscape7.jpg","static/img/landscape/landscape8.jpg","static/img/landscape/landscape9.jpg"],        
        },
        categories_t:{
          images:["static/img_t/kids/kids1.jpg", "static/img_t/kids/kids2.jpg","static/img_t/kids/kids3.jpg","static/img_t/kids/kids4.jpg","static/img_t/kids/kids5.jpg","static/img_t/kids/kids6.jpg","static/img_t/kids/kids7.jpg","static/img_t/kids/kids8.jpg","static/img_t/kids/kids9.jpg"],
          kids:["static/img_t/kids/kids1.jpg","static/img_t/kids/kids2.jpg","static/img_t/kids/kids3.jpg","static/img_t/kids/kids4.jpg","static/img_t/kids/kids5.jpg","static/img_t/kids/kids6.jpg","static/img_t/kids/kids7.jpg","static/img_t/kids/kids8.jpg","static/img_t/kids/kids9.jpg"],
          friendship:["static/img_t/friendship/friendship1.jpg", "static/img_t/friendship/friendship2.jpg","static/img_t/friendship/friendship3.jpg","static/img_t/friendship/friendship4.jpg","static/img_t/friendship/friendship5.jpg","static/img_t/friendship/friendship6.jpg","static/img_t/friendship/friendship7.jpg","static/img_t/friendship/friendship8.jpg","static/img_t/friendship/friendship9.jpg"],
          seasons:["static/img_t/seasons/seasons1.jpg", "static/img_t/seasons/seasons2.jpg","static/img_t/seasons/seasons3.jpg","static/img_t/seasons/seasons4.jpg","static/img_t/seasons/seasons5.jpg","static/img_t/seasons/seasons6.jpg","static/img_t/seasons/seasons7.jpg","static/img_t/seasons/seasons8.jpg","static/img_t/seasons/seasons9.jpg","static/img_t/seasons/seasons10.jpg","static/img_t/seasons/seasons11.jpg","static/img_t/seasons/seasons12.jpg","static/img_t/seasons/seasons13.jpg"],
          concerts:["static/img_t/concerts/concert1.jpg", "static/img_t/concerts/concert2.jpg","static/img_t/concerts/concert3.jpg","static/img_t/concerts/concert4.jpg","static/img_t/concerts/concert5.jpg","static/img_t/concerts/concert6.jpg","static/img_t/concerts/concert7.jpg","static/img_t/concerts/concert8.jpg"],
          landscape:["static/img_t/landscape/landscape1.jpg", "static/img_t/landscape/landscape2.jpg","static/img_t/landscape/landscape3.jpg","static/img_t/landscape/landscape4.jpg","static/img_t/landscape/landscape5.jpg","static/img_t/landscape/landscape6.jpg","static/img_t/landscape/landscape7.jpg","static/img_t/landscape/landscape8.jpg","static/img_t/landscape/landscape9.jpg"]        
        }
      }
    },
    methods :{
      imageList: function() {
            console.log("Getting images");
            console.log( "props", this.category );
            return this.categories_t[ this.category ]
        }
    }
  }
</script>
<style>
</style>
