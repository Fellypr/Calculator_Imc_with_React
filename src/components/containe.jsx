import { useState } from 'react';
import '../components/containe.css';

function Container () {

    const [altura,setAltura] = useState("")
    const [peso,setPeso] = useState("")
    const [imc,setImc] = useState(null);
    const [mensagem,setMensagem] = useState("");

    function resultado (){
        const AlturaEmMetro = parseFloat(altura)/100; 
        const PesoEmKg = parseFloat(peso); 
        const resultadoImc = PesoEmKg / (AlturaEmMetro * AlturaEmMetro);
        setImc(resultadoImc.toFixed(2));
        
        setAltura("2");
        if(resultadoImc < 18.5){
            setMensagem("voce estar abaixo do peso");
        }else if(resultadoImc > 18.5 && resultadoImc <= 24.9){
            setMensagem("voce estar no peso ideal");
        }else if(resultadoImc > 24.9 && resultadoImc <= 29.9){
            setMensagem("voce estar com sobrepeso");
        }else if (resultadoImc > 29.9 && resultadoImc <= 34.9){
            setMensagem("voce estar com obesidade grau 1");
        }else if (resultadoImc > 34.9 && resultadoImc <= 39.9){
            setMensagem("voce estar com obesidade grau 2");
        }else if (resultadoImc > 39.9){
            setMensagem("voce estar com obesidade grau 3");
        }else{
            setMensagem("imc estar invalido porfavor coloque corretamente");
        }

    }
    const clear = () =>{
        window.location.reload();
    }
    
    


    return(
        <>
            <div className='blockmain'>
                <h1>Calculadora Imc</h1>
                <input type="text" placeholder='Altura(Cm)' className='altura' onChange={(e) => setAltura(e.target.value)}/><br />
                <input type="text" placeholder='Peso(Kg)' className='peso' onChange={(e)=> setPeso(e.target.value)}/><br />
                <button onClick={resultado}>Confirmar</button>
                <button className='clear' onClick={clear}>Limpar</button>
            
            </div>
            <div>
                {imc &&(
                    <div className='resultado'>
                        <h3>Seu indice de massa <br/> muscular é de:<br/>{imc}<br/>{mensagem}</h3>
                    </div>
                )}
            </div>

        </>
    );
};

export default Container;