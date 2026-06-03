import { Home , About } from '../components/index'

export default function Route({route}:{route:string}){
    switch(route){
        case "about" : return <About />
        default:
            return <Home />
    }
}