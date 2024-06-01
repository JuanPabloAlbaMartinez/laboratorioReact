"use client"
import Link from "next/link";


export default async function ProductPage({ params }) {
  console.log(params);

  const response = await fetch(`'https://fakestoreapi.com/products'${params.id}`);
  const producto = await response.json();

  return (
    <>
      <div className={`d-flex justify--center ${styles.productPageContainer}`}>
        <div className={`card my-5 py-5 ${styles.productCard}`}>
          <div className="row g-0">
            <div className={`col-md-6 ${styles.productImageContainer}`}>
              <img src={producto.image} className={`img-fluid rounded-start ${styles.productImage}`} alt={producto.title} />
            </div>
            <div className={`col-md-6 ${styles.productDetails}`}>
              <div className={`card-body ${styles.productBody}`}>
                <h5 className={`card-title ${styles.productTitle}`}>{producto.title}</h5>
                <p className={`card-text ${styles.productDescription}`}>{producto.description}</p>
                <p className={`card-text ${styles.productPrice}`}>${producto.price}</p>
                <Link href="/" legacyBehavior>
                  <button className={`btn btn-primary ${styles.backButton}`}>Regresar</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
