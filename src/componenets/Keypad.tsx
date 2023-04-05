import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/App.scss'
interface Props {
    updateNumber:(event:String) =>void;
    deleteNumber:(event:Number)=> void;
    showResult:()=>void
}  
const Keypad:React.FC<Props>=({updateNumber,deleteNumber,showResult})=>{
    return(
        <div id="keypad" className="row themeOneBackgroundKeyPad rounded-3 justify-content-center pt-2">
        <div className="col-3">
          <button id="primary" className="btn themeOnePrimaryKeys btnwidth mb-2" onClick={()=>updateNumber("7")}>7</button>
        </div>
        <div className="col-3">
          <button id="primary" className="btn themeOnePrimaryKeys btnwidth mb-2" onClick={()=>updateNumber("8")}>8</button>
        </div>
        <div className="col-3">
          <button id="primary" className="btn themeOnePrimaryKeys  btnwidth mb-2" onClick={()=>updateNumber("9")}>9</button>
        </div>
        <div className="col-3">
          <button  id="reset" className="btn themeOneDangerKeys btnwidth mb-2 " onClick={()=>deleteNumber(1)}>DEL</button>
        </div>
        <div className="col-3">
          <button id="primary" className="btn themeOnePrimaryKeys  btnwidth mb-2" onClick={()=>updateNumber("4")}>4</button>
        </div>
        <div className="col-3">
          <button id="primary" className="btn themeOnePrimaryKeys btnwidth mb-2" onClick={()=>updateNumber("5")}>5</button>
        </div>
        <div className="col-3">
          <button id="primary" className="btn themeOnePrimaryKeys  btnwidth mb-2" onClick={()=>updateNumber("6")}>6</button>
        </div>
        <div className="col-3">
          <button id="primary" className="btn themeOnePrimaryKeys  btnwidth mb-2 " onClick={()=>updateNumber("+")}>+</button>
        </div>
        <div className="col-3">
          <button id="primary" className="btn themeOnePrimaryKeys  btnwidth mb-2 " onClick={()=>updateNumber("1")}>1</button>
        </div>
        <div className="col-3">
          <button id="primary" className="btn themeOnePrimaryKeys  btnwidth mb-2" onClick={()=>updateNumber("2")}>2</button>
        </div>
        <div className="col-3">
          <button id="primary" className="btn themeOnePrimaryKeys  btnwidth mb-2" onClick={()=>updateNumber("3")}>3</button>
        </div>
        <div className="col-3">
          <button id="primary" className="btn themeOnePrimaryKeys btnwidth mb-2" onClick={()=>updateNumber("-")}>-</button>
        </div>
        <div className="col-3">
          <button id="primary" className="btn themeOnePrimaryKeys  btnwidth mb-2" onClick={()=>updateNumber(".")}>.</button>
        </div>
        <div className="col-3">
          <button id="primary" className="btn themeOnePrimaryKeys  btnwidth mb-2 " onClick={()=>updateNumber("0")}>0</button>
        </div>
        <div className="col-3">
          <button id="primary" className="btn themeOnePrimaryKeys btnwidth mb-2" onClick={()=>updateNumber("/")}>/</button>
        </div>
        <div className="col-3">
          <button id="primary" className="btn themeOnePrimaryKeys btnwidth mb-2" onClick={()=>updateNumber("*")}>*</button>
        </div>
        <div className="col-3">
          <button id="reset" className="btn themeOneDangerKeys w-100 mb-2" onClick={()=>updateNumber("(")}>(</button>
        </div>
        <div className="col-3">
          <button id="reset" className="btn themeOneDangerKeys w-100 mb-2" onClick={()=>updateNumber(")")}>)</button>
        </div>
        <div className="col-3">
          <button id="reset" className="btn themeOneDangerKeys w-100 mb-2" onClick={()=>deleteNumber(2)}>RESET</button>
        </div>
        <div className="col-3">
          <button id="result" className="btn themeOneResultKeys w-100 mb-2" onClick={()=>showResult()}>=</button>
        </div>
      </div>
    );
}
export default Keypad;