var app = new Vue({
    el: '#app',
    data: {
        joueurs: [{
            nom: 'Anne-Gaëlle',
            points: 0,
            edit: false
        }, {
            nom: 'Anthony',
            points: 0,
            edit: false
        }, {
            nom: 'Aurélia',
            points: 0,
            edit: false
        }, {
            nom: 'Clarence',
            points: 0,
            edit: false
        }, {
            nom: 'Héva',
            points: 0,
            edit: false
        }
        ],
        element:'',
    },
    mounted() {
        if (localStorage.getItem('joueurs')) { // Initie la sauvegarde
            try {
                this.joueurs = JSON.parse(localStorage.getItem('joueurs'));
            } catch (g) {
                localStorage.removeItem('joueurs');
            }
        }
    },
    methods: {
        addJoueur: function (e) { // Ajoute dynamiquement à l'array donc à la liste
            this.joueurs.push({
                nom: e,
                points: 0,
                edit: false
            });
            this.element = ''; // Clear form après envoi
        },
        removeJoueur: function (e) { // Fonction pour enlever un item
            this.joueurs.splice(this.joueurs.indexOf(e), 1);
        },
        resetPoints: function (e) {
            this.joueurs.forEach(element => {
                element.points = 0
            });
        },
        resetJoueurs: function (e) {
            this.joueurs = [];
        },
        saveJoueurs() { // Sauvegarde dans le JSON - local storage
            const parsed = JSON.stringify(this.joueurs);
            localStorage.setItem('joueurs', parsed);
        }
    },
    // computed: {
    //     count() { // Renvoie un compteur de tâches non complétées
    //         return this.joueurs.filter(joueur => !joueur.completed).length;
    //     }
    // },
});