import { computed } from "vue"
import { TinyColor } from "@ctrl/tinycolor"
export function darken(color, amount) {
  return color.mix("#141414", amount).toString()
}
export function useButtonCustomStyle(props) {
  return computed(() => {
    const buttonColor = props.color
    let styles = {}
    if (buttonColor) {
      const color = new TinyColor(buttonColor)
      if (props.type === "plain-light") {
        styles = {
          "--cg-color-main": color,
          "--cg-color-main-border": color.tint(50).toString(),
          "--cg-color-main-border-hover": color.tint(10).toString(),
        }
      } else if (props.type === "plain-dark") {
        styles = {
          "--cg-color-text": color.tint(30).toString(),
          "--cg-color-border": color.tint(50).toString(),
          "--cg-color-border-hover": color.tint(10).toString(),
        }
      } else if (props.type === "default") {
        styles = {
          "--cg-color-main": color,
          "--cg-color-main-hover": color.tint(10).toString(),
        }
      }
    }
    return styles
  })
}
