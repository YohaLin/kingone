import { Category } from "../components/Category"
import { ProductContainer } from "../components/ProductContainer"

export function Home(){
  return (
    <div>
      <main className="home-container">
        <header className="category-container">
          <Category/>
        </header>
        <ProductContainer />
      </main>
    </div>
  )
} 