export const checkboxGroupProps = {
  modelValue: {
    type: [String, Array],
    default: [],
  },
  disabled: {
    type: Boolean,
    default: false,
  },
}
export const cgCheckboxGroupKey = Symbol("checkboxGroup")
