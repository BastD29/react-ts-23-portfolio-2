import { Route, Routes } from "react-router-dom";

import { DashboardLayout } from "./components/layouts/DashboardLayout/DashboardLayout";
import { PageLayout } from "./components/layouts/PageLayout/PageLayout";

import { Home } from "./components/features/Home/Home";
import { About } from "./components/features/About/About";
import { Contact } from "./components/features/Contact/Contact";

import { ABOUT, CONTACT, HOME, ROOT } from "./constants/routes";

export default function App() {
  return (
    <Routes>
      <Route path={ROOT} element={<DashboardLayout />}>
        <Route element={<PageLayout />}>
          <Route path={HOME} element={<Home />} />
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
