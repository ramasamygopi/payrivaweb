import React, { useState } from "react";
import './BlogOne.css';
import Blogdata from './BlogOne.json';
import {Link} from 'react-router-dom';
 
const BlogOneAbout = () => {
  const [searchTerm, setSearchTerm] = useState('');
 
 
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
 
  const filteredPosts = Blogdata.filter((post) => {
    const titleMatch = post.title.toLowerCase().includes(searchTerm.toLowerCase());
    const eventsMatch = post.Events.toLowerCase().includes(searchTerm.toLowerCase());
    return titleMatch || eventsMatch;
  });
 
  return (
    <>
    <div className="parent">

    </div>
      <div className='Blog-about-container'>
        <div className='Blog-about-left'>
          <h1>Blogs</h1>
          <p>Random Thoughts about Data, AI, and mostly Technology.</p>
        </div>
        <div className='Blog-about-right'>
          <img src="https://www.purpleslate.com/wp-content/uploads/2022/12/Blog-Hero-001.png" alt="Blogimg"/>
        </div>
      </div>
 
      <div className='Blog-Container'>
        <div className="filter">
          <div className="search">
            <input id="input" type="text" value={searchTerm} onChange={handleSearch} placeholder="Search by title or event"/>
            <button>Search</button>
          </div>
        </div>
 
        <div className=" bus gx-3 gy-3">
          {filteredPosts.map((post) => (
            <div className="crt" key={post.id}>
              <div className="block1">
                <img src={post.image} alt={post.title} className='image'/>
                <p id="color">{post.Events}</p>
                <h5>{post.title}</h5>
                <p>{post.description}</p>
                <div className="guider">
                  <img src={post.author.image} alt={post.author.name}/>
                  <p>{post.author.name} <br/> {post.author.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
 
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center mt-10 mb-10">
                <li className="page-item ">
                <a className="page-link" href="#" tabindex="-1">Pre</a>
                </li>
                <Link to="/blog"><li className="page-item"><a className="page-link" href="#">1</a></li></Link>  
                <Link to="/blogtwo"><li className="page-item"><a className="page-link" href="#">2</a></li></Link>
                <Link to="/blogthree"> <li className="page-item"> <a className="page-link" href="#">3</a></li></Link>
                <Link to="/blogfour"> <li className="page-item"> <a className="page-link" href="#">4</a></li></Link>
                <Link to="/blogfive"> <li className="page-item"> <a className="page-link" href="#">5</a></li></Link>
                <Link to="/blogsix"> <li className="page-item"> <a className="page-link" href="#">6</a></li></Link>
                <Link to="/blogseven"> <li className="page-item"> <a className="page-link" href="#">7</a></li> </Link>
                <Link to="/blogtwo">  <li className="page-item">
                <a class="page-link" href="#">Next</a>
                </li>
                </Link>
            </ul>
        </nav>
      </div>
    </>
  );
};
 
export default BlogOneAbout;