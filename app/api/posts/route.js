// app/api/posts/route.js
import { NextResponse } from 'next/server';

export async function GET() {
  const posts = [
    {
      id: 1,
      title: 'Awakening Skies: The Magic of Sunrise',
      description:' There’s something breathtaking about the world as it wakes up. The soft golden light, the promise of a new day, and the peaceful quiet that fills the air make every sunrise a moment to cherish.',
    },
    { 
    id: 2,
      title: 'Sunset Serenade: When the Day Sings Goodbye',
      description: 'As the sun dips below the horizon, the sky bursts into a symphony of colors — fiery reds, gentle pinks, and deep purples — reminding us of the beauty in endings and the calm before night.',
    },
    {
      id: 3,
      title: 'Moonlight Whispers: The Night’s Silent Muse',
      description: 'Under the soft glow of the moon, the world slows down. The silvery light bathes the earth in mystery and serenity, inspiring poets, dreamers, and lovers alike.',
    },
  ];

  return NextResponse.json(posts);
}

