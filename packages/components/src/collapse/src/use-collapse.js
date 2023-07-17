import { provide, ref, watch } from "vue"
import { cgCollapseKey } from "./CollapseProps"
export const useCollapse = (props, emits) => {
  const activeNames = ref(
    Array.isArray(props.activeValue) ? props.activeValue : [props.activeValue]
  )
  const setActiveNames = (_activeNames) => {
    activeNames.value = _activeNames
    const value = props.accordion ? activeNames.value[0] : activeNames.value
    emits("update:active-value", value)
  }
  const handleItemClick = (name) => {
    if (props.accordion) {
      setActiveNames([activeNames.value[0] === name ? "" : name])
      emits("change", name)
    } else {
      const _activeNames = [...activeNames.value]
      const index = _activeNames.indexOf(name)

      if (index > -1) {
        _activeNames.splice(index, 1)
      } else {
        _activeNames.push(name)
      }
      setActiveNames(_activeNames)
      emits("change", _activeNames)
    }
  }

  watch(
    () => props.activeValue,
    () =>
      (activeNames.value = Array.isArray(props.activeValue)
        ? props.activeValue
        : [props.activeValue]),
    { deep: true }
  )

  provide(cgCollapseKey, {
    activeNames,
    handleItemClick,
  })
  return { activeNames, setActiveNames }
}
