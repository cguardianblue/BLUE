import { withInstall } from "hooks"
import cgStep from "./src/CgStep.vue"
// 导出 install
export const CgStep = withInstall(cgStep)
// 导出组件
export default cgStep
