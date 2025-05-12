import { useEffect } from "react";

const PageTitle = ({ children, title }) => {
  useEffect(() => {
    document.title = `${title ? title : "Loading"} | gallery.Nufat.id`;
  }, [title]);

  return <>{children}</>;
};

export default PageTitle;
