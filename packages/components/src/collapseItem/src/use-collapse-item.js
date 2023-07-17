import { computed, inject } from "vue"
import { cgCollapseKey } from "../../collapse/src/CollapseProps"
export const useCollapseItem = (props) => {
  const collapse = inject(cgCollapseKey)
  let isActive = computed(() => {
    return collapse?.activeNames.value.includes(props.name)
  })
  function handleHeaderClick() {
    if (props.disabled) return
    collapse?.handleItemClick(props.name)
  }
  return { isActive, handleHeaderClick }
}
