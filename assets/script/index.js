const faq = document.querySelectorAll('details');
const siblings = (el) => {
    if (el.parentNode === null) return [];
    return Array.prototype.filter.call(el.parentNode.children, function (child) {
      return child !== el;
    });
  };
faq.forEach((el) => {
    el.addEventListener("click", () => {
      const others = siblings(el);
      others.forEach((sibling) => {
        sibling.removeAttribute("open");
      });
    });
  });