const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // this is used to stop sending url to the server

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `!!Please Enter a Valid Height!!${height}`;
  }
  
  else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `!!Please Enter a Valid weight!!${weight}`;
  }

  else
  {
    const bmi = (weight/((height*height)/10000)).toFixed()
    const p = document.querySelectorAll(".info")
    let v = []
    let ind = 0
    p.forEach((e)=>{
      v[ind] = e.innerHTML
      ind++
    })
    if(bmi < 18.6)
    {
      results.innerHTML = `<span>your bmi = ${bmi}<br>${v[0]}</span>`
    }
    else if(bmi < 18.6)
    {
      results.innerHTML = `<span>your bmi = ${bmi}<br>${v[1]}</span>`
    }
    else 
    {
      results.innerHTML = `<span>your bmi = ${bmi}<br>${v[2]}</span>`
    }
  }
});
