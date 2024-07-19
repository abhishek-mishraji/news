import React from 'react';
import Article from './Article';
function NewsList({ articles }) {
    return (
        <div className='news-list'>
            {articles.map((items, index) => {
                return <Article key={index} items={items} />
            })}
            {/* this is news list */}
        </div>
    );
}
export default NewsList;