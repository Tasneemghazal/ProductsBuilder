export const productSchema =(product:{title:string, description:string,imageURL:string, price:string})=>{
    const errors:{title:string, description:string,imageURL:string, price:string}={
    title:"",
    description:"",
    imageURL:"",
    price:"",
    };
    
    const imgUrlRegex=/^(https?|ftp):\/\/[^\s$.?#].[^\s]*$/.test(product.imageURL);
    if(!product.title.trim()|| product.title.length<10 || product.title.length>80){
        errors.title=" the product title must be at least 9 characters and at most 79 characters"
    }
    if(!product.description.trim()|| product.description.length<10 || product.description.length>80){
        errors.description=" the product description must be at least 9 characters and at most 79 characters"
    }
    
    if(!product.imageURL.trim() || !imgUrlRegex){
        errors.imageURL="valid image URL is required";
    }
    
    if(!product.price.trim()||isNaN(Number(product.price))){
        errors.price="Valid price is required";
    }
    return errors;

}