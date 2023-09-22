
const randomColor = ()=>{
    const hexColorCode = "0123456789ABCDEF"
    let code = "#"
    for(let i = 0; i < 6; i++)
    {
      code += hexColorCode[Math.floor(Math.random()*16)]
    }
    return code
  }
  
  let clear = null
  const startColorChanging = ()=>{
    const changeBgColor = ()=>{
      document.body.style.backgroundColor = randomColor()
    }
    if(!clear) clear = setInterval(changeBgColor,1000)
  }
  const stopColorChanging = ()=>{
    clearInterval(clear)
    clear = null
  }
  
  document.querySelector("#start").addEventListener('click',startColorChanging)
  document.querySelector("#stop").addEventListener('click',stopColorChanging)