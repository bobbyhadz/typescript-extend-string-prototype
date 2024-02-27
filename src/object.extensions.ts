// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface Object {
  // 👇️ function log - no parameters, returns object
  log(): Record<string, unknown>;
}

// 👇️ Don't use an arrow function
Object.prototype.log = function () {
  console.log(this);

  return this as Record<string, unknown>;
};
