import alex from "../assets/alex2.png";
import bookDoodle from "../assets/book-doodle.jpg";
import layingDoodle from "../assets/LayingDoodle-svg.jpg";
import coffeeDoodle from "../assets/CoffeeDoddle.jpg";

import icons from "../hooks/Icons";

export const headerContent = [
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
   
      heading1: "Projects",
      style1: "highlighter-accent",
      class: "projects",
      heading2: "My journey so far",
      style2: "highlighter-accent",
    
    image: bookDoodle,
    button1: 'Home',
    button2: 'Get in Touch'
  },
  {
    title: "Contact Alex",
    class: "contact",
    image: layingDoodle,
    heading1: 
       "Question? Thinking about working together but need to know more?",
    style1: ["highlighter-second white", "highlighter-accent-white"],
  
      heading2:       "Feel free to drop me a line",
      style2: "highlighter-prim white",
    
    icon: [<icons.FaHandPointDown key="down" />],
  },
  {
    title: "Fun-Stuff",
    class: "fun-stuff",
    image: coffeeDoodle,
    heading1: "Coming Soon",
    heading2: "Oh boy. I must have had one too many espresso shots and got sidetracked. I'm on it!",
    button1: "Home",
    button2: "Browse Projects"

  }
];
