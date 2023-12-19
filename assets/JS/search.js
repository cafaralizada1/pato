const ipClass = document.querySelector('.ipClass')
const ip = document.getElementById('ip')
const ip2 = document.getElementById('ip2')
const txt = document.getElementById('txt')
const btnnn = document.getElementById('btnnn')
const form1 = document.getElementById('form1')

ip2.style.display = "none"

function getIp(){
    axios.get(`https://65685e799927836bd974a707.mockapi.io/products`)
     .then(res => {
        db = res.data

        db.map(item => {
            const box = document.createElement('div')
            box.className = "cardList"
            box.innerHTML =`
            <img src="${item.image}" alt="photo">
            <h1>${item.title}</h1>
            <p>${item.price}</p>
            `
            ipClass.append(box)
        })
     })
}
getIp()


function getName(){
    ip2.innerHTML = ''
    ip.style.display = 'none'
    ip2.style.display = 'block'
    axios.get(`https://65685e799927836bd974a707.mockapi.io/products`)
    .then(res => {
        db = res.data
        const filterData = db.filter(item => item.title.toLowerCase().includes(txt.value.toLowerCase()))
        filterData.map(item => {
            const box = document.createElement('div')
            box.className = 'cardList'
            box.innerHTML = `
            <img src="${item.image}" alt="photo">
            <h1>${item.title}</h1>
            <p>${item.price}</p>
            `
            ip2.append(box)
        })
    })
}




function getName1(){
    ip2.innerHTML = ''
    ip.style.display = 'none'
    ip2.style.display = 'block'
    axios.get(`https://65685e799927836bd974a707.mockapi.io/products`)
    .then(res => {
        db = res.data
        const sort = db.sort((a,b) => a.name.localeCompare(b.name) )
        sort.map(item => {
            const box = document.createElement('div')
            box.className = 'cardList'
            box.innerHTML = `
            <img src="${item.image}" alt="photo">
            <h1>${item.title}</h1>
            <p>${item.price}</p>
            `
            ip2.append(box)
        })
    })
}

form1.addEventListener("submit" , (e) => {
    e.preventDefault();
    getName1();
})