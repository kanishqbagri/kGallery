<template>
    <div class="container-outer">
        <h2>{{ name }}</h2>
        <div class="text-xs-center"></div>
      <!-- <a v-for="image in images" 
        :key="image"
        :href="image">
        <img :tap="tapped" :src="image" name="imgSize"></div> -->
        <div class="container-internal">
            <div class="ci_image" v-for="image in imageList()" :key="image">                
                <v-hover> 
                    <v-card slot-scope="{ hover }"
                    :class="`elevation-${hover ? 12 : 2}`"
                    v-cloak>
                        <v-img @click="tapped(image)" :src="image" name="imgSize"></v-img>
                        <v-dialog v-model="dialog" width="75%" v-if="selectedImage">
                            <v-img :src="selectedImage" width="75%" v-model="dialog"></v-img>                            
                                <v-spacer></v-spacer>
                                <v-btn
                                color="primary"
                                flat
                                @click="dialog = false"
                                right
                                >
                                Close
                                </v-btn>
                        </v-dialog>
                    </v-card>
                </v-hover>
                
            </div>
       </div>
    </div>
  
</template>

<script>
export default {
    props:["name","category"],
    name:'album',
    data(){
        return{
        categories: {
            kids2:[
                { id: '554545', url: "static/img/kids/kids1.jpg"}
            ],
            kids:["static/img/kids/kids1.jpg","static/img/kids/kids2.jpg","static/img/kids/kids3.jpg","static/img/kids/kids4.jpg","static/img/kids/kids5.jpg","static/img/kids/kids6.jpg","static/img/kids/kids7.jpg","static/img/kids/kids8.jpg","static/img/kids/kids9.jpg","static/img/kids/kids10.jpg","static/img/kids/kids11.jpg"],
            friendship:["static/img/friendship/friendship1.jpg", "static/img/friendship/friendship2.jpg","static/img/friendship/friendship3.jpg","static/img/friendship/friendship4.jpg","static/img/friendship/friendship5.jpg","static/img/friendship/friendship6.jpg","static/img/friendship/friendship7.jpg","static/img/friendship/friendship8.jpg","static/img/friendship/friendship9.jpg"],
            seasons:["static/img/seasons/seasons1.jpg", "static/img/seasons/seasons2.jpg","static/img/seasons/seasons3.jpg","static/img/seasons/seasons4.jpg","static/img/seasons/seasons5.jpg","static/img/seasons/seasons6.jpg","static/img/seasons/seasons7.jpg","static/img/seasons/seasons8.jpg","static/img/seasons/seasons9.jpg","static/img/seasons/seasons10.jpg","static/img/seasons/seasons11.jpg","static/img/seasons/seasons12.jpg","static/img/seasons/seasons13.jpg"],
            concert:["static/img/concerts/concert1.jpg", "static/img/concert/concert2.jpg","static/img/concert/concert3.jpg","static/img/concert/concert4.jpg","static/img/concert/concert5.jpg","static/img/concert/concert6.jpg","static/img/concert/concert7.jpg","static/img/concert/concert8.jpg"],
            landscape:["static/img/landscape/landscape1.jpg", "static/img/landscape/landscape2.jpg","static/img/landscape/landscape3.jpg","static/img/landscape/landscape4.jpg","static/img/landscape/landscape5.jpg","static/img/landscape/landscape6.jpg","static/img/landscape/landscape7.jpg","static/img/landscape/landscape8.jpg","static/img/landscape/landscape9.jpg"],
        },
          categories_t:{
          images:["static/img_t/kids/kids1.jpg", "static/img_t/kids/kids2.jpg","static/img_t/kids/kids3.jpg","static/img_t/kids/kids4.jpg","static/img_t/kids/kids5.jpg","static/img_t/kids/kids6.jpg","static/img_t/kids/kids7.jpg","static/img_t/kids/kids8.jpg","static/img_t/kids/kids9.jpg"],
          kids:["static/img_t/kids/kids1.jpg","static/img_t/kids/kids2.jpg","static/img_t/kids/kids3.jpg","static/img_t/kids/kids4.jpg","static/img_t/kids/kids5.jpg","static/img_t/kids/kids6.jpg","static/img_t/kids/kids7.jpg","static/img_t/kids/kids8.jpg","static/img_t/kids/kids9.jpg"],
          friendship:["static/img_t/friendship/friendship1.jpg", "static/img_t/friendship/friendship2.jpg","static/img_t/friendship/friendship3.jpg","static/img_t/friendship/friendship4.jpg","static/img_t/friendship/friendship5.jpg","static/img_t/friendship/friendship6.jpg","static/img_t/friendship/friendship7.jpg","static/img_t/friendship/friendship8.jpg","static/img_t/friendship/friendship9.jpg"],
          seasons:["static/img_t/seasons/seasons1.jpg", "static/img_t/seasons/seasons2.jpg","static/img_t/seasons/seasons3.jpg","static/img_t/seasons/seasons4.jpg","static/img_t/seasons/seasons5.jpg","static/img_t/seasons/seasons6.jpg","static/img_t/seasons/seasons7.jpg","static/img_t/seasons/seasons8.jpg","static/img_t/seasons/seasons9.jpg","static/img_t/seasons/seasons10.jpg","static/img_t/seasons/seasons11.jpg","static/img_t/seasons/seasons12.jpg","static/img_t/seasons/seasons13.jpg"],
          concerts:["static/img_t/concerts/concert1.jpg", "static/img_t/concerts/concert2.jpg","static/img_t/concerts/concert3.jpg","static/img_t/concerts/concert4.jpg","static/img_t/concerts/concert5.jpg","static/img_t/concerts/concert6.jpg","static/img_t/concerts/concert7.jpg","static/img_t/concerts/concert8.jpg"],
          landscape:["static/img_t/landscape/landscape1.jpg", "static/img_t/landscape/landscape2.jpg","static/img_t/landscape/landscape3.jpg","static/img_t/landscape/landscape4.jpg","static/img_t/landscape/landscape5.jpg","static/img_t/landscape/landscape6.jpg","static/img_t/landscape/landscape7.jpg","static/img_t/landscape/landscape8.jpg","static/img_t/landscape/landscape9.jpg"]        
        },
        dialog: false,
        selectedImage: null
      }
    },
    methods: {
        tapped : function(img) {
            this.selectedImage=img;
            this.dialog=true;
            console.log("tapped on ", img)
        },
        imageList: function() {
            console.log("Getting images");
            console.log( "props", this.category );
            console.log( "cat", this.categories );
            return this.categories_t[ this.category ]
            // return this.images2;
        }
    },
    computed:{

    }
}
</script>

<style>
.container-outer{
  overflow: scroll; 
  width: 100%; 
  height: 360px;
  border: 1px;
  padding: 10px;
  overflow-y: hidden;
}
.container-internal{
    width:100%;
    height:100%;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
}

.container-internal  .ci_image{
    display: inline-block;
    vertical-align: middle;
    margin: 0px;
    padding: 8px;
    width: 350px;
    height: 262px;
}

.img{
    width: 100%;
    height: 100%;
}
[v-cloak]{
    display: none;
}
</style>
