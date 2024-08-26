class Funcionario{
    constructor(nome, idade, cargo) {
        this.nome = nome
        this.idade = idade
        this.cargo = cargo
    }
    
    seApresentar(){
        return `tudo certo ${this.nome}, seja bem vindo(a)!`
    }

    trabalhar(){
        return `bom trabalho ${this.nome}, lembre-se que o horario de almoço é as 12h!`
    }
}

class Gerente extends Funcionario {
    constructor(nome, idade, cargo, departamento) {
        super(nome, idade, cargo);
        this.departamento = departamento
    }

    gerenciar(){
        return `O sistema de gestão foi iniciado, você pode checar as pendencias do seu departamento no drive da empresa!`
    }
}

class Desenvolvedor extends Funcionario {
    constructor(nome, idade, cargo, linguagem) {
        super(nome, idade, cargo);
        this.linguagem = linguagem
    }

    programar(){
        return `Olá ${this.nome}, se prepare para a daily hoje as 09h, caso haja alguma duvida na realizaçãs das tasks favor contatar o product manager `
    }
}

let gerente_01 = new Gerente('Carlos', '33', 'Analista de sistemas', 'P&D')
let desenvolvedor_01 = new Desenvolvedor('thiago','22','Desenvolvedor Plenor','python')

// console.log(gerente_01)
// console.log(gerente_01.seApresentar())
// console.log(gerente_01.trabalhar())
// console.log(gerente_01.gerenciar())


// console.log(desenvolvedor_01)
// console.log(desenvolvedor_01.seApresentar())
// console.log(desenvolvedor_01.trabalhar())
// console.log(desenvolvedor_01.programar()) 

 




let form = document.querySelector('.form')
let body = document.querySelector('.body')
console.log(form)

let userInfo = []


