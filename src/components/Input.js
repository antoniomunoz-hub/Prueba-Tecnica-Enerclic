import '../styles/input.css'

// Componente creado para la limpieza en el formulario 

const Input = ({label, ...rest}) => {
    return (
        <div className= "field">
            <label>{label}</label>
            <input {...rest}/>
        </div>
    )
}

export default Input