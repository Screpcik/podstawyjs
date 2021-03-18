let lew = {
    nazwa: "puszek",
    waga: 200,
    rozmiar: "XL",
    wiek: 11,
    urodzony: new Date(2010, 02, 03),
    dlugosc: 2.3,
    agresja: true,
    cechy: ["wytrwały", "leniwy", "groźny"],

    atak: () => {
        if (lew.agresja == true) {
            return 'Lew atakuje bo jest agresywny'
        } else {
            return 'Lew odpoczywa po jedzeniu, nie jest już agresywny'
        }
    },

    jedzenie: () => {
        lew.agresja = false
        return this.nazwa + " już podjadł"
    }
}
/*
lew.agresja = true
console.log(lew.nazwa + " " + lew.atak())
lew.jedzenie()
console.log(lew.nazwa + " " + lew.atak())*/

const auto = {
    marka: "Mercedes",
    kolor: "Srebrny",
    przebieg: 0.0,

    Info() {
        return `Mój samochód marki ${this.marka} jest ${this.kolor} i ma przebieg ${this.przebieg}`
    },

    Jazda(odległość) {
        this.przebieg += odległość
    }

}
/*
console.log(auto.Info())
auto.Jazda(123)
console.log(auto.Info())
auto.Jazda(321)
console.log(auto.Info())*/

//Tworzymy obiekty produkt01 ora zprodukt02
//każdy ma cechy: nazwa, cena, waga..

//należy w konsoli wypisać dane:
//Produkt numer 1 to -> info
//Produkt numer 2 to -> info
//Oba produkty ważą -> 
//Oba produkty kosztuję -> 

//Utworzyć obiekt StatekKosmiczny
//nazwa: Enterprise
//położenie: "Ziemia"
//odległość: 0.0
//metoda pobiera 2 argumenty -> cel, odległość
//metoda info
// - dla odważnych -> metoda Klingoni () - losowanie liczby między 1,10, jeśli liczba jest parzysta to Enterprise wygrał bitwę z klingonami, jeśłi nieparzysta to przegrał.



const statek_kosmiczny = {
    nazwa: "Enterprise",
    położenie: "Ziemia",
    odległość: 0.0,

    Podróż(cel, odległość) {
        this.położenie = cel
        this.odległość = odległość
    },

    Info() {
        return `Statek kosmiczny ${this.nazwa} znajduje się w pobliżu ${this.położenie} w odległości od Ziemi ${this.odległość} km`
    },

    Klingoni() {
        if (this.GetRandomInt(1,10) % 2 == 0) {
            return 'Enterprise wygrał bitwę z klingonami'
        } else {
            return 'Enterprise przegrał bitwę z klingonami'
        }
    },

    GetRandomInt(min, max) {
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min)) + min
    }
}
/*
console.log(statek_kosmiczny.Info())
statek_kosmiczny.Podróż("Mars", 23000000)
console.log(statek_kosmiczny.Info())
console.log(statek_kosmiczny.Klingoni())
console.log(statek_kosmiczny.Klingoni())
console.log(statek_kosmiczny.Klingoni())
console.log(statek_kosmiczny.Klingoni())
console.log(statek_kosmiczny.Klingoni())
console.log(statek_kosmiczny.Klingoni())*/

let option
let btnUsunBohatera = document.querySelector("#btnUsunBohatera")
let heroesList = document.querySelector("#heroes")
let imieBoh = document.querySelector('#imieBohatera')
let skillBoh = document.querySelector('#skillBohatera')
let btnAddHero = document.querySelector('#btnDodajeBohatera')
let btnAddSkill = document.querySelector('#btnDodajSkila')
let listaAllSkills = document.querySelector('#listaAllSkills')
let skillList = document.querySelector('#skills')
let btnUsunSkilla = document.querySelector('#btnUsunSkilla')

