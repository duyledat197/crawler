const axios = require("axios");
const cheerio = require("cheerio");
const source = "http://sieuthisua247.com";
const url = `${source}/gl001/default.aspx`;
const getHtml = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

const main = async () => {
  const html = await getHtml(url);
  const $ = cheerio.load(html);

  const categories = [];
  const products = [];
  //* get categories links

  $(".alv1").each((i, el) => {
    const a = $(el);
    const link = a.attr("href");
    categories.push(link);
  });

  console.log(categories);
  // categories.forEach(async (cate) => {
  //   const html = await getHtml(url);
  //   const $2 = cheerio.load(html);
  //   $2(".ulProducts li").each((i, ele) => {
  //     const a = $2(ele).find("a");
  //     const link = a.attr("href");
  //     products.push(link);
  //   });
  // });
  // console.log(products);
};

main();
