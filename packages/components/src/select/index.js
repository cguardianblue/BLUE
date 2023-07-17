import { withInstall } from "hooks"
import cgSelect from "./src/CgSelect.vue"
// 导出 install
export const CgSelect = withInstall(cgSelect)

// 导出组件
export default cgSelect
