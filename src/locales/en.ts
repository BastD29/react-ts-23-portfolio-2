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
      },
      filterSelect: {
        selectLanguage: "Select language",
        selectFramework: "Select framework",
      },
    },
  },
};
