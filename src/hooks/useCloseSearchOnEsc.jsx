// hooks/useCloseSearchOnEsc.js

import { useEffect } from "react";

const useCloseSearchOnEsc = (setSearch) => {
  useEffect(() => {
    const closeSearchOnEsc = (e) => {
      if (e.key === "Escape") {
        setSearch(false);
      }
    };
    document.addEventListener("keydown", closeSearchOnEsc);
    return () => {
      document.removeEventListener("keydown", closeSearchOnEsc);
    };
  }, [setSearch]);
};

export default useCloseSearchOnEsc;
