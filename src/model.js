import React from 'react';
import './style.css';

const Model = ({ post, closeModel }) => {

    const date = new Date(post.date * 1000);
    const formattedDate = date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <div className="model-overlay" onClick={closeModel}>
            <div className="model">
                <img src={post.thumbnail.large} alt={post.title} className='thumbnail' />
                <h2>{post.title}</h2>
                <p>{post.content}</p>
                <div className="footer">
                    <div className="author-info">
                        <img src={post.author.avatar} alt={post.author.name} className='avatar' />
                        <p>{post.author.name} - {post.author.role}</p>
                    </div>
                </div>
                <button onClick={closeModel}>Close</button>
            </div>
        </div>
    );
};

export default Model;