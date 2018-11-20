<template>
    <div class="container-outer">
        <h2>{{ name }}</h2>
      <!-- <a v-for="image in images" 
        :key="image"
        :href="image">
        <img :tap="tapped" :src="image" name="imgSize"></div> -->
        <div class="container-internal">
            <a v-for="image in images2" :key="image">
            <v-img @click="tapped" :src="image" name="imgSize" id="img"></v-img>
        </a>
       </div>
    </div>
  
</template>

<script>
export default {
    props:["name"],
    name:'album',
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

.container-internal  a{
    display: inline-block;
    vertical-align: middle;
    margin: 5px;
    width: 350px;
    height: 262px;
}

#img{
    width: 100%;
    height: 100%;
}

</style>
