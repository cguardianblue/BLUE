import { withInstall } from "hooks"
import cgSteps from "./src/CgSteps.vue"
// 导出 install
export const CgSteps = withInstall(cgSteps)
// 导出组件
export default cgSteps
