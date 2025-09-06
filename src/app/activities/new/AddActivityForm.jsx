"use client";

import { useState } from "react";
import { addActivity } from "./action";

export default function AddActivityForm() {
	const [file, setFile] = useState(null);

	const handleFileChange = async (e) => {
    const selectedFile = e.target.files[0];
	if (!selectedFile) return;

    if (selectedFile.type === "image/heic" || selectedFile.name.toLowerCase().endsWith(".heic")) {
		const heic2any = (await import("heic2any")).default;
    	const convertedBlob = await heic2any({blob: selectedFile, toType: "image/jpeg"});
    	const convertedFile = new File([convertedBlob], selectedFile.name.replace(/\.heic$/i, ".jpg"), {
    		type: "image/jpeg",
    	});
    	setFile(convertedFile);
    } else {
    	setFile(selectedFile);
    }
  };

  const handleSubmit = async (e) => {
	e.preventDefault();
	const formData = new FormData(e.target);
    if (file) {
      formData.set("image", file);
    }
    try {
      await addActivity(formData);
      window.location.href = "/activities"; // 投稿後に遷移
    } catch (err) {
      console.error(err);
      alert("投稿に失敗しました");
    }
  };
    

	return (
		<form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto p-4 pt-20" >
		<input type="text" name="title" placeholder="タイトル" className="border p-2 w-full" required />
		<input type="date" name="date" className="border p-2 w-full" required />
		<input type="text" name="location" placeholder="場所" className="border p-2 w-full" />
		<input type="number" name="num_people" placeholder="参加人数" className="border p-2 w-full" />
		<textarea name="description" placeholder="説明" className="border p-2 w-full" rows={5} />
		<input type="file" name="image" className="border" accept="image/*, .heic" onChange={handleFileChange}/>
		<button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
			追加
		</button>
		</form>
  	);
}
