export const radioGroupProps = {
  modelValue: {
    type: [String, Number, Boolean],
    default: [],
  },
  disabled: {
    type: Boolean,
    default: false,
  },
}
export const cgRadioGroupKey = Symbol("radioGroup")
