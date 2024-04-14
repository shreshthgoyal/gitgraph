const ExtractFunction = (code, functionName) => {
  if (code) {
    const escapeRegExp = (string) => {
      return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    };

    const sanitizedFunctionName = escapeRegExp(functionName);
    const functionStart = new RegExp(`def ${sanitizedFunctionName}\\(`, "g");
    const matches = [...code.matchAll(functionStart)];

    if (matches.length == 0) {
      return 0;
    }

    const start = matches[0].index;
    let end = code.indexOf("\ndef ", start + 1);
    if (end === -1) end = code.length;
    return code.substring(start, end);
  }
};

export default ExtractFunction;
