import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/App.scss'
import { updateTheme } from './functions/updateTheme';
const Header=()=>{
    return (
        <div className="d-flex justify-content-between align-items-center">
        <div className="ps-2 h4 themeOneHeader" id="head">calc</div>
        <div className="pe-2 d-flex jusstify-content-between align-items-center">
          <div className="pe-2 text-uppercase textSize themeOneIntro" id="themeIntro">Theme</div>
          <div className="">
            <div id="themeNumber" className="px-1 themeOneThemeNumber serial-theme d-flex justify-content-between align-items-center">
              <span className="">1</span>
              <span className="">2</span>
              <span className="">3</span>
            </div>
            <div id="circle" className="labelDesign one circleOne themeOneBackgroundScreen" onClick={(e)=>updateTheme(document.querySelector(".labelDesign"))}></div>
          </div>
        </div>
      </div>
    );
}
export default Header;