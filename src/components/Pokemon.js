import React, { Component } from 'react';
import './Pokemon.css';
class Pokemon extends Component {

    constructor(props) {
        super(props)
        this.state = {
            pokemons: [],
            isLoaded: false,
            name:''
        }
    }
   
    componentDidMount() {
            var url = "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json";
            fetch(url)
                .then(res => res.json())
                .then(json => {
                    this.setState({
                        isLoaded: true,
                        pokemons:json,
                    })
                   
                })
           
        }

render(){
    const { isLoaded, pokemons, name } = this.state;

    if(!isLoaded){
        return <div className="loading">Loading...</div>
    }
    else{
        return (
            <div className="Pokemon_wrapper">
                <div className="Pokemon_image">

                </div>
          
               <table>
                    <tbody>
                    <tr>
                    <td>Name</td>
                    <td>Number</td>
                    <td>Type</td>
                    <td>Height</td>
                    <td>Weight</td>
                    <td>Weaknesses</td>
                    </tr>
                    {pokemons.pokemon.map(pok => (
                    <tr key={pok.id}> 
                    
                    <td>{pok.name}</td>
                    <td>{pok.num}</td>
                    <td>
                    {pok.type.map(typ => (
                        <ul>
                            <li>
                                {typ}<span> ,</span>
                            </li>
                        </ul>
                        ))}
                    </td>
                    <td>{pok.height}</td>
                    <td>{pok.weight}</td>
                    <td>
                    {pok.weaknesses.map(weak => (
                        <ul>
                            <li>
                                {weak}<span> ,</span>
                            </li>
                        </ul>
                        ))}
                    </td>
                    
                    
                   
                    </tr>
                     ))}
                    </tbody>
                    </table>
              </div>
                      
      );
    }
    
    
}
}


export default Pokemon;