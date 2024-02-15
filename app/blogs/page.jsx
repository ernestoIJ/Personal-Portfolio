import "./blogs.css";

import { blogs } from "./blogs";

export default function Blogs() {

   const posts = blogs;

   return (
      <div className="blog-container">
         {
            posts.map((blog) => (
               <div className="blog-post" key={blog.id}>
                  <div className="blog-image">
                     <img src={blog.imgUrl} alt={blog.title} />
                  </div>
                  <div className="blog-content">
                     <h3 className="">{blog.title}</h3>
                     <p className="">{blog.summary}</p>
                     <a href={blog.link} target="_blank" rel="noopener noreferrer">Read More</a>
                  </div>
               </div>
            ))
         }
      </div>
   );
}