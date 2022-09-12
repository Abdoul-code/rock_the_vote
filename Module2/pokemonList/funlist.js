
const xhr = new XMLHttpRequest()

xhr.open("GET", "https://api.vschool.io/pokemon",true)
xhr.send()


xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        const JSONdata = xhr.responseText
        const data = JSON.parse(JSONdata)
        console.log(data)
        showData(data.objects[0].pokemon)

    }
}
function showData(liste){
    for(let i = 0; i < liste.length; i++){
        const h1 = document.createElement('h1')
        h1.textContent = liste[i].name
        document.body.appendChild(h1)
    }

}

function lido(){
    return new Promise((resolve,reject) =>{
        const random = Math.floor(Math.random()* 2)

        if(random === 0){
            resolve("You get this")
        }else if (random === 1){
            reject("You are a looser")
        }

    })

}
lido()
.then(response => console.log("Resolved is:" +response))
.catch(error => console.log("Rejection is:" +error))

Promise.resolve("I'm tring new thing").then(response => console.log(response))


