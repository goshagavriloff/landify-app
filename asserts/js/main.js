window.addEventListener('load',(e)=>{
    let burger=document.querySelector('.menu__burger');
    let menu=document.querySelector('.menu');
    let body=document.querySelector('body');

    burger.addEventListener('click',(e)=>{

        burger.classList.toggle('active');
        menu.classList.toggle('active');
        body.classList.toggle('lock');

    },false);

    window.catObj={
        "electronics":"ЭЛЕКТРОНИКА",
        "jewelery":"ЮВЕЛИР",
        "men's clothing":"МУЖСКОЕ",
        "women's clothing":"ЖЕНСКОЕ"
    };

    window.generateProducts=()=>{
        document.querySelectorAll('.fashion').forEach(async (el)=>{
            let cat=el.dataset.category;
            let url="https://fakestoreapi.com/products";
            
            if (cat!=undefined){
                url+=`/category/${cat}?limit=4`;
            }
    
            // url+="sort=desc";
    
            let data=await getProductsData(url);
            data.forEach((product)=>{
                generateProductListHtml(el,product);
            });
        });
    }

    window.getProductsData=async(url)=> {
        let json;
        let response=await fetch(url);
        
        if (response.ok) { 
            json = await response.json();
        } 
        
        return json;
    }

    window.generateProductListHtml=(parent,product)=>{
        parent.innerHTML+=`
        <div class="fashion_item">
            <a href='product_single.html?id=${product.id}'>
                <img src="${product.image}" alt="">
                <span>$${product.price}</span>
                <span>${catObj[product.category]}</span>
                <p>${product.title}</p>
            </a>
        </div>
        `;
    }

    window.getIdFromUrl=()=>{
        var url_string = window.location.href;
        var url = new URL(url_string);
        return url.searchParams.get("id");

    }


},false);
