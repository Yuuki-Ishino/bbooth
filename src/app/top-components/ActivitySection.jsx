"use client";

import Button from "../components/Button";
import Link from "next/link";
import { useEffect, useState } from "react";

function ActivitySection( ) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/data/activities.json")
    .then((res) => res.json())
    .then((data) => setItems(data.items))
    .catch((err) => console.error(err))
  }, [])

  return (
    <section className="text-white lg:py-20">
      <div className="w-[90%] mx-auto max-w-[1280px] pb-20 border-b border-white">
        {/* サブタイトル */}
        <p className="text-[20px] font-bold mb-5">ACTIVITIES</p>

        {/* タイトル */}
        <p className="text-[30px] font-bold mb-[14px]">活動記録</p>

        {/* カード一覧 */}
        <div className="flex h-[850px] flex-col lg:flex-row justify-between ">
          {items.slice(0, 3).map((item) => (
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

        {/* MOREボタン */}
        <div className="text-center">
          <Button href="/activities">SEE MORE</Button>
        </div>
      </div>
    </section>
  );
}

export default ActivitySection;
