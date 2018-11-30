<template>
  <div class="btn btn-primary jbtn-file"> 
      <br>
      {{ title }}<input
    type="file" v-on:change="fileSelected"></div>
</template>

<script>
  export default {
    name: 'upload-button',
    props: {
      selectedCallback: Function,
      title: String
    },
    methods: {
      fileSelected(e) {
          console.log('FILE SELECTED', e.target.files[0]);
          this.uploadFile(e.target.files[0]);
        if (this.selectedCallback) {
          if (e.target.files[0]) {
            this.selectedCallback(e.target.files[0]);
            console.log('FILE SELECTED', e.target.files[0]);
          } else {
            this.selectedCallback(null);
          }
        }
      },
      uploadFile(file){
          const formdata= new FormData();
            formdata.append('file', file)
            var url = '/pGallery/upload';
            const options ={
                method: "POST",
                body: formdata
            }
          fetch(url, options)
          .then(
              (response) => 
                {
                    console.log('IN the RESPONSEblock of Upload File')
                console.log('RESPONSE', response);
//                return response.json() ;
                }
                )
              
      }
    }
  }
</script>

<style scoped>
  .jbtn-file {
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .jbtn-file input[type=file] {
    position: absolute;
    top: 0;
    right: 0;
    min-width: 100%;
    min-height: 100%;
    text-align: right;
    filter: alpha(opacity=0);
    opacity: 0;
    outline: none;
    cursor: inherit;
    display: block;
  }
</style>