import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PostCard from '../../components/PostCard';

export default function Blog() {
  return (
    <>
      <Header />
    
    <main className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">🌄 Nature Talks</h1>

        <PostCard
title="Awakening Skies: The Magic of Sunrise"
  description="There’s something breathtaking about the world as it wakes up. The soft golden light, the promise of a new day, and the peaceful quiet that fills the air make every sunrise a moment to cherish."
/>
        <PostCard
         title="Sunset Serenade: When the Day Sings Goodbye"
  description="As the sun dips below the horizon, the sky bursts into a symphony of colors — fiery reds, gentle pinks, and deep purples — reminding us of the beauty in endings and the calm before night."
        />

        <PostCard
          title="Moonlight Whispers: The Night’s Silent Muse"
  description="Under the soft glow of the moon, the world slows down. The silvery light bathes the earth in mystery and serenity, inspiring poets, dreamers, and lovers alike."
  
        />

        <Link href="/" className="text-blue-600 underline mt-6 block">
          ← Back to Home
        </Link>
      </main>
    
      <Footer />
    </>
  );
}



