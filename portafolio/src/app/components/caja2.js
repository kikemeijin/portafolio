"use client"
import style from "./caja2.module.css" ;
function Caja2(){
    return(
        <div className={style.facts}>
                <div className={style["fact-item"]}>
                    <h2>7</h2>
                    <p>Years of work experience</p>
                </div>
                <div className={style["fact-item"]}>
                    <h2>50+</h2>
                    <p>Completed projects</p>
                </div>
                <div className={style["fact-item"]}>
                    <h2>20+</h2>
                    <p>Satisfied customers</p>
                </div>
            </div>
    );
}
export default Caja2;
