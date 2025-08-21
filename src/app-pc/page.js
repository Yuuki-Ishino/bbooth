// app/page.jsx
import MainVisual from './top-components/MainVisual';
import MessageSection from './top-components/MessageSection';
import ActivitySection from './top-components/ActivitySection';
import ContactSection from './top-components/ContactSection';
import activities from './data/activities.json';

export default function Page() {
  return (
    <>
      <MainVisual />
      <MessageSection />
      <ActivitySection 
        subtitle="ACTIVITIES"
        title={activities.title}
        items={activities.items}
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
