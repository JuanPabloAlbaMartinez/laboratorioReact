// en la carpeta components pueden ir todos los componentes que se deben renderizar mientras que app, las paginas a renderizar (esto funciona bien para proyectos grandes)

import Navbar from "../components/Navbar"

import {Roboto} from "next/font/google"

export const metadata = {
  title: "Mi tienda - HomePage",
  description: "Esta es una web site",
  keywords: "tienda, online, ventas",
}

const roboto = Roboto({
  weight: ["300","400","500","700"],
  style: ["normal", "italic"],
  subsets: ["latin"]
})

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={roboto.className}>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
