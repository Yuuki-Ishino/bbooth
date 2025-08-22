import Button from "../components/Button";

function ContactSection() {
  return (
    <section className="text-white py-20">
      <div className="w-[90%] mx-auto max-w-[1280px] pb-20 border-b border-white">
        <div className="flex flex-col justify-between">
          {/* メッセージ */}
          <div className="">
            <p className="text-[20px] font-bold mb-5">CONTACT</p>
            <h2 className="text-[30px] font-bold mb-10">お問い合わせ</h2>
            <p className="leading-[1.8] mb-[50px]">
              ボランティアの依頼は以下の FORM ボタンから情報を入力するか、公式ライン、公式X、公式Instagramまで連絡ください。
            </p>
          </div>

          {/* 右カラム */}
          <div className="">
            <img
              src="./images/top-image.jpg"
              alt="Bbooth photo"
              className="w-full rounded-[20px] mb-12"
            />
          </div>
          <div className="flex justify-center">
            <Button href="/">FORM</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;

