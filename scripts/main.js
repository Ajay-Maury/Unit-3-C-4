async function apiCall(url) {
    //add api call logic here
    let res = await fetch(url)
    let data = await res.json();
    console.log(data)
    return data;
}


function appendArticles(articles, main) {

    //add append logic here
    // console.log(articles)
    articles.forEach(element => {
        let frame = document.createElement("div")
        frame.setAttribute("class","frame") 
        
        let Title = document.createElement("div")
        Title.innerText = element.title

        let des = document.createElement("div")
        des.innerText = element.description

        let img_div = document.createElement("div")
        let image = document.createElement("img")
        image.src = element.urlToImage
        img_div.append(image)

        frame.append(img_div,des,Title)
        main.append(frame)

        frame.addEventListener("click",()=>{
            let val = [element]
            console.log(val)
            localStorage.setItem("article",JSON.stringify(val))
            window.location.href = "news.html"
        })
    });

}

export { apiCall, appendArticles }