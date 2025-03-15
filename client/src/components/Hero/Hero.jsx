import './Hero.scss';
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <h2 className="hero__title">Our mission:</h2>
        <p className="hero__text title">
          Provide photographers a space to share photos of the neighborhoods they cherish,{' '}
          <span className="hero__text--italic">expressed in their unique style.</span>
        </p>
      </div>
    </section>
  );
};

export default Hero;
