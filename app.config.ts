export default defineAppConfig({
  docus: {
    title: "Hivemind",
    description:
      "The Pitch Practice community's valuable knowledge and experience about sales in one place.",
    image: "/meta-image.jpg",
    socials: {
      instagram: "pitch.practice",
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: [],
    },
    main: {
      padded: true,
      fluid: false,
    },
    header: {
      logo: true,
      showLinkIcon: true,
      exclude: [],
      fluid: false,
    },
    footer: {
      credits: {
        icon: "material-symbols:mic-rounded",
        text: "Brought to you by Pitch Practice",
        href: "https://www.instagram.com/pitch.practice/",
      },
    },
  },
});
