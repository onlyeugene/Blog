// hooks/useDisableScrollOnSearch.js

import { useEffect } from "react";

const useDisableScrollOnSearch = (search) => {
  useEffect(() => {
    document.body.style.overflow = search ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [search]);
};

export default useDisableScrollOnSearch;
