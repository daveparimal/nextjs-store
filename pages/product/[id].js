import { useRouter } from "next/router";

const Product = (props) => {
  const product = props.product[0];
  const router = useRouter();
  if (router.isFallback) {
    return <h4>Loading ... </h4>;
  }
  return (
    <div>
      <h1> {product.name} </h1>
    </div>
  );
};

// export async function getServerSideProps({ params: { id } }) {
//   const res = await fetch(`http://localhost:3000/api/product/${id}`);
//   const data = await res.json();

//   return {
//     props: {
//       product: data,
//     },
//   };
// }

// For faster rendering we use getStaticProps. Since this page is same for all.
// So we will use the below to make the page ready at build time. And go to server everytime for this page.

export async function getStaticProps({ params: { id } }) {
  const res = await fetch(`http://localhost:3000/api/product/${id}`);
  const data = await res.json();

  return {
    props: {
      product: data,
    },
  };
}

// Get static paths will use the  getServerSideProps to get the data of  ID's at build time, make API calls and keep static pages ready in build.
// If fallback is true, then if a certain page is not available, then it will fetch from backend.
// If fallback is false, then you will get 404 error page.
export async function getStaticPaths() {
  // fetch all the products from database to build static pages for all products.
  // In practical scenarios sometime when there are a lot of products, this is not a good approach.
  // Use server side rendering instead.

  const res = await fetch("http://localhost:3000/api/products");
  const data = await res.json();

  const paths = data.map((post) => ({
    params: { id: post._id },
  }));

  // If you wan to create static pages only for some products, you can do it like this.
  // const paths = [{ params: { id: "6159939c0a245f93ad5719d9" } }];

  return {
    paths,
    fallback: false,
  };
}

export default Product;
