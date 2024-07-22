// pages/chatbot.js
'use client';

import Head from 'next/head';
import Chat from '../components/Chat'; // Import your Chat component

export default function ChatbotPage() {
  return (
    <div>
      <Head>
        <title>Chatbot</title>
        <meta name="description" content="Chat with our bot" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Chat />
    </div>
  );
}
