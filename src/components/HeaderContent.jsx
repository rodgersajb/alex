import alex from '../assets/alex2.png';
import bookDoodle from '../assets/book-doodle.jpg';
import layingDoodle from '../assets/Laying-Doodle-svg.jpg';

import icons from '../hooks/Icons';

import { EachElement } from '../hooks/Each';

import Header from './Header';

const HeaderContent = () => {

    const headerContent = [
      {
        title: "Home",
        class: "home",
        heading1: "Oh Hi,",
        heading2: `I'm Alex`,
        heading3: "Web Developer",
        image: alex,
        button1: "Browse Projects",
        button2: "Get in Touch",
        icon: [<icons.FaHandPointDown key="down" />],
      },
      {
        title: "About Alex",
        class: "about",
        heading1:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quidem, omnis optio expedita molestias ea fugit doloribus obcaecati vero blanditiis harum eius ullam est cupiditate similique. Cupiditate adipisci pariatur est.",
        image: alex,
        button1: "Browse Projects",
        button2: "Get in Touch",
      },
      {
        title: {
          text: "projects",
          style: "highlighter-accent",
        },
        class: "projects",
        heading1: {
          text: "My journey so far",
          style: "highlighter-accent",
        },
        image: bookDoodle,
      },
      {
        title: "contact alex",
        class: "contact",
        image: layingDoodle,
        heading1: {
          text: "Question? Thinking about working together but need to know more?",
          style: ["highlighter-second white", "highlighter-accent-white"],

          heading2: {
            text: "Feel free to drop me a line",
            style: "highlighter-prim white",
          },
          icon: [<icons.FaHandPointDown key="down" />],
        },
      },
    ];

    return (
        <>
            <EachElement
            of={headerContent}
            render={(header, index) => <Header key={index} header={header} />}
            />
        </>
    )

}

export default HeaderContent