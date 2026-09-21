import { useState } from 'react';
import './App.css'; // or import './index.css';

export default function App() {
  // Store all community posts
  const [posts, setPosts] = useState([
    { id: 1, name: 'Maple', text: 'Welcome to the Harvest Festival! 🍁' },
    { id: 2, name: 'Pumpkin Spice', text: 'Any good spots for apple picking nearby? 🍎' }
  ]);

  // Store new post input values
  const [name, setName] = useState('');
  const [text, setText] = useState('');

  // Handle adding a new post
  const handleAddPost = (e) => {
    e.preventDefault();
    if (!name || !text) return; // Prevent empty posts

    const newPost = {
      id: Date.now(),
      name: name,
      text: text
    };

    setPosts([newPost, ...posts]);
    setName('');
    setText('');
  };

  return (
    <div className="container">
      <header>
        <h1>Maple Ridge Community Board</h1>
        <p>Share local news, events, and fall recipes!</p>
      </header>

      {/* Form to submit a post */}
      <form className="post-form" onSubmit={handleAddPost}>
        <h2>Post Anything!</h2>
        <input 
          type="text" 
          placeholder="Your Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        <textarea 
          placeholder="What's on your mind this season?" 
          rows="3"
          value={text} 
          onChange={(e) => setText(e.target.value)} 
        />
        <button type="submit">Post</button>
      </form>

      {/* List of posts */}
      <div className="board-grid">
        {posts.map((post) => (
          <div key={post.id} className="card">
            <p>{post.text}</p>
            <p className="author">— Posted by {post.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}