import Datas from '../Informations/Data.js'
import style from '../Styles/style.module.css';

const React = ({Header,Sub,Child}) => {
  return (
    <>
    <div className={style.Childs}>

      <div className={style.text}>
      <h1>{Header}</h1>
        <p>{Sub}</p>
      </div>
        
        <div className={style.Container}>
           
         {/*for Maping///*/}
        <div className={style.toChildren}>

        <h2 style={{color:"aliceblue" }}>{Child}</h2>
         {Datas.map(elements =>{
           return(
            <div key={elements.id} className={style.maping}>
                {/*/////////*/}
               
                {elements.id === 1 && 
                 <div className={style.secret}>
               
                <h2>{elements.title}</h2>
                 <h5>{elements.description1}</h5>
                 <h5>{elements.description2}</h5>
                 <h5>{elements.description3}</h5>
                 </div>
                 }

                {/*/////////*/}

                {elements.id === 2 && 
                 <div className={style.secret}>
                <h2>{elements.title}</h2>
                <h5>{elements.description1}</h5>
                 <h5>{elements.description2}</h5>
                 <h5>{elements.description3}</h5>
                 </div>
                 }

           {elements.id === 3 && 
                 <div className={style.secret}>               
                <h2>{elements.title}</h2>
                <h5>{elements.description1}</h5>
                 <h5>{elements.description2}</h5>
                 <h5>{elements.description3}</h5>
                 </div>
                 }



           {elements.id === 4 && 
                 <div className={style.secret}>            
                <h2>{elements.title}</h2>
                <h5>{elements.description1}</h5>
                 <h5>{elements.description2}</h5>
                 <h5>{elements.description3}</h5>
                 </div>
                 }
                
            </div>
           )
         })}

</div>

        </div>

    </div>
    
    
    </>
  )
}

export default React