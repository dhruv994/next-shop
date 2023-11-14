
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
            revalidate: +process.env.REVALIDATE_SECONDS

        }
    } catch (err) {
        if (err instanceof ApiError && err.status === 404) {

            return { notFound: true }
        }
        throw err
    }
}
import Head from "next/head"
import Image from "next/image";
import Title from "../../../components/title"
import { ApiError } from "../../../lib/api";
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
                <div className="flex flex-col lg:flex-row">
                    <div>

                        <Image src={product.pictureUrl} width={640} height={480} alt="" />
                    </div>
                    <div className="flex-1 lg:ml-4">
                        <p className="text-sm">

                        {product.description}
                        </p>
                        <p className="text-lg font-bold">
                            {` $${product.price}`}
                        </p>
                    </div>

                </div>
            </main>
        </>
    )

}