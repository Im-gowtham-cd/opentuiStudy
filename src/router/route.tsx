import { Home , About , Project } from '../components/index'

export default function Route({route}:{route:string}){
    switch(route){
        case "about" : return <About />
        case "project" : return <Project />
        default:
            return <Home />
    }
}