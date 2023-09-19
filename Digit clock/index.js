const clock = document.querySelector('#clock')

setInterval(()=>{
  const date = new Date()
  clock.innerHTML = `<sapn>${date.toLocaleTimeString()}</span>`
},1000)
