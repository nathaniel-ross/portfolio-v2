import me_drawing from "../asssets/me_drawing.png"

function Hero() {
  return (
    <>
  
    <div class="hero my-32 ">
    <div class="hero-content flex-col lg:flex-row-reverse mx-4">
      <img src={me_drawing} class="max-w-sm mx-6 rounded-full shadow-2xl" alt="Drawing of Nathaniel"/>
      <div>
        <h1 class="text-5xl tracking-tight font-extrabold text-white">Hi, I'm Nathaniel!</h1>
        <p class="py-7 text-4xl">Full-stack developer with an emphasis on friendly design, creating responsive and dynamic web applications.</p>
        
        <a href="#contact"><button class="btn btn-secondary">Send me a message</button></a>
      </div>
    </div>
  </div>
  </>
  )
}

export default Hero