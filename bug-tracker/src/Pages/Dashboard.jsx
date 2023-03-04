import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { resetServerContext } from 'react-beautiful-dnd';
import ReportBug from "../Components/ReportBug";
import "./DashBrd.css";

const Dashboard=()=>{
    return <div>
        <ReportBug/>
        <div style={{display:"flex"}}>
            <div id="Critical_Severity"></div>
            <div id="Major_Severity"></div>
            <div id="Medium_Severity"></div>
            <div id="Low_Severity"></div>
        </div>
    </div>
};

export default Dashboard;