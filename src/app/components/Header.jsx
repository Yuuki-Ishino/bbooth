import Link from 'next/link';

function Header() {

  const navItems = [
    {href: '/', label: '私たちについて'},
    {href: '/intro', label: '活動紹介'},
    {href: '/', label: '活動一覧'},
    {href: '/', label: 'お問い合わせ'},
  ];

  const renderNavItems = () =>
    navItems.map((item, index) => (
      <li key={index} className="ml-[50px]">
          <Link
            href={item.href}
            className="block py-5 font-bold transition-opacity duration-200 hover:opacity-60"
          >
            {item.label}
          </Link>
      </li>
    ));

  return (
    <header className="fixed z-10 h-[70px] w-full bg-black text-white opacity-90">
      <div className="flex justify-between items-center w-[] py-3 lg:w-[90%] lg:max-auto">
        {/* ロゴ */}
        <a href="/" className="logo">
          <img
            src="/images/header-logo.jpg"
            alt="header-logo"
            className="h-[50px]"
          />
        </a>
        
        {/* ナビゲーション */}
        <nav>
          <ul className="flex">
            {/* {renderNavItems()} */}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
