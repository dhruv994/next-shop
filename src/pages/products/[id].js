
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
    return {
        props: { product }
    }
}
import Head from "next/head"
import Title from "../../../components/title"
import { getProducts } from "../../../lib/products"

// }

export default function ProductPage() {
    //  console.log('productsPage', params)
    return (
        <>
            <Head>
                <title>
                    Next Shop
                </title>
            </Head>
            <main className='p-2'>
                <Title> Product</Title>
            </main>
        </>
    )

}