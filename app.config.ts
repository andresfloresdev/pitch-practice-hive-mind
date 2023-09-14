export default defineAppConfig({
  docus: {
    title: "Pitch Practice Hive Mind",
    description:
      "Every member's valuable knowledge and experience in one place.",
    image:
      "https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png",
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
        text: "Powered by Pitch Practice",
        href: "https://www.instagram.com/pitch.practice/",
      },
    },
  },
});
