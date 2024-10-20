// utils.js

export const handleSidebarToggle = (sidebar, setSidebar, setClosing) => {
    if (sidebar) {
      setClosing(true);
      setTimeout(() => {
        setSidebar(false);
        setClosing(false);
      }, 300);
    } else {
      setSidebar(true);
    }
  };
  
  export const handleSearchToggle = (search, setSearch, setSearchClosing) => {
    if (search) {
      setSearchClosing(true);
      setTimeout(() => {
        setSearch(false);
        setSearchClosing(false);
      }, 300);
    } else {
      setSearch(true);
    }
  };
  
  export const handleWaveAnimation = (e) => {
    const button = e.currentTarget;
    button.classList.add("clicked");
  
    setTimeout(() => {
      button.classList.remove("clicked");
    }, 400);
  };
  