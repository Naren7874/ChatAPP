import { auth } from '../../../lib/firebase'
import './logout.css'
const  LogOut = () =>{
    return (<>
    <button className="logout" onClick={()=>auth.signOut()}>LogOut</button>
    </>)
}
export default LogOut