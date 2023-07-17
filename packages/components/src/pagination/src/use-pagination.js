import { inject } from "vue"
import { cgPaginationKey } from "./CgPaginationProps.js"

export const usePagination = () => inject(cgPaginationKey, {})
