

//Button that leads to blog display page
// const ourDailyBlogs = document.getElementById('linkToBlogs')

// ourDailyBlogs.addEventListener("click", function(event){
//     event.preventDefault();
//     window.location.href="blog.html";
// });


//Captures the user's input in the text boxes and saves it to local memory so long as all boxes contain content
const logButton = document.getElementById('log-btn');

logButton.addEventListener("click",function(event) { 
    
        event.preventDefault();

            const author = document.getElementById("author").value;
            const title = document.getElementById("blogTitle").value;
            const blog =  document.getElementById("newBlogEntryBox").value;

             if(blog === ""){
                window.alert("No Blog Added")
                return
            }
            if(author === ""){
                window.alert("No Author Added")
                return
            }
            if(title === ""){
                window.alert("No Title Added")
                return
            }
    let newDailyBlog = {
        title: title,
        author: author,
        blog :blog,
    }

const allDailyBlogs = JSON.parse(localStorage.getItem('savedBlogs')) || [];
allDailyBlogs.push(newDailyBlog);
localStorage.setItem('savedBlogs', JSON.stringify(allDailyBlogs));
        
        console.log("Blog Has Been Logged!");
        console.log(JSON.stringify(allDailyBlogs));
        // console.log(`${allDailyBlogs}`)

            document.getElementById("newBlogEntryBox").value ="";
            document.getElementById("blogTitle").value ="";
            document.getElementById("author").value = "";

        window.location.href="blog.html";

});


