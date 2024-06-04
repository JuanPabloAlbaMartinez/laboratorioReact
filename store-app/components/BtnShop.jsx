import { addShopCar } from "@/app/shopCar/shopingCart";

export default function BtnShop({ product }) {
    return (
        <button className="product__btn" onClick={() => addShopCar(product)}>
            Comprar
        </button>
    );
}

