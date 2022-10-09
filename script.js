import { posts } from "/data.js"

function postFeed() {
    let feedHtml = ""
    for (let i = 0; i < posts.length; i++) {
        feedHtml += 
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
                    <button class="feed-btn like-btn" id="like-btn${i}"></button>
                    <button class="feed-btn" id="comment-btn"></button>
                    <button class="feed-btn" id="dm-btn"></button>
                    <p class="likes"><span id="num-likes${i}">${posts[i].likes}</span> likes</p>
                    <div class="comments">
                        <p id="comment"></p>
                        <span id="username">${posts[i].username}</span> ${posts[i].comment}</p>
                    </div>
                </div>
            </div>`
            
    }
    
return feedHtml
}

function render() {
    document.querySelector('main').innerHTML = postFeed()
}

render()

for (let i = 0; i < posts.length; i++) {
    let isLiked = true
    document.getElementById("like-btn" + i).addEventListener('click',function() {
        if (isLiked){
                posts[i].likes++
                console.log(posts[i].likes)
                console.log(isLiked)
                document.getElementById("num-likes"+ i).textContent = posts[i].likes
                document.getElementById("like-btn" + i).classList.toggle('liked')
        }else {
            posts[i].likes--
            console.log(posts[i].likes)
            console.log(isLiked)
            document.getElementById("num-likes"+ i).textContent = posts[i].likes
            document.getElementById("like-btn" + i).classList.toggle('liked')
        }
        isLiked = !isLiked
    })
}





