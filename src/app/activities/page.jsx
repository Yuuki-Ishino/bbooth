import MainVisual from "../components/MainVisual";
import ActivitySection from './ActivitySection';
import activities from '../data/activities.json';


export default function Page() {
	return (
		<>
			<MainVisual title="活動一覧"/>
			<ActivitySection 
				subtitle="ACTIVITIES"
				title={activities.title}
				items={activities.items}
			/>
		</>
	);
}