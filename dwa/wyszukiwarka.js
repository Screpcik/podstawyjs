let regionList = document.querySelector("#regionList")
let krajList = document.querySelector("#krajList")
let capitalLabel = document.querySelector("#stolica")
let flagImg = document.querySelector("#flaga")
const pobranieRegionów = () => {
    let url = "https://restcountries.eu/rest/v2/all"
    fetch(url)
        .then(response => response.json())
        .then(data => {
            regionList.innerHTML = ""
            let opt 
            let regionListArr =[]
                data.forEach(r => {
                regionListArr.push(r.region)
            })

            let regionListArrUnq = regionListArr.filter(onlyUnique)
            regionListArrUnq.forEach(r => {
                opt = document.createElement('option')
                opt.setAttribute("value", r)
                opt.innerHTML = r
                opt.value = r
                regionList.appendChild(opt)
            })
            
            function onlyUnique(value, index, self) {
                return self.indexOf(value) === index;
              }

        })
}

const pokazKraje = () =>{
    let region = regionList.value
    let url = `https://restcountries.eu/rest/v2/region/${region}`
    fetch(url)
        .then(response => response.json())
        .then(data => {
            krajList.innerHTML = ""
            let opt
            data.forEach(country => {
                opt = document.createElement('option')
                opt.setAttribute("value", country.name)
                opt.innerHTML = country.name
                opt.value = country.name
                krajList.appendChild(opt)
            })
        })
    }

const findInfo = () => {
      let country = krajList.value
      let url = `https://restcountries.eu/rest/v2/name/${country}`
      fetch(url)
        .then(response => response.json())
        .then(data => {
            capitalLabel.innerHTML = data[0].capital
            flagImg.setAttribute("src", `${data[0].flag}`)
            flagImg.setAttribute("alt", `${data[0].flag}`)
            flagImg.setAttribute("width", "600")
            flagImg.setAttribute("high", "400")
            flagImg.setAttribute("style", "border: 1px solid #555;")
            console.log(data[0].flag)
        })
}
regionList.addEventListener("change", pokazKraje)
krajList.addEventListener("change", findInfo)
pobranieRegionów()