import { useState } from "react";
import { supabase } from "./supabase";
import { useEffect } from "react";

export default function Gate({ onSession }) {
  const [session, setSession] = useState(undefined);
  const [loading, setLoading] = useState(true);
  // один раз
  useEffect(() => {
    let stop = () => {};
    async function start() {
      const { data } = await supabase.auth.getSession();
      onSession(data.session);
      setLoading(false);
      setSession(data.session);
      stop = () => sub.subscription.unsubscribe();
    }
    start();
    return () => stop();
  }, []);
  ////////////////////////////
  //Срабатывает каждый раз, когда меняется session
  // один раз
  useEffect(() => {
    async function createProfileNote() {
      await supabase.from("Accounts").upsert({
        id: session.user.id,
        email: session.user.email,
      });
    }
    if (session?.user) createProfileNote();
  }, [session]);
  //upsert = update + insert
  //получаем текущую сессию

  if (loading) return <div>загрузка...</div>;
  return null;
}
