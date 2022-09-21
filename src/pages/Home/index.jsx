/* ------------ STYLES ------------ */
import styles from './styles.module.css'

/* ------------ COMPONENTS ------------ */
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ProductCard from '../../components/ProductCard';
import Head from 'next/head'

/* ------------ DATA ------------ */
import data from '../../products.json';

/* ------------ RESOURCES ------------ */
import { useContext } from "react";

/* ------------ CONTEXT ------------ */
import Products from '../../Context/Products'

export default function Home() {
  const [products, setProducts] = useContext(Products);
  
  function pushProduct(product) {
    if(products.includes(product) == true) return
    setProducts([...products, product])
  }

  return (
    <div>
      <Head>
        <title>React Store</title>
      </Head>
      <div className={`${styles.body}`}>
        <Header/>
        <main className={`${styles.content} d-flex justify-content-center`}>
          <div className={`${styles.products_container} d-flex justify-content-center col-11 gap-3 row row-cols-md-2 row-cols-lg-3`}>
            {data.map(product => (
              <ProductCard 
              key={product.id} 
              product={product}
              pushProduct={pushProduct}
              />
            ))}
          </div>
        </main>
        <Footer />
      </div>
    </div>    
  )
}
