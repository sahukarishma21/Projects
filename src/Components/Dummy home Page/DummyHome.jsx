import style from './DummyHome.module.css'

import LeftSidebar from './LeftSidebar/LeftSidebar';



export default function DummyHome(){



    return(
        <>
            <section className={style.dummupage}>
                <footer>
                        <div>
<LeftSidebar />
                        </div>
                </footer>
            </section>
        </>
    )
}
