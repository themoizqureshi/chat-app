import ChatHeader from "@/components/ChatHeader";
import { Button } from "@/components/ui/button";
import InitUser from "@/lib/store/initUser";
import supabaseServer from "@/lib/supabase/server";
import React from "react";

async function Page() {
  const supabase = await supabaseServer();
  const { data } = await supabase.auth.getSession();

  console.log(data);
  return (
    <>
      <div className="max-w-3xl mx-auto md:py-10 h-screen">
        <div className="h-full border rouded-md">
          <ChatHeader user={data.session?.user} />
        </div>
      </div>
      <InitUser user={data.session?.user} />
    </>
  );
}

export default Page;
