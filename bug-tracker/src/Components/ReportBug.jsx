import {Modal,ModalOverlay,ModalContent,ModalHeader,ModalFooter,ModalBody,ModalCloseButton,Button,useDisclosure,Input,Text} from '@chakra-ui/react'
import React from 'react';

const initalData={
  severity:"",
  bug:""
};

const ReportBug=()=>{
    const [data,setData]=React.useState(initalData);
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleAddBug=()=>{
      console.log(data);
      // fetch("",{
      //   method:"POST",
      //   body:JSON.stringify(data),
      //   headers:{
      //     "Content-Type":"application/json"
      //   }
      // });
      onClose();
    }

    return (
        <>
          <Button onClick={onOpen} bgColor="#805AD5" color="white" mt="20px">Report Bug</Button>
          <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                  <ModalHeader>ADD BUG</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                        <Text mb="20px">Select Severity</Text>
                        <select style={{border:"1px solid rgb(220, 220, 220)",height:"40px",borderRadius:"5px"}} onChange={(e)=>setData({...data,severity:e.target.value})}>
                            <option>--Select--</option>
                            <option value="Critical_Severity">Critical Severity</option>
                            <option value="Major_Severity">Major Severity</option>
                            <option value="Medium_Severity">Medium Severity</option>
                            <option value="Low_Severity">Low Severity</option>
                        </select>
                        <Input placeholder='Enter Bug' size='lg'  mt="20px" onChange={(e)=>setData({...data,bug:e.target.value})}/>
                    </ModalBody>
          
                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={handleAddBug}>ADD</Button>
                  </ModalFooter>
              </ModalContent>
          </Modal>
        </>
    );
}

export default ReportBug;