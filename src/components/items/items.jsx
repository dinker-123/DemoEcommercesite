
export const ItemList = async () => {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    if (!response.ok) { // if HTTP-status is 404, 500, 403, etc 
      console.log("HTTP-Status: " + response.status);
      return;
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch data: ", error);
  }
};
