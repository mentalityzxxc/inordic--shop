import { Link } from "react-router-dom";

// Импортируем общие компоненты - шапку и подвал сайта
import { Header, Footer } from '../../components'

/**
 * Компонент для отображения главной страницы
 */
export function Main(){
    return (
        <main>
            <Header />
                Контент главной страницы
            <Footer />
        </main> 
    )
}