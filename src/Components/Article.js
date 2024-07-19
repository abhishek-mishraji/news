import React, { useState } from 'react';
import './Article.css';

function Article({ items }) {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);


    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="articlee">
            <h2>{items.title}</h2>
            <p>{items.publishedAt}</p>
            <img src={items.urlToImage} alt={items.title} />
            <p>{items.description}</p>

            <div onClick={toggleDropdown} style={{ cursor: 'pointer' }}>
                Secret {isDropdownOpen ? '▲' : '▼'}
            </div>

            {isDropdownOpen && (
                <p className="content">{items.content}</p>
            )}
            <a href={items.url} target="_blank" rel="noreferrer">Read more</a>
        </div>
    );
}

export default Article;