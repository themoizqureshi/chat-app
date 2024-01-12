"use client";
import { User } from "@supabase/supabase-js";
import React, { useEffect, useRef } from "react";
import { Imessage, useMessage } from "./messages";

function InitMessage({ messages }: { messages: Imessage[] }) {
  const initState = useRef(false);
  useEffect(() => {
    if (!initState.current) {
      useMessage.setState({ messages });
    }
    initState.current = true;
    //eslint-disable-next-line
  }, []);
  return <div></div>;
}

export default InitMessage;
