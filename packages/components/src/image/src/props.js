/** @format */

export const imageProps = {
  defaultSrc: {
    type: String,
    default: "",
  },
  src: {
    type: String,
    default: "",
  },
  // 确定图片如何适应容器框，同原生 object-fit
  // 可选 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'
  fit: {
    type: String,
    values: ["", "contain", "cover", "fill", "none", "scale-down"],
    default: "",
  },
  // 浏览器加载图像的策略，和 浏览器原生能力一致
  loading: {
    type: String,
    values: ["eager", "lazy"],
    default: "lazy",
  },
  imageHover: {
    type: Boolean,
    default: true,
  },
}
