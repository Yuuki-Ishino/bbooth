export default function Button({ href, children }) {
  return (
    <a
      href={href}
      className="
        inline-block w-[270px] h-[60px] text-[20px] font-bold 
        text-white border border-white rounded-full 
        text-center leading-[60px] transition-colors duration-200
        hover:bg-white hover:text-black active:bg-white active:text-black
      "
    >
      {children}
    </a>
  );
}
