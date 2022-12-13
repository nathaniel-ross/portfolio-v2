function Hero() {
  return (
    <>
  
    <div class="hero my-32 ">
    <div class="hero-content flex-col lg:flex-row-reverse mx-4">
      <img src="https://nathaniel-ross.github.io/photos/me_drawing.png" class="max-w-sm mx-6 rounded-full shadow-2xl" alt="Drawing of Nathaniel"/>
      <div>
        <h1 class="text-5xl tracking-tight font-extrabold text-white">Hi, I'm Nathaniel!</h1>
        <p class="py-7 text-4xl">Full-stack developer with an emphasis on friendly design, creating responsive and dynamic web applications.</p>
        
        <button class="btn btn-secondary"><a href="#contact">Send me a message</a></button>
      </div>
    </div>
  </div>
  </>
  )
}

export default Hero