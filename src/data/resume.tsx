import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Dev Raj Singh",
  initials: "DRS",
  url: "https://dillion.io",
  location: "Patna, Bihar",
  locationLink: "https://www.google.com/maps/place/patna",
  description:
    "Aspiring Software Developer | BCA '23 | MERN | Problem Solver | Git | Connect ! Active on LinkedIn",
  summary:
    "At the end of 2023, After Completing my Degree in Bachelor's Degree of Computer Science & Application (BCA), I'm Mastering MERN Stack And Data Structure & Algorithm and [Competed in over 10 Front-End Projects].",
  avatarUrl: "/image/Profile.png",
  skills: [
    "HTML 5",
    "CSS 3",
    "Tailwind CSS",
    "JavaScript",
    "React",
    "Router",
    "Redux-Toolkit",
    "Next",
    "RESTful API",
    "Express",
    "Mongo DB",
    "Mongoose-ODM",
    "JWT (JSon Web Token)",
    "Cookies",
    "Postman",
    "Cloudinary",
    "Node",
    "C++",
    "Java",
    "Git / GitHub / GitHub Pages",
    "Daisy UI",
    "Magic UI",
    "Acertinity UI",
    "Netlify",
    "Vercel",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "dev.maildrop@gmail.com",
    tel: "+91 9472192731",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Dev-CodeBox",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/dev-raj-singh04/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/dev_tweetbot",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "https://gmail.com/dev.maildrop",
        icon: Icons.email,

        navbar: false,
      },
    },
  },
  education: [
    {
      school: "Shri Krishna University",
      href: "https://www.skuindia.ac.in/",
      degree: "Bachelor's Degree of Computer Science & Application (BCA)",
      logoUrl: "/image/sku_logo.png",
      start: "2020",
      end: "2023",
    },
    {
      school: "A. N. College",
      href: "https://ancpatna.ac.in/",
      degree: "Senior Secondary Education",
      logoUrl: "/image/AN_College.png",
      start: "2018",
      end: "2020",
    },
    {
      school: "Krishnanand Memorial Academy",
      href: "https://kmacademyasarganj.com/",
      degree: "Secondary School Education",
      logoUrl: "/image/kma.png",
      start: "2016",
      end: "2017",
    },
  ],
  projects: [
    {
      title: "Top Courses",
      href: "https://all-top-courses.netlify.app/",
      dates: "July 2024 - August 2024",
      active: true,
      description:
        "The 'Top Courses App' displays a variety of courses and allows users to filter them by category. It features a like and remove-like system, where users can express their preferences, and a toast notification appears each time a course is liked or unliked.",
      technologies: ["React Js", "Tailwind CSS", "Git / GitHub", "Netlify"],
      links: [
        {
          type: "Website",
          href: "https://all-top-courses.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Dev-CodeBox/Top-Courses",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/video/TopCourses.mp4",
    },
    {
      title: "Shopping Cart",
      href: "https://cerulean-fenglisu-cc49d5.netlify.app/",
      dates: "June 2024 - July 2024",
      active: true,
      description:
        "A 'Shopping Cart' app with a homepage offering 'Add to Cart' and 'Remove from Cart' buttons for products, plus a cart button to navigate to the cart page. On the cart page, users can delete products, and when the cart is empty, a 'Shop Now' button redirects to the homepage.",
      technologies: [
        "React Js",
        "Tailwind CSS",
        "React Router",
        "Redux Toolkit",
        "Git / GitHub",
        "Netlify",
      ],
      links: [
        {
          type: "Website",
          href: "https://cerulean-fenglisu-cc49d5.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Dev-CodeBox/Shopping-Cart",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/video/ShoppingCart.mp4",
    },
    {
      title: "GIF Generator",
      href: "https://gif-giphy-generator.netlify.app/",
      dates: "May 2024 - june 2024",
      active: true,
      description:
        "A 'GIF Generator App' in which Users can click a button to generate a random GIF, or search for specific GIFs. Axios is used to handle API requests efficiently, providing an interactive and seamless experience.",
      technologies: [
        "React Js",
        "Tailwind CSS",
        "Axios",
        "Giphy API",
        "Git / GitHub",
        "Netlify",
      ],
      links: [
        {
          type: "Website",
          href: "https://gif-giphy-generator.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Dev-CodeBox/Gif-Generator",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/video/GIFGenerator.mp4",
    },
    {
      title: "Travel With Dev",
      href: "https://travel-with-dev.netlify.app/",
      dates: "April 2024",
      active: true,
      description:
        "'Travel with Dev' showcases tourist destinations with short descriptions and a 'Read More' option. Users can remove places with a 'Not Interested' button, and once all are removed, a 'Refresh' button reloads the list",
      technologies: ["React Js", "Tailwind CSS", "Git / GitHub", "Netlify"],
      links: [
        {
          type: "Website",
          href: "https://travel-with-dev.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Dev-CodeBox/Travel-With-Dev",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/video/TravelWithDev.mp4",
    },
    {
      title: "Weather App",
      href: "https://weather-fetch-app.netlify.app/",
      dates: "Mar 2024 - Apr 2024",
      active: true,
      description:
        "A 'Weather App' built that fetches real-time weather data via API. It uses the Geolocation API to detect the user's location, displaying conditions like temperature, humidity, and wiapp is clean, responsive, and user-friendly across all devices.",
      technologies: [
        "HTML 5",
        "CSS 3",
        "JavaScript",
        "API",
        "Geolocation API",
        "Git / GitHub",
        "Netlify",
      ],
      links: [
        {
          type: "Website",
          href: "https://weather-fetch-app.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Dev-CodeBox/Weather-App",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/video/WeatherApp.mp4",
    },
    {
      title: "Modern Chair",
      href: "https://mymodernchairweb.netlify.app/",
      dates: "Mar 2024 - Apr 2024",
      active: true,
      description:
        "The app is designed to showcase a modern chair with an interactive UI. A set of buttons below allows users to change its color. When a button is clicked, dynamically changes the chair's color, offering a seamless experience.",
      technologies: [
        "HTML 5",
        "CSS 3",
        "CSS Animation",
        "Git / GitHub",
        "Netlify",
      ],
      links: [
        {
          type: "Website",
          href: "https://mymodernchairweb.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Dev-CodeBox/Modern-Chair",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/video/ModernChair.mp4",
    },
    {
      title: "Image Gallery",
      href: "https://www.linkedin.com/posts/dev-raj-singh04_html-css-frontenddevelopment-activity-7161625273539534848-YSD-?utm_source=share&utm_medium=member_desktop",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "An 'Image Gallery App' allowing users to browse easily. CSS ensures a clean, responsive design with hover effects for zoom or captions. Flexbox or Grid can be used for mobile-friendly layouts.",
      technologies: ["HTML 5", "CSS 3", "Git / GitHub"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Dev-CodeBox/Image-Gallery",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/video/ImageGallery.mp4",
    },
    {
      title: "Parallex Scroll",
      href: "https://www.linkedin.com/posts/dev-raj-singh04_codingadventure-html-css-activity-7160275704410976256-YFt4?utm_source=share&utm_medium=member_desktop",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "An 'Adventure Scroll App' with Parallax Effect creates an immersive experience by moving background elements at different speeds as you scroll, adding depth to adventure-themed visuals like landscapes.",
      technologies: ["HTML 5", "CSS 3", "3D Effect", "Git / GitHub"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Dev-CodeBox/Parallex-Effect",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/video/Parallex.mp4",
    },
  ],
} as const;
