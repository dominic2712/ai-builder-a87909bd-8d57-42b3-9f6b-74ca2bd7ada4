import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import { useParams } from 'react-router-dom';

const EditPage: React.FC = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle edit logic
    console.log('Editing post:', { id, title, content });
  };

  return (
    <div>
      <NavBar />
      <h1 className="text-2xl font-bold">Edit Post {id}</h1>
      <form onSubmit={handleSubmit} className="mt-4">
        <input 
          type="text" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          placeholder="Title" 
          className="block w-full p-2 border border-gray-300 rounded mb-4"
        />
        <textarea 
          value={content} 
          onChange={(e) => setContent(e.target.value)} 
          placeholder="Content" 
          className="block w-full p-2 border border-gray-300 rounded mb-4"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Update</button>
      </form>
    </div>
  );
};

export default EditPage;