import { withInstall } from "hooks"
import cgDialog from "./src/CgDialog.vue"
import { createDialog } from "./src/createDialog"

const CgDialog = withInstall(cgDialog)
export { createDialog, CgDialog }
export default cgDialog
