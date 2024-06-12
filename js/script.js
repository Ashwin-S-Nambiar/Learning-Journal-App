viewBtn = document.getElementById('view-more')
viewBtnContainer = document.getElementById('view-more-container')
main = document.getElementById('main')

viewBtn.addEventListener('click', function(){
    let isClicked = true
    let restFeed = ''
    if (isClicked) {
        for (let i = 4; i < 7; i++) {
            restFeed += `
            <article>
                <img class= "blog-pic" src="/images/blog-image-0${i}.png" alt="Image for Article ${i}">
                <header class="article-header">
                    <p class="article-date">JULY 23, 2022</p> 
                    <h2 class="blog-name">Blog ${i}</h2>
                    <p class="blog-subhead">I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.</p>
                </header>                 
            </article> `
        }
    }
    viewBtnContainer.style.display = 'none'
    main.innerHTML += restFeed
})
