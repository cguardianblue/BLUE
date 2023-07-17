export const RadioProps = {
  modelValue: {
    type: [Number, String, Boolean],
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  label: {
    type: [Number, String, Boolean],
    default: false,
  },
}
export const cgRadioKey = Symbol("radio")
