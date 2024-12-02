import React from 'react'
import BlogAbout from './blog-2'
import BlogAbout2 from './blog-4'
import BlogAbout6 from './blog-6'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const Blog = () => {
    const [currentPage, setCurrentPage] = useState(null); // State to track the current page
      
        // Function to handle page click
        const handlePageClick = (pageNumber) => {
          setCurrentPage(pageNumber); // Set the current page
        };

        const renderPageContent = () => {
            switch (currentPage) {
              case 1:
                return <BlogAbout />;
              case 2:
                return <BlogAbout2 />;
              case 3:
                return <BlogAbout6 />;
              default:
                return <p>Select a page to view the content.</p>;
            }
          };
  return (
    <div>
      {renderPageContent()}
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center mt-10 mb-10">
                <li className="page-item disabled">
                    <a className="page-link" href="#" tabindex="-1">Pre</a>
                </li>
                <li className="page-item">
                    <Link to={'/blog2'} onClick={() => handlePageClick(1)} className="page-link">1</Link>    
                </li>
                <li className="page-item">
                    <Link to={'/blog4'} onClick={() => handlePageClick(2)} className="page-link">2</Link>    
                </li>
                <li className="page-item">
                    <Link to={'/blog6'} onClick={() => handlePageClick(3)} className="page-link">3</Link>    
                </li>
                <li className="page-item">
                    <a class="page-link" href="#">Next</a>
                </li>
            </ul>
        </nav>

    </div>
    
  )
}

export default Blog