"use client";

import { useState } from "react";
import ActivityModal from "./ActivityModal";

export default function ActivityCardClient({ activity }) {
	const [selectedActivity, setSelectedActivity] = useState(null);

	return (
		<>
			<div
				className="relative mb-14"
				onClick={() => setSelectedActivity(activity)}
			>
				<img
					src={activity.imageUrl}
					alt={activity.alt}
					className="w-full h-[225px] rounded-[20px] hover:opacity-70 active:opaicty-70"
				/>
				<p className="bg-white/80 text-black font-bold inline-block absolute bottom-[6px] left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-[10px]">
					{activity.title}
				</p>
				<p className="bg-white/80 text-black font-bold inline-block absolute top-[10px] right-[10px] px-1.5 py-2 rounded-[10px]">
					{activity.date}
				</p>
			</div>

			{selectedActivity && (
				<ActivityModal
					activity={selectedActivity}
					onClose={() => setSelectedActivity(null)}
				/>
			)}
		</>
	);
}