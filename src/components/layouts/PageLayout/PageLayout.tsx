import { FC } from "react";

import { BaseLayout } from "../BaseLayout/BaseLayout";

import { Outlet } from "react-router-dom";

import styles from "./PageLayout.module.scss";

type PageLayoutProps = {
  title?: string;
};

const PageLayout: FC<PageLayoutProps> = ({}) => {
  return (
    <BaseLayout className={styles["page-layout"]}>
      <Outlet />
    </BaseLayout>
  );
};

export { PageLayout };
