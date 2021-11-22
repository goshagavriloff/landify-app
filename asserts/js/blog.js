window.addEventListener('load',async (e)=>{ 

    let blog =document.querySelector('.blog');
    let blogPaginate=document.querySelector('.blog__paginate');

    let userId=getIdFromUrl();
    userId=(userId==null)?1:userId;

    let urlUsers='https://jsonplaceholder.typicode.com/users';
    let urlPosts=`https://jsonplaceholder.typicode.com/users/${userId}/posts`;

    let users=await getProductsData(urlUsers);
    let posts=await getProductsData(urlPosts);

    
    if (posts[0]==null){
        document.location.href='404.html';
    }

    posts.forEach((post)=>{
        blog.innerHTML+=`
            <div class='blog__item'>
                  
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                
            </div>
        `;
    });
    users.forEach((user)=>{
        blogPaginate.innerHTML+=`<a href="blog.html?id=${user.id}" class="${(user.id==userId)?'active':''}">${user.id}</a>`;
    });

},false);