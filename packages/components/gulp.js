import pkg from "gulp"
import { buildStyle } from "./build.js"
const { parallel, series } = pkg
export async function clean() {
  console.log("...clean")
}
export default series(clean, parallel(buildStyle))
