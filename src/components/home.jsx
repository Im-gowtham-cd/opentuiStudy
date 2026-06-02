import { TextAttributes } from "@opentui/core"

export function Home() {
    return (
        <box backgroundColor="yellow" height="90%" width="100%" flexDirection="row">
            <box borderStyle="single" borderColor="black" width="100%" height="100%" alignItems="center" flexDirection="row">
                <box width="60%" alignItems="center" height="100%" borderStyle="single">
                    <box width="100%" paddingTop={2}>
                        <ascii-font font="block" text="Im , GoTM...!" color="black" />
                    </box>
                    <box width="100%" height="10%" paddingTop={2}>
                        <text fg="black" attributes={TextAttributes.DIM} >Full-Stack Developer passionate about building scalable web applications, developer tools, and impactful digital products using Vue , Next.js, Spring Boot, and the MERN stack.</text>
                    </box>
                </box>
                <box width="40%" alignItems="center" height="100%" borderStyle="single">
                </box>
            </box>
        </box>
    )
}