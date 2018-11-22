<template>
  <v-app>
<v-toolbar>
    <router-link to="/home">
        <v-icon x-large>home</v-icon>
      </router-link>
    <v-toolbar-title>Memories</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      
      
      <v-card-text>
        <v-autocomplete
          v-model="model"
          :items="categories"
          :label="`Search`"
          persistent-hint
          prepend-icon='search'
        >
        </v-autocomplete>
      </v-card-text>
    
    </v-toolbar-items>
  </v-toolbar>

    <v-content>
 
      <category items="KIDS"></category>
      <album name="Kids" category="kids"></album>
      <album name="Friendship" category="friendship"></album>
      <album name="Seasons" category="seasons"></album>
      <album name="Landscape" category="landscape"></album>
      <album name="Concert" category="concert"></album>
    </v-content>
  </v-app>
</template>

<script>
import album from '@/components/album'
import album2 from '@/components/album_2'
import category from "@/components/category"
import albumView from "@/components/albumView"

export default {
  name: 'Home',
  components: {
    category,
    album,
    album2,
    albumView
  },
  data () {
    return {
      isEditing: false,
      model: null,
      categories: ['Landscape','Kids','Concerts','Friendship','Seasons']
    }
  }
}
</script>
