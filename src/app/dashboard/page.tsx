import { FC } from "react" 
 
 interface DashboardProps {}
  
 const Dashboard : FC<DashboardProps> = ({}) => {
    return (
        <div>
            <h1>Dashboard</h1>
            <button>Hello</button>
        </div>
    );
 }
  
 export default Dashboard ;