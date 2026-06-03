export function About(){
    return(
        <box backgroundColor="#0084ffff" height="100%" width="100%">
            <ascii-font font="block" text="About GoTM" color="black" marginLeft={13} marginTop={10}/>
            <text marginLeft={13} fg="black" width="90%" marginTop={5}>I'm a Computer Science and Engineering student with a passion for full-stack development and software engineering. I enjoy transforming ideas into scalable, user-friendly applications that solve real-world problems.</text>
            <text marginLeft={13} fg="black" width="90%" marginTop={2}>My experience spans modern frontend technologies like React and Next.js, backend development with Node.js and Spring Boot, and database management using MongoDB, PostgreSQL, and MySQL. I focus on writing clean, maintainable code and continuously improving my problem-solving and system design skills.</text>
            <text marginLeft={13} fg="black" width="90%" marginTop={2}>Beyond development, I enjoy exploring new technologies, contributing to projects, and tackling challenging coding problems that help me grow as an engineer.</text>
        </box>
    )
}