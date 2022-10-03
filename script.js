const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]
const mainEl = document.querySelector("main")

for (let i = 0; i < posts.length; i++) {
    mainEl.innerHTML += 
`<div id = content>
    <div class="container">
            <img id="avatar" src=${posts[i].avatar} alt="avatar of user who posted">
        <div class="post-container">
            <p id="name">${posts[i].name}</p>
            <p id="location">${posts[i].location}</p>
        </div>
    </div>
    <img class="post" src=${posts[i].post} alt="users post">
    <div class="feed-container">
        <button class="feed-btn" onclick="liked(${[i]})"id="like-btn"></button>
        <button class="feed-btn" id="comment-btn"></button>
        <button class="feed-btn" id="dm-btn"></button>
        <p class="likes"><span id="${i}">${posts[i].likes}</span> likes</p>
        <div class="comments">
            <p id="comment"></p>
            <span id="username">${posts[i].username}</span> ${posts[i].comment}</p>
        </div>
    </div>
</div>`
}

function liked(x) {
    posts[x].likes += 1
    console.log(posts[x].likes)
    document.getElementById(x).textContent = posts[x].likes
}