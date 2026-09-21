import { useState } from 'react';
import './index.css';

export default function App() {
  // 10 Fall Events with Links
  const fallEvents = [
    { id: 1, title: 'Annual Pumpkin Festival', date: 'Oct 12', location: 'Town Square', link: 'https://example.com/pumpkin-fest' },
    { id: 2, title: 'Apple Cider & Orchard Walk', date: 'Oct 15', location: 'Sunnybrook Farm', link: 'https://example.com/apple-walk' },
    { id: 3, title: 'Haunted Hayride Night', date: 'Oct 20', location: 'Blackwood Forest', link: 'https://example.com/haunted-ride' },
    { id: 4, title: 'Autumn Craft & Artisan Market', date: 'Oct 22', location: 'Community Center', link: 'https://example.com/craft-market' },
    { id: 5, title: 'Fall Foliage 5K Run', date: 'Oct 25', location: 'Riverside Park', link: 'https://example.com/foliage-5k' },
    { id: 6, title: 'Brew & Glaze Fest', date: 'Nov 02', location: 'Main Street Plaza', link: 'https://example.com/brew&glazefest' },
    { id: 7, title: 'Pumpkin Carving Workshop', date: 'Oct 28', location: 'Art Studio Studio A', link: 'https://example.com/carving-workshop' },
    { id: 8, title: 'Cozy Autumn Book Swap', date: 'Nov 05', location: 'Public Library', link: 'https://example.com/book-swap' },
    { id: 9, title: 'Harvest Moon Live Music', date: 'Nov 10', location: 'Oakhaven Theater', link: 'https://example.com/harvest-music' },
    { id: 10, title: 'Thanksgiving Pie Baking Contest', date: 'Nov 18', location: 'Town Hall Kitchen', link: 'https://example.com/pie-contest' }
  ];

  const [posts, setPosts] = useState([
    { id: 1, name: 'Cindy Cider', text: 'Welcome to Maple Ridge!' }
  ]);
  const [name, setName] = useState('');
  const [text, setText] = useState('');

  const handleAddPost = (e) => {
    e.preventDefault();
    if (!name || !text) return;
    setPosts([{ id: Date.now(), name, text }, ...posts]);
    setName('');
    setText('');
  };

  return (
    <div className="container">
      <header>
        <h1>Maple Ridge NY Community Board</h1>
        <p>Share News, Events and Recipes</p>
      </header>

      {/* Featured Fall Events Section */}
      <section className="events-section">
        <h2>Fall Events 2026</h2>
        <div className="board-grid">
          {fallEvents.map((event) => (
            <div key={event.id} className="card event-card">
              <h3>{event.title}</h3>
              <p>📅 {event.date} | 📍 {event.location}</p>
              <a href={event.link} target="_blank" rel="noopener noreferrer" className="event-link">
                More Details &rarr;
              </a>
            </div>
          ))}
        </div>
      </section>

      <hr className="divider" />

      {/* Message Submission Form */}
      <form className="post-form" onSubmit={handleAddPost}>
        <h2>Post A Thought</h2>
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

      {/* Community Posts */}
      <h2>Community Posts</h2>
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