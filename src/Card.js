import React from 'react';
import './style.css';

const Card = ({ post, openModal }) => {
  const handleModalOpen = () => {
    openModal(post);
  };

  return (
    <div className="card" onClick={handleModalOpen}>
      <img src={post.thumbnail.small} />
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <button onClick={handleModalOpen}>Learn More</button>
    </div>
  );
};

export default Card;