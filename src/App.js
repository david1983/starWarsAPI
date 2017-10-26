import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import request from 'request';
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      personData: {results: [
        {name:'',
        birth_year:'',
        height: '',
        mass: '',
        hair_color: '',
        skin_color: '',
        eye_color: '',
        gender: '',
        homeworld: '',
        films: '',
        species: '',
        vehicles: '',
        starships: '',
        url: '',
        created: '',
        edited: '' 
        }],
      next: ''},
      movieData: {results: [
        {title: '',
        episode_id: '',
        opening_crawl: '',
        director: '',
        producer: '',
        release_date: '',
        species: '',
        starships: '',
        vehicles: '',
        characters: '',
        planets: '',
        url: '',
        created: '',
        edited: ''
      }],
      next:''},
      starshipData: {results: [{
        name: '',
        model: '',
        vehicle_class: '',
        manufacturer: '',
        cost_in_credits: '',
        length: '',
        crew: '',
        passengers: '',
        max_atmosphering_speed: '',
        hyperdrive_rating: '',
        MGLT: '',
        cargo_capacity: '',
        consumables: '',
        films: '',
        pilots: '',
        url: '',
        created: '',
        edited: ''
      }],
      next:''},
      vehicleData: {results: [{
        name: '',
        model: '',
        vehicle_class: '',
        manufacturer: '',
        cost_in_credits: '',
        length: '',
        crew: '',
        passengers: '',
        max_atmosphering_speed: '',
        cargo_capacity: '',
        consumables: '',
        films: '',
        pilots: '',
        url: '',
        created: '',
        edited: ''
      }],
      next:''},
      speciesData: {results: [{
        name: '',
        classification: '',
        designation: '',
        average_height: '',
        average_lifespan: '',
        eye_colors: '',
        hair_colors: '',
        skin_colors: '',
        language: '',
        homeworld: '',
        people: '',
        films: '',
        url: '',
        created: '',
        edited:''
      }],
      next:''},
      planetData: {results: [{
        name: '',
        diameter: '',
        rotation_period: '',
        orbital_period: '',
        gravity: '',
        population: '',
        climate: '',
        terrain: '',
        surface_water: '',
        residents: '',
        films: '',
        url: '',
        created: '',
        edited: ''
      }],
      next:''}
    }
  }

  handlePersonNameChange(event) {
    document.getElementsByClassName('page').remove()
    // not the cleanest solution but time constraint
    this.refs.personResults.removeAttribute('class')
    this.refs.movieResults.setAttribute('class','hidden')
    this.refs.starshipResults.setAttribute('class','hidden')
    this.refs.vehicleResults.setAttribute('class','hidden')
    this.refs.speciesResults.setAttribute('class','hidden')
    this.refs.planetResults.setAttribute('class','hidden')
    event.persist()
    request('https://swapi.co/api/people/?search='+event.target.value, (error,response,body) => {
      this.setState({personData: JSON.parse(body)});
      let data = JSON.parse(body)
      let numberOfPages = Math.ceil(data.count/10)
      console.log(numberOfPages)
      for(let i=1;i<=numberOfPages;i++) {
        var div = document.createElement("button");
        div.textContent = i
        div.setAttribute('class','page')
        div.addEventListener('click', () => {
          request('https://swapi.co/api/people/?search='+event.target.value+'&page='+i, (error,message,body) => {
            this.setState({personData: JSON.parse(body)});
          })
        })
        document.body.appendChild(div);
      } 
    })
  }
  
  handleMovieNameChange(event) {
    document.getElementsByClassName('page').remove()
    // not the cleanest solution but time constraint
    this.refs.personResults.setAttribute('class','hidden')
    this.refs.movieResults.removeAttribute('class')
    this.refs.starshipResults.setAttribute('class','hidden')
    this.refs.vehicleResults.setAttribute('class','hidden')
    this.refs.speciesResults.setAttribute('class','hidden')
    this.refs.planetResults.setAttribute('class','hidden')
    event.persist()
    request('https://swapi.co/api/films/?search='+event.target.value, (error,response,body) => {
      this.setState({movieData: JSON.parse(body)});
      let data = JSON.parse(body)
      let numberOfPages = Math.ceil(data.count/10)
      console.log(numberOfPages)
      for(let i=1;i<=numberOfPages;i++) {
        var div = document.createElement("button");
        div.textContent = i
        div.setAttribute('class','page')
        div.addEventListener('click', () => {
          request('https://swapi.co/api/films/?search='+event.target.value+'&page='+i, (error,message,body) => {
            this.setState({movieData: JSON.parse(body)});
          })
        })
        document.body.appendChild(div);
      } 
    })
  }
  
  handleStarshipNameChange(event) {
    document.getElementsByClassName('page').remove()
    // not the cleanest solution but time constraint
    this.refs.personResults.setAttribute('class','hidden')
    this.refs.movieResults.setAttribute('class','hidden')
    this.refs.starshipResults.removeAttribute('class')
    this.refs.vehicleResults.setAttribute('class','hidden')
    this.refs.speciesResults.setAttribute('class','hidden')
    this.refs.planetResults.setAttribute('class','hidden')
    event.persist()
    request('https://swapi.co/api/starships/?search='+event.target.value, (error,response,body) => {
      this.setState({starshipData: JSON.parse(body)});
      let data = JSON.parse(body)
      let numberOfPages = Math.ceil(data.count/10)
      console.log(numberOfPages)
      for(let i=1;i<=numberOfPages;i++) {
        var div = document.createElement("button");
        div.textContent = i
        div.setAttribute('class','page')
        div.addEventListener('click', () => {
          request('https://swapi.co/api/starships/?search='+event.target.value+'&page='+i, (error,message,body) => {
            this.setState({starshipData: JSON.parse(body)});
          })
        })
        document.body.appendChild(div);
      } 
    })
  }
  
  handleStarshipModelChange(event) {
    document.getElementsByClassName('page').remove()
    // not the cleanest solution but time constraint
    this.refs.personResults.setAttribute('class','hidden')
    this.refs.movieResults.setAttribute('class','hidden')
    this.refs.starshipResults.removeAttribute('class')
    this.refs.vehicleResults.setAttribute('class','hidden')
    this.refs.speciesResults.setAttribute('class','hidden')
    this.refs.planetResults.setAttribute('class','hidden')
    event.persist()
    request('https://swapi.co/api/starships/?search='+event.target.value, (error,response,body) => {
      this.setState({starshipData: JSON.parse(body)});
      let data = JSON.parse(body)
      let numberOfPages = Math.ceil(data.count/10)
      console.log(numberOfPages)
      for(let i=1;i<=numberOfPages;i++) {
        var div = document.createElement("button");
        div.textContent = i
        div.setAttribute('class','page')
        div.addEventListener('click', () => {
          request('https://swapi.co/api/starships/?search='+event.target.value+'&page='+i, (error,message,body) => {
            this.setState({starshipData: JSON.parse(body)});
          })
        })
        document.body.appendChild(div);
      } 
    })
  }
  
  handleVehicleNameChange(event) {
    document.getElementsByClassName('page').remove()
    // not the cleanest solution but time constraint
    this.refs.personResults.setAttribute('class','hidden')
    this.refs.movieResults.setAttribute('class','hidden')
    this.refs.starshipResults.setAttribute('class','hidden')
    this.refs.vehicleResults.removeAttribute('class')
    this.refs.speciesResults.setAttribute('class','hidden')
    this.refs.planetResults.setAttribute('class','hidden')
    event.persist()
    request('https://swapi.co/api/vehicles/?search='+event.target.value, (error,response,body) => {
      this.setState({vehicleData: JSON.parse(body)});
      let data = JSON.parse(body)
      let numberOfPages = Math.ceil(data.count/10)
      console.log(numberOfPages)
      for(let i=1;i<=numberOfPages;i++) {
        var div = document.createElement("button");
        div.textContent = i
        div.setAttribute('class','page')
        div.addEventListener('click', () => {
          request('https://swapi.co/api/vehicles/?search='+event.target.value+'&page='+i, (error,message,body) => {
            this.setState({vehicleData: JSON.parse(body)});
          })
        })
        document.body.appendChild(div);
      } 
    })
  }
  
  handleVehicleModelChange(event) {
    document.getElementsByClassName('page').remove()
    // not the cleanest solution but time constraint
    this.refs.personResults.setAttribute('class','hidden')
    this.refs.movieResults.setAttribute('class','hidden')
    this.refs.starshipResults.setAttribute('class','hidden')
    this.refs.vehicleResults.removeAttribute('class')
    this.refs.speciesResults.setAttribute('class','hidden')
    this.refs.planetResults.setAttribute('class','hidden')
    event.persist()
    request('https://swapi.co/api/vehicles/?search='+event.target.value, (error,response,body) => {
      this.setState({vehicleData: JSON.parse(body)});
      let data = JSON.parse(body)
      let numberOfPages = Math.ceil(data.count/10)
      console.log(numberOfPages)
      for(let i=1;i<=numberOfPages;i++) {
        var div = document.createElement("button");
        div.textContent = i
        div.setAttribute('class','page')
        div.addEventListener('click', () => {
          request('https://swapi.co/api/vehicles/?search='+event.target.value+'&page='+i, (error,message,body) => {
            this.setState({vehicleData: JSON.parse(body)});
          })
        })
        document.body.appendChild(div);
      } 
    })
  }
  
  handleSpeciesNameChange(event) {
    document.getElementsByClassName('page').remove()
    // not the cleanest solution but time constraint
    this.refs.personResults.setAttribute('class','hidden')
    this.refs.movieResults.setAttribute('class','hidden')
    this.refs.starshipResults.setAttribute('class','hidden')
    this.refs.vehicleResults.setAttribute('class','hidden')
    this.refs.speciesResults.removeAttribute('class')
    this.refs.planetResults.setAttribute('class','hidden')
    event.persist()
    request('https://swapi.co/api/species/?search='+event.target.value, (error,response,body) => {
      this.setState({speciesData: JSON.parse(body)});
      let data = JSON.parse(body)
      let numberOfPages = Math.ceil(data.count/10)
      console.log(numberOfPages)
      for(let i=1;i<=numberOfPages;i++) {
        var div = document.createElement("button");
        div.textContent = i
        div.setAttribute('class','page')
        div.addEventListener('click', () => {
          request('https://swapi.co/api/species/?search='+event.target.value+'&page='+i, (error,message,body) => {
            this.setState({speciesData: JSON.parse(body)});
            console.log('body yay+'+body)
          })
        })
        document.body.appendChild(div);
      } 
    })
  }
  
  handlePlanetNameChange(event) {
    document.getElementsByClassName('page').remove()
    // not the cleanest solution but time constraint
    this.refs.personResults.setAttribute('class','hidden')
    this.refs.movieResults.setAttribute('class','hidden')
    this.refs.starshipResults.setAttribute('class','hidden')
    this.refs.vehicleResults.setAttribute('class','hidden')
    this.refs.speciesResults.setAttribute('class','hidden')
    this.refs.planetResults.removeAttribute('class')
    event.persist()
    request('https://swapi.co/api/planets/?search='+event.target.value, (error,response,body) => {
      this.setState({planetData: JSON.parse(body)});
      let data = JSON.parse(body)
      let numberOfPages = Math.ceil(data.count/10)
      console.log(numberOfPages)
      for(let i=1;i<=numberOfPages;i++) {
        var div = document.createElement("button");
        div.textContent = i
        div.setAttribute('class','page')
        div.addEventListener('click', () => {
          console.log('click')
          request('https://swapi.co/api/planets/?search='+event.target.value+'&page='+i, (error,message,body) => {
            this.setState({planetData: JSON.parse(body)});
            console.log('body yay+'+body)
          })
        })
        document.body.appendChild(div);
      } 
    })
  }

  render() {
  // not the best but works
  Element.prototype.remove = function() {
      this.parentElement.removeChild(this);
  }
  NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
      for(var i = this.length - 1; i >= 0; i--) {
          if(this[i] && this[i].parentElement) {
              this[i].parentElement.removeChild(this[i]);
          }
      }
  }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Swapi.co</h1>
        </header>
        <div className='container'>
          <div className='row'>
            <div className='searchBox'>
              <div className='searchTitle'>Search for a Person</div>
              <div className='searchInput'>
                <input type='text' value={this.state.personName} onChange={this.handlePersonNameChange.bind(this)} placeholder='Enter person name'></input>
              </div>
            </div>
            <div className='searchBox'>
              <div className='searchTitle'>Search for a Movie</div>
              <div className='searchInput'>
                <input type='text' value={this.state.movieName} onChange={this.handleMovieNameChange.bind(this)} placeholder='Enter movie title'></input>
              </div>
            </div>
            <div className='searchBox'>
              <div className='searchTitle'>Search for a Starship</div>
              <div className='searchInput'>
                <input type='text' value={this.state.starshipName} onChange={this.handleStarshipNameChange.bind(this)} placeholder='Enter starship name'></input>
                <input type='text' value={this.state.starshipModel} onChange={this.handleStarshipModelChange.bind(this)} placeholder='Enter starship model'></input>
              </div>
            </div>
            <div className='searchBox'>
              <div className='searchTitle'>Search for a Vehicle</div>
              <div className='searchInput'>
                <input type='text' value={this.state.vehicleName} onChange={this.handleVehicleNameChange.bind(this)} placeholder='Enter vehicle name'></input>
                <input type='text' value={this.state.vehicleModel} onChange={this.handleVehicleModelChange.bind(this)} placeholder='Enter vehicle model'></input>
              </div>
            </div>
            <div className='searchBox'>
              <div className='searchTitle'>Search for a Species</div>
              <div className='searchInput'>
                <input type='text' value={this.state.speciesName} onChange={this.handleSpeciesNameChange.bind(this)} placeholder='Enter species name'></input>
              </div>
            </div>
            <div className='searchBox'>
              <div className='searchTitle'>Search for a Planet</div>
              <div className='searchInput'>
                <input type='text' value={this.state.planetName} onChange={this.handlePlanetNameChange.bind(this)} placeholder='Enter planet name'></input>
              </div>
            </div>
          </div>
        </div>
        <div ref='personResults' className='hidden'>
          <h1>Results for Person</h1>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Height</th>
                <th>Mass</th>
                <th>Hair color</th>
                <th>Skin color</th>
                <th>Eye color</th>
                <th>Birth year</th>
                <th>Gender</th>
                <th>Homeworld</th>
                <th>Films</th>
                <th>Species</th>
                <th>Vehicles</th>
                <th>Starships</th>
                <th>Url</th>
                <th>Created</th>
                <th>Edited</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.personData.results.map(result => (
                  <tr>
                    <td>{result.name.toString()}</td>
                    <td>{result.height.toString()}</td>
                    <td>{result.mass.toString()}</td>
                    <td>{result.hair_color.toString()}</td>
                    <td>{result.skin_color.toString()}</td>
                    <td>{result.eye_color.toString()}</td>
                    <td>{result.birth_year.toString()}</td>
                    <td>{result.gender.toString()}</td>
                    <td><a href={result.homeworld.toString()}>{result.homeworld.toString()}</a></td>
                    <td>{result.films.toString()}</td>
                    <td><a href={result.species.toString()}>{result.species.toString()}</a></td>
                    <td>{result.vehicles.toString()}</td>
                    <td>{result.starships.toString()}</td>
                    <td><a href={result.url.toString()}>{result.url.toString()}</a></td>
                    <td>{result.created.toString()}</td>
                    <td>{result.edited.toString()}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
        <div ref='movieResults' className='hidden'>
          <h1>Results for Movie</h1>
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Episode ID</th>
                <th>Opening Crawl</th>
                <th>Director</th>
                <th>Producer</th>
                <th>Release Date</th>
                <th>Species</th>
                <th>Starships</th>
                <th>Vehicles</th>
                <th>Characters</th>
                <th>Planets</th>
                <th>Url</th>
                <th>Created</th>
                <th>Edited</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.movieData.results.map(result => (
                <tr>
                  <td>{result.title.toString()}</td>
                  <td>{result.episode_id.toString()}</td>
                  <td>{result.opening_crawl.toString()}</td>
                  <td>{result.director.toString()}</td>
                  <td>{result.producer.toString()}</td>
                  <td>{result.release_date.toString()}</td>
                  <td>{result.species.toString()}</td>
                  <td>{result.starships.toString()}</td>
                  <td>{result.vehicles.toString()}</td>
                  <td>{result.characters.toString()}</td>
                  <td>{result.planets.toString()}</td>
                  <td><a href={result.url.toString()}>{result.url.toString()}</a></td>
                  <td>{result.created.toString()}</td>
                  <td>{result.edited.toString()}</td>
                </tr>
                ))
              }
            </tbody>
          </table>
        </div>
        <div ref='starshipResults' className='hidden'>
          <h1>Results for Starship</h1>
          <table id='Starship'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Model</th>
                <th>Manufacturer</th>
                <th>Cost in credits</th>
                <th>Length</th>
                <th>Crew</th>
                <th>Passengers</th>
                <th>Max atmosphering speed</th>
                <th>Hyperdrive rating</th>
                <th>MGLT</th>
                <th>Cargo capacity</th>
                <th>Consumables</th>
                <th>Films</th>
                <th>Pilots</th>
                <th>Url</th>
                <th>Created</th>
                <th>Edited</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.starshipData.results.map(result => (
                <tr>
                  <td>{result.name.toString()}</td>
                  <td>{result.model.toString()}</td>
                  <td>{result.manufacturer.toString()}</td>
                  <td>{result.cost_in_credits.toString()}</td>
                  <td>{result.length.toString()}</td>
                  <td>{result.crew.toString()}</td>
                  <td>{result.passengers.toString()}</td>
                  <td>{result.max_atmosphering_speed.toString()}</td>
                  <td>{result.hyperdrive_rating.toString()}</td>
                  <td>{result.MGLT.toString()}</td>
                  <td>{result.cargo_capacity.toString()}</td>
                  <td>{result.consumables.toString()}</td>
                  <td>{result.films.toString()}</td>
                  <td>{result.pilots.toString()}</td>
                  <td><a href={result.url.toString()}>{result.url.toString()}</a></td>
                  <td>{result.created.toString()}</td>
                  <td>{result.edited.toString()}</td>
                </tr>
                ))
              }
            </tbody>
          </table>
        </div>
        <div ref='vehicleResults' className='hidden'>
          <h1>Result for Vehicle</h1>
          <table id='Vehicle'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Model</th>
                <th>Vehicle class</th>
                <th>Manufacturer</th>
                <th>Length</th>
                <th>Cost in credits</th>
                <th>Crew</th>
                <th>Passengers</th>
                <th>Max atmosphering speed</th>
                <th>Cargo capacity</th>
                <th>Consumables</th>
                <th>Films</th>
                <th>Pilots</th>
                <th>Url</th>
                <th>Created</th>
                <th>Edited</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.vehicleData.results.map(result => (
                <tr>
                  <td>{result.name.toString()}</td>
                  <td>{result.model.toString()}</td>
                  <td>{result.vehicle_class.toString()}</td>
                  <td>{result.manufacturer.toString()}</td>
                  <td>{result.cost_in_credits.toString()}</td>
                  <td>{result.length.toString()}</td>
                  <td>{result.crew.toString()}</td>
                  <td>{result.passengers.toString()}</td>
                  <td>{result.max_atmosphering_speed.toString()}</td>
                  <td>{result.cargo_capacity.toString()}</td>
                  <td>{result.consumables.toString()}</td>
                  <td>{result.films.toString()}</td>
                  <td>{result.pilots.toString()}</td>
                  <td>{result.url.toString()}</td>
                  <td>{result.created.toString()}</td>
                  <td>{result.edited.toString()}</td>
                </tr>
                ))
              }
            </tbody>
          </table>
        </div>
        <div ref='speciesResults' className='hidden'>
          <h1>Result for Species</h1>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Classification</th>
                <th>Designation</th>
                <th>Average height</th>
                <th>Average lifespan</th>
                <th>Eye colors</th>
                <th>Hair colors</th>
                <th>Skin colors</th>
                <th>Language</th>
                <th>Homeworld</th>
                <th>People</th>
                <th>Films</th>
                <th>Url</th>
                <th>Created</th>
                <th>Edited</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.speciesData.results.map(result => (
                <tr>
                  <td>{result.name.toString()}</td>
                  <td>{result.classification.toString()}</td>
                  <td>{result.designation.toString()}</td>
                  <td>{result.average_height.toString()}</td>
                  <td>{result.average_lifespan.toString()}</td>
                  <td>{result.eye_colors.toString()}</td>
                  <td>{result.hair_colors.toString()}</td>
                  <td>{result.skin_colors.toString()}</td>
                  <td>{result.language.toString()}</td>
                  <td><a href={result.homeworld.toString()}>{result.homeworld.toString()}</a></td>
                  <td>{result.people.toString()}</td>
                  <td>{result.films.toString()}</td>
                  <td><a href={result.url.toString()}>{result.url.toString()}</a></td>
                  <td>{result.created.toString()}</td>
                  <td>{result.edited.toString()}</td>
                </tr>
              ))
              }
            </tbody>
          </table>
        </div>
        <div ref='planetResults' className='hidden'>
          <h1>Result for Planet</h1>
          <table id='Planet'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Diameter</th>
                <th>Rotation period</th>
                <th>Orbital period</th>
                <th>Gravity</th>
                <th>Population</th>
                <th>Climate</th>
                <th>Terrain</th>
                <th>Surface water</th>
                <th>Residents</th>
                <th>Films</th>
                <th>Url</th>
                <th>Created</th>
                <th>Edited</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.planetData.results.map(result => (
                <tr>
                  <td>{result.name.toString()}</td>
                  <td>{result.diameter.toString()}</td>
                  <td>{result.rotation_period.toString()}</td>
                  <td>{result.orbital_period.toString()}</td>
                  <td>{result.gravity.toString()}</td>
                  <td>{result.population.toString()}</td>
                  <td>{result.climate.toString()}</td>
                  <td>{result.terrain.toString()}</td>
                  <td>{result.surface_water.toString()}</td>
                  <td>{result.residents.toString()}</td>
                  <td>{result.films.toString()}</td>
                  <td><a href={result.url.toString()}>{result.url.toString()}</a></td>
                  <td>{result.created.toString()}</td>
                  <td>{result.edited.toString()}</td>
                </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;