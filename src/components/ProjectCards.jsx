import Card from "./Card";

import { EachElement } from "../hooks/Each";
import icons from "../hooks/Icons";

import jobi from "../assets/jobi.jpg";
import moviebase from "../assets/moviebase.jpg";
import heartsync from "../assets/heartsync.jpg";
import post from "../assets/post-it.jpg";
import planner from "../assets/planner.jpg";

const ProjectCards = () => {
  console.log(icons.FaSass);
  const projectCards = [
    {
      title: "Jobi",
      class: "jobi",
      highlighter: "highlighter-accent",
      image: jobi,
      links: ["https://github.com/rodgersajb/jobi"],
      stack: [
        <icons.FaSass key="sass" />,
        <icons.FaReact key="react" />,
        <icons.IoLogoFirebase key="firebase" />,
      ],
      content: `Jobi, a job search platform, allows signed-in users to browse and save job listings. It includes a polished home page, job list page, individual job page, and 404 error page, utilizing Firebase for job storage and dynamic pages via react-router-dom.`,
      icons: [
        <icons.FaGithub key="code" live="https://github.com/rodgersajb/jobi" />,
        <icons.FaLink key="link" live="https://jobi.alexrodgers.io" />,
      ],
    },
    {
      title: "Moviebase",
      class: "moviebase",
      highlighter: "highlighter-prim",
      image: moviebase,
      stack: [
        <icons.FaSass key="sass" />,
        <icons.FaReact key="react" />,
        <icons.IoLogoFirebase key="firebase" />,
      ],
      content: `Moviebase is a movie search app utilizing the movieDB API to fetch twenty relevant movies based on genre and timeframe. Users can add favorites to lists stored in Firebase, accessing additional movie details via a pop-up modal. `,
      icons: [
        <icons.FaGithub
          key="code"
          live="https://github.com/rodgersajb/vite-js-movie-app"
        />,
        <icons.FaLink key="live" live="https://moviebase.alexrodgers.io" />,
      ],
    },
    {
      title: "HeartSync",
      class: "heart-sync",
      highlighter: "highlighter-third",
      image: heartsync,
      stack: [
        <icons.FaWordpress key="wordpress" />,
        <icons.FaElementor key="elementor" />,
      ],
      content: `A friend asked me about my WordPress knowledge (none) and my thoughts on an idea she had. So I learned and made this. `,
      icons: [
        <icons.FaGithub
          key="code"
          live="https://github.com/rodgersajb/heartsync"
        />,
        <icons.FaLink key="live" live="https://heartsync.alexrodgers.io" />,
      ],
    },
    {
      title: "Post It!",
      class: "post-it",
      highlighter: "highlighter-contrast",
      image: post,
      stack: [<icons.FaSass key="sass" />, <icons.FaReact key="react" />],
      content: `

Post it! This app will generate random post its displayed across the page. Users can write down information and move the post it notes across the page to their preference.
     `,
      icons: [
        <icons.FaGithub
          key="code"
          live="https://github.com/rodgersajb/alexRodgersProjectThree"
        />,
        <icons.FaLink key="link" live="https://post.alexrodgers.io" />,
      ],
    },
    {
      title: "Daily Planner",
      class: "daily-planner",
      highlighter: "highlighter-second",
      image: planner,
      stack: [
        <icons.FaSass key="sass" />,
        <icons.FaReact key="react" />,
        <icons.IoLogoFirebase key="firebase" />,
      ],
      content: `Ah yes, another daily planner. Basic CRUD operations with user authentication. You know the drill. `,
      icons: [
        <icons.FaGithub
          key="code"
          live="https://github.com/rodgersajb/daily-planner"
        />,
        <icons.FaLink key="live" live="https://planner.alexrodgers.io" />,
      ],
    },
  ];
  return (
    <div className="cards">
      <EachElement
        of={projectCards}
        render={(cards, index) => <Card key={index} cards={cards} />}
      />
    </div>
  );
};

export default ProjectCards;
