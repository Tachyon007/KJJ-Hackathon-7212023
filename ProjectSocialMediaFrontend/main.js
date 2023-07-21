
// system for loading more at the end of the feed
let lastObserver = new IntersectionObserver((e)=>{
    e = e[e.length - 1];
    if (e && e.isIntersecting) {
        onFeedEnd();
    }
})

lastObserver.observe(document.getElementById("feedEndTrigger"));

function onFeedEnd(){
    setTimeout(()=>{
        for(let i = 0; i < 4; i++){
            addToFeed();
        }
    }, 1000);//simulate loading
}


// add to feed
function addToFeed(){

    let imgSources = [];
    let decoration = "";
    let title = "";




    let container = document.getElementById("feedContainer");
    let projFeed = document.createElement("div");
    projFeed.className = "projectFeedView";

    //images
    let feedImgContainer = document.createElement("div");
    let feedImgScroller = document.createElement("div");

    feedImgContainer.className = "feedImgContainer";
    feedImgScroller.className = "feedImgScroller";

    for(let i = 0; i < 5; i++){
        let a = document.createElement("img");
        a.src = "./assets/Search1.png";
        feedImgScroller.appendChild(a);
    }

    feedImgContainer.appendChild(feedImgScroller);
    projFeed.appendChild(feedImgContainer);


    //credits
    let credits = document.createElement("div");
    credits.style = "height: 50%; display: grid; grid-template-columns: 1fr 1fr; text-align: center;";
    credits.innerHTML = `
            <h3 style="grid-column: span 2; font-size: 4.5vmin; text-decoration: underline;">Graph Pathing</h3>
            <p style="font-size: 4vmin;">By</p>
            <div>
                <span class="material-symbols-outlined" style="position: relative; font-size: 8vmin; border-radius: 1vmin; top: 50%; transform: translateY(-50%);">
                    account_circle
                </span>
            </div>`

    projFeed.appendChild(credits);

    
    //description
    let des = document.createElement("div");
    des.style = "grid-column: span 2; padding: 5%; font-size: 3vmin;   width: 90%; word-wrap: anywhere; overflow:hidden;";
    des.innerText = "GrdfJYHGtdHGVbioyt566tgkhUHiyfjVKUhoijlinBJVYUTviyHOhyiUiytIGigu";

    projFeed.appendChild(des);


    container.insertBefore(projFeed, container.children[container.children.length - 1]);
}