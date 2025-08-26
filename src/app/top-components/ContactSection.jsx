import { FaLine, FaXTwitter, FaInstagram } from "react-icons/fa6";


function ContactSection() {
  return (
    <section className="text-white py-20">
      <div className="w-[90%] mx-auto max-w-[1280px] pb-20 border-b border-white">
        <div className="flex flex-col justify-between">
          {/* メッセージ */}
          <div className="">
            <p className="text-[20px] font-bold mb-5">CONTACT</p>
            <h2 className="text-[30px] font-bold mb-10">お問い合わせ</h2>
            <p className="leading-[1.8] mb-[20px]">
              ボランティアの依頼・相談は以下の公式Instagramまでご連絡ください。
            </p>
            <p className="leading-[1.8] mb-[20px]">
              新歓情報は公式Xにて掲載しています。
            </p>
            <p className="leading-[1.8] mb-[20px]">
              サークルについての個人的な質問等はLINEで受け付けています。
            </p>
          </div>

          {/* アイコンリンク */}
          <div className="flex space-x-8 mx-auto">
            {/* INSTAGRAM */}
            <a
              href="https://instagram.com/bbooth2025"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl hover:text-pink-400 active:text-pink-400 transition-colors"
            >
              <FaInstagram />
            </a>

            {/* X */}
            <a
              href="https://x.com/bbooth2025"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl hover:text-blue-400 active:text-blue-400 transition-colors"
            >
              <FaXTwitter />
            </a>

            {/* LINE */}
            <a
              href="https://line.me/ti/p/Fp2SOvqRrO"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl hover:text-green-400 active:text-green-400 transition-colors"
            >
              <FaLine />
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;

