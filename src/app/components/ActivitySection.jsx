import Button from "./Button";

function ActivitySection({ title, items }) {
  return (
    <section className="text-white py-20">
      <div className="w-[90%] mx-auto max-w-[1280px] pb-20 border-b border-white">
        {/* タイトル */}
        <p className="text-[30px] font-bold mb-[14px]">{title}</p>

        {/* カード一覧 */}
        <div className="flex justify-between mb-14">
          {items.slice(0, 3).map((item, index) => (
            <div className="w-[31%] relative" key={index}>
              <img
                src={item.image}
                alt={item.alt}
                className="w-full rounded-[20px] hover:opacity-70"
              />
              <p className="bg-white/80 text-black font-bold inline-block absolute bottom-[6px] left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-[10px]">
                {item.title}
              </p>
              <p className="bg-white text-black font-bold inline-block absolute top-[10px] right-[10px] px-1.5 py-2 rounded-[10px]">
                {item.date}
              </p>
            </div>
          ))}
        </div>

        {/* MOREボタン */}
        <div className="text-center">
          <Button href="/">SEE MORE</Button>
        </div>
      </div>
    </section>
  );
}

export default ActivitySection;
