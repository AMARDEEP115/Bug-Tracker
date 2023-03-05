import { Text } from "@chakra-ui/react";
import { GrEdit } from "react-icons/gr";
import { RiDeleteBinLine } from "react-icons/ri";
import { Draggable } from "react-beautiful-dnd";
import { useRef } from "react";

const SingleBug = ({ title, index }) => {
    const ref=useRef();
    return <Draggable draggableId={title+index.toString()} index={index}>
        {(provided) => (
            <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                <Text>{title}</Text>
                <div>
                    <GrEdit size="20px" onClick={() => {
                        alert(`Edit ${index + 1}`);
                    }} />
                    <RiDeleteBinLine size="20px" onClick={() => {
                        alert(`Delete ${index + 1}`);
                    }} />
                </div>
            </div>
        )}
    </Draggable>
};

export default SingleBug;