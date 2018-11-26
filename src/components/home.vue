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
          <v-select
          :items="categories"
          :key="1"
          v-model="selectedCategory"
          label="Select"
            autocomplete
            v-on:change="gotoSelection"
            id="searchCategory"
            prepend-icon="search"
          >
          </v-select>
      </v-card-text>
    </v-toolbar-items>
  </v-toolbar>

    <v-content>
 
      <category items="KIDS"></category>
      <album name="Kids" category="kids"></album>
      <album name="Friendship" category="friendship"></album>
      <album name="Seasons" category="seasons"></album>
      <album name="Landscapes" category="landscape"></album>
      <album name="Concerts" category="concert"></album>
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
      categories: ['Landscape','Kids','Concerts','Friendship','Seasons'],
      url:null
    }
  },
  methods:{
      gotoSelection : function(){
          console.log('URL', this.selectedCategory);
          this.$router.push({path:'/' + this.selectedCategory })
      }
  }
}
</script>
