// import App from "next/app";
import Button from "@/app/components/Button.jsx";

function MessageSection() {
  return (
    <section className="text-white pt-20">
      <div className="w-[90%] mx-auto max-w-[1280px] pb-15 border-b border-white">
        <div className="flex flex-col justify-between">
          {/* メッセージ */}
          <div className="w-[90%] mb-[40px]">
            <p className="text-[20px] font-bold mb-5">ABOUT US</p>
            <p className="text-[35px] font-bold leading-[1.6]">
              
              東洋大学公認<br />
              ボランティアサークル<br />
              Bbooth
            </p>
          </div>

          {/* サブメッセージ */}
          <div className="">
            <p className="text-[20px] leading-[1.8] mb-10">
              「忘れないをカタチに」し続け、
              2025年も無事活動できています。<br />
              やる時はやる、遊んで楽しむ時は楽しむ、
              そんなメリハリを大切にしています。<br />
              <br />
              ボランティアをもっと身近に、<br />
              ところで、お前も鬼にならないか？<br />
            </p>
            <div className="flex justify-center">
              <Button href="/about_us">SEE MORE</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MessageSection;