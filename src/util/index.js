export const offLineSave = function (key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export const offLineRead = function (key) {
  const v = localStorage.getItem(key);
  return v ? JSON.parse(v) : null;
}