<template>
  <v-app>
<v-toolbar>
    <router-link to="/home">
        <v-icon x-large>home</v-icon>
      </router-link>
    <v-toolbar-title id="toolbarTitle">The Way I Remember It..</v-toolbar-title>
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
      <!-- <v-btn color="info" flat light medium>Upload</v-btn> -->
      <v-btn color="info" flat light medium>
      <upload-button title="Upload" :selectedCallback="fileSelectedFunc"></upload-button>
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>

    <v-content>
 
      <category items="KIDS"></category>
      <album name="Kids" category="Kids"></album>
      <album name="Papa's Journey" category="Papa_Journey"></album>
      <album name="Friendship" category="Friendship"></album>
      <album name="Seasons" category="Seasons"></album>
      <album name="Landscapes" category="Landscapes"></album>
      <album name="Concerts" category="Concerts"></album>
      <album name="Recent Uploads" category="myuploads"></album>
    </v-content>
  </v-app>
</template>

<script>
import album from '@/components/album'
import album2 from '@/components/album_2'
import category from "@/components/category"
import albumView from "@/components/albumView"
import UploadButton from '@/components/UploadButton';
export default {
  name: 'Home',
  components: {
    category,
    album,
    UploadButton,
  },
  data () {
    return {
      isEditing: false,
      model: null,
      categories: ['Landscapes','Kids','Concerts','Friendship','Seasons'],
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
<style>
@import url('https://fonts.googleapis.com/css?family=Lobster');
#toolbarTitle{
  font-family: 'Lobster', cursive;
  font-size: 24px;
}
</style>

