export default async function getProducts() {
  const response = await fetch("https://fakestoreapi.com/products");
  if (!response.ok) {
    throw new Error("상품정보를 불러오는데 실패했습니다");
  }
  const body = await response.json();
  return body;
}
