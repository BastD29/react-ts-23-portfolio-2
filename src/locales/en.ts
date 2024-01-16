export default {
  auth: {
    tabs: {
      login: "Sign in",
      register: "Sign up",
    },
  },
  routes: {
    root: "/",
    nav: {
      // home: "/home",
      home: "/",
      projects: "/projects",
      about: "/about",
      contact: "/contact",
    },
    auth: {
      root: "/auth",
      login: "/login",
      register: "/register",
      // reset_password: "/reset-password",
      // change_password: "/change-password"
    },
    project: {
      root: "/projects",
    },
  },
  links: {
    nav: {
      home: "Home",
      about: "About",
      contact: "Contact",
    },
    auth: {
      signin: "Sign In",
      signup: "Sign Up",
    },
  },
  footer: {
    message: "© Portfolio {{year}} developed by Bastien Daniel",
  },
  dashboard: {
    project: {
      projectsList: {
        noProjectFound: "No project found matching your criteria.",
        projectNumber: "projects",
      },
      projectCard: {
        detailBtn: "See detail",
      },
      projectDetail: {
        languages: "Languages",
        side: "Side",
        stack: "Stack",
        styles: "Styles",
        componentLibraries: "Component libraries",
        frameworks: "Framework",
        hooks: "Hooks",
        functionalities: "Functionalities",
        startDate: "Start date",
        endDate: "End date",
        status: "Status",
        website: "Website",
        github: "Github",
      },
    },
    filter: {
      filterBy: "Filter by:",
      filterType: {
        language: "Language",
        framework: "Framework",
        stack: "Stack",
        style: "Style",
      },
      filterSelect: {
        selectLanguage: "Select language",
        selectFramework: "Select framework",
        selectStack: "Select stack",
        selectStyle: "Select style",
      },
    },
  },
  home: {
    presentation:
      "Welcome to my digital showcase, where programming meets creativity and technical expertise. As a passionate developer with a knack for transforming complex problems into elegant solutions, my portfolio is a testament to my journey in the ever-evolving world of technology.",
    projects: "Please have a look at my projects.",
  },
  about: {
    title: "I work with",
    frontend: "Frontend",
    libraries: "Libraries",
    backend: "Backend",
    languages: "Languages",
    versionControl: "Version control",
  },
};
