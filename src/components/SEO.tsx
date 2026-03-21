import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { chapters } from "../data/chapters";

export const SEO = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const currentChapter = chapters.find(c => c.path === pathname);
    const baseTitle = "AI Evals for Everyone";
    
    if (currentChapter) {
      document.title = `${currentChapter.title} | ${baseTitle}`;
    } else {
      document.title = baseTitle;
    }
  }, [pathname]);

  return null;
};
