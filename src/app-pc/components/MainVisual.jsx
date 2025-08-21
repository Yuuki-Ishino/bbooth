function MainVisual({ title }) {
	return (
		<section
			className="bg-[url('/images/top-image.jpg')] bg-cover bg-top bg-fixed"
		>
			<div className="w-[90%] max-w-[1280px] mx-auto h-[400px] relative flex items-end justify-center">
					<p className="text-[70px] font-bold text-white mb-30">{ title }</p>
			</div>
		</section>
	);
}

export default MainVisual;

