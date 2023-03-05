import { Heading } from "@chakra-ui/react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import ReportBug from "../Components/ReportBug";
import "./DashBrd.css";
import SingleBug from "../Components/SingleBug";
import React, { useRef } from "react";

const Dashboard = () => {
    let [critical_Severity, setCritical_Severity] = React.useState(["abc", "def", "ghi"]);
    let [major_Severity, setMajor_Severity] = React.useState(["jkL", "mno", "pqr"]);
    let [medium_Severity, setMedium_Severity] = React.useState(["stu", "vwx", "yz1"]);
    let [low_Severity, setLow_Severity] = React.useState(["234", "567", "8910"]);
    const ref=useRef();

    const handleOnDragEnd=(result)=>{
        const { source , destination }=result;
        if(destination===null){
            return ;
        }
        if(destination.droppableId===source.droppableId && destination.index===source.index){
            return ;
        }

        let add;
        let critical=critical_Severity;
        let major=major_Severity;
        let medium=medium_Severity;
        let low=low_Severity;

        if(source.droppableId==="Critical_Severity"){
            add=critical[source.index];
            critical.splice(source.index,1);
        } else if(source.droppableId==="Major_Severity"){
            add=major[source.index];
            major.splice(source.index,1);
        } else if(source.droppableId==="Medium_Severity"){
            add=medium[source.index];
            medium.splice(source.index,1);
        }  else if(source.droppableId==="Low_Severity"){
            add=low[source.index];
            low.splice(source.index,1);
        }

        if(destination.droppableId==="Critical_Severity"){
            critical.splice(destination.index,0,add);
        } else if(destination.droppableId==="Major_Severity"){
            major.splice(destination.index,0,add);
        } else if(destination.droppableId==="Medium_Severity"){
            medium.splice(destination.index,0,add);
        }  else if(destination.droppableId==="Low_Severity"){
            low.splice(destination.index,0,add);
        }

        setCritical_Severity(critical);
        setMajor_Severity(major);
        setMedium_Severity(medium);
        setLow_Severity(low);
    }

    return <DragDropContext onDragEnd={handleOnDragEnd}>
        <div>
            <ReportBug />
            <div id="bug-lists">
                <Droppable droppableId="Critical_Severity">
                    {(provided,snapshot) => (
                        <div id={`Critical_Severity${snapshot.isDraggingOver ? "dragCritical_Severity" : ""}`} ref={provided.innerRef} {...provided.droppableProps}>
                            <Heading color="teal">CRITICAL</Heading>
                            {critical_Severity.map((el, index) => {
                                return <SingleBug key={index} title={el} index={index} />
                            })}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
                <Droppable droppableId="Major_Severity">
                    {(provided,snapshot) => (
                        <div id={`Major_Severity${snapshot.isDraggingOver ? "dragMajor_Severity" : ""}`} ref={provided.innerRef} {...provided.droppableProps}>
                            <Heading color="teal">MAJOR</Heading>
                            {major_Severity.map((el, index) => {
                                return <SingleBug key={index} title={el} index={index} />
                            })}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
                <Droppable droppableId="Medium_Severity">
                    {(provided,snapshot) => (
                        <div id={`Medium_Severity${snapshot.isDraggingOver ? "dragMedium_Severity" : ""}`} ref={provided.innerRef} {...provided.droppableProps}>
                            <Heading color="teal">MEDIUM</Heading>
                            {medium_Severity.map((el, index) => {
                                return <SingleBug key={index} title={el} index={index} />
                            })}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
                <Droppable droppableId="Low_Severity">
                    {(provided,snapshot) => (
                        <div id={`Low_Severity${snapshot.isDraggingOver ? "dragLow_Severity" : ""}`} ref={provided.innerRef} {...provided.droppableProps}>
                            <Heading color="teal">LOW</Heading>
                            {low_Severity.map((el, index) => {
                                return <SingleBug key={index} title={el} index={index} />
                            })}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </div>
        </div>
    </DragDropContext>
};

export default Dashboard;