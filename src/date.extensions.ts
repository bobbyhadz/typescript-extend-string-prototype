// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface Date {
  getTimestamp(): number;
}

Date.prototype.getTimestamp = function () {
  return this.getTime();
};
