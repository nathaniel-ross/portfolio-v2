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
    <h1 class="text-5xl tracking-tight font-extrabold text-white mt-24 pr-20">Tech Stack <br/>& Experience</h1>
    <br/>

    <div className="mockup-code">
      <pre data-prefix="$"><code>Languages</code></pre> 
      <pre data-prefix=">" className="text-warning"><code>JavaScript</code></pre> 
      <pre data-prefix=">" className="text-warning"><code>HTML & CSS</code></pre> 
      <pre data-prefix=">" className="text-warning"><code>Ruby</code></pre> 
      <pre data-prefix=">" className="text-warning"><code>Rails</code></pre>
      <br/>
      <pre data-prefix="$"><code>Testing</code></pre> 
      <pre data-prefix=">" className="text-warning"><code>Jest</code></pre>
      <pre data-prefix=">" className="text-warning"><code>RSpec</code></pre>
      <pre data-prefix=">" className="text-warning"><code>React Testing Library</code></pre>
      </div>

      <div className="mockup-code">
      <pre data-prefix="$"><code>Frameworks</code></pre> 
      <pre data-prefix=">" className="text-success"><code>React</code></pre> 
      <pre data-prefix=">" className="text-success"><code>Vue</code></pre> 
      <pre data-prefix=">" className="text-success"><code>MUI</code></pre> 
      <pre data-prefix=">" className="text-success"><code>TailwindCSS</code></pre>
      <br/>
      <pre data-prefix="$"><code>Technologies</code></pre>
      <pre data-prefix=">" className="text-success"><code>Devise</code></pre>
      <pre data-prefix=">" className="text-success"><code>Postman</code></pre>
      <pre data-prefix=">" className="text-success"><code>PostgreSQL</code></pre>
    </div>

        {/* <div class="grid grid-cols-3 px-6 py-12 lg:gap-8">
          <div>JavaScript</div>
          <div>HTML & CSS</div>
          <div>React</div>
          <div>Ruby</div>
          <div>Vue</div>
          <div>Rails</div>
          <div>PostgreSQL</div>
          <div>Active Record</div>
          <div>JEST & RSPEC</div>
          <div>Postman</div>
          <div>MUI</div>
          <div>Tailwind CSS</div>
        </div> */}
    </div>

  
  </>
  )
}

export default About