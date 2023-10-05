
import Head from 'next/head'
import Title from '../../components/title'
import { getProducts } from '../../lib/products'



export async function getStaticProps() {
  console.log("Home Page [get static props]")

  const products = await getProducts();
  return {
    props: { products }
  }
}


export default function HomePage({ products }) {
  console.log("Products in homepage",products);
  return (
    <>
      <Head>
        <title>
          Next Shop
        </title>
      </Head>
      <main className='p-2'>
        <Title > Next Shop</Title>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.title}
            </li>
          ))}
        </ul>
      </main>
    </>
  )
}
