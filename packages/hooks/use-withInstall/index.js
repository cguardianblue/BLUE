export const withInstall = (component, alias) => {
  const comp = component
  comp.install = (app) => {
    app.component(comp.name || comp.__name, component)
    if (alias) {
      app.config.globalProperties[alias] = component
    }
  }
  return component
}

export function getRoot() {
  // 检测有没有变量 globalThis
  const freeGlobalThis =
    typeof globalThis === "object" &&
    globalThis !== null &&
    globalThis.Object == Object &&
    globalThis
  // 检测有没有变量 self
  const freeSelf =
    typeof self === "object" && self !== null && self.Object === Object && self
  // 检测有没有变量 global
  const freeGlobal =
    typeof global === "object" &&
    global !== null &&
    global.Object === Object &&
    global

  if (freeGlobalThis && freeSelf) {
    return "browser"
  }
  if (freeGlobalThis && freeGlobal) {
    return "node"
  }
}