const książka = {
    bohaterowie: [
        { nazwa: "Jorgen", skill: ["czytwa w myślach"] },
        { nazwa: "Miranda", skill: ["wygina łuki", "łupie orzechy"] },
        { nazwa: "Władimir", skill: ["władza", "bystrość umysłu"]}
    ],

    DodajBohatera(nazwa, skill) {
        let boh = {
            nazwa: nazwa,
            skill: [skill]
        }
        this.bohaterowie.push(boh)
    },

    ImionaBohaterów() {
        heroesList.innerHTML = ""
        for (var i = 0; i < this.bohaterowie.length; i++) {
            option = document.createElement("option")
            option.value = this.bohaterowie[i].nazwa
            option.innerHTML = this.bohaterowie[i].nazwa
            heroesList.appendChild(option)
        }
    },

    SzukanieBohaterówPoNazwie(nazwa) {
        let bohaterowie = []
        let bohIstnieje = false
        for (var i = 0; i < this.bohaterowie.length; i++) {
            if (this.bohaterowie[i].nazwa == nazwa) {
                bohIstnieje = true
                bohaterowie.push(this.bohaterowie[i])
            }
            if (bohIstnieje) {
                return bohaterowie
            } else {
                return "brak bohaterów"
            }
        }
    },

    CountAmountOfBahaterowie() {
        var ilosc = 0
        for (var i = 0; i < this.bohaterowie.length; i++) {
            ilosc++
        }
        return `ilosc bohaterów ${ ilosc }`
    },

    ListaSkilowBohatera(bohater) {
        listaSk = []
        for (var i = 0; i < this.bohaterowie.length; i++) {
            if (this.bohaterowie[i].nazwa == bohater) {
                for (var j = 0; j < this.bohaterowie[i].skill.length; j++) {
                    listaSk.push(this.bohaterowie[i].skill[j])
                }
            }
        }
        let listaSkili = document.querySelector("#listaSkili")
        let li
        listaSkili.innerHTML = ""
        skillList.innerHTML = ""
        listaSk.forEach(sk => {
            li = document.createElement("li")
            li.innerHTML = sk
            listaSkili.appendChild(li)
            option = document.createElement("option")
            option.value = sk
            option.innerHTML = sk
            skillList.appendChild(option)
        })
    },

    DodanieSkilla(bohater) {
        for (var i = 0; i < this.bohaterowie.length; i++) {
            if (this.bohaterowie[i].nazwa == bohater) {
                let skill = document.querySelector("#skillBohatera").value
                this.bohaterowie[i].skill.push(skill)
            }
        }
        this.ListaSkilowBohatera(bohater)
    },

    ListaAllSkills() {
        let listaSk = []
        for (var i = 0; i < this.bohaterowie.length; i++) {
            for (var j = 0; j < this.bohaterowie[i].skill.length; j++) {
                listaSk.push(this.bohaterowie[i].skill[j])
            }
        }
        let uniqueSkills = [...new Set(listaSk)]
        let opt
        listaAllSkills.innerHTML = ""
        uniqueSkills.forEach(elem => {
            opt = document.createElement("option")
            opt.value = elem
            opt.innerHTML = elem
            listaAllSkills.appendChild(opt)
        })
    },

    BohaterowieBySkills(skill) {
        let listaBoh = []
        for (var i = 0; i < this.bohaterowie.length; i++) {
            for (var j = 0; j < this.bohaterowie[i].skill.length; j++) {
                if (this.bohaterowie[i].skill[j] == skill) {
                    listaBoh.push(this.bohaterowie[i].nazwa)
                }
            }
        }
        let listaBohU1 = document.querySelector("#listaBohWybranySkill")
        listaBohU1.innerHTML = ""
        let li
        listaBoh.forEach(heroe => {
            li = document.createElement("li")
            li.innerHTML = heroe
            listaBohU1.appendChild(li)
        })
    },
    usunBohatera(nazwa){
        for (var i = 0; i < this.bohaterowie.length; i++) {
            if (this.bohaterowie[i].nazwa == nazwa) {
               this.bohaterowie.splice(i,i+1)
            }
        }
    },
    usunSkilla(nazwaBohatera, nazwaSkilla){
        for (var i = 0; i < this.bohaterowie.length; i++) {
            if (this.bohaterowie[i].nazwa == nazwaBohatera) {
                for (var j = 0; j < this.bohaterowie[i].skill.length; j++){
                    if (this.bohaterowie[i].skill[j] == nazwaSkilla){
                        this.bohaterowie[i].skill.splice(j,j+1)
                    }
                }
            }
        }
    }
}

const PokazSkille = () => {
    książka.ListaSkilowBohatera(heroesList.value)
}

const DodawanieHero = () => {
    książka.DodajBohatera(imieBoh.value, skillBoh.value)
    książka.ImionaBohaterów()
    PokazSkille()
    książka.ListaAllSkills()
}

const DodajSkila = () => {
    książka.DodanieSkilla(heroesList.value)
}

const BohaterowiePoSkillach = () => {
    let skill = listaAllSkills.value
    książka.BohaterowieBySkills(skill)
}

const usuwanieBohatera = () => {
    książka.usunBohatera(heroesList.value)
    książka.ImionaBohaterów()
    książka.ListaAllSkills()
}

const usuwanieSkilla = () => {
    książka.usunSkilla(heroesList.value, listaAllSkills.value)
    książka.ImionaBohaterów()
    książka.ListaAllSkills()
    książka.ListaSkilowBohatera()
}
książka.ImionaBohaterów()
PokazSkille()
btnUsunBohatera.addEventListener('click', usuwanieBohatera)
heroesList.addEventListener('change', PokazSkille)
btnAddHero.addEventListener('click', DodawanieHero)
btnDodajSkila.addEventListener('click', DodajSkila)
btnUsunSkilla.addEventListener('click', usuwanieSkilla)
książka.ListaAllSkills()
listaAllSkills.addEventListener('change', BohaterowiePoSkillach)

/*
console.log(książka.bohaterowie[0])
console.log(książka.bohaterowie[1])
console.log(książka.bohaterowie[2])
książka.DodajBohatera("August", "picie")
console.log(książka.bohaterowie[3])
książka.ImionaBohaterów()
console.log(książka.SzukanieBohaterówPoNazwie("Miranda"))
console.log(książka.CountAmountOfBahaterowie())*/
