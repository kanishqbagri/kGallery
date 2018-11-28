export class ImageService {
    
    category:string;
    constructor (category:string){
        this.category=category;
    }

   public  getImageData(category){
        var imageQueryResponse= function(){
            var url="http://ec2-54-85-195-232.compute-1.amazonaws.com:8080/pGallery/getImageData/" + category;
            fetch(url, {
                method: "GET",
                cache: "no-cache",
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                },
            })
            .then(response => response.json())
            .then(response => console.log('tag', response));            
        }

    }
}