/* ------------ STYLES ------------ */
import styles from './styles.module.css'

/* ------------ ICONS ------------ */
import { BsFillTrashFill } from 'react-icons/bs';

/* ------------ RESOURCES ------------ */
import { useContext } from "react";

/* ------------ CONTEXT ------------ */
import Products from '../../Context/Products'

export default function MiniCard({ product, removeProduct }) {
  let [products, setProducts] = useContext(Products);

  function removeProduct(id) {
    // let newProductsArray = products
    // for(var i = 0; i < products.length; i++) { 
    //   if(products[i].id === id) { 
    //     newProductsArray.splice(i, 1); 
    //   }
    // }
    // setProducts(newProductsArray)
    setProducts([...products, id])
    console.log(products)
  }


  return (
    <div className={`${styles.mini_card} d-flex rounded-3 border align-items-center justify-content-between`}>
      <div className={`${styles.img_container} d-flex justify-content-center `}>
        <img src={`../../../images/${product.img}`} className={styles.product_img} width={70} height={70}/>
      </div>
      <div className={`${styles.product_infos} `}>
        <h1 className={`${styles.product_name} `}>{product.name}</h1>
        <p className={`${styles.price}`}>{product.price}</p>
      </div>
      <button className={`btn`} onClick={() => removeProduct(product)}>
        <i className={`${styles.trash_icon} align-self-end`}><BsFillTrashFill /></i>
      </button>
    </div>
  )
}