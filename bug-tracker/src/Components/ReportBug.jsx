import {Modal,ModalOverlay,ModalContent,ModalHeader,ModalFooter,ModalBody,ModalCloseButton,Button,useDisclosure,Input,Text} from '@chakra-ui/react'

const ReportBug=()=>{
    const { isOpen, onOpen, onClose } = useDisclosure();
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
                <select mt="20px">
                    <option>--Select--</option>
                    <option value="Critical_Severity">Critical Severity</option>
                    <option value="Major_Severity">Major Severity</option>
                    <option value="Medium_Severity">Medium Severity</option>
                    <option value="Low_Severity">Low Severity</option>
                </select>
                <Input placeholder='Enter Bug' size='lg'  mt="20px"/>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                ADD
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default ReportBug;