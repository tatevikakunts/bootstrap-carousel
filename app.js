const socialWall = document.querySelector(".social-wall")
const fetchData = async()=>{
    try{
        const api_call = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast")
        const data = await api_call.json()
        console.log(data.meals)
        renderEntries(data.meals)
    }catch(error){
        console.log(error.message)
    }
}
const renderEntries = (meals)=>{
    let result = ""
    let slides = []
    meals.forEach((entry )=>{
        result += `<div  class="carousel-item card"  style="width: 18rem;">
  <img src=${entry.strMealThumb} class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">${entry.strMeal}</p>
  </div>
</div>`



    })
    socialWall.innerHTML = result
    slides = document.querySelectorAll(".carousel-item")
    slides[0].classList.add("active")
}




fetchData()