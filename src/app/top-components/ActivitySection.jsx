import Button from "../components/Button";
import ActivityCardClient from "../components/ActivityCardClient";
import { getPastActivities, getLatestActivities } from "$/services/supabaseApi";

export default async function ActivitySection() {
  const pastItems = await getPastActivities(3);
  const latestItems = await getLatestActivities(3);

  return (
    <section className="text-white pt-20 lg:py-20">
      <div className="w-[90%] mx-auto max-w-[1280px] pb-20 border-b border-white">
        {/* 過去の活動 */}
        {/* サブタイトル */}
        <p className="text-[20px] font-bold mb-5">PAST ACTIVITIES</p>
        {/* タイトル */}
        <p className="text-[30px] font-bold mb-[14px]">今までの活動</p>
        {/* カード一覧 */}
        <div className="flex flex-col lg:flex-row justify-between">
          {pastItems.map((item) => (
            <ActivityCardClient 
              key={item.id}
              activity={item}
            />
          ))}
        </div>
        {/* MOREボタン */}
        <div className="text-center pb-14">
          <Button href="/activities" timeFilter="past" >SEE MORE</Button>
        </div>

        {/* 未来の活動 */}
        {/* サブタイトル */}
        <p className="text-[20px] font-bold mb-5">UPCOMING ACTIVITIES</p>
        {/* タイトル */}
        <p className="text-[30px] font-bold mb-[14px]">これからの活動</p>
        {/* カード一覧 */}
        <div className="flex flex-col lg:flex-row justify-between ">
          {latestItems.map((item) => (
            <ActivityCardClient 
              key={item.id}
              activity={item}
            />
          ))}
        </div>

        {/* MOREボタン */}
        <div className="text-center">
          <Button href="/activities" timeFilter="future">SEE MORE</Button>
        </div>
      </div>
    </section>
  );
}