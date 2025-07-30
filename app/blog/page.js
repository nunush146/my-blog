'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PostCard from '../../components/PostCard';
import CommentForm from '../../components/CommentForm';

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch('/api/posts');
        if (!res.ok) throw new Error('Failed to fetch posts');
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white p-6">
        <h1 className="text-3xl font-bold mb-8 text-center">🌄 Nature Talks</h1>

        {loading && (
          <p className="text-center text-gray-500">Loading posts...</p>
        )}
        {!loading && posts.length === 0 && (
          <p className="text-center text-gray-500">No posts available.</p>
        )}
        {!loading &&
          posts.map((post) => (
            <PostCard
              key={post.id}
              title={post.title}
              description={post.description}
            />
          ))}

        

        <CommentForm />
      </main>
       {/* Back to Home Link */}
        <p className="text-center mt-10">
          <Link href="/" className="text-blue-600 underline hover:text-blue-800">
            ← Back to Home
          </Link>
        </p>
      <Footer />
    </>
  );
}

