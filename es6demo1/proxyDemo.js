let div1 = document.querySelector('#div1')
let div2 = document.querySelector('#div2')


let userdata = {
    name:"",
    age:0
}

let proxyUserData = new Proxy(userdata,{
    get:(target, prop) => {
        return target[prop]
    },
    set:(target, prop , value) => {
        if(prop === 'name'){
            div1.innerHTML = value
        }
        target[prop] = value
        return true;
    }
})
proxyUserData.name = "John"
// proxyUserData.name = "John"//set

// let name1 = proxyUserData.name //get
// div1.innerHTML = name1


//fetch('....').then(...)

// userdata = ....
// div1.innerHTML = ....

//MVVM... data binding-- UI-var 綁定
//Proxy------ 瀏覽器內建 ES6

