"use client";

import React from "react";
import { RemoveScroll } from "react-remove-scroll";

export default function ActivityModal({ activity, onClose }) {
	if (!activity) return null;

  return (
    <RemoveScroll>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
        onClick={onClose} // 背景クリックで閉じる
      >
        <div
          className="bg-[#181619] text-white w-[95%] max-w-[800px] max-h-[80vh] overflow-auto rounded-lg p-4 relative"
          onClick={(e) => e.stopPropagation()} // 内側クリックは閉じない
        >
          {/* 閉じるボタン */}
          <button
            className="absolute top-2 right-2 text-white text-3xl font-bold"
            onClick={onClose}
          >
            X
          </button>

          {/* ヘッダー画像 */}
          <img
            src={activity.imageUrl}
            alt={activity.alt}
            className="w-full h-64 object-cover rounded-lg"
          />

          {/* タイトル */}
          <h1 className="text-2xl font-bold py-4 border-b border-white">{activity.title}</h1>

          {/* 投稿情報 */}
          <div className="py-4 space-y-3 border-b border-white">
            <div className="flex items-center gap-2">
              <p>活動日: {activity.date || "未定"}</p>
            </div>
            <div className="flex items-center gap-2">
              <p>活動場所: {activity.location || "未定"}</p>
            </div>
            <div className="flex items-center gap-2">
              <p>参加人数: {activity.num_people || "未定"}</p>
            </div>
          </div>

          {/* 詳細説明 */}
          <p className="mt-6 leading-relaxed">{activity.description}</p>
        </div>
      </div>
    </RemoveScroll>
  );
}
