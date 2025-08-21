// import App from "next/app";
import Button from "../components/Button.jsx";

function MessageSection() {
  return (
    <section className="text-white py-20">
      <div className="w-[90%] mx-auto max-w-[1280px] pb-20 border-b border-white">
        <div className="flex justify-between">
          {/* 左カラム */}
          <div className="w-[48%]">
            <p className="text-[20px] font-bold mb-5">ABOUT US</p>
            <p className="text-[48px] font-bold leading-[1.6]">
              2011年設立、<br />
              歴史ある東洋大学公認<br />
              ボランティアサークル<br />
              Bboothです!
            </p>
          </div>

          {/* 右カラム */}
          <div className="w-[48%]">
            <p className="text-[28px] leading-[1.8] mb-10">
              「忘れないをカタチに」し続け、<br />
              2025年も無事活動できています。<br />
              やる時はやる、遊んで楽しむ時は楽しむ、<br />
              そんなメリハリを大切にしています。<br />
              <br />
              ボランティアをもっと身近に、<br />
              ところで、お前も鬼にならないか？<br />
            </p>
            <Button href="/">SEE MORE</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MessageSection;