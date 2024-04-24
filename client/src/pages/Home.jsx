import React, { useEffect, useState } from 'react';
import './Home.css'; // Import the CSS file
function Footer() {
  return (
    <footer className='bg-gray-200 text-gray-700 py-4'>
      <div className='container mx-auto px-4'>
        {/* Footer content goes here */}
        <nav>
          <ul className='flex space-x-4'>
            <li><a href='#' className='hover:underline'>Privacy Policy</a></li>
            <li><a href='#' className='hover:underline'>Terms of Use</a></li>
            <li><a href='#' className='hover:underline'>FAQ</a></li>
            <li><a href='#' className='hover:underline'>Sitemap</a></li>
          </ul>
        </nav>
        <p>&copy; 2023 ONLINE Platform. All rights reserved.</p>
      </div>
    </footer>
  );
}

function Home() {
  const [greetingText, setGreetingText] = useState('');
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const greetingText = "Innovate, Integrate, Illuminate!";
    const typingInterval = setInterval(() => {
      if (charIndex < greetingText.length) {
        setGreetingText((prevText) => prevText + greetingText.charAt(charIndex));
        setCharIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [charIndex]);
  return (
    <div className='px-4 py-12 max-w-2xl mx-auto'>
      <h1 className='title' id="greeting">
        {greetingText}
      </h1>
      <p className='mb-4 text-slate-700'>
        This is a full-stack web application built with the MERN (MongoDB,
        Express, React, Node.js) stack. It includes authentication features that
        allow users to sign up, log in, and log out, and provides access to
        protected routes only for authenticated users.
      </p>
      <p className='mb-4 text-slate-700'>
        The front-end of the application is built with React and uses React
        Router for client-side routing. The back-end is built with Node.js and
        Express, and uses MongoDB as the database. Authentication is implemented
        using JSON Web Tokens (JWT).
      </p>
      <p className='mb-4 text-slate-700'>
        This application is intended as a starting point for building full-stack
        web applications with authentication using the MERN stack. Feel free to
        use it as a template for your own projects!
      </p>
    </div>
  );
}

export default function App() {
  return (
    <div className="flex flex-col h-screen">
      <main className="flex-grow">
        <Home />
      </main>
      <Footer />
    </div>
  );
}
