import { ProductDetail } from "../components/ProductDetail"
import { ProductImage } from "../components/ProductImage"
import { ProductShift } from "../components/ProductShift"

export function ProductContainer(){
  return (
    <>
    <section className="product-container">
        <div className="product-image-container">
          <ProductImage />
          <ProductShift />
        </div>
        <div className="product-detail-container">
          <ProductDetail />
        </div>
      </section>
    </>
  )
} 