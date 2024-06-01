import Menu from "../components/Menu";

// tipo grafia 
import {Roboto} from "next/font/google"

// meta datos 
export const metadata = {
  title: "Mi Tienda",
  description: "Esta es una web site",
  keywords: "tienda, online, ventas",
}

const font = Roboto({
  weight: ["300","400","500","700"],
  style: ["normal", "italic"],
  subsets: ["latin"]
})

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      {/* componente inicial y que haga uso de la tipografia*/}
      <body className={font.className}>
        <h1>Taller React</h1>
        <Menu/>
        {children}
      </body>
    </html>
  )
}
