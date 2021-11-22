window.addEventListener('load',async (e)=>{

    let id=getIdFromUrl();
    let url="https://fakestoreapi.com/products";
    let product=null;
    id=(id==null)?1:id;
    if (id!=null){

        url+=`/${id}`;
        product=await getProductsData(url);
        console.log(product);

    } 

    var is404=(id==null)||(product==null);

    if (is404){
        document.location.href='404.html';
    }

    document.querySelector('.product__card img').setAttribute('src',product.image);
    document.querySelector('.product__card h2').innerHTML=`Товар: ${product.title}`;
    document.querySelector('.product_title[data-type="cat"]+p').innerHTML=catObj[product.category];
    document.querySelector('.product_title[data-type="descr"]+p').innerHTML=product.description;
    document.querySelector('.product_title[data-type="cost"]+p').innerHTML=`${product.price}$`;

    document.querySelector('.fashion').dataset.category=product.category;

    generateProducts();

},false);