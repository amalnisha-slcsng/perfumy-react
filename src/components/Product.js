import one from "../assets/images/one.jpg";
import two from "../assets/images/two.jpg";
import three from "../assets/images/three.jpg";

function Product() {
    return (
      <div className="Products">
        <div className="Box1">
          <img src={one} alt="Perfume 1" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ex qui laudantium quo odio maiores doloremque veniam facilis quia libero!</p>
        </div>
        <div className="Box2">
          <img src={two} alt="Perfume 2" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ex qui laudantium quo odio maiores doloremque veniam facilis quia libero!</p>
        </div>
        <div className="Box3">
          <img src={three} alt="Perfume 3" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ex qui laudantium quo odio maiores doloremque veniam facilis quia libero!</p>
        </div>
      </div>
    );
  }
  export default Product
 
  
  