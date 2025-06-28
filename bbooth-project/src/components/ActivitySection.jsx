function ActivitySection({ title, items, moreLink }) {
	return (
		<section className="section2">
      <div className="container">
        <p className="sub_title"></p>
        <h2>{title}</h2>
        <div className="row">
          {items.slice(0, 3).map((item, index) => (
            <div className="col" key={index}>
              <img src={item.image} alt={item.alt} width="100%" />
              <h3>{item.title}</h3>
              <p>{item.date}</p>
            </div>
          ))}
        </div>
        <div className="center">
          <a href={moreLink} className="btn">MORE</a>
        </div>
      </div>
    </section>
	);
}

export default ActivitySection;