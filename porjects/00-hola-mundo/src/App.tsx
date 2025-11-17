import { Header } from "./componentes/header"
import { Hero_logo } from "./componentes/hero_logo"
import { Hero_obras } from "./componentes/hero_obras"
export function App (){
    return(
        <main >
            <section className="bg-Navy-950 p-5">
                <Header />
            </section>
            <section className="relative">
                <Hero_logo />
                <Hero_obras />
            </section>
        </main>
    )
}