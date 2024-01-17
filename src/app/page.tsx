import ChatHeader from "@/components/ChatHeader";
import ChatInput from "@/components/ChatInput";
import ChatMessages from "@/components/ChatMessages";
import ListMessages from "@/components/ListMessages";
import InitUser from "@/lib/store/InitUser";
import supabaseServer from "@/lib/supabase/server";
import React from "react";

async function Page() {
  const supabase = await supabaseServer();
  const { data } = await supabase.auth.getSession();

  // console.log(data);
  return (
    <>
      <div className="max-w-3xl mx-auto md:py-10 h-screen">
        <div className="h-full border rouded-md flex flex-col">
          <ChatHeader user={data.session?.user} />
          <ChatMessages />
          <ChatInput />
        </div>
      </div>
      <InitUser user={data.session?.user} />
    </>
  );
}

export default Page;
