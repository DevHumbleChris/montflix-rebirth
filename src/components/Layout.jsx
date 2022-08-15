import Navbar from './Navbar'
export default function Layout({ children }) {
    return (
        <>
            <Navbar/>
            <section>
                { children }
            </section>
        </>
    )
}