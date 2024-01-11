export function mergeDictionaries(
  dict1: Record<string, any>,
  dict2: Record<string, any>,
): Record<string, any> {
  const mergedDict: Record<string, any> = { ...dict1 };

  for (const key in dict2) {
    if (dict2.hasOwnProperty(key)) {
      if (
        mergedDict.hasOwnProperty(key) &&
        typeof dict2[key] === "object" &&
        dict2[key] !== null
      ) {
        // Recursively merge nested objects
        mergedDict[key] = mergeDictionaries(mergedDict[key], dict2[key]);
      } else {
        // Assign non-object values directly
        mergedDict[key] = dict2[key];
      }
    }
  }

  return mergedDict;
}
