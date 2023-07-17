import { withInstall } from "hooks"
import cgConfigProvider from "./src/cgConfigProvider.vue"
// 导出 install
export const CgConfigProvider = withInstall(cgConfigProvider)
// 导出组件
export default cgConfigProvider
