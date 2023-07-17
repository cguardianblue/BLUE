import { ref, unref } from "vue"
export function useClassName(componentName) {
  let isName = "is-"
  let baseName = ref("cg-" + componentName)
  function addClass(...rest) {
    let baseName = "cg-" + componentName
    for (let key in rest) {
      baseName += "-" + rest[key]
    }
    return baseName
  }
  function is(name, state) {
    return state && !!state ? isName + name : ""
  }
  return { addClass, is, baseName: unref(baseName) }
}
