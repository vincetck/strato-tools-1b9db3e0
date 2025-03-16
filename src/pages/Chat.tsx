
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import ChatInterface from '@/components/ChatInterface';
import Footer from '@/components/Footer';

const Chat = () => {
  return (
    <div className="flex flex-col h-screen bg-strato-black">
      <Navbar />
      <main className="flex-1 overflow-hidden">
        <div className="h-full">
          <ChatInterface />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Chat;
