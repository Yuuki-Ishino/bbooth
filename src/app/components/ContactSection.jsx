function ContactSection({
  title,
  subtitle,
  text,
  buttonText,
  imageSrc,
  imageAlt
}) {
  return (
    <section className="text-white py-20">
      <div className="w-[90%] mx-auto max-w-[1280px] pb-20 border-b border-white">
        <div className="flex justify-between items-center">
          {/* 左カラム */}
          <div className="w-[48%]">
            <p className="text-[20px] font-bold mb-5">{subtitle}</p>
            <h2 className="text-[30px] font-bold mb-10">{title}</h2>
            <p className="leading-[1.8] mb-[50px]">{text}</p>
            <a
              href="/"
              className="text-[18px] border border-white rounded-full inline-block w-[270px] leading-[60px] text-center transition duration-200 hover:text-black hover:bg-white"
            >
              {buttonText}
            </a>
          </div>

          {/* 右カラム */}
          <div className="w-[48%]">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full rounded-[20px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;

