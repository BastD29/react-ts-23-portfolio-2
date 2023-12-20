import { Route, Routes } from "react-router-dom";

import { DashboardLayout } from "./components/layouts/DashboardLayout/DashboardLayout";
import { PageLayout } from "./components/layouts/PageLayout/PageLayout";

import { About } from "./components/features/About/About";
import { Contact } from "./components/features/Contact/Contact";
import { ProjectList } from "./components/features/ProjectList/ProjectList";
import { ProjectDetail } from "./components/features/ProjectDetail/ProjectDetail";
import { Home } from "./components/features/Home/Home";

import {
  ABOUT,
  CONTACT,
  HOME,
  PROJECTS_LIST,
  PROJECT_DETAIL,
  ROOT,
} from "./constants/routes";

export default function App() {
  return (
    <Routes>
      <Route path={ROOT} element={<DashboardLayout />}>
        <Route element={<PageLayout />}>
          <Route path={HOME} element={<Home />} />
        </Route>
        <Route element={<PageLayout />}>
          <Route path={PROJECTS_LIST} element={<ProjectList />} />
        </Route>
        <Route element={<PageLayout />}>
          <Route path={PROJECT_DETAIL} element={<ProjectDetail />} />
        </Route>
        <Route element={<PageLayout />}>
          <Route path={ABOUT} element={<About />} />
        </Route>
        <Route element={<PageLayout />}>
          <Route path={CONTACT} element={<Contact />} />
        </Route>
      </Route>
    </Routes>
  );
}
