import React, { Suspense } from "react";
import ListMessages from "./ListMessages";
import supabaseServer from "@/lib/supabase/server";
import InitMessage from "@/lib/store/InitMessage";
import { LIMIT_MESSAGE } from "@/lib/constant";

const ChatMessages = async () => {
  const supabase = await supabaseServer();

  const { data } = await supabase
    .from("messages")
    .select("*,users(*)")
    .range(0, LIMIT_MESSAGE)
    .order("created_at", { ascending: false });

  return (
    <Suspense fallback={"loading.."}>
      <ListMessages />
      <InitMessage messages={data?.reverse() || []} />
    </Suspense>
  );
};

export default ChatMessages;
