// hooks/useDisableScrollOnSidebar.js

import { useEffect } from "react";

const useDisableScrollOnSidebar = (sidebar) => {
  useEffect(() => {
    document.body.style.overflow = sidebar ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [sidebar]);
};

export default useDisableScrollOnSidebar;
