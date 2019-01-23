//        A
//      /  \
//     B    C
//    / \  / \
//   D  E G   H
//  /
// F 

const tree = {
  value: 'A',
  left: {
    value: 'B',
    left: {
      value: 'D',
      left: {
        value: 'F',
        left: null,
        right: null
      },
      right: null
    },
    right: {
      value: 'E',
      left: null,
      right: null
    }
  },
  right: {
    value: 'C',
    left: {
      value: 'G',
      left: null,
      right: null
    },
    right: {
      value: 'H',
      left: null,
      right: null
    }
  }
}

const findPath = (tree, target) => {
  if(tree.value === target) return [tree.value]
  if(!tree.left && !tree.right) return []
  let path = []
  if(tree.left) {
    let left = findPath(tree.left, target)
    if(left.length) {
      path = [tree.value].concat(left)
    }
  }
  if(tree.right) {
    let right = findPath(tree.right, target)
    if(right.length) {
      path = [tree.value].concat(right)
    }
  }
  return path
}

const closestParent = (tree, a, b) => {
  const aPath = findPath(tree, a)
  const bPath = findPath(tree, b)
  for(let i = aPath.length-1; i >= 0; i--) {
    if(bPath.includes(aPath[i])) return aPath[i]
  }
} 

closestParent(tree, 'D', 'G')

