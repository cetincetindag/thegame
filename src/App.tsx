
function App() {
  const handleClick = () => {
    alert('Thank you for your interest! We will notify you when it is ready :)')
  }
  return (
    <div className="h-screen w-screen bg-black text-white m-auto text-center">
      <h1 className="text-6xl font-handjet pt-10">KUT - THE FAMOUS(?) GAME</h1>
      <p className="text-4xl pt-10 font-handjet font-normal">Based on a traditional game inspired by Rumy</p>
      <p className="text-3xl pt-10 font-handjet font-normal">..currently under development</p>
      <a href="https://github.com/cetincetindag/thegame">
        <h2 className="text-2xl pt-10 font-handjet font-normal gradient">Check out the repository</h2>
      </a>
      <div className="grid gap-4 mt-20 grid-rows-3 justify-center">
        <label htmlFor="notify" className="justify-self-start text-2xl text-cyan-300 font-handjet font-normal">Notify me when it's ready</label>
        <input
          type="email"
          id="notify"
          name="notify"
          placeholder="e-mail here"
          className="text-2xl w-80 h-8 bg-slate-700 text-lime-300 font-handjet font-normal"
        />
        <button onClick={handleClick}
          className="text-2xl bg-cyan-300 text-black font-handjet font-normal rounded-md"
        >
          Notify me
        </button>
      </div>
      <img src="/banner.png" alt="banner" className="w-1/3 m-auto h-auto pt-10 invert" />
    </div>
  )
}

export default App
