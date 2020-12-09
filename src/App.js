import React, { useState } from "react";
import "./style.css";

const channel = {
  Best: [
    {
      name: "Tanay Pratap",
      topic: "JS, ReactJS, HTML, CSS, Web Development ",
      desc:
        "Tanay Pratap is an Engineer at Microsoft. He teaches about JS and ReactJS on his channel. If you want to learn from the best in industry the Neogcamp Playlist and React Playlist is great way to get started.",
      link: "https://www.youtube.com/channel/UCNFmBuclxQPe57orKiQbyfA",
      img:
        "https://yt3.ggpht.com/ytc/AAUvwnibnmzbi8nfRHEAzdI-8lpPGsrD1F6Cg3mAImtQ=s88-c-k-c0x00ffffff-no-rj",
    },
    {
      name: "Brad Traversy",
      topic:
        "JS, ReactJS, NodeJS, HTML, CSS, Web Development and may more Technologies ",
      desc:
        "Brad Traversy is one of the best tech Youtubers out there. He has  inspired many people to become  developers around the world and has videos on almost everything related to Web Development",
      link: "https://www.youtube.com/user/TechGuyWeb  ",
      img:
        "https://yt3.ggpht.com/ytc/AAUvwng963DN2_MIbKuvMWRrN4KG920h3Y4YHg6KET9vZg=s88-c-k-c0x00ffffff-no-rj ",
    },
  ],
  "Web Development": [
    {
      name: "Tanay Pratap",
      topic: "JS, ReactJS, HTML, CSS, Web Development ",
      desc:
        "Tanay Pratap is an Engineer at Microsoft. He teaches about JS and ReactJS on his channel. If you want to learn from the best in industry the Neogcamp Playlist and React Playlist is great way to get started.",
      link: "https://www.youtube.com/channel/UCNFmBuclxQPe57orKiQbyfA",
      img:
        "https://yt3.ggpht.com/ytc/AAUvwnibnmzbi8nfRHEAzdI-8lpPGsrD1F6Cg3mAImtQ=s88-c-k-c0x00ffffff-no-rj",
    },
    {
      name: "Brad Traversy",
      topic:
        "JS, ReactJS, NodeJS, HTML, CSS, Web Development and may more Technologies ",
      desc:
        "Brad Traversy is one of the best tech Youtubers out there. He has  inspired many people to become  developers around the world and has videos on almost everything related to Web Development",
      link: "https://www.youtube.com/user/TechGuyWeb  ",
      img:
        "https://yt3.ggpht.com/ytc/AAUvwng963DN2_MIbKuvMWRrN4KG920h3Y4YHg6KET9vZg=s88-c-k-c0x00ffffff-no-rj ",
    },
    {
      name: "Academind",
      topic:
        "JS, ReactJS, NodeJS, VueJS, Flutter, AWS, and may more Technologies ",
      desc:
        "Academind by Maximilian is great Channel with indtroductry courses on trending Web Technologies like React, Vue, Angular, AWS, Docker etc.",
      link: "https://www.youtube.com/c/Academind/videos",
      img:
        "https://yt3.ggpht.com/ytc/AAUvwniQTOcy62OHAnqatgn_9G1dXjD1hUDbgOUpZTcN1A=s88-c-k-c0x00ffffff-no-rj",
    },
    {
      name: "Ben Awad",
      topic: "JS, ReactJS, React Native, Microservices, TypeScript, GraphQL ",
      desc:
        "Ben Awad is your goto channel if you want to learn about intermedite and advanced React concepts. His Fullstack React tutorials are one the best tutorials online",
      link: "https://www.youtube.com/user/99baddawg",
      img:
        "https://yt3.ggpht.com/ytc/AAUvwng8pSXOY4YZbcXPT7oLVpHDdUU1yOU5YQlcD6NFrg=s88-c-k-c0x00ffffff-no-rj",
    },
    {
      name: "Web Dev Simplified",
      topic: "JS, ReactJS, NodeJS, HTML, CSS ",
      desc:
        "Web Dev Simplified is there to simplify the  web for you. He has numerous videos on real life projects which can be done within few hours.",
      link: "https://www.youtube.com/channel/UCFbNIlppjAuEX4znoulh0Cw",
      img:
        "https://yt3.ggpht.com/ytc/AAUvwnhIz_0Su6HhW6Ym50QCroJCAnF10X9xnnMDboN2=s88-c-k-c0x00ffffff-no-rj",
    },
    {
      name: "Net Ninja",
      topic: "JS, ReactJS, NodeJS, VueJS, TypeScript, HTML, CSS ",
      desc:
        "Net Ninja has the  best playlists on HTML, CSS, JS, React and other Tech related to React. His courses are a great way to learn for beginners",
      link: "https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg",
      img:
        "https://yt3.ggpht.com/ytc/AAUvwni-Wm0ZBDYJYFwySP2esxgc8s9mKiwmI3yJrmjlHQ=s88-c-k-c0x00ffffff-no-rj",
    },
  ],
  Design: [
    {
      name: "Dev Ed",
      topic: "JS, ReactJS, HTML, CSS, NodeJS Web Development, Figma",
      desc:
        "Dev Ed is an amazing channel where you can learn about JavaScript as well as creative designs. His videos on Figma and JS animations are awesome.",
      link: "https://www.youtube.com/channel/UClb90NQQcskPUGDIXsQEz5Q",
      img:
        "https://yt3.ggpht.com/ytc/AAUvwnjI1e_kjzToMdbPML1lfLgJxlArNmMbklUQYDsJ2Q=s88-c-k-c0x00ffffff-no-rj",
    },
    {
      name: "Design Course",
      topic: "UI, UX, HTML, CSS ",
      desc:
        "Design Course is your goto channel if you are interested in Web Design and  want  to know about good UI and UX. There are videos on making cool animations as well as analysis of good products",
      link: "https://www.youtube.com/user/DesignCourse",
      img:
        "https://yt3.ggpht.com/ytc/AAUvwniBsQ2-4KQfl-yhypy68NtPPdzR5kDdT5CNat3xSA=s88-c-k-c0x00ffffff-no-rj",
    },
    {
      name: "Flux",
      topic: "UI, UX, Webflow",
      desc:
        "Flux might be the best Web Design Channel on Youtube. His courses to learn Web Design are even mentioned on offcial Webflow website. He Web Design reviews and his monthly Top 5 websites is a playlist to follow",
      link: "https://www.youtube.com/channel/UCN7dywl5wDxTu1RM3eJ_h9Q",
      img:
        "https://yt3.ggpht.com/ytc/AAUvwnjYtsBpK6aX-RmK2w2M11CkiRVUCYpdLZqwdJc3=s88-c-k-c0x00ffffff-no-rj",
    },
  ],
  "Honourable Mentions": [
    {
      name: "JavaScript Mastery",
      topic: "JS, ReactJS, NodeJS, Web Development ",
      desc:
        "JavaScript Mastery is an awesome channel to learn about MERN Stack by building reallife projects",
      link: "https://www.youtube.com/channel/UCmXmlB4-HJytD7wek0Uo97A",
      img:
        "https://yt3.ggpht.com/ytc/AAUvwnheg2Wwh32lkbWjsqqysqh0fe6-WU_BMn4Qh0FIFg=s88-c-k-c0x00ffffff-no-rj",
    },
    {
      name: "Linux Scoop",
      topic: "Linux and its distributions",
      desc:
        "Linux Scoop is great channel to learn about linux, especially if you are a beginner. It has videos on  different OS installations, their comparisons and many more intresting stuff.",
      link: "https://www.youtube.com/channel/UCNnUnr4gwyNmzx_Bbzvt29g",
      img:
        "https://yt3.ggpht.com/ytc/AAUvwni5lNHlvpJCKM2krzFuZiKkpEAs8qqV04jjNfyG=s88-c-k-c0x00ffffff-no-rj",
    },
    {
      name: "Logos By Nick",
      topic: "Logos, Inkscape, GIMP, Illustrator",
      desc:
        "Logos By Nick is  great channel to take inspiration for  logos and learn how to make them. He focus on making them using Inkscape and GIMP. The tutorials can be followed by beginners and intermediates",
      link: "  https://www.youtube.com/c/LogosByNick/featured",
      img:
        "https://yt3.ggpht.com/ytc/AAUvwnhYKj-Z1-FQWSZA7B2DoYrEbnsybhHK7PIkYeSqMA=s88-c-k-c0x00ffffff-no-rj",
    },
  ],
};

const channelObj = Object.keys(channel);

function App() {
  const [selectChannel, setChannel] = useState("Best");
  function clickHandler(selectChannel) {
    setChannel(selectChannel);
  }

  function bgClr(index) {
    if (index % 2 === 0) {
      return "white";
    } else {
      return "#ffd3d3";
    }
  }
  return (
    <div className="App">
      <h1> TECH YOUTUBE RECOMMENDATION LIST</h1>
      <div className="btns">
        {channelObj.map((item) => {
          return <button onClick={() => clickHandler(item)}> {item} </button>;
        })}
      </div>

      <div>
        <ul>
          {channel[selectChannel].map((channel, index) => {
            return (
              <li
                key={channel.name}
                className="display-txt"
                style={{ backgroundColor: bgClr(index) }}>
                <div>
                  <div className="name"> {channel.name} </div>
                  <img src={channel.img} alt={channel.name} />
                </div>
                <div>
                  <p>Technologies Tought are: {channel.topic}</p>
                  <p>
                    <i>{channel.desc}</i>
                  </p>

                  <p>
                    <a href={channel.link} target="_blank" rel="noreferrer">
                      Visit Channel
                    </a>
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <footer></footer>
    </div>
  );
}

export default App;
