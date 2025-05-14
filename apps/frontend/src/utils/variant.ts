export const fadeIn = (direction: string, delay: number) => {
  return {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 30 : direction === "bottom" ? -30 : 0,
      x: direction === "left" ? 10 : direction === "right" ? -10 : 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1,
        delay: delay,
        ease: "easeInOut",
      }
    }
  }
}