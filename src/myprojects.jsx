const API = 'https://api.github.com/users/MoustafaKhatab/repos';
import { useState,useEffect } from "react";


function ReposList() {

    const [Repos,SetRepos] = useState([]);
    const [error,SetError] = useState(null);
    
    useEffect(()=>{

        const FetchData = async (api) =>{
            try{
                const response = await fetch(api);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const Data = await response.json();
                SetRepos(Data)

            }catch(E){
                SetError(E);
            }
        }

        
        FetchData(API)
    },[])


    if(error){
        return ( <div className="w-full flex justify-center mt-20 text-5xl text-zinc-500"><p>Faild To Fetch Projects!!</p></div>);
    }
    //server side
    const FilterdRepos = Repos.filter(R => R.description && R.description.includes(" front-end "));
    //const FilterdReposServer = Repos.filter(R => R.description && R.description.includes(" backend "));

    function styleAnimation(time){
      return({animationDuration: `${time}s`})
    }
    return(
        <div className="flex flex-col justify-center items-center mt-20 lg:w-full ">
        <ul className="flex relative flex-col justify-between items-center gap-5 lg:w-[90%] sm:w-full max-sm:w-full bg-zinc-50 lg:px-20 py-20 ring-0 ring-pink-500/20 shadow-lg rounded-md md:px-10 sm:px-10 max-sm:px-10 min-h-[400px] overflow-hidden dark:bg-zinc-950 dark:ring-1">
        <div className="absolute -left-[30%] -top-5 -rotate-12  w-[900px] h-[300px] bg-pink-950/20 rounded-full blur-3xl dark:bg-sky-950"></div>
        <div className="z-20 absolute animate-myBounce duration-1000  -rotate-45 right-[15%] w-[130px] h-[150px] top-[10%] rounded-full blur-2xl dark:bg-sky-700/60" style={styleAnimation(7)}></div>
        <div className=" absolute animate-myBounce duration-1000 bg-pink-900/50 -rotate-45 right-[15%] w-[100px] h-[100px] top-[10%] rounded-full blur-3xl " style={styleAnimation(10)}></div>
        <div className="z-30 absolute animate-myBounce duration-1000 bg-pink-950/50 -rotate-90 right-[12%] w-[130px] h-[150px] top-[10%] rounded-full blur-3xl dark:blur-2xl dark:bg-pink-900" style={styleAnimation(9)}></div>
                
          {FilterdRepos.map((Repos) => (
            <li
              key={Repos.id}
              className="w-[100%] p-2 z-50"
              >
              <div className="w-[100%] h-full lg:flex lg:flex-row lg:justify-between lg:items-center gap-5 md:flex-col md:items-start md:justify-center sm:block max-sm:block">
                <a
                  className="min-w-40 text-1xl font-semibold text-zinc-950 hover:text-pink-500 transition-all duration-300 dark:text-zinc-50" 
                  href={Repos.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {(Repos.name).toUpperCase()}
                </a>
                <div className="max-sm:mt-3  p-1 w-[50%]">
                <p className="w-full mb-2 lg:block sm:max-w-[60%] max-sm:max-w-[75%] sm:text-lg text-zinc-950 dark:dark:text-zinc-50">{Repos.description}</p>
                  {Repos.description.includes("server side") ? (
                    [{ id: 1, title: "Node.js" }, { id: 2, title: "MongoDB" }, { id: 3, title: "Express" }].map((ele) => (
                      <span
                        key={ele.id}
                        className="bg-green-400/5 ring-1 ring-green-600/80 py-1 px-2 rounded-md text-zinc-950 text-[13px] mr-3 dark:text-zinc-50"
                      >
                        {ele.title}
                      </span>
                    ))
                  ) : Repos.description.includes("front-end") ? (
                    [{ id: 4, title: "HTML" }, { id: 5, title: "CSS" }, { id: 6, title: "JS" }].map((ele) => (
                      <span
                        key={ele.id}
                        className="bg-violet-400/5 ring-1 ring-violet-600/80 py-1 px-2 rounded-md text-zinc-950 text-[13px] mr-3 dark:text-zinc-50"
                      >
                        {ele.title}
                      </span>
                    ))
                  ) : null}
                </div>
                </div>
            </li>
          ))}
        </ul>
      </div>
      
        
    )

}

export {ReposList}
