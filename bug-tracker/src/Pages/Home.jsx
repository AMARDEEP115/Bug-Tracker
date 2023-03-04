import { Heading } from "@chakra-ui/react";

const Home=()=>{
    const styleing={
        width:"30%",
        display:"block",
        margin:"auto",
        marginTop:"50px"
    };
    return <div>
        <div>
            <img src="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f41e.svg" style={styleing} alt="insect" />
            <Heading size="4xl">Bug Tracker</Heading>
        </div>
    </div>
};

export default Home;