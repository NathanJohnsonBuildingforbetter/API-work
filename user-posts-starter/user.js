// localStorage.getItem("userId");
const postListEL = document.querySelector('.post-list');
const userId = localStorage.getItem("userId");


async function onSearchChange(event){``
   const userId = event.target.value
   renderPosts(userId)
}

async function renderPosts(userId){
   
    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    const postsData = await posts.json();
    console.log(postsData);

   postListEL.innerHTML = postsData.map((post) => postHTML(post)).join('');
}



function postHTML(post){
    return `
        <div class="post">
            <div class="post__title">
              ${post.title}
            </div>
            <p class="post__body">
                ${post.body}
            </p>
         </div>`
}





renderPosts(userId);

