import Link from "next/link"
import "@/app/styles/styleSubMenu.css"

export default function Submenu({ categorys }) {
    return (
        <ul className="subMenu">
            {
                categorys.map((category,i) => (
                    <li className="subMenu__item" key={i}>
                        <Link className="link" category={category} href={`/category/${category}`}>{category}</Link>
                    </li>
                ))
            }
        </ul>
    )
}
// `/${category}`
