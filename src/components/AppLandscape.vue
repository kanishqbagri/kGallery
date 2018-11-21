<template>
<v-app>
    <v-toolbar>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title>Memories</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat>Search</v-btn>
      <v-btn flat>Favourites</v-btn>
    </v-toolbar-items>
  </v-toolbar>
<album_carousal></album_carousal>
</v-app>
</template>

<script>
import album_carousal from '@/components/album_carousal'
  export default {
      name: 'app2',
        data () {
            return {          
                images:["static/img/landscape/landscape1.jpg", "static/img/landscape/landscape2.jpg","static/img/landscape/landscape3.jpg","static/img/landscape/landscape4.jpg","static/img/landscape/landscape5.jpg","static/img/landscape/landscape6.jpg","static/img/landscape/landscape7.jpg","static/img/landscape/landscape8.jpg","static/img/landscape/landscape9.jpg"]
            }
            },
        components:{
        album_carousal
        }
  }
</script>
