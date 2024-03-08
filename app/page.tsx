import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="flex flex-col gap-7 border-8 border-stone-200	rounded-xl">
      <div className="flex flex-col gap-7">
        <h1 className="text-black text-center font-bold text-3xl">C O L O M B IA</h1>
      </div>
      <div className="flex flex-raw gap-4 pl-8 ">
        <img src="https://i.pinimg.com/originals/37/8a/27/378a270e775265622393da8c0527417e.jpg" alt="foto" width={200} height={200} />
      <div className="flex flex-col gap-4">
        <div>
          <h1 className="font-bold text-xl font-mono	">ANDRES PEDRAZA</h1>
          <h1 className="font-bold text-xs ">NAME</h1>
        </div>
        <div>
          <h1 className="font-bold text-xl font-mono	">COLOMBIANO</h1>
          <h1 className="font-bold text-xs ">NATIOANALITY</h1>
        </div>
        <div>
          <h1 className="font-bold text-xl font-mono	">23 JUNIO</h1>
          <h1 className="font-bold text-xs">DATE OF ISSUE</h1>
        </div>
        <div>
          <h1 className="font-bold text-xl font-mono	">COLOMBIA</h1>
          <h1 className="font-bold text-xs">AUTHORITY</h1>
        </div>       
      </div> 
        
      </div>
      
      
      
    </div>
    
  )
}