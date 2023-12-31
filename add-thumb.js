async function add_thumb() {
    var mess = await browser.runtime.sendMessage({command: "getYoutubeId"});
    if( mess == "" ){ return; }

    var link = mess.headers["content-base"][0];
    var regexp = /https:\/\/www.youtube.com\/watch\?v=/;
    if( !regexp.test(link) ) { return; }
    var video_id = link.replace(regexp,"");
    var thumb_url = `https://i.ytimg.com/vi/${video_id}/maxresdefault.jpg`;

    var a = document.createElement("a");
    a.href = link;
    var img = document.createElement("img");
    img.src = thumb_url;
    img.classList.add("yt_thumbnail");
    a.appendChild(img);
    document.body.appendChild(a);
    document.body.className += " youtube";
}

add_thumb().catch((e) => {console.log(e);});
