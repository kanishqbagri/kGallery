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

    <v-content>
 
      <category items="KIDS"></category>
      <album name="Kids" category="kids"></album>
      <album2 name="Friendship"></album2>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import album from './components/album'
import album2 from './components/album_2'
import category from "./components/category"
import albumView from "./components/albumView"

export default {
  name: 'App',
  components: {
    HelloWorld,
    category,
    album,
    album2,
    albumView
  },
  data () {
    return {
      //
    }
  }
}
</script>
