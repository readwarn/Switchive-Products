"use server";

export const loadProducts = async () => {
  try {
    const response = await fetch(process.env.PRODUCT_API_URL as string);
    const products = await response.json();
    return products ? products.products : null;
  } catch (e) {
    console.error("[ERROR FETCHING PRODUCTS]", e);
    return null;
  }
};
