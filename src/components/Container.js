import '../styles/container.css'

//Componente simple creado simplemente para englobar en un div con sus estilos al form

const Container = ({children}) =>{
    return(
        <div className="container">
            {children}
        </div>
    )
}

export default Container