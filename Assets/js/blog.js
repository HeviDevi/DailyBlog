// To access the saved data and display it as a blog post, 
//you should review the following chapters in the course:



// Chapter on Web APIs: Understanding how to interact with APIs 
//to retrieve data is crucial for accessing the saved blog post data.



// Chapter on Local Storage: Review how to store and retrieve data using local storage in the browser.
// This will help you access the saved blog post data.



// Chapter on Rendering Data: Learn about rendering data dynamically on a webpage.
// This will be useful for displaying the saved blog post data as a blog post on your website.



// By revisiting these chapters and understanding how to work with APIs, local storage, and rendering data dynamically, you will be able to access the saved data and display it as a blog post effectively.






//Pulls the blog data out of local storage and generates a new div element per each blog property, I still need to get them generated with Bootstrap elements.
const savedBlogs = JSON.parse(localStorage.getItem('savedBlogs'));

savedBlogs.forEach(blog => {
  
  const postBlog = document.createElement('div');

 
  postBlog.innerHTML =  `
 
  <h2>Title: ${blog.title}</h2>
  <p>Written By: ${blog.author}</p>
  <p>${blog.blog}</p>
  <h3>==================</h3>
  `
  ;
  document.getElementById('allDailyBlogs').appendChild(postBlog);

  console.log("Blog Has Been Logged!");
  console.log(JSON.stringify(savedBlogs));
  // console.log(`${savedBlogs}`)
})




// function displayDailyBlogs() {
    
   
//     const allDailyBlogs = JSON.parse(localStorage.getItem('savedBlogs'));
  
//     if (allDailyBlogs !== null) {
//       authorEl.textContent = allDailyBlogs.author;
//       titleEl.textContent = allDailyBlogs.title;
//       blogEl.textContent = allDailyBlogs.blog;
//     } else {
//         console.log("No Saved Blogs")
//     }
//   }
//   displayDailyBlogs();