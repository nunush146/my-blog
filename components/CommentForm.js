'use client';

import { useState } from 'react';

export default function CommentForm() {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!comment.trim()) return;

    const newComment = {
      id: Date.now(),
      text: comment.trim(),
    };

    setComments([newComment, ...comments]);
    setComment('');
  };

  return (
    <div className="mt-12 p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-[var(--foreground)] text-center">
        Leave a Comment
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <textarea
          className="w-full p-4 bg-white/80 text-gray-800 placeholder-gray-500 rounded-lg border border-gray-300 shadow-sm resize-none focus:outline-none focus:ring-2 focus:ring-[var(--foreground)] focus:border-[var(--foreground)] transition duration-200"

          placeholder="Write your comment here..."
          rows={5}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>

        <button
          type="submit"
          className="self-end px-6 py-2 rounded-md bg-[var(--foreground)] text-[var(--background)] hover:opacity-90 transition duration-300 border-none shadow-none"
        >
          Post Comment
        </button>
      </form>

      {/* Comments Section */}
      <div className="mt-8">
        {comments.length > 0 && (
          <>
            <h3 className="text-xl font-semibold mb-2 text-[var(--foreground)]">
               Comments
            </h3>
            <div className="flex flex-col gap-2">
              {comments.map((c) => (
                <p key={c.id} className="text-[var(--foreground)] pl-2">
                  • {c.text}
                </p>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
