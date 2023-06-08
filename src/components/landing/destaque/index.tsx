import Area from "../comum/Area";
import Slogan from "./Slogan";

export default function Destaque(){
    return (
        <Area>
            <div className='flex items-center h-[500px]'>
                <Slogan /> 
            </div>
        </Area>
    )
}