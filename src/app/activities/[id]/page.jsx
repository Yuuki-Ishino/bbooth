export default async function ActivityDetail({ params }) {
  try {
    const baseUrl =
      process.env.NODE_ENV === "development" 
        ? "http://localhost:3000" : "https://bbooth.vercel.app";
    const res = await fetch(`${baseUrl}/data/activities.json`);
    if (!res.ok) throw new Error("データの取得に失敗");

    const data = await res.json();
    const activity = data.items.find(item => item.id.toString() === params.id);

    if (!activity) {
      return <p className="p-16 text-white">投稿が見つかりませんでした。</p>;
    }

    return (
      <section className="pt-[70px] text-white">
        <div className="w-[95%] mx-auto max-w-[800px]">
          {/* ヘッダー画像 */}
          <img
            src={activity.image}
            alt={activity.alt}
            className="w-full h-64 object-cover rounded-lg"
          />

          {/* タイトル */}
          <h1 className="text-2xl font-bold py-4 border-b border-white">{activity.title}</h1>
          
          {/* 投稿情報 */}
          <div className="py-4 space-y-3 border-b border-white">
            <div className="flex items-center gap-2">
              <p>活動日: {activity.date}</p>
            </div>
            <div className="flex items-center gap-2">
              <p>活動場所: {activity.location || "未定"}</p>
            </div>
            <div className="flex items-center gap-2">
              <p>参加人数: {activity.num_people || "どなたでも"}</p>
            </div>
          </div>

          {/* 詳細説明 */}
          <p className="mt-6 leading-relaxed">{activity.description}</p>

        </div>
      </section>

    );
  } catch (error) {
    return <p className="p-16 text-white">データの読み込み中にエラーが発生しました。</p>;
  }
}
