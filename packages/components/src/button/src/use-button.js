import { ref } from "vue"
export function useButton(props, emits) {
  const root = ref()
  const handleClick = (evt) => {
    emits("click", evt)
  }
  return {
    root,
    handleClick,
  }
}
