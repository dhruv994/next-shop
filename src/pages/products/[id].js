
export async function getStaticPaths() {
    const products = await getProducts()
    return {
        paths: products.map((product) => ({
            params: { id: product.id.toString() }
        })),
        fallback: 'blocking'
    }
}
export async function getStaticProps({ params: { id } }) {
    try {
        const product = await getProduct(id);
        return {
            props: { product },
            revalidate: 5 * 60

        }
    } catch (err) {
        return { notFound: true }
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