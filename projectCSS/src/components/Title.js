import styles from "./Title.module.css"

const Title = () => {
  return (
    <div>
        {/* Scoped - limitar a aplicação de estilos, lógica ou estado a um componente específico. */}
       <h1 className={styles.my_title}>My title</h1>
    </div>
  )
}

export default Title