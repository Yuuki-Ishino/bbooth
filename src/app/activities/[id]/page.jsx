export default async function ActivityDetail({ params }) {
  try {
	const res = await fetch(`http://localhost:3000/data/activities.json`);
	if (!res.ok) throw new Error("データの取得に失敗");

	const data = await res.json();
	const activity = data.items.find(item => item.id.toString() === params.id);

	if (!activity) {
		return <p className="p-16 text-white">投稿が見つかりませんでした。</p>;
  }

  return (
    <section className="pt-16">
      <img
        src={activity.image}
        alt={activity.alt}
        className="w-full h-64 object-cover rounded"
      />
      <h1 className="text-white text-3xl font-bold mt-4">{activity.title}</h1>
      <p className="text-white">{activity.date}</p>
      <p className="text-white mt-4">{activity.description}</p>
    </section>
  );
  } catch (error) {
    return <p className="p-16 text-white">データの読み込み中にエラーが発生しました。</p>;
  }
}
