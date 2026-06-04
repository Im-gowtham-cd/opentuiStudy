import { TextAttributes } from "@opentui/core"
import { useKeyboard } from "@opentui/react" 
import { spawn } from "bun" 

export function Home() {
    useKeyboard((key)=>{
        if(key.name == "o"){
            spawn(['cmd','/c','start','https://portiis.pages.dev/Im-gowtham-cd'])
        }
    })
    return (
        <box backgroundColor="yellow" height="90%" width="100%" flexDirection="row">
            <box width="100%" height="100%" alignItems="center" flexDirection="row">
                <box width="60%" alignItems="center" height="100%" flexDirection="column" paddingLeft={13}>
                    <box width="100%" marginTop={10} justifyContent="center">
                        <ascii-font font="block" text="Im , GoTM C D...!" color="black" />
                    </box>
                    <box width="100%" paddingTop={2}>
                        <text fg="black" attributes={TextAttributes.DIM} >Full-Stack Developer passionate about building scalable web applications, developer tools, and impactful digital products using Vue , Next.js, Spring Boot, and the MERN stack.</text>
                    </box>
                    <text fg="yellow" bg="black" width="100%" marginTop={2}><a href="https://drive.google.com/file/d/1GRA7px064CmkX7BCCcIK2VVZQyqTSQ0g/view?usp=sharing">{"   Resume   "}</a></text>
                    <box width="100%" height="10%" marginTop={4}>
                        <ascii-font font="tiny" text="What GoTM Do ?" color="black" />
                        <box height={15}>
                            <text fg="black" attributes={TextAttributes.BOLD} marginTop={2}>Full-Stack Web Development</text>
                            <text fg="black" attributes={TextAttributes.DIM}>Building responsive and scalable web applications from frontend to backend.</text>
                            <text fg="black" attributes={TextAttributes.BOLD} marginTop={1}>Backend Engineering</text>
                            <text fg="black" attributes={TextAttributes.DIM}>Designing secure APIs, authentication systems, and efficient server-side architectures.</text>
                            <text fg="black" attributes={TextAttributes.BOLD} marginTop={1}>Developer Tools</text>
                            <text fg="black" attributes={TextAttributes.DIM}>Creating tools that improve developer productivity and simplify workflows.</text>
                            <text fg="black" attributes={TextAttributes.BOLD} marginTop={1}>Problem Solving</text>
                            <text fg="black" attributes={TextAttributes.DIM}>Applying strong analytical thinking and programming skills to solve complex challenges.</text>
                        </box>
                    </box>
                </box>
                <box width="37%" alignItems="center" height="100%" paddingLeft="10%" >
                    <box marginTop={10} width="100%" backgroundColor="black" padding={3}>
                        <text fg="yellow" attributes={TextAttributes.BOLD}>{"{"}</text>
                        <text fg="yellow" marginTop={1}>{`  PersonalData: {`}</text>
                        <text fg="yellow" marginTop={1}>{`        "name" : "Gowtham C D",`}</text>
                        <text fg="yellow">{`        "age" : "20",`}</text>
                        <text fg="yellow">{`        "email" : "gowthamcdstudies@gmail.com",`}</text>
                        <text fg="yellow">{`        "role" : "FullStack",`}</text>
                        <text fg="yellow">{`        "location" : "IN",`}</text>
                        <text fg="yellow">{`  },`}</text>
                        <text fg="yellow" marginTop={1}>{`  SocialLink: {`}</text>
                        <text fg="yellow" marginTop={1}>{`        "github" : `}<a href="https://github.com/Im-gowtham-cd">{`"github.com/Im-gowtham-cd",`}</a></text>
                        <text fg="yellow">{`        "linkedin" : `}<a href="https://www.linkedin.com/in/im-gowtham-cd/">{`"linkedin.com/im-gowtham-cd",`}</a></text>
                        <text fg="yellow">{`        "email" : "gowthamcdstudies@gmail.com",`}</text>
                        <text fg="yellow">{`        "mobile" : "9003538951",`}</text>
                        <text fg="yellow">{`  }`}</text>
                        <text fg="yellow" attributes={TextAttributes.BOLD}>{"}"}</text>
                    </box>
                    <box marginTop={2}>
                        <text fg="yellow" bg="black" width="100%"><a href="https://portiis.pages.dev/Im-gowtham-cd">{"            [o] portiis.pages.dev/Im-gowtham-cd              "}</a></text>
                    </box>
                </box>
            </box>
        </box>
    )
}