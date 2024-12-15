import { PowerScreen } from "./PowerScreen";
import "../css/hero.css";

export function Hero() {
  return (
    <section id="main">
      <PowerScreen />
      <div className="intro">
        <h1>Mark Jessie Villanueva</h1>
        <h2>Programmer | Full Stack Developer</h2>
        <br />
        <p>
          Welcome! I specialize in creating dynamic applications. I strive to
          deliver high-quality solutions, ready to tackle challenges and bring
          innovative ideas to life.
        </p>
        <a href="#contact">Reach Out To Me</a>
      </div>
    </section>
  );
}

/*

Welcome! I specialize in creating dynamic applications. I strive to deliver high-quality solutions, ready to tackle challenges and bring innovative ideas to life.


I believe in continuous learning and adaptability
I'm a jack of all trades, but can be a master of any.

          Welcome! I specialize in creating responsive and dynamic web
          applications. I strive to deliver high-quality solutions. As a
          programmer, I believe in continuous learning and adapting to new
          technologies. I am a jack of all trades, but I can be a master of any,
          ready to tackle challenges and bring innovative ideas to life.

*/
