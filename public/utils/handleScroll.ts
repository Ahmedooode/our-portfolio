// utils/handleScroll.ts

export const createHandleScroll =
  (setShowMenu?: React.Dispatch<React.SetStateAction<boolean>>) =>
  (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();

    // Close mobile menu if hook is provided
    if (setShowMenu) {
      setShowMenu(false);
    }

    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);

    // Smooth scroll
    elem?.scrollIntoView({
      behavior: "smooth",
    });

    // Update active nav-link classes
    const links = document.querySelectorAll(".nav-link");
    links.forEach((link) => {
      link.classList.remove("active");
    });

    e.currentTarget.classList.add("active");
  };
