import svgs from "../assets/images/svgs"

export function ProductShift(){
  return (
    <div className="product-shift-container">
      <span className="product-shift-text">
        <svgs.ImageShiftLeft />
        Photo
      </span>
      <span className="product-shift-text">
        <svgs.ImageShiftMiddle />
        360
      </span>
      <span className="product-shift-text">
        <svgs.ImageShiftRight />
        3D
      </span>
    </div>
  )
} 