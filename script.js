// Dados para o gráfico de barras (Vendas)
const barData = {
    labels: ['10 anos', '11 anos', '12 anos', '13 anos', '14 anos'],
    datasets: [{
        label: 'Alunos(as)',
        data: [3, 126, 18, 6, 1],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
    }]
};

// Dados para o gráfico de barras (Contagem de Alunos)
const genderData = {
    labels: ['Alunos', 'Alunas'],
    datasets: [
        {
            label: 'Feminino',
            data: [null,292],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        },
        {
            label: 'Masculino',
            data: [322,null],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }
    ]
};

// Dados para o gráfico de pizza

const pieData = {
    labels: ['Feminino','Masculino'],
    datasets: [{
        label: '%',
        data: [48.91,51.09],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)'
        ],
        borderWidth: 1
       
    }]
};

// Configurações do gráfico de barras (Vendas)
const barConfig = {
    type: 'bar',
    data: barData,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};

// Configurações do gráfico de barras (Contagem de Alunos)
const genderConfig = {
    type: 'bar',
    data: genderData,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};

// Configurações do gráfico de pizza
const pieConfig = {
    type: 'line',
    data: pieData,
    options:{}

};

// Inicialização dos gráficos
window.onload = function() {
    const barCtx = document.getElementById('barChart').getContext('2d');
    new Chart(barCtx, barConfig);

    const genderCtx = document.getElementById('genderChart').getContext('2d');
    new Chart(genderCtx, genderConfig);

    const pieCtx = document.getElementById('pieChart').getContext('2d');
    new Chart(pieCtx, pieConfig);
};