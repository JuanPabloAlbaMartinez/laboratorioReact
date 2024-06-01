
export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <title>My Page</title>
      <body>
        <nav>
          <h1>Tienda</h1>
        </nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Galery</a>
          </li>
          <li>
            <a href="/store">Store</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
        {children}
      </body>
    </html>
  )
}
