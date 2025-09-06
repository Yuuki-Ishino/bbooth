"use server"

import { supabase } from "$/utils/supabase/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import dayjs from "dayjs";

export async function addActivity(formData) {
	console.log(formData);
	const title = formData.get("title");
	const date = formData.get("date");
	const location = formData.get("location");
	const numPeople = formData.get("numPeople");
	const description = formData.get("description");
	const file = formData.get("image");

	console.log(file);
	

	let imageUrl = null;

	if (file && file.size > 0) {
		const fileName = `${dayjs().format("YYYYMMDD_HHmmss")}-${file.name}`;
		console.log(fileName);
		const { error } = await supabase.storage.from("activity-imgs").upload(fileName, file);
		if (error) {
			console.error("Storage upload errdor:", error);
			throw new Error("画像アップロード失敗");
		}
		const { data } = supabase.storage.from("activity-imgs").getPublicUrl(fileName);
		imageUrl = data.publicUrl
	}

  const { error } = await supabase
  .from("activities")
  .insert([
		{
			title,
			date,
			location,
			numPeople,
			description,
			imageUrl
		},
	]);

  if (error) {
		console.error(error);
		throw new Error("データ追加失敗");
	}

  // 新しいデータを反映するため再検証
  revalidatePath('/activities');
	redirect('/activities');
}
