const a = async () => {
  setTimeout(() => console.log('a'), 0);
  await e();
};
const b = async () => {
  console.log('b');
}
const c = async () => {
  console.log('c');
}
const d = async () => {
  console.log('d');
}
const e = async () => {
  console.log('e');
  await d();
}

await a();
await b();
await c();

// e d b c a