import i18n from "i18next";

// AUTH
export const AUTH = i18n.t("routes.auth.root");
export const LOGIN = `${AUTH}${i18n.t("routes.auth.login")}`;
export const REGISTER = `${AUTH}${i18n.t("routes.auth.register")}`;

export const ROOT = i18n.t("routes.root");

// NAV
export const HOME = i18n.t("routes.nav.home");
export const ABOUT = i18n.t("routes.nav.about");
export const CONTACT = i18n.t("routes.nav.contact");

// PROJECT
export const PROJECTS_LIST = i18n.t("routes.project.root");
export const PROJECT_DETAIL = `${PROJECTS_LIST}/:projectId`;
// export const PROJECT_DETAIL = `${PROJECTS_LIST}/:id`;
