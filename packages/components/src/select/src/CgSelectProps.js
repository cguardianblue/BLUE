export const selectProps = {
  selectValue: String | Number,
  disabled: Boolean,
  placeholder: {
    type: String,
    default: "请选择",
  },
}
export const cgSelectKey = Symbol("cgSelectKey")
