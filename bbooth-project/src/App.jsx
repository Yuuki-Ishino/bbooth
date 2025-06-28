import Header from "./components/Header";
import MainVisual from "./components/MainVisual";
import MessageSection from "./components/MassageSection";
import activities from "./data/activities.json";
import ActivitySection from "./components/ActivitySection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>

        <MainVisual />

        <MessageSection />

        <ActivitySection 
          title={activities.upcoming.title}
          items={activities.upcoming.items}
          moreLink="./service.html"
        />

        <ActivitySection 
          title={activities.past.title}
          items={activities.past.items}
          moreLink="./service.html"
        />

        <ContactSection 
          title="お問い合わせ"
          subtitle="CONTACT"
          text={`ボランティアの依頼は以下の FORM ボタンから情報を入力するか、公式ライン、公式X、公式Instagramまで連絡ください。`}
          buttonLink="./contact.html"
          buttonText="FORM"
          imageSrc="./images/top-image.jpg"
          imageAlt="お問い合わせ"
        />

        <Footer />
        
      </main>
    </>
  )
}

export default App
