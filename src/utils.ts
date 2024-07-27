export const actOnOutsideClick = (element: HTMLElement, callback: () => void) => {
  window.addEventListener("click", (e) => {
    const clickWasOutside = !e.target || !(e.target instanceof Node) || !element.contains(e.target);

    if (clickWasOutside) {
      callback();
    }
  });
};
