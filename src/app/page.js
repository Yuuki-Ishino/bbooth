// app/page.jsx
import MainVisual from './components/MainVisual';
import MessageSection from './components/MessageSection';
import ActivitySection from './components/ActivitySection';
import ContactSection from './components/ContactSection';
import activities from './data/activities.json';

export default function Page() {
  return (
    <>
      <MainVisual />
      <MessageSection />
      <ActivitySection 
        title={activities.upcoming.title}
        items={activities.upcoming.items}
        moreLink="./service"
      />
      <ActivitySection 
        title={activities.past.title}
        items={activities.past.items}
        moreLink="./service"
      />
      <ContactSection 
        title="お問い合わせ"
        subtitle="CONTACT"
        text={`ボランティアの依頼は以下の FORM ボタンから情報を入力するか、公式ライン、公式X、公式Instagramまで連絡ください。`}
        buttonText="FORM"
        imageSrc="./images/top-image.jpg"
        imageAlt="お問い合わせ"
      />
    </>
  );
}
