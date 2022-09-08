export default defineEventHandler(async (event) => {
  const data = await useStorage().getItem('assets:server:hello.txt');
  const subData = await useStorage().getItem('assets:server:sub/hello.txt');

  return {
    data,
    subData,
  };
});