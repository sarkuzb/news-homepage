import React from "react";
import image1 from "../assets/images/image-web-3-desktop.jpg";
import image2 from "../assets/images/image-retro-pcs.jpg";
import image3 from "../assets/images/image-top-laptops.jpg";
import image4 from "../assets/images/image-gaming-growth.jpg";

const articles = [
  {
    id: "01",
    title: "Reviving Retro PCs",
    description: "What happens when old PCs are given modern upgrades?",
    image: image2,
  },
  {
    id: "02",
    title: "Top 10 Laptops of 2022",
    description: "Our best picks for various needs and budgets.",
    image: image3,
  },
  {
    id: "03",
    title: "The Growth of Gaming",
    description: "How the pandemic has sparked fresh opportunities.",
    image: image4,
  },
];

const newsItems = [
  {
    title: "Hydrogen VS Electric Cars",
    subtitle: "Will hydrogen-fueled cars ever catch up to EVs?",
    highlight: false,
  },
  {
    title: "The Downsides of AI Artistry",
    subtitle:
      "What are the possible adverse effects of on-demand AI image generation?",
    highlight: true,
  },
  {
    title: "Is VC Funding Drying Up?",
    subtitle:
      "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
    highlight: false,
  },
];

const Home = () => {
  return (
    <>
      {/* Main & Sidebar Section */}
      <section className="mt-5 flex flex-col md:flex-row md:space-x-8">
        {/* Main Article */}
        <div className="md:flex-1">
          <article className="mb-8 md:mb-0">
            <img
              src={image1}
              alt="Web 3.0 futuristic concept"
              className="w-full object-cover "
            />
            <div className="flex flex-col md:flex-row md:space-x-10 mt-6">
              <div className="md:flex-1">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-950 leading-tight md:leading-snug">
                  The Bright
                  <br />
                  Future of
                  <br />
                  Web 3.0?
                </h1>
              </div>
              <div className="md:flex-1 flex flex-col justify-between mt-6 md:mt-0">
                <p className="text-slate-700 mb-6 md:mb-0">
                  We dive into the next evolution of the web that claims to put
                  the power of the platforms back into the hands of the people.
                  But is it really fulfilling its promises?
                </p>
                <button className="hover:bg-slate-950 hover:text-neutral-100 text-slate-950 font-bold bg-red-500 py-3 px-6 w-1/2 tracking-widest text-xl cursor-pointer transition">
                  Read More
                </button>
              </div>
            </div>
          </article>
        </div>

        {/* Sidebar News */}
        <aside className="bg-slate-950 p-6 md:w-1/3">
          <h2 className="text-4xl font-semibold text-yellow-400/90 mb-6">
            New
          </h2>
          <div className="divide-y divide-white/30">
            {newsItems.map((item, index) => (
              <div key={index} className="py-6">
                <h3
                  className={`text-2xl font-semibold ${
                    item.highlight ? "text-yellow-400/90" : "text-slate-200"
                  }`}
                >
                  {item.title}
                </h3>
                <p className="text-white/40 mt-1">{item.subtitle}</p>
              </div>
            ))}
          </div>
        </aside>
      </section>

      {/* Articles List */}
      <section className="mt-12 grid grid-cols-1 gap-y-10 gap-x-8 md:grid-cols-3">
        {articles.map((article) => (
          <article
            key={article.id}
            className="flex flex-col md:flex-row md:space-x-6 items-start"
          >
            <img
              className="w-full md:w-24 object-cover"
              src={article.image}
              alt={article.title}
            />
            <div className="mt-4 md:mt-0 flex flex-col justify-between">
              <span className="text-red-400 font-bold text-4xl">
                {article.id}
              </span>
              <h4 className="font-bold text-slate-950 hover:text-red-400 cursor-pointer text-xl mt-2">
                {article.title}
              </h4>
              <p className="text-sm text-gray-500 mt-1">
                {article.description}
              </p>
            </div>
          </article>
        ))}
      </section>
    </>
  );
};

export default Home;
