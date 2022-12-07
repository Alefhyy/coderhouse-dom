let paragraph = document.getElementsByTagName('p')[0]
paragraph.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit."

const ul1 = document.getElementsByClassName('lista')[0]
const timesDaCopa2022 = [
    {
        nome: 'Brasil',
        pontos: 2,
        vitorias: 2,
        empates: 0,
        derrotas: 1
    },
    {
        nome: 'Holanda',
        pontos: 7,
        vitorias: 2,
        empates: 1,
        derrotas: 0
    },
    {
        nome: 'Estados Unidos',
        pontos: 6,
        vitorias: 1,
        empates: 2,
        derrotas: 0
    },
    {
        nome: 'Bélgica',
        pontos: 7,
        vitorias: 2,
        empates: 0,
        derrotas: 1
    },
    {
        nome: 'Senegal',
        pontos: 4,
        vitorias: 2,
        empates: 0,
        derrotas: 1
    },
    {
        nome: 'Inglaterra',
        pontos: 7,
        vitorias: 2,
        empates: 1,
        derrotas: 0,
    },
    {
        nome: 'Polônia',
        pontos: 4,
        vitorias: 1,
        empates: 1,
        derrotas: 1,
    }
]

for (const time of timesDaCopa2022) {
    const li = document.createElement('li')

    li.innerHTML = `<h2>Time: ${time.nome}</h2>
                    <p>Pontos: ${time.pontos}</p>
                    <p>Vitórias: ${time.vitorias}</p>
                    <p>Empates: ${time.empates}</p>
                    <p>Derrotas: ${time.derrotas}</p>`



    ul1.append(li)


    console.log(`Time: ${time.nome} - Pts: ${time.pontos} - VIT: ${time.vitorias} - E: ${time.empates} - DER: ${time.derrotas}`)
}




const timesEliminados = ['Alemanha', 'Canadá', 'Tunísia', 'Espanha', 'Equador', 'Suíça', 'Japão']

const ul2 = document.getElementsByClassName('lista')[1]

timesEliminados.forEach(times => {
    const li = document.createElement('li')
    li.className = 'times'
    li.innerText = times

    ul2.appendChild(li)
})