import React from "react";

const ChatAbout = () => {
  return (
    <div className="flex-1 flex items-center justify-center">
      <div className="text-center space-y-5">
        <h1 className="text-3xl font-bold">Welcome to chat app</h1>
        <p className="w-96">
          This is a chat application developed with Next.js 14 and Supabase.
          Login to send a message
        </p>
      </div>
    </div>
  );
};

export default ChatAbout;
