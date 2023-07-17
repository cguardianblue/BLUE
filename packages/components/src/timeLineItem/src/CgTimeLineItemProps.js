export const timeLineItemProps = {
  title: {
    type: String,
    default: "",
  },
  time: {
    type: String,
    default: "",
  },
  content: {
    type: String,
    default: "",
  },
  // 圆点和竖线状态  ’1‘灰色，’2‘红色 ，’3‘ 带背景底儿的红色
  status: {
    type: String,
    default: "1",
  },
  titleColor: {
    type: String,
    // default: 'rgba(67, 77, 92, 1)'
    default: "red",
  },
}
export const cgTimeLineKey = Symbol("cgTimeLine")
