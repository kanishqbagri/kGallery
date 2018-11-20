<template>
<v-layout no-wrap align-center justify-center fill-height>
        <v-container fluid d-inline>   
            <v-flex
              v-for="n in images2"
              :key="n"
              id="outerCntr"
            >
              <v-card>
                <v-img
                  :src="n"
                  class="grey lighten-2"
                >
                </v-img>
              </v-card>
            </v-flex>
          
        </v-container>
        </v-layout>
</template>

<script>
export default {
    props:["name"],
    name:'albumView',
    data(){
        return{
      images:["static/img/kids/kids1.jpg", "static/img/kids/kids2.jpg","static/img/kids/kids3.jpg","static/img/kids/kids4.jpg","static/img/kids/kids5.jpg","static/img/kids/kids6.jpg","static/img/kids/kids7.jpg","static/img/kids/kids8.jpg","static/img/kids/kids9.jpg"],
      images2:["static/img/friendship/friendship1.jpg", "static/img/friendship/friendship2.jpg","static/img/friendship/friendship3.jpg","static/img/friendship/friendship4.jpg","static/img/friendship/friendship5.jpg","static/img/friendship/friendship6.jpg","static/img/friendship/friendship7.jpg","static/img/friendship/friendship8.jpg","static/img/friendship/friendship9.jpg"]
        }
    },
    methods: {
        tapped : function() {
            console.log("tapped")
        }
    },
}
</script>
<style>
#outerCntr{
  height: 250px;
  width: 325px;
  display: inline-block;
  flex-wrap: nowrap;
  overflow: scroll;
}
v-card > v-img{
  width:100%;
  height: 100%;
}
</style>
