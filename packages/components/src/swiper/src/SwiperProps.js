export const swiperProps = {
  initialIndex: {
    type: Number,
    default: 0,
  },
  height: {
    type: String,
    default: "",
  },
  trigger: {
    type: String,
    values: ["hover", "click"],
    default: "click",
  },
  autoplay: {
    type: Boolean,
    default: true,
  },
  interval: {
    type: Number,
    default: 3000,
  },
  indicatorPosition: {
    type: String,
    values: ["", "none", "outside"],
    default: "",
  },
  arrow: {
    type: String,
    values: ["always", "hover", "never"],
    default: "always",
  },
  type: {
    type: String,
    values: ["", "card"],
    default: "",
  },
  loop: {
    type: Boolean,
    default: true,
  },
  direction: {
    type: String,
    values: ["horizontal", "vertical"],
    default: "horizontal",
  },
  pauseOnHover: {
    type: Boolean,
    default: true,
  },
}

export const swiperEmits = {
  change: (current, prev) =>
    [current, prev].every((num) => typeof num === "number"),
}
export const swiperKey = Symbol("swiper")
