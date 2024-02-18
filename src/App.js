import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
import Model from './model';
import './style.css';

const App = () => {
  const [data, setData] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const openModal = (post) => {
    setSelectedPost(post);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPost(null);
    setModalOpen(false);
  };

  useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/posts');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData();
}, []);


  return (
    <div className="App">
      <div className="container">
        <div className="card-container">
          {data.map((post) => (
            <Card key={post.id} post={post} openModal={openModal} />
          ))}
        </div>
      </div>
      {modalOpen && <Model post={selectedPost} closeModal={closeModal} />}
    </div>
  );
};

export default App;