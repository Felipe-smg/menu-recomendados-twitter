import './HelloPerson.css';

function HelloPerson({nome,idade,foto, caracteristica }){
 
    return(
        <div className="container">
        

            { nome && <p className="desc">
             Hello {nome} - {idade} - <span className="info">{caracteristica}</span></p>}
            
            
            <img className='img'
             src={foto}
             alt={nome}
             width="120px"
             height="120px"
            />
        </div>
    );
}

export default HelloPerson;