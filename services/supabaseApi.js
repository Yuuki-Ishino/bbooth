import { supabase } from "../utils/supabase/client";
import nowJST from "@/app/components/Day";

// 活動全データ取得
export async function getAllActivities() {
  const { data, error } = await supabase
    .from("activities")
    .select("*")
    .order("date", {ascending: false});

  if (error) {
    console.error(error);
    return ;
  }
  return data;
}

//　過去のアクティビティ取得
export async function getPastActivities( num ) {
  const today = nowJST();

  const { data, error } = await supabase
    .from("activities")
    .select("*")
    .lt("date", today) // date < today
    .order("date", {ascending: false})
    .limit(num);

  if (error) {
    console.error(error);
    return [];
  }

  return data
}

// 直近のアクティビティ取得
export async function getLatestActivities( num ) {
  const today = nowJST();
  
  const { data, error } = await supabase
    .from("activities")
    .select("*")
    .gte("date", today)   // date >= today
    .order("date", {ascending: true}) // latest
    .limit(num);

  if (error) {
    console.error(error);
    return [];
  }

  return data
}


// 活動データ追加
export async function addActivity(newActivity) {
  const { data, error } = await supabase.from("activities").insert([newActivity]);
  if (error) throw error;
  return data;
}
