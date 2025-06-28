function Header() {
	return (
		<header>
			<div className="row">
				<a href="/" className="logo">
				<img src="/images/header-logo.jpg" alt="header-logo" />
				</a>
				<nav>
				<ul>
          <li><a href="/profiles.html">幹部紹介</a></li>
					<li><a href="/company.html">私たちについて</a></li>
					<li><a href="/service.html">活動内容</a></li>
					<li><a href="/contact.html">お問い合わせ</a></li>
          <li><a href="/login.html">ログイン</a></li>
				</ul>
				</nav>
			</div>
		</header>
	);
}

export default Header;