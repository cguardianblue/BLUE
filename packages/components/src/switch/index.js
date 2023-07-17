import { withInstall } from "hooks"
import cgSwitch from "./src/CgSwitch.vue"
// 导出 install
export const CgSwitch = withInstall(cgSwitch)
// 导出组件
export default cgSwitch
