import ActivityCardClient from "../components/ActivityCardClient";
import { getAllActivities } from "$/services/supabaseApi";

export default async function ActivitySection() {
  const activities = await getAllActivities();
  return (
    <section className="text-white lg:py-20">
      <div className="w-[90%] mx-auto max-w-[1280px] pb-20 border-b border-white">
        {/* サブタイトル */}
        <p className="text-[20px] font-bold mb-5">ACTIVITIES</p>

        {/* タイトル */}
        <p className="text-[30px] font-bold mb-[14px]">活動一覧</p>

        {/* カード一覧 */}
        <div className="flex flex-col lg:flex-row justify-between ">
          {activities.map((item) => (
            <ActivityCardClient 
              key={item.id}
              activity={item}
            />
          ))}
        </div>
      </div>
    </section>
  );
}