"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

function ActivitySection({ timeFilter  = "all" }) {
  const [items, setItems] = useState([]);
  const [filterMode, setFilterMode] = useState(timeFilter);

  useEffect(() => {
    fetch("/data/activities.json")
    .then((res) => res.json())
    .then((data) => setItems(data.items))
    .catch((err) => console.error(err))
  }, []);

  const now = new Date();

  const filteredItems = items.filter((item) => {
    const itemDate = new Date(item.date);
    if (filterMode === "past") return (itemDate < now)
    if (filterMode === "future") return (itemDate >= now)
    return true;
  })

  return (
    <section className="text-white lg:py-20">
      <div className="w-[90%] mx-auto max-w-[1280px] pb-20 border-b border-white">
        {/* サブタイトル */}
        <p className="text-[20px] font-bold mb-5">ACTIVITIES</p>

        {/* タイトル */}
        <p className="text-[30px] font-bold mb-[14px]">活動一覧</p>

        {/* フィルター切り替えボタン */}
        <div className="flex space-x-4 mb-10">
          <button
            onClick={() => setFilterMode("all")}
            className={`px-4 py-2 rounded-full border ${
              filterMode === "all"
                ? "bg-white text-black font-bold"
                : "border-white"
            }`}
          >
            全て
          </button>
          <button
            onClick={() => setFilterMode("past")}
            className={`px-4 py-2 rounded-full border ${
              filterMode === "past"
                ? "bg-white text-black font-bold"
                : "border-white"
            }`}
          >
            過去
          </button>
          <button
            onClick={() => setFilterMode("future")}
            className={`px-4 py-2 rounded-full border ${
              filterMode === "future"
                ? "bg-white text-black font-bold"
                : "border-white"
            }`}
          >
            未来
          </button>
        </div>

        {/* カード一覧 */}
        <div className="flex flex-col lg:flex-row justify-between ">
          {filteredItems.map((item) => (
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

      </div>
    </section>
  );
}

export default ActivitySection;
