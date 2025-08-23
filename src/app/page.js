// app/page.jsx
import MainVisual from './top-components/MainVisual';
import MessageSection from './top-components/MessageSection';
import ActivitySection from './top-components/ActivitySection';
import ContactSection from './top-components/ContactSection';

export default function Page() {
  return (
    <div className='bg-img'>
      <MainVisual />
      <MessageSection />
      <ActivitySection />
      <ContactSection 
        imageSrc="/images/top-image.jpg"
      />
    </div>
  );
}
