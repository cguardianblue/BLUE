import { withInstall } from "hooks"
import cgToast from "./src/CgToast.vue"
import { createToast } from "./src/createToast"

const CgToast = withInstall(cgToast)
export { createToast, CgToast }
export default cgToast
