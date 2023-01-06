import me_photo from "../asssets/me_photo.png"

function About() {
  return (
<>

    <div class="hero bg-base-300 mt-10 shadow-2xl">
    <div class="hero-content flex-col lg:flex-row">
      <img src={me_photo} class="max-w-sm rounded-full shadow-2xl" alt="Nathaniel Ross-Loyo in a Chargers jersey"/>
      <div>
        <h1 class="text-5xl tracking-tight font-extrabold text-white">About Me</h1>
        <p class="py-7 text-2xl">Hi! I'm Nathaniel, but I go by Nate. In 2022, after nine years working in retail, I changed careers when I joined LEARN Academy and obtained the tools and knowledge to become a full-stack developer. I'm passionate about coding and am delighted to have made this big career change.</p>
        <p class="py-7 text-2xl">I plan to continue learning new languages to further expand my tech stack. I'm currently focused on front-end styling and design, but am equally interested in back-end development.</p>
        <p class="py-7 text-2xl">When I'm not coding, I spend my free time building custom mechanical keyboards, taking care of my pets, and during the football season you can catch me watching the Chargers work their way to an inevitable Super Bowl win! ⚡</p>
      </div>
    </div>
  </div>

    <div class="bg-base-300 shadow-2xl h-full px-6 py-12 lg:flex lg:justify-center ">
    <h1 class="text-5xl tracking-tight font-extrabold text-white mt-24 pr-20">Tech Stack & Experience</h1>
    
        <div class="grid grid-cols-3 px-6 py-12 lg:gap-8">

          <div><a className="text-secondary" href="https://javascript.com" target="_blank" rel="noreferrer">JavaScript</a></div>

          <div><a className="text-secondary" href="https://developer.mozilla.aorg/en-US/docs/Glossary/HTML5" target="_blank" rel="noreferrer">HTML</a> <a className="text-secondary">&</a> <a className="text-secondary" href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noreferrer">CSS</a></div>

          <div><a className="text-secondary" href="https://reactjs.org/" target="_blank" rel="noreferrer">React</a></div>

          <div><a className="text-secondary" href="https://www.ruby-lang.org/en/" target="_blank" rel="noreferrer">Ruby</a></div>

          <div><a className="text-secondary" href="https://vuejs.org/" target="_blank" rel="noreferrer">Vue</a></div>

          <div><a className="text-secondary" href="https://rubyonrails.org/" target="_blank" rel="noreferrer">Rails</a></div>

          <div><a className="text-secondary" href="https://www.postgresql.org/" target="_blank" rel="noreferrer">PostgreSQL</a></div>

          <div><a className="text-secondary" href="https://guides.rubyonrails.org/active_record_basics.html" target="_blank" rel="noreferrer">Active Record</a></div>

          <div><a className="text-secondary" href="https://jestjs.io/" target="_blank" rel="noreferrer">JEST</a> <a className="text-secondary">&</a> <a className="text-secondary" href="http://rspec.info/" target="_blank" rel="noreferrer">RSPEC</a></div>

          <div><a className="text-secondary" href="https://www.postman.com/" target="_blank" rel="noreferrer">Postman</a></div>

          <div><a className="text-secondary" href="https://mui.com/" target="_blank" rel="noreferrer">MUI</a></div>

          <div><a className="text-secondary" href="https://tailwindcss.com/" target="_blank" rel="noreferrer">Tailwind CSS</a></div>

        </div>
    </div>

  
  </>
  )
}

export default About