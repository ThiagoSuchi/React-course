import styles from "./CarDetails.module.css";

const CarDetails = ({brand, color, age, km}) => {

  return (
    <div className={styles.tabCars}>
        <h2>{brand}</h2>
        <p><span>Cor</span> - {color}</p>
        <p><span>Ano</span>  - {age}</p>
        <p><span>KM</span> - {km}</p>
    </div>
   );
};

export default CarDetails;
