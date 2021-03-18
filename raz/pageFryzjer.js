const ObliczenieCeny = () => {
    let lblCena = document.getElementById("cenaUslugi")
    let genF = document.getElementById("genFem")
    let genM = document.getElementById("genMal")
    let genD = document.getElementById("genBrak")
    let mycie = document.getElementById("gridMycie")
    let currList = document.getElementById("currList")
    let cena

    cena = 10

    if (genF.checked) {
        cena += 15
    } else if (genD.checked) {
        cena += 2
    } else {
        cena = cena
    }

    if (mycie.checked) {
        cena += 10
    }

    let selFarbowanie = document.getElementById('farbowanieWybor')
    if (!selFarbowanie.disabled) {
        switch (selFarbowanie.value) {
            case "kolor_1":
                cena += 20
                break
            case "ombre":
                cena += 120
                break
            case "sombre":
                cena += 140
                break
            case "pasemka":
                cena += 70
                break
            case "cover":
                cena += 50
                break
            case "balejage":
                cena += 40
                break
            default:
                cena = cena
                break
        }
    }

    lblCena.innerHTML = "Cena wynosi: " + cena.toFixed(2) + " PLN => "
    return cena
}

const FarbowanieSwitch = () => {
    let chkFarbowanie = document.getElementById('gridFarbowanie')
    let selFarbowanie = document.getElementById('farbowanieWybor')

    selFarbowanie.disabled = chkFarbowanie.checked ? false : true

    //if (chkFarbowanie.checked) {
    //    selFarbowanie.disabled = false
    //} else {
    //    selFarbowanie.disabled = true
    //}

}

const PobierzPlikTxt = () => {
    let plik = document.getElementById("plikTxt")
    if (plik.files.length != 0 && plik.files[0].type.match(/text.*/)) {
        const reader = new FileReader()
        reader.onload = (e) => {
            const poleTxt = document.getElementById("txtOpisText")
            poleTxt.value = e.target.result
        }

        reader.onerror = (e) => {
            alert("nie można odczytac pliku, błąd: " + e.message)
        }

        reader.readAsText(plik.files[0])
    }
}

const PobierzPlikFoto = () => {
    let plik = document.getElementById("plikImg")
    if (plik.files.length != 0 && plik.files[0].type.match(/image.*/)) {
        const reader = new FileReader()
        reader.onload = (e) => {
            const poleTxt = document.getElementById("plikFoto")
            poleTxt.src = e.target.result
        }

        reader.onerror = (e) => {
            alert("nie można odczytac pliku, błąd: " + e.message)
        }

        reader.readAsDataURL(plik.files[0])
    }
}

let listaWal = document.querySelector('#currList')

const pobranieNazwWalut = () => {
    let url = "https://api.nbp.pl/api/exchangerates/tables/A/?format=json"
    fetch(url)
        .then(response => response.json())
        .then(data => {
            listaWal.innerHTML = ""
            let opt 
            data[0].rates.forEach(r => {
                opt = document.createElement('option')
                opt.setAttribute("value", r.code)
                opt.innerHTML = r.currency
                listaWal.appendChild(opt)
            })
        })
}

const WycenaWaluta = (kod)=>{
    let url = `https://api.nbp.pl/api/exchangerates/rates/A/${kod}/?format=json`
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let cena = ObliczenieCeny()
            let cenaUsl = document.querySelector("#cenaUslugi")
            cenaUsl.innerHTML = cenaUsl.innerHTML + `${(cena/data.rates[0].mid).toFixed(2)} ${data.code}`
        })
}
pobranieNazwWalut()