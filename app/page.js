// app/page.js
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4">
      <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Blog</h1>
        <Link href="/blog" className="text-blue-600 underline">Go to Blog</Link>
      </main>
      </div>
      <Footer />
    </>
  )
}
