



class AA extends HTMLElement{
    constructor(){
        super();
        
        let template = document.querySelector('#temp1')
        let templateContent111 = template.content;
        this.appendChild(templateContent111)
        let btn1 =  this.querySelector('button')
        let self1 = this
        btn1.addEventListener('click',(e) => {
            e.preventDefault()
            console.log(111111)
            let attr = self1.getAttribute('data2')
            console.log(attr)
        })
    }

    eat(){

    }
}

window.customElements.define('like-button', AA);


