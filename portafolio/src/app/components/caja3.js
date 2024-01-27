import style from "./caja3.module.css";
function Caja3(){
    
    return(
    <div className={style.division}>
            <div className={style.buttons}>
            
                <button className={style["btn-primary"]} onclick="download()">
                    <div className={style["btn-content"]}>
                        <p>Download CV</p>
                        <img src="download.svg" alt="arrow" className={style["btn-primary-img"]}/>
                        
                    </div>
                </button>
                <a className={style["btn-secondary"]} href="https://enriquereynaldo39@gmail.com">
                    <div className={style["btn-content"]}>
                        <p>Contact me</p>
                    </div>
                </a>
            
            </div>
            <div className={style.tabs}>
                <button className={style["tabs-background-item-active"]}>
                    <p className={style["tabs-background-item-text"]}>Portafolio</p>
                </button>
                <button className={style["tabs-background-item"]}>
                    <p className={style["tabs-background-item-text"]}>Skills</p>
                </button>
            </div>
    </div>
        
    );
}
export default Caja3;