
export async function getStaticPaths() {
    const products = await getProducts()
    return {
        paths: products.map((product) => ({
            params: { id: product.id.toString() }
        })),
        fallback: false
    }
}
export async function getStaticProps({ params: { id } }) {
    const product = await getProduct(id);
    return {
        props: { product },
        revalidate: 5 * 60

    }
}
import Head from "next/head"
import Title from "../../../components/title"
import { getProduct, getProducts } from "../../../lib/products"

// }

export default function ProductPage({ product }) {
    //  console.log('productsPage', params)
    return (
        <>
            <Head>
                <title>
                    Next Shop
                </title>
            </Head>
            <main className='p-2'>
                <Title> {product.title}</Title>
                <p>
                    {product.description}
                </p>
            </main>
        </>
    )

}