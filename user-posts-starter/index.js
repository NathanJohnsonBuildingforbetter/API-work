// API 1: "https://jsonplaceholder.typicode.com/users"
// API 2: "https://jsonplaceholder.typicode.com/posts?userId=:id"
const userListEL = document.querySelector('.user-list');

async function main(){
const users = await fetch("https://jsonplaceholder.typicode.com/users");
const usersData = await users.json();
userListEL.innerHTML = usersData.map((user) => userHTML(user)).join('');
        // const x =`<div class="user-card">
        //     <div class="user-card__container">
        //         <h3>User's Name</h4>
        //         <p><b>Email:</b> email@email.com</p>
        //         <p><b>Phone:</b> 0000000000</p>
        //         <p><b>Website:</b> <a href="https://website.website" target="_blank">website.website</a></p>
        //     </div>
        //     </div>`

    console.log(usersData);
}

main();

function showUserPosts(userId){
    localStorage.setItem('userId', userId);
    window.location.href = `${window.location.origin}/user-posts-starter/user.html`;
    console.log(userId);
}

function userHTML(user){
    return `<div class="user-card" onclick="showUserPosts(${user.id})">
    <div class="user-card__container">
                <h3>${user.name}</h4>
                <p><b>Email:</b>${user.email}</p>
                <p><b>Phone:</b> ${user.phone}</p>
                 <p><b>Website:</b> <a href="https://${user.website}"  target="_blank">
                 ${user.website}</a></p>
            </div>
        </div>`;
}
 