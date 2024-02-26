// import { getServerSession } from "next-auth";
import { authoptions } from "../../../library/auth";

  
 const Dashboard= async({}) => {
    // const session = await getServerSession(authoptions)
    return (
        <div>
            {/* {JSON.stringify(session)} */}
            <h1>Dashboard</h1>
            <button>Hello</button>
        </div>
    );
 }
  
 export default Dashboard ;