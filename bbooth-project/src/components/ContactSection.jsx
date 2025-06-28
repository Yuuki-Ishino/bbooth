function ContactSection({ title, subtitle, text, buttonLink, buttonText, imageSrc, imageAlt }) {
  return (
    <section className="section3">
      <div className="container">
        <div className="row">
          <div className="col">
            <p className="sub_title">{subtitle}</p>
            <h2>{title}</h2>
            <p className="text">{text}</p>
            <a href={buttonLink} className="btn">{buttonText}</a>
          </div>
          <div className="col">
            <img src={imageSrc} width="100%" alt={imageAlt} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
