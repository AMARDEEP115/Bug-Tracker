import { Heading } from "@chakra-ui/react";
import React from "react";

const initialStyle = {
    width: "10%",
    display: "block",
    marginTop: "30vh",
    marginLeft: "45vw"
};

const Home = () => {
    const [styleing, setStyleing] = React.useState(initialStyle);
    let top = ["2vh", "30vh", "60vh"];
    let margin = ["", "45vw", "80vw"];

    const handleEnter = () => {
        let m = styleing.marginLeft;
        let t = styleing.marginTop;
        let x = Math.floor(Math.random() * 3);
        let y = Math.floor(Math.random() * 3);
        if (m === margin[x]) {
            x++;
            setStyleing({ ...styleing, marginTop: top[y], marginLeft: margin[x] });
        } else if (t === top[y]) {
            y++;
            setStyleing({ ...styleing, marginTop: top[y], marginLeft: margin[x] });
        } else {
            setStyleing({ ...styleing, marginTop: top[y], marginLeft: margin[x] });
        }
    }
    return <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between",height:"90vh"}}>
        <div>
            <img src="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f41e.svg" style={styleing} alt="insect" onMouseEnter={handleEnter} onClick={(e)=>{
                e.target.src="https://media.tenor.com/iPV_n2dDtyIAAAAM/ladybug-love.gif";
            }}/>
        </div>
        <div>
            <p style={{ color: "teal", fontSize: "20px", fontWeight: "600" }}>Catch the bug if you can</p>
            <Heading size="4xl">Bug Tracker</Heading>
        </div>
    </div>
};

export default Home;