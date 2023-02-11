import React from "react";
import ReactDOM from "react-dom/client";

import "./global.css";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Tweet } from "./components/Tweet/Tweet";
import { Header } from "./components/Header/Header";
import { Separator } from "./components/Separator/Separator";

const tweets = [
  {
    name: "Erick Cordeiro",
    userName: "@erickcordeiroa",
    content: "Aqui vai um tweet de teste para colocar no maps",
    comments: 20,
    likes: 5,
    replied: 10,
  },
  {
    name: "Evelin Tiemi Tanno",
    userName: "@tiemitanno_",
    content: "Aqui vai um tweet de teste para colocar no maps",
    srcImg: "https://cajamar.sp.gov.br/noticias/wp-content/uploads/sites/2/2021/07/site-vacinacao-33-anos.png",
    comments: 20,
    likes: 5,
    replied: 10,
  },
  {
    name: "Enry Hideki",
    userName: "@hidekienry",
    content: "Aqui vai um tweet de teste para colocar no maps",
    srcImg: "https://img.ibxk.com.br/2019/02/17/17124052466014.jpg",
    comments: 20,
    likes: 5,
    replied: 10,
  },
];

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div className="layout">
      <Sidebar />
      <div className="content">
        <main className="timeline">
          <Header title="Home" />

          <form className="new-tweet-form">
            <label htmlFor="tweet">
              <img
                src="https://github.com/ErickCordeiro.png"
                alt="Erick Cordeiro"
              />
              <textarea id="tweet" placeholder="What's happning?" />
            </label>

            <button type="submit">Tweet</button>
          </form>

          <Separator />

          {tweets.map((tweet, index) => {
            return <Tweet tweet={tweet} key={index} />;
          })}
        </main>
      </div>
    </div>
  </React.StrictMode>
);
