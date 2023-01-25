import { posts } from './data.js'
import { stories } from './data.js'

const storiesEl = document.querySelector('.stories')
let storiesHtml = ''
stories.forEach((story) => {
    storiesHtml += `
    <div class='story'>
        <img class='story-img' src='${story.story}' alt=''>
    </div>
    `
})

const feedEl = document.querySelector(".feed")
let feedHtml = ''
posts.forEach((post) => {
    feedHtml += `
            <article class="post">
                <div class="header">
                    <img class="avatar" src="${post.avatar}">
                    <div class='name-locay'>
                        <div>
                            <span class="username">${post.username}</span>
                        </div>
                        <span class="location">${post.location}</span>
                    </div>
                </div>
                <div>
                    <img class="img" src="${post.post}">
                </div>
                <div class="control-bar container">
                    <i class="far fa-heart"></i>
                    <i class="far fa-comment"></i>
                    <i class="far fa-paper-plane"></i>                
                </div>
                <div class="container">
                    <span class="likes">${post.likes} likes</span>
                </div>
                <div class="container">
                    <p><span class="username">${post.username}</span> ${post.comment}</p>
                </div>
            </article>
    `
}) 

feedEl.innerHTML = feedHtml;
storiesEl.innerHTML = storiesHtml