import ActivitySection from './ActivitySection';
import activities from '../data/activities.json';


export default function Page() {
  return (
		<>
			<section className="pt-[70px]">
				<ActivitySection 
					subtitle="ACTIVITIES"
					title={activities.title}
					items={activities.items}
				/>
			</section>
		</>
	);
}