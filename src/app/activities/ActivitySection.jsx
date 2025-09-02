"use client"

import { supabase } from "$/utils/supabase/client";
import { useEffect, useRef, useState } from "react";
import ActivityModal from "../components/ActivityModal";

function ActivitySection() {
  const [activities, setActivities] = useState([]);
  const [selectedActivity, setSelectedActivity] = useState();
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const loaderRef = useRef(null);
  const limit = 3;

  async function fetchActivities(offset, limit) {
    setLoading(true);
    try {
      const {data, error} = await supabase
        .from("activities")
        .select("*")
        .order("date", { ascending: false})
        .range(offset, offset + limit - 1);

      if (error) {
        console.log(error);
        return ;
      }

      if (data.length === 0) {
        setHasMore(false);
        return ;
      }
      
      setActivities((prev) => [...prev, ...data]);
    } finally {
      setLoading(false);
    }
  }

  // IntersectionObserverで監視
  useEffect(() => {
    if (!hasMore) return ;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !loading) {
        fetchActivities(offset, limit);
        setOffset((prev) => prev + limit)
      }
    },
    { rootMargin: "200px" }
  );

    if (loaderRef.current) observer.observe(loaderRef.current);

    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [offset, loading, hasMore]);

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
            <div
              className="relative mb-14"
              key={item.id}
              onClick={() => setSelectedActivity(item)}
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-[225px] rounded-[20px] hover:opacity-70 active:opacity-70"
              />
              <p className="bg-white/80 text-black font-bold inline-block absolute bottom-[6px] left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-[10px]">
                {item.title}
              </p>
              <p className="bg-white/80 text-black font-bold inline-block absolute top-[10px] right-[10px] px-1.5 py-2 rounded-[10px]">
                {item.date}
              </p>
            </div>
          ))}
        </div>

        {selectedActivity && (
          <ActivityModal
            activity={selectedActivity}
            onClose={() => setSelectedActivity(null)}
          />
        )}

        {hasMore && (
          <div ref={loaderRef} className="h-12 flex items-center justify-center">
            {loading && <p>Loading...</p>}
          </div>
        )}
      </div>
    </section>
  );
}

export default ActivitySection