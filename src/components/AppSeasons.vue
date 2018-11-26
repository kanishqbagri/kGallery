<template>
<v-app>
    <v-toolbar>
      <router-link to="/home">
        <v-icon x-large>home</v-icon>
      </router-link>
    <v-toolbar-title>Memories</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat disabled="true">Favourites</v-btn>
    </v-toolbar-items>
  </v-toolbar>
<album_carousal name="Seasons" category="seasons"></album_carousal>
</v-app>
</template>

<script>
import album_carousal from '@/components/album_carousal'
  export default {
      name: 'app2',
        data () {
            return {
            }
            },
        components:{
        album_carousal
        }
  }
</script>
