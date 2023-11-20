
import Page from '../../components/Page';
import ProductCard from '../../components/ProductCard';
import { getProducts } from '../../lib/products'



export async function getStaticProps() {
  // console.log("Home Page [get static props]")

  const products = await getProducts();
  return {
    props: { products },
    revalidate: +process.env.REVALIDATE_SECONDS
  }
}


export default function HomePage({ products }) {
  // console.log("Products in homepage", products);
  return (

    <>
      <Page title="Indoor Plants" >
        <ul className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
          {products.map((product) => (
            <li key={product.id}>
              <ProductCard product={product} />

            </li>
          ))}
        </ul>
      </Page>
    </>
  )
}
