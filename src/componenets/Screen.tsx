import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/App.scss'
interface Props {
    number: string;
}  
const Screen:React.FC<Props>=({number})=>{
    return(
        <form className="col-12">
            <input type="text" id="screen" value={number} className="themeOneBackgroundScreen formWidth form-control mb-2" readOnly />
        </form>
    );
}
export default Screen;