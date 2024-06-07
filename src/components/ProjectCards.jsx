import Card from "./Card";
import { ProjectCard } from "./ProjectCard";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css/bundle";

import "swiper/css";

import { EachElement } from "../hooks/Each";
import icons from "../hooks/Icons";
import { MdOutlineViewCarousel } from "react-icons/md";
import { FaArrowDownLong } from "react-icons/fa6";

import jobi from "../assets/jobi.jpg";
import moviebase from "../assets/moviebase.jpg";
import heartsync from "../assets/heartsync.jpg";
import post from "../assets/post-it.jpg";
import planner from "../assets/planner.jpg";

const ProjectCards = () => {
  const [carousel, setCarousel] = useState("");

  const toggleCarousel = () => {
    setCarousel((carousel) => !carousel);
  };

  const projectCards = [
    {
      title: "Jobi",
      class: "jobi",
      highlighter: "highlighter-accent",
      color: "#ffb703",
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
      color: "#8ecae6",
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
        <icons.FaLink key="link" live="https://moviebase.alexrodgers.io" />,
      ],
    },
    {
      title: "HeartSync",
      class: "heart-sync",
      color: "#023047",
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
        <icons.FaLink key="link" live="https://heartsync.alexrodgers.io" />,
      ],
    },
    {
      title: "Post It!",
      class: "post-it",
      color: "#219ebc",

      highlighter: "highlighter-second",
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
      color: "#fb8500",
      highlighter: "highlighter-contrast",
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
        <icons.FaLink key="link" live="https://planner.alexrodgers.io" />,
      ],
    },
  ];
  return (
    <>
      <div className="layout-container">
        {carousel ? (
          <FaArrowDownLong
            style={{ cursor: "pointer" }}
            onClick={toggleCarousel}
          />
        ) : (
          <MdOutlineViewCarousel
            style={{ cursor: "pointer" }}
            onClick={toggleCarousel}
          />
        )}
      </div>

      {!carousel ? (
        <div className="cards">
          <EachElement
            of={projectCards}
            render={(cards, index) => <Card key={index} cards={cards} />}
          />
        </div>
      ) : (
        <div className="card">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            style={{
              "--swiper-navigation-color": "#171717",
              "--swiper-pagination-color": "#171717",
            }}
          >
            {projectCards.map((cards, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard cards={cards} />;
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      )}
    </>
  );
};

export default ProjectCards;
