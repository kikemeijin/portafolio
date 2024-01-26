import Image from "next/image";
import styles from "./page.module.css";
import MiPerfil from "./components/perfil";
import Caja2 from "./components/caja2";
import Caja3 from "./components/caja3";
import Caja4 from "./components/caja4";
import Caja5 from "./components/caja5";
export default function Home() {
  return (
    <div className={styles.main}>
      <MiPerfil/>
      <Caja2/>
      <Caja3/>
      <Caja4/>
      <Caja5/>
    </div>
    
  );
}
