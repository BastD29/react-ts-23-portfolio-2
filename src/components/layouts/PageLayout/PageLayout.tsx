import { FC } from "react";
import { BaseLayout } from "../BaseLayout/BaseLayout";
import { Outlet } from "react-router-dom";

type PageLayoutProps = {
  title?: string;
};

const PageLayout: FC<PageLayoutProps> = ({ title }) => {
  return (
    <BaseLayout>
      {/* <h1>{title}</h1> */}
      <Outlet />
    </BaseLayout>
  );
};

export { PageLayout };
