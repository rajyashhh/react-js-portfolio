import { OrbitingCircles } from "./OrbitsCircles";


export function Frameworks() {
    const skills = [
        "reactjs",
        "css3",
        "git",
        "github",
        "html",
        "javascript",
        "tailwindcss",
        "vitejs",
        "fastapi",
        "Pandas",
        "Pinecone", 
        "Cohere",
        "Express", 
        "MongoDB",
        "jwt",
        "vercel",
        "daisyui",
        "tensorflow",
        "python",
        "keras",
        "PyTorch", 
        "scikit-learn",
        "GSAP",
        "docker",
        "firebase",
        "Postman"
    ]
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center ">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index)=>(
            <Icon key={index} src={`assets/logos/${skill}.svg`}/>
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
      {skills.reverse().map((skill, index)=>(
            <Icon key={index} src={`assets/logos/${skill}.svg`}/>
        ))}
      </OrbitingCircles>
    </div>
  );
}


const Icon=({src})=>(
    <img src={src} className="rounded-sm hover:scale-110 duration-200"/>
)