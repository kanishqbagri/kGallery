<template>
<v-app>
    <v-toolbar>
      <router-link to="/home">
        <v-icon x-large>home</v-icon>
      </router-link>
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
                images:["static/img/kids/kids1.jpg", "static/img/kids/kids2.jpg","static/img/kids/kids3.jpg","static/img/kids/kids4.jpg","static/img/kids/kids5.jpg","static/img/kids/kids6.jpg","static/img/kids/kids7.jpg","static/img/kids/kids8.jpg","static/img/kids/kids9.jpg"]        
            }
            },
        components:{
        album_carousal
        }
  }
</script>
