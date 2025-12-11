import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareUpwork } from "react-icons/fa6";
import {DarkMode} from "./ModeHandler"
import MyPhoto from './photos/MyPhoto.jpg'




const [LinkedIn,Upwork,Github] = ["","https://www.upwork.com/freelancers/~01984c0a71ff9e2d88","https://github.com/MoustafaKhatab"]

function _Header(){
    return(
        <div className="flex justify-between items-center px-2">
            <img  className="cursor-pointer w-16 h-16 rounded-full object-cover max-md:w-14 max-md:h-14" src={MyPhoto} alt="My Photo" />
            <div className=" flex justify-between gap-5 text-2xl text-zinc-950 items-center dark:text-zinc-100 z-10">
                <i className="hover:text-blue-400 cursor-pointer"><a href={LinkedIn} target='_blank'><FaLinkedin  /></a></i>
                <i className="hover:text-green-400 cursor-pointer"><a href={Upwork} target='_blank' ><FaSquareUpwork /></a></i>
                <i className="hover:text-red-400 cursor-pointer"><a href={Github} target='_blank' ><FaGithubSquare /></a></i>
                <DarkMode/>
            </div>
        </div>
    )
}

export {_Header}