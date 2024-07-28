export const actOnOutsideClick = (element: HTMLElement, callback: () => void) => {
  window.addEventListener("click", (e) => {
    const clickWasOutside = !e.target || !(e.target instanceof Node) || !element.contains(e.target);

    if (clickWasOutside) {
      callback();
    }
  });
};

export const addHorizontalScrollControls = (
  leftButton: HTMLButtonElement,
  rightButton: HTMLButtonElement,
  container: HTMLDivElement,
  clickScrollDist: number = 460
) => {
  let currentScrollDist = 0;
  let isDown = false;
  let startX: number;
  const MAX_SCROLL_DIST = container.scrollWidth - container.clientWidth;

  container.addEventListener("scroll", () => {
    currentScrollDist = container.scrollLeft;
  });

  leftButton.addEventListener("click", () => {
    currentScrollDist -= clickScrollDist;
    container.scroll({ left: currentScrollDist });
  });

  rightButton.addEventListener("click", () => {
    let nextScrollDist = currentScrollDist - clickScrollDist;
    if (nextScrollDist >= MAX_SCROLL_DIST) nextScrollDist = MAX_SCROLL_DIST;
    currentScrollDist += clickScrollDist;
    container.scroll({ left: currentScrollDist });
  });

  container.addEventListener("mousedown", (e) => {
    const action = async () => {
      isDown = true;
      container.classList.add("active");
      startX = e.pageX - container.offsetLeft;
      currentScrollDist = container.scrollLeft;
    };

    action();
  });

  container.addEventListener("mouseleave", () => {
    isDown = false;
  });

  container.addEventListener("mouseup", () => {
    isDown = false;
  });

  container.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const action = async () => {
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 3;
      container.scrollLeft = currentScrollDist - walk;
    };

    action();
  });
};
