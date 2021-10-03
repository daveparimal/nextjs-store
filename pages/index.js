import Link from "next/link";

const Home = (props) => {
  const productList = props.products.map((product) => {
    return (
      <div className="card" key={product._id}>
        <div className="card-image">
          <img src={product.mediaUrl} />
          <span className="card-title black-text">{product.name}</span>
        </div>
        <div className="card-content">
          <p>RS. {product.price}</p>
        </div>
        <div className="card-action">
          <Link href={"/product/[id]"} as={`/product/${product._id}`}>
            <a>View Details</a>
          </Link>
        </div>
      </div>
    );
  });

  return (
    <div>
      <h3>Products</h3>
      <div className="root-card">{productList}</div>
    </div>
  );
};

// Yse this function if you want to get static data or want to show page to
// any user that lands on this page.
export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/products");
  const data = await res.json();
  return {
    props: {
      products: data,
    },
  };
}

export default Home;
