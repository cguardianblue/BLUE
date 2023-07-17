import { shallowRef, isVNode } from "vue"

const getOrderedChildren = (vm, childComponentName, children) => {
  const nodes = flattedChildren(vm.subTree).filter((n) => {
    return isVNode(n) && n.type?.name === childComponentName && !!n.component
  })
  const uids = nodes.map((n) => n.component.uid)
  return uids.map((uid) => children[uid]).filter((p) => !!p)
}
export const flattedChildren = (children) => {
  const vNodes = Array.isArray(children) ? children : [children]
  const result = []

  vNodes.forEach((child) => {
    if (Array.isArray(child)) {
      result.push(...flattedChildren(child))
    } else if (isVNode(child) && Array.isArray(child.children)) {
      result.push(...flattedChildren(child.children))
    } else {
      result.push(child)
      if (isVNode(child) && child.component?.subTree) {
        result.push(...flattedChildren(child.component.subTree))
      }
    }
  })
  return result
}
export const useOrderedChildren = (vm, childComponentName) => {
  const children = {}
  const orderedChildren = shallowRef([])
  const addChild = (child) => {
    children[child.uid] = child
    orderedChildren.value = getOrderedChildren(vm, childComponentName, children)
  }
  const removeChild = (uid) => {
    delete children[uid]
    orderedChildren.value = orderedChildren.value.filter(
      (children) => children.uid !== uid
    )
  }

  return {
    children: orderedChildren,
    addChild,
    removeChild,
  }
}