form.addEventListener('submit', (event)=>{
    userInfo.push(form.nome.value)
    userInfo.push(form.idade.value)
    userInfo.push(form.cargo.value)

    let seApresntar = `
      <section class="popup">
        <div class="close">
            <div class="closeImg"></div>
        </div>
        <div class="back"> </div>
        <div class="back b1"> </div>
        <div class="back b2"> </div>

        <div class="boxSeApresentar">
            <div class="seApresentar">
                <h1>Deseja se apresentar agora?</h1>
            </div>
        </div>
    </section>
    `

    body.innerHTML = seApresntar +  body.innerHTML


    event.preventDefault()
    
    let boxSeApresentar = document.querySelector(".seApresentar")
    let popup = document.querySelector(".popup")
    
    boxSeApresentar.addEventListener('click', () => {
        console.log('porra')
        userInfo.push(true)
        let função = `
        <div class="close">
            <div class="closeImg"></div>
        </div>
        <div class="back"> </div>
        <div class="back b1"> </div>
        <div class="back b2"> </div>

        <div class="cargo2">
            <h1 class="tittle-1">Qual sua Função?</h1>
            <div class="selectCargo">
                <div class="gerente">
                    <h1 class="porra">gerente</h1>
                </div>
                <div class="programador">
                    <h1>programador</h1>
                </div>
            </div>
            </div>
            `
            
            popup.innerHTML = função
            console.log(userInfo[3])
            
            let gerente =  document.querySelector(".gerente")
            let programador = document.querySelector(".programador")
            gerente.addEventListener('click', ()=>{
                userInfo.push("gerente")
                let setor = `
                    <div class="close">
                    <div class="closeImg"></div>
                </div>
                <div class="back"> </div>
                <div class="back b1"> </div>
                <div class="back b2"> </div>
        
        
                <div class="setor">
                    <form class="formSetor" action="/">
                        <h1 class="tittle-">Qual ${userInfo[4]=="programador" ? "sua linguagem de programação":"seu setor"}?</h1>
                        <input type="text" placeholder="digite ${userInfo[4]=="programador" ? "sua linguagem de programação":"seu setor"}" name="setor" id="setor" required>
                        <button type="submit" class="setorbt">Enviar</button>
                    </form>
                </div>
                `
                irPraSetor(setor)
    
    
                
            })
            programador.addEventListener('click', ()=>{
                userInfo.push("programador")
                let setor = `
                    <div class="close">
                    <div class="closeImg"></div>
                </div>
                <div class="back"> </div>
                <div class="back b1"> </div>
                <div class="back b2"> </div>
        
        
                <div class="setor">
                    <form class="formSetor" action="/">
                        <h1 class="tittle-">Qual ${userInfo[4]=="programador" ? "sua linguagem de programação":"seu setor"}?</h1>
                        <input type="text" placeholder="digite ${userInfo[4]=="programador" ? "sua linguagem de programação":"seu setor"}" name="setor" id="setor" required>
                        <button type="submit" class="setorbt">Enviar</button>
                    </form>
                </div>
            `
                irPraSetor(setor)
            })



            console.log(userInfo[4])



           
        function irPraSetor(setor){
            popup.innerHTML = setor
            let  formSetor = document.querySelector(".formSetor")
            formSetor.addEventListener('submit', (event) => {

                userInfo.push(formSetor.setor.value)
                
                event.preventDefault()
                irParaTimer()
                
        })}
        
        






        function irParaTimer(){
            
            // excrever a partir daquiiiiiiiiiiiiiiii
            let usuário
            
            if(userInfo[4]=="programador"){
                try {
                    usuário = new  Desenvolvedor(userInfo[0], userInfo[1], userInfo[2], userInfo[5])
                    
                } catch (error) {
                    window.prompt(error.message)
                }
                
            }
            else{
                try {
                    usuário = new Gerente(userInfo[0], userInfo[1], userInfo[2], userInfo[5])
                    
                } catch (error) {
                    window.prompt(error.message)

                }
            }
            if(userInfo[3] ){
                usuário.seApresentar()
            }

            let timer = `
            <div class="timer">
                <h1 id="tittleTime">Horas Trabalhadas</h1>
                <h1 class="horas">10:50</h1>
            </div>
            <div class="trabalhar">
                <div class="desgraça">
    
                    <div class="start" id="porra">
                        <h1>${usuário instanceof Gerente ? 'Começar a gerenciar':'Começar a programar'}</h1>
                    </div>

                </div>
            </div>
            `
            popup.classList.add("popup2")
            popup.classList.remove("popup")
            popup.innerHTML = timer









            let iniciarContador = document.querySelector('.start')
            let iniciarContadorH1 = document.querySelector('.start h1')
            let horas = document.querySelector('.horas')
            horas.textContent = `00:00`
            iniciarContador.addEventListener('click', ()=>{

                iniciarContador.classList.add("start2")
                iniciarContadorH1.textContent = "Parar"


                
                
                
                console.log("iniciar contador", iniciarContador)

                
                console.log(iniciarContadorH1.textContent)
                document.querySelector('#tittleTime').id ='tittleTime2'
                document.querySelector('.horas').classList.add('horas2')
                document.querySelector('.trabalhar').classList.add('trabalhar2')
                document.querySelector('.popup2').classList.add('popup22')



                function imprimirHora(minutos,segundos, horasCorridas){

                    let minutosCorridasFormatado = String(minutos).padStart(2, '0');
                    let segundosCorridasFormatado = String(segundos).padStart(2, '0');
                    let horasCorridasFormatado = String(horasCorridas).padStart(2, '0');

                    if (horasCorridas>0){
                        horas.textContent = `${horasCorridasFormatado}:${minutosCorridasFormatado}:${segundosCorridasFormatado}`

                    }else{

                        horas.textContent = `${minutosCorridasFormatado}:${segundosCorridasFormatado}`
                    }

                }

                let minutosCorridas = 0


                let segundosCorridas = 0

                let horasCorridas = 0

                
                
                let i1 = setInterval(()=>{
                    
                    segundosCorridas+=1
                    imprimirHora(minutosCorridas,segundosCorridas,horasCorridas)

                    
                }, 1000)

                
                
                let i2 = setInterval(()=>{
                    
                    minutosCorridas+=1
                    segundosCorridas  = 0

                    imprimirHora(minutosCorridas,segundosCorridas,horasCorridas)

                    
                }, 60000)

                
                
                let i3 = setInterval(()=>{
                    horasCorridas +=1

                    minutosCorridas= 0
                    segundosCorridas  = 0

                    imprimirHora(minutosCorridas,segundosCorridas,horasCorridas)

                    
                }, 3600000)
                




                // document.querySelector('.desgraça').addEventListener('click',()=>{
                //     console.log('desgraçaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                //     // // clearInterval(i1)
                //     // // clearInterval(i2)
                //     // // clearInterval(i3)
                //     // // imprimirHora(minutosCorridas,segundosCorridas,horasCorridas)
                //     // // document.querySelector('.lembretesMsg').textContent = `Parábens ${userInfo[0]}, ótimo trabalho, nos vemos amanhã, lembre de checar se fechou os armários na copa!`
                    
                //  }, {once:true})



                 document.querySelector(".trabalhar").innerHTML += `
                                 <h2 class="lembretesMsg">${usuário.trabalhar()} <br>${usuário instanceof Gerente ? usuário.gerenciar():usuário.programar()}</h2>
                                 `

                 
                 
                 
                 

            }, {once:true})










        }






















    
    })
})
