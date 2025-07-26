export default function PostCard({ title, description, date }) {
  return (
    <div className="max-w-2xl mx-auto mb-6">
      <div className="text-gray-400 text-sm mb-1">{date}</div>

      {/* User bubble (like a question) */}
      <div className="bg-sky-300 text-blue-900 rounded-2xl p-4 w-fit max-w-full shadow-md mb-3">
     
        <h2 className="font-semibold text-lg">{title}</h2>
      </div>

      {/* ChatGPT-style response bubble */}
      <div className="bg-gray-100 text-gray-800 rounded-2xl p-4 w-fit max-w-full shadow-sm">
        <p className="text-base">{description}</p>
      </div>
    </div>
  );
}

