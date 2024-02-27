// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface Number {
  sum(a: number): number;
}

Number.prototype.sum = function (a: number) {
  return Number(this) + a;
};
