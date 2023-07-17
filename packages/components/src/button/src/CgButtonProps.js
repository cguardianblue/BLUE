export const buttonProps = {
  size: {
    type: String,
    values: ["large", "default"],
    default: "default",
  },
  disabled: Boolean,
  type: {
    type: String,
    values: ["default", "plain-dark", "plain-light", "text"],
    default: "default",
  },
  round: Boolean,
  color: String,
}
export const buttonEmits = {
  click: (evt) => evt instanceof Event,
}
