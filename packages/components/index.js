import components from "./src/index"
export * from "./src/index"
export function install(app) {
  components.forEach((c) => {
    app.component(c.name || c.__name, c)
  })
}
export default {
  install: (app) =>
    components.forEach((c) => {
      app.component(c.name || c.__name, c)
    }),
}
