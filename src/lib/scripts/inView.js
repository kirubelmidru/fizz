/**
 * This action triggers a custom event on node entering/exiting the viewport.
 * example:
 * <p
 * 	use:inView
 * 	on:enter={() => console.log("enter")}
 * 	on:exit={() => console.log("exit")}
 * >
 */

 export default function inView(node, params = {}) {
  let observer;

  const handleIntersect = (e) => {
    const v = e[0].isIntersecting ? "enter" : "exit";
    node.dispatchEvent(new CustomEvent(v));
  };
  
  const setObserver = ({ root, threshold }) => {
    const options = { root, threshold };
    if (observer) observer.disconnect();
    observer = new IntersectionObserver(handleIntersect, options);;
    observer.observe(node);
  }

  setObserver(params);

  return {
    update(params) {
      setObserver(params);
    },

    destroy() {
      if (observer) observer.disconnect();
    }
  };
}
