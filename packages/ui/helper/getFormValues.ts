/* eslint-disable */
function parseDotNotation(str: string, val: any, obj: { [x: string]: any }) {
  let currentObj = obj,
    keys = str.split("."),
    i,
    l = Math.max(1, keys.length - 1),
    key;

  for (i = 0; i < l; ++i) {
    key = keys[i];
    currentObj[key] = currentObj[key] || {};
    currentObj = currentObj[key];
  }

  currentObj[keys[i]] = val;
  delete obj[str];
}

function convertDotNotationToObject(obj: { [x: string]: any }) {
  for (const key in obj) {
    if (key.indexOf(".") !== -1) {
      parseDotNotation(key, obj[key], obj);
    }
  }
  return obj;
}

function serializeArray(form: HTMLFormElement) {
  const arr: any[] = [];
  Array.prototype.slice.call(form.elements).forEach((field: any) => {
    if (
      !field.name ||
      field.disabled ||
      ["file", "reset", "submit", "button"].indexOf(field.type) > -1
    )
      return;
    if (field.type === "select-multiple") {
      Array.prototype.slice.call(field.options).forEach((option: any) => {
        if (!option.selected) return;
        arr.push({
          name: field.name,
          value: option.value,
        });
      });
      return;
    }
    if (["checkbox", "radio"].indexOf(field.type) > -1 && !field.checked)
      return;
    arr.push({
      name: field.name,
      value: field.value,
    });
  });
  return arr;
}

export function getFormValues(form: HTMLFormElement) {
  const serializedArray = serializeArray(form);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const output = {} as any;

  serializedArray.forEach((item) => {
    if (
      item.name.split("-")[0] === "educations" ||
      item.name.split("-")[0] === "jobs" ||
      // item.name.split("-")[0] === "skills" ||
      item.name.split("-")[0] === "links"
    ) {
      if (!output[item.name.split("-")[0]])
        output[item.name.split("-")[0]] = [];
      output[item.name.split("-")[0]][item.name.split("-")[2]] = {
        ...output[item.name.split("-")[0]][item.name.split("-")[2]],
        [item.name.split("-")[1]]: item.value,
      };
    } else {
      output[item.name] = item.value;
    }
  });

  return convertDotNotationToObject(output);
}
