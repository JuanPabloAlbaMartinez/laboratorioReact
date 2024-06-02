import Menu from "../components/Menu"

import "./styles/globalStyle.css"

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
        <h1 className="title">Taller React</h1>
        {/* menu de las paginas  */}
        <Menu/>
        {/* contenido de la pagina  */}
        {children}
        
        
      </body>
    </html>
  )
}
