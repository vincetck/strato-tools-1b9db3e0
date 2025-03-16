
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import ChatInterface from '@/components/ChatInterface';
import Footer from '@/components/Footer';

const Chat = () => {
  // Add padding to account for the fixed navbar and ensure chat is fully visible
  const [paddingTop, setPaddingTop] = useState('6rem');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setPaddingTop('5rem');
      } else {
        setPaddingTop('6rem');
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-strato-black">
      <Navbar />
      <main className="flex-1 overflow-hidden flex flex-col" style={{ paddingTop }}>
        <div className="h-full flex-1 flex flex-col">
          <ChatInterface />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Chat;
