"use client";
import ProgressBar from "@ramonak/react-progress-bar";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="">
      <div className="w-96 flex justify-center">
        <p className="text-lg pt-9">
          Bienvenidx! Soy Ro y me cuesta mucho ser concisa, pero eso trataré
          *Spoiler: No lo logro*. Me considero una persona apasionada y curiosa,
          siempre en busca de nuevas experiencias y conocimientos que
          enriquezcan mi existencia. En mi vida, he tenido que enfrentar
          desafíos significativos que me han permitido desarrollar una
          mentalidad resiliente y una capacidad para adaptarme a diferentes
          situaciones. Me estoy poniendo muy seria, asique volvamos. En resúmen,
          estoy convencida de que los obstáculos son oportunidades disfrazadas,
          y siempre busco encontrar lecciones valiosas en cada experiencia. Para
          terminar, si te aburre leer mucho texto como a Ailu del team CORE,
          dejo acá abajo un pequeño gráfico con más información ~relevante~
          sobre mi.
        </p>
      </div>
      <div className="flex justify-center py-8">
        <div>
          <div className="bg-blue py-5 pl-3 ml-5 my-3 w-96 rounded-md">
            <span>💼 Profesión:</span>
            <p>Frontend Developer 💻</p>
          </div>
          <div className="bg-blue py-5 pl-3 ml-5 my-3 w-96 rounded-md">
            <span>💼 Profesión secundaria:</span>
            <p>Creerme analista de series y películas 🎥</p>
          </div>
          <div className="bg-blue py-5 pl-3 ml-5 my-3 w-96 rounded-md">
            <span>🪁 En otra vida seguro fui:</span>
            <p>Un gato 🐱</p>
          </div>
          <div className="bg-blue py-5 pl-3 ml-5 my-3 w-96 rounded-md">
            <span>🌎 Ubicación:</span>
            <p>
              Mercedes, Buenos Aires, Argentina, América del Sur, Planeta
              Tierra, Vía Láctea 🌟
            </p>
          </div>
          <div className="bg-blue py-5 pl-3 ml-5 my-3 w-96 rounded-md">
            <span>🧩 Hobbys encubiertos:</span>
            <p>Actriz 🎭 y Gamer 👾 en mis tiempos libres.</p>
          </div>
        </div>

        <div className="pl-7 pt-3">
          <div className="w-96 pb-5">
            <p>Sarcástica 🙄</p>
            <ProgressBar
              completed={90}
              animateOnRender={true}
              bgColor="#131E50"
            />
          </div>
          <div className="w-96 pb-5">
            <p>Social 🤝</p>
            <ProgressBar
              completed={50}
              animateOnRender={true}
              bgColor="#131E50"
            />
          </div>
          <div className="w-96 pb-5">
            <p>Buena cocinando 👩‍🍳</p>
            <ProgressBar
              completed={90}
              animateOnRender={true}
              bgColor="#131E50"
            />
          </div>
          <div className="w-96 pb-5">
            <p>Catlover 😻</p>
            <ProgressBar
              completed={100}
              animateOnRender={true}
              bgColor="#131E50"
            />
          </div>
          <div className="w-96 pb-5">
            <p>Otaku 🧙‍♀️</p>
            <ProgressBar
              completed={95}
              animateOnRender={true}
              bgColor="#131E50"
            />
          </div>
        </div>
      </div>
      <Link href="/" className="underline flex justify-center text-lg">
        Back to Users List
      </Link>
    </div>
  );
};

export default AboutPage;
