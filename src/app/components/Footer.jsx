import Link from 'next/link'

function Footer() {

  const navItems = [
    {href: '/about_us', label: '私たちについて'},
    {href: '/intro', label: '活動紹介'},
    {href: '/activities', label: '活動一覧'},
    {href: '/#contact', label: 'お問い合わせ'},
  ];

  const renderNavItems = () =>
    navItems.map((item, index) => (
      <li key={index} className="text-[15px] mx-5 active:bg-gray-700">
          <Link
            href={item.href}
            className="transition duration-200 hover:opacity-60"
          >
            {item.label}
          </Link>
      </li>
    ));

  return (
    <footer className="text-white text-center text-[12px]">
      <div className="w-[90%] mx-auto max-w-[1280px] py-5">
        <a href="./" className="text-[20px] font-bold inline-block mb-10">
          Bbooth  2025
        </a>

        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-2 mb-10">
          {renderNavItems()}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;

