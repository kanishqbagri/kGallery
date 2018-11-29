const assert = require('assert');

it('should return true', () => {
  assert.equal(true, true);
});

const ImageService= require ('../../src/services/ImageService');
it('Rest call should return a valid response', ()=>{
   var i= new ImageService();
   var response=i.getImageData("Kids");
   console.log('tag', response);
   assert.equal(response, !null);
})