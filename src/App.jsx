import './App.css'
import HelloWorld from './HelloWorld'
import Button from './Button'
import HelloPerson from './HelloPerson';
import { useState } from 'react';
function App() {
  const [nome, setNome] = useState("");
  
  const pessoas = [

{
  nome: "Pandora",
  idade: "4",
  caracteristica: "pet",
  foto:"https://www.otaquest.com/wp-content/uploads/2020/05/Screenshot-from-2020-05-20-10-54-52.png"
},
{
  nome: "Javier Buenas Ondas",
  idade: "30",
  caracteristica: "Argentino",
  foto:"https://i.redd.it/axsjk4gybaz31.png"
},
{
  nome: "Giovanna",
  idade: "16",
  caracteristica: "pintbull de madame",
  foto:"https://wallpaperaccess.in/public/uploads/preview/spy-x-family-anya-forger-bond-spy-x-family-yor-briar-loid-forger-wallpaper-g.jpg"
},
{
  nome: "Dino",
  idade: "25",
  caracteristica: "Dinossauro",
  foto:"https://picsum.photos/200/300?grayscale"
},
  ];
  return (
    <div>
      <input type="text" onChange={ (event) => { setNome(event.target.value) } }/>
   <HelloWorld />
   <HelloWorld />
    {pessoas.map((pessoa, key) => {
        return <HelloPerson 
        key={key}
        nome={pessoa.nome} 
        idade={pessoa.idade} 
        caracteristica={pessoa.caracteristica} 
        foto={pessoa.foto}/>
    })}
   <Button />



   

    </div> 
  )
}

export default App
