export const scrollToDestination = (element: HTMLElement | null) => {
  window.scrollTo({
    behavior: element ? 'smooth' : 'auto',
    top: element ? element.offsetTop : 0,
  })
}
