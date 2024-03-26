import AboutMe from "./AboutMe"
import Educational from "./Educational"
import Image from "./Image"
import Name from "./Name"

function Background(){
    return(
        <div className="background">
            <div className="left">
                <AboutMe/>
                <Educational/>
            </div>
            <div className="right">
                <Image/>
                <Name/>
            </div>
        </div>
    )
}

export default Background