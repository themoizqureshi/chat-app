import React, { Suspense } from "react";
import ListMessages from "./ListMessages";
import supabaseServer from "@/lib/supabase/server";
import InitMessage from "@/lib/store/InitMessage";

const ChatMessages = async () => {
  const supabase = await supabaseServer();

  const { data } = await supabase.from("messages").select("*,users(*)");

  // console.log(data);
  return (
    <Suspense fallback={"loading.."}>
      <ListMessages />
      <InitMessage messages={data || []} />
    </Suspense>
  );
};

export default ChatMessages;
