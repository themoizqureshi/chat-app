"use client";
import { User } from "@supabase/supabase-js";
import React, { useEffect, useRef } from "react";
import { useUser } from "./user";

function InitUser({ user }: { user: User | undefined }) {
  const initState = useRef(false);
  useEffect(() => {
    if (!initState.current) {
      useUser.setState({ user });
    }
    initState.current = true;
    //eslint-disable-next-line
  }, []);
  return <div></div>;
}

export default InitUser;
