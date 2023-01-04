import pastas from "../asssets/pastas.jpg"
import textgame from "../asssets/textgame.jpg"
import piglatin from "../asssets/piglatin.jpg"
import tictactoe from "../asssets/tictactoe.jpg"
import cattinder from "../asssets/cattinder.jpg"
import vuetodo from "../asssets/vuetodo.jpg"

function Cards() {
  return (

    <div>

<div className="h-full w-full flex justify-center lg:flex lg:justify-center">
  <div class="grid lg:grid-cols-3 md:grid-cols-2 md:gap-5 lg:gap-10 gap-5">

    <div className="px-50 card w-96 bg-gray-700 shadow-2xl ">
      <figure><img src={pastas} alt="Pasta Pairings App" /></figure>
      <div className="card-body w-full max-w-md mx-auto">
        <h2 className="card-title text-white">
          React in Rails Application
        </h2>

        {/* <a href="https://perfect-pasta-pairings.herokuapp.com/" target="_blank" rel="noreferrer"><button class="btn btn-secondary btn-sm">Live Site</button></a> */}

        <p>Design lead for a React in Rails application where we created a website listing different pairings for pastas. Able to log in with an account and create, edit and delete different pairings</p>

        <a href="https://github.com/The-Impastas/capstone" target="_blank" rel="noreferrer"><button class="btn btn-secondary btn-block">GitHub Repo</button></a>
        
        
        <br />
        <div className="card-actions justify-end">
          <div className="badge badge-outline">React</div> 
          <div className="badge badge-outline">Rails</div>
          <div className="badge badge-outline">HTML/CSS</div>
          <div className="badge badge-outline">MUI</div>
        </div>
      </div>
    </div>

    <div className="px-50 card w-96 bg-gray-700 shadow-2xl ">
      <figure><img src={textgame} alt="Text Based Game" /></figure>
      <div className="card-body">
        <h2 className="card-title text-white">
        Text-Based Game
        </h2>
        <p>In Ruby we made a text-based adventure game accessible in the terminal. In the game there are multiple paths to go down with ASCII art to go along with some of the scenes</p>

        <a href="https://github.com/learn-academy-2022-foxtrot/text-based-game-christian-athian-nate" target="_blank" rel="noreferrer"><button class="btn btn-secondary btn-block">GitHub Repo</button></a>

        <br />
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Ruby</div> 
        </div>
      </div>
    </div>

    <div className="px-50 card w-96 bg-gray-700 shadow-2xl ">
      <figure><img src={piglatin} alt="Pig Latin Translator" /></figure>
      <div className="card-body">
        <h2 className="card-title text-white">
        Pig Latin Translator
        </h2>
        <p>Using React, we created a program that takes in an english word or phrase and converts it into the wonderful language of Pig Latin</p>

        <a href="https://github.com/learn-academy-2022-foxtrot/pig-latin-pig-latin-nate-athian" target="_blank" rel="noreferrer"><button class="btn btn-secondary btn-block">GitHub Repo</button></a>

        <br />
        <div className="card-actions justify-end">
          <div className="badge badge-outline">JavaScript</div> 
          <div className="badge badge-outline">React</div> 
          <div className="badge badge-outline">HTML/CSS</div> 
        </div>
      </div>
    </div>

    <div className="px-50 card w-96 bg-gray-700 shadow-2xl ">
      <figure><img src={tictactoe} alt="Tic-Tac-Toe Game" /></figure>
      <div className="card-body">
        <h2 className="card-title text-white">
        Tic-Tac-Toe
        </h2>
        <p>Using React, we made a functional Tic-Tac-Toe game, accounting for two players with X's and O's, displaying a winner and also displaying if there's a tie. Features an animated gradient background</p>

        <a href="https://github.com/learn-academy-2022-foxtrot/tic-tac-toe-chris-and-nate" target="_blank" rel="noreferrer"><button class="btn btn-secondary btn-block">GitHub Repo</button></a>

        <br />
        <div className="card-actions justify-end">
          <div className="badge badge-outline">JavaScript</div>
          <div className="badge badge-outline">React</div>  
          <div className="badge badge-outline">HTML/CSS</div>
        </div>
      </div>
    </div>

    <div className="px-50 card w-96 bg-gray-700 shadow-2xl ">
      <figure><img src={cattinder} alt="React app 'Cat-Tinder'" /></figure>
      <div className="card-body w-full max-w-md mx-auto">
        <h2 className="card-title text-white">
          React and Rails Application
        </h2>
        <p>Created a decoupled React and Rails application, allowing the user to create, edit, and delete profiles on a "cat-tinder" application. Features an index that shows all the profiles created</p>

        <a href="https://github.com/learn-academy-2022-foxtrot/cat-tinder-frontend-olena-nate" target="_blank" rel="noreferrer"><button class="btn btn-secondary btn-block">GitHub Repo</button></a>

        <br />
        <div className="card-actions justify-end">
          <div className="badge badge-outline">React</div> 
          <div className="badge badge-outline">Rails</div>
          <div className="badge badge-outline">HTML/CSS</div>
          <div className="badge badge-outline">Reactstrap</div>
        </div>
      </div>
    </div>

    <div className="px-50 card w-96 bg-gray-700 shadow-2xl ">
      <figure><img src={vuetodo} alt="To-Do Mobile App" /></figure>
      <div className="card-body">
        <h2 className="card-title text-white">
        Vue.js To-Do Application
        </h2>
        <p>Using Vue 3 and Vite I've created a simple to-do application that saves your name, your tasks, and can be updated with new tasks or deleted</p>
        
        <a href="https://github.com/nathaniel-ross/vue-prac" target="_blank" rel="noreferrer"><button class="btn btn-secondary btn-block">GitHub Repo</button></a>

        <br />
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Vue</div> 
          <div className="badge badge-outline">Vite</div> 
          <div className="badge badge-outline">HTML/CSS</div> 
        </div>
      </div>
    </div>

  </div>
</div>
</div>

  )
}

export default Cards