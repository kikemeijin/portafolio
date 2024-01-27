import Image from "next/image";
import styles from "./page.module.css";
import MiPerfil from "./components/perfil";
import Caja2 from "./components/caja2";
import Caja3 from "./components/caja3";

import Caja5 from "./components/caja5";
import Download from "./components/download";
export default function Home() {
  return (
    <div className={styles.main}>
      <div>
        <MiPerfil/>
      </div>
      <div>
        <Caja2/>
      </div>
      <div>
        <Caja3/>
      </div>
      <div>
        <Caja5/>
      </div>
      
    </div>

  );
}
