import { addActivity } from "./action";

export default function addActivityForm() {
	return (
    <form action={addActivity} className="space-y-4 max-w-md mx-auto p-4 pt-20" >
      <input type="text" name="title" placeholder="タイトル" className="border p-2 w-full" required />
      <input type="date" name="date" className="border p-2 w-full" required />
      <input type="text" name="location" placeholder="場所" className="border p-2 w-full" />
      <input type="number" name="num_people" placeholder="参加人数" className="border p-2 w-full" />
      <textarea name="description" placeholder="説明" className="border p-2 w-full" rows={5} />
      <input type="file" name="image" className="border" accept="image/*" />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        追加
      </button>
    </form>
  );
}
