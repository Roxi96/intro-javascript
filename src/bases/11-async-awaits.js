
const getImagen = async() =>{

    try{
        const apiKey = 'U2Rm3RD68Jamrtpa08qVNLxnssj1r5ZZ';
        const resp = await fetch (`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const {data} = await resp.json();
    
        const {url} = data.images.original; 
        const img = document.createElement('img');
        img.src = url;
    
       document.body.append( img );
    } catch(error){
        console.warn(error)
    }


  
}

getImagen();