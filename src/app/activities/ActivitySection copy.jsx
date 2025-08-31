"use client"

import { supabase } from "$/utils/supabase/client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import ActivityModal from "../components/ActivityModal";

function ActivitySection() {
  const [activities, setActivities] = useState([]);
  const [selectedActivity, setSelectedActivity] = useState([]);
  const [rangeEnd, setRangeEnd] = useState(2);
  const [loading, setLoading] = useState(false);
  const loaderRef = useRef(null);

  async function fetchActivities(start, end) {
    setLoading(true);
    const {data, error} = await supabase
      .from("activities")
      .select("*")
      .order("date", { ascending: false})
      .range(start, end);

    if (!error && data.length > 0) {
      setActivities((prev) => {
        const ids = new Set(prev.map(a => a.id));
        const newItems = data.filter(item => !ids.has(item.id));
        return [...prev, ...newItems];
      });
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchActivities(0, rangeEnd);
  }, []);

  // IntersectionObserverで監視
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !loading) {
        const newEnd = rangeEnd + 3;
        fetchActivities(rangeEnd + 1, newEnd);
        setRangeEnd(newEnd);
      }
    });

    if (loaderRef.current) observer.observe(loaderRef.current);

    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [rangeEnd, loading]);

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
            <Link
              className="relative mb-14"
              key={item.id}
              href={`/activities/${item.id}`}
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-[225px] rounded-[20px] hover:opacity-70 active:opaicty-70"
              />
              <p className="bg-white/80 text-black font-bold inline-block absolute bottom-[6px] left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-[10px]">
                {item.title}
              </p>
              <p className="bg-white/80 text-black font-bold inline-block absolute top-[10px] right-[10px] px-1.5 py-2 rounded-[10px]">
                {item.date}
              </p>
            </Link>
          ))}
        </div>
        <div ref={loaderRef} className="flex item-center justify-center"/>
      </div>
    </section>
  );
}

export default ActivitySection