import Link from "next/link";

export default function NotFound() {
    return (
        <section>
            <h1>404</h1>
            <p>Pagina No Encontrada!!!</p>
            <Link href="/">Volver al Inicio</Link>
        </section>
    );
}