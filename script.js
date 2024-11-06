const golsCtx = document.getElementById('golsChart').getContext('2d');
const golsChart = new Chart(golsCtx, {
    type: 'bar',
    data: {
        labels: ['Palmeiras', 'Flamengo', 'Atlético-MG', 'Corinthians', 'São Paulo'],
        datasets: [{
            label: 'Gols',
            data: [45, 52, 39, 34, 29],
            backgroundColor: 'rgba(212, 175, 55, 0.7)',
            borderColor: 'rgba(212, 175, 55, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Gráfico de Posse de Bola Média - Line Chart
const posseCtx = document.getElementById('posseChart').getContext('2d');
const posseChart = new Chart(posseCtx, {
    type: 'line',
    data: {
        labels: ['Rodada 1', 'Rodada 2', 'Rodada 3', 'Rodada 4', 'Rodada 5', 'Rodada 6'],
        datasets: [{
            label: 'Palmeiras',
            data: [60, 55, 62, 58, 57, 63],
            borderColor: 'rgba(0, 100, 0, 1)',
            backgroundColor: 'rgba(0, 100, 0, 0.2)',
            borderWidth: 2
        }, {
            label: 'Flamengo',
            data: [55, 57, 60, 58, 56, 59],
            borderColor: 'rgba(34, 139, 34, 1)',
            backgroundColor: 'rgba(34, 139, 34, 0.2)',
            borderWidth: 2
        }, {
            label: 'Atlético-MG',
            data: [50, 52, 54, 53, 55, 56],
            borderColor: 'rgba(154, 205, 50, 1)',
            backgroundColor: 'rgba(154, 205, 50, 0.2)',
            borderWidth: 2
        }, {
            label: 'Corinthians',
            data: [48, 49, 47, 52, 51, 50],
            borderColor: 'rgba(85, 107, 47, 1)',
            backgroundColor: 'rgba(85, 107, 47, 0.2)',
            borderWidth: 2
        }, {
            label: 'São Paulo',
            data: [45, 46, 47, 48, 50, 49],
            borderColor: 'rgba(107, 142, 35, 1)',
            backgroundColor: 'rgba(107, 142, 35, 0.2)',
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});