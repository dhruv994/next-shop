import { fetchJSON } from "./api";

const CMS_URL = 'http://localhost:1337/products';
export async function getProduct(id) {
    const product = await fetchJSON(`${CMS_URL}/${id}`);

    return stripProduct(product)
}

export async function getProducts() {
    const products = await fetchJSON(`${CMS_URL}`);
    return products.map((stripProduct))
}

function stripProduct(product) {
    return {
        id: product.id,
        title: product.title,
        description: product.description
    }
}