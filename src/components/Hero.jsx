import profile from "../assets/jeep.jpg";


const Hero = () => {
  return (
    <section className="container mx-auto p-4 flex flex-col md:flex-row items-center">
      <div className="w-full md:w-1/2">
        <img
          src={profile}
          alt="Chijioke Christian Udogu"
          className="rounded-full w-48 h-48 object-cover border-4 border-alien"
        />
      </div>
      <div className="w-full md:w-1/2 mt-4 md:mt-0">
        <h2 className="text-4xl font-bold text-alien">Hi, I&apos;m Chijioke</h2>
        <p className="mt-2">
        I am a Backend Developer who loves turning complex problems into simple, scalable solutions. At Ikook.uk, I built applications that not only perform well but also meet real business needs. I’m passionate about crafting clean, efficient code, optimizing system performance, and always exploring new technologies to stay ahead. For me, it’s all about building software that works seamlessly and delivers real impact.
        </p>
        <a
          href="/Chijioke-Udogu-Resume.pdf"
          download
          className="mt-4 inline-block bg-alien text-dark px-6 py-2 rounded-lg"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Hero;