/*
Given an array of distinct elements, compute an array whose items are all arrays corresponding to subsets of the original array.
BigO: 2**n (both time and space)
*/

function powerSet(arr) {
  const allSets = [[]];
  for (let i = 0; i < arr.length; i++) {
    allSets.forEach(subSet => allSets.push(subSet.concat(arr[i])));
  }
  return allSets;
}

//from REACTO gist by Dakota
function powerSetRecursive(array) {
  if (array.length === 0) return [[]];
  const first = [array[0]];
  const slice = array.slice(1);
  const withoutFirst = powerSetRecursive(slice);
  const withFirst = withoutFirst.map(elt => first.concat(elt));
  return [...withFirst, ...withoutFirst];
}
