<template>
    <!-- <v-layout>
        <v-container>
            <v-avatar
              slot="activator"
              size="200px"
            >
              <img
                :src=category[0].url
                :key="name"
                alt="Category"
              >
              
              <v-card-text>{{ category[0].name }}</v-card-text>
            </v-avatar>
            <v-avatar
              slot="activator"
              size="200px"
            >
              <img
                :src=category[1].url
                :key="name"
                alt="Category"
              >
              
              <v-card-text>{{ category[1].name }}</v-card-text>
            </v-avatar>
        </v-container>
    </v-layout> -->
<v-layout>
    <v-container>
<div >
    <table id="headerTable">
        <tr>        
            <td>
                <router-link to="/kids">
                <v-hover>
                <v-card slot-scope="{ hover }"
                :class="`elevation-${hover ? 12 : 2}`">
            <div>
            <v-avatar
              slot="activator"
              size="200px"
            >
              <img
                :src=category[0].url
                :key="category"
                alt="Category"
              >
            </v-avatar>
            
            </div>
            <div>
                <v-card-text class="text-md-center">{{ category[0].name }}</v-card-text>
            </div>
            </v-card>
            </v-hover>
            </router-link>
            </td>
                
            <td>
                <router-link to="/landscapes">
                <v-hover>
                <v-card slot-scope="{ hover }"
                :class="`elevation-${hover ? 12 : 2}`">
            <div>                
            <v-avatar
              slot="activator"
              size="200px"
            >
              <img
                :src=category[1].url
                :key="category"
                alt="Category"
              >
            </v-avatar>
            
            </div>
            <div>
                <v-card-text class="text-md-center">{{ category[1].name }}</v-card-text>
            </div>
                </v-card>
                </v-hover>
                </router-link>
            </td>

            
            <td>
                <router-link to="/friendship">
                <v-hover>
                <v-card slot-scope="{ hover }"
                :class="`elevation-${hover ? 12 : 2}`">
            <div>
                
            <v-avatar
              slot="activator"
              size="200px"
            >
              <img
                :src=category[2].url
                :key="category"
                alt="Category"
              >
            </v-avatar>
            </div>
            <div>
                <v-card-text class="text-md-center">{{ category[2].name }}</v-card-text>
            </div>
            </v-card>
                </v-hover>
                </router-link>
            </td>
            
            <td>
                <router-link to="/seasons">
                <v-hover>
                <v-card slot-scope="{ hover }"
                :class="`elevation-${hover ? 12 : 2}`">
            <div>
                
            <v-avatar
              slot="activator"
              size="200px"
            >
              <img
                :src=category[3].url
                :key="category"
                alt="Category"
              >
            </v-avatar>
            
            </div>
            <div>
                <v-card-text class="text-md-center">{{ category[3].name }}</v-card-text>
            </div>
            </v-card>
                </v-hover>
                </router-link>
            </td>
            <td>
                <router-link to="/concerts">
                <v-hover>
                <v-card slot-scope="{ hover }"
                :class="`elevation-${hover ? 12 : 2}`">
            <div>
                
            <v-avatar
              slot="activator"
              size="200px"
            >
              <img
                :src=category[4].url
                :key="category"
                alt="Category"
              >
            </v-avatar>
            
            </div>
            <div>
                <v-card-text class="text-md-center">{{ category[4].name }}</v-card-text>
            </div>
            </v-card>
                </v-hover>
                </router-link>
            </td>
        </tr>
        
    </table>
</div>
</v-container>
</v-layout>    
</template>
<script>
export default {
    props: ["items"],
    data(){
        return{
            category: [
               {
                   name:"Kids",
                   url: "static/img/kids/kids1.jpg"
               },
                {
                   name:"Landscape",
                   url: "static/img/landscape/landscape1.jpg"
               },
               {
                   name:"Friendship",
                   url: "static/img/friendship/friendship1.jpg"
               },
               
                {
                   name:"Seasons",
                   url: "static/img/seasons/seasons1.jpg"
               },
               
                {
                   name:"Concerts",
                   url: "static/img/concerts/concert1.jpg"
               }
            ]
        }
    }
}
</script>

<style>
#headerTable tr td{
    margin: 15px;
    padding: 15px;
}
</style>

