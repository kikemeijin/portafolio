import style from "./caja3.module.css";
function Caja3(){
    
    return(
        <div className={style.buttons}>
                <button class="btn-primary" onclick="download()">
                    <div class="btn-content">
                        <p>Download CV</p>
                        <img src="download.svg" alt="arrow" class="btn-primary-img"/>
                    </div>
                </button>
                <a class="btn-secondary" href="mailto:contact@me.com">
                    <div class="btn-content">
                        <p>Contact me</p>
                    </div>
                </a>
        </div>
    );
}
export default Caja3;