export default defineEventHandler(async (event) => {
  const data = await useStorage().getItem('fs:hello.txt');

  return {
    data,
  };
});