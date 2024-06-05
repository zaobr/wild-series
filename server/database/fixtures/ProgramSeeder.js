const AbstractSeeder = require("./AbstractSeeder");
const CategorySeeder = require("./CategorySeeder");


class ProgramSeeder extends AbstractSeeder{
    constructor(){
        super({table: "program", truncate: true, dependencies: [CategorySeeder]})
    }

    run(){
        const programs = [
            {
              title: "The Good Place",
              synopsis:
                "À sa mort, Eleanor Shellstrop est envoyée au Bon Endroit, un paradis fantaisiste réservé aux individus exceptionnellement bienveillants. Or Eleanor n'est pas exactement une « bonne personne » et comprend vite qu'il y a eu erreur sur la personne. Avec l'aide de Chidi, sa prétendue âme sœur dans l'au-delà, la jeune femme est bien décidée à se redécouvrir.",
              poster:
                "https://img.betaseries.com/JwRqyGD3f9KvO_OlfIXHZUA3Ypw=/600x900/smart/https%3A%2F%2Fpictures.betaseries.com%2Ffonds%2Fposter%2F94857341d71c795c69b9e5b23c4bf3e7.jpg",
              country: "USA",
              year: 2016,
              category_id: this.getRef("category_Comédie").insertId
            },
            {
              title: "Dark",
              synopsis:
                "Quatre familles affolées par la disparition d'un enfant cherchent des réponses et tombent sur un mystère impliquant trois générations qui finit de les déstabiliser.",
              poster:
                "https://img.betaseries.com/zDxfeFudy3HWjxa6J8QIED9iaVw=/600x900/smart/https%3A%2F%2Fpictures.betaseries.com%2Ffonds%2Fposter%2Fc47135385da176a87d0dd9177c5f6a41.jpg",
              country: "Allemagne",
              year: 2017,
              category_id: this.getRef("category_Science-Fiction").insertId
            },
            {
                title: "The Bear",
                synopsis: "Carmy, un jeune cuisinier gastronomique, revient à Chicago pour reprendre la sandwicherie familiale. Tandis qu'il se bat pour transformer la boutique et devenir un homme meilleur, il travaille aux côtés d'une équipe de cuisiniers mal dégrossis qui se révèle une formidable deuxième famille.",
                poster:
                "https://img.betaseries.com/SCbzy3A_qDv2C1emGQHlzoA6MEE=/600x900/smart/https%3A%2F%2Fpictures.betaseries.com%2Ffonds%2Fposter%2F3347803f6bea1552c9b177d0f5905f96.jpg",
                country: "USA",
                year: 2022,
                category_id: this.getRef("category_Drame").insertId
            },
            {
                title: "Sons Of Anarchy",
                synopsis:
                "Afin de protéger leur ville des dealers et des entrepreneurs locaux, les membres d'un club de motos sont prêts à tout. Dans ce contexte critique, Jax Teller est partagé entre l'amour qu'il porte à sa confrérie et l'appréhension grandissante qu'il nourrit en voyant l'anarchie et le banditisme qui règne dans son club...",
                poster:
                "https://img.betaseries.com/gLodokXoUd1Y_pVhPwCN7IGI0mI=/600x900/smart/https%3A%2F%2Fpictures.betaseries.com%2Ffonds%2Fposter%2Ffc6bb86a65db9ad28f6a7335684ebd7b.jpg",
                country: "USA",
                year: 2008,
                category_id: this.getRef("category_Crime").insertId
            },
            {
                title: "Slam Dunk",
                synopsis:
                "Sakuraki Hanamichi, avec ses cheveux rouges et son imposante taille (un mètre quatre-vingt dix), débarque dans le lycée de Shohoku, traînant derrière lui son image de mauvais garçon. Il souhaite démarrer la nouvelle année sur de bonnes bases, surtout d'un point de vue sentimental, histoire de mettre fin à la longue série d'échecs amoureux qu'il endure depuis trop longtemps et qui fait l'objet de brimades incessantes. C'est en voyant une autre lycéenne du nom de Haruko Akagi que Sakuragi retrouve espoir. Malheureusement pour lui, elle semble intéressée par un certain Rukawa, un joueur de basket-ball qui la fascine depuis le collège. En effet, Haruko aime le basket et convainc sans mal Sakuragi, avec son physique hors-normes, d'y jouer. Rapidement, notre héros va devoir apprendre toutes les bases de ce sport, afin d'intégrer le club du lycée et montrer à Haruko qu'il vaut mieux que son rival mais non moins coéquipier Rukawa...",
                poster:
                "https://img.betaseries.com/KBRxaIrCvac6XuYbpkOqYlyzB3c=/600x900/smart/https%3A%2F%2Fpictures.betaseries.com%2Ffonds%2Fposter%2Fe02b61b822398b4de9f873d23f111087.jpg",
                country: "Japon",
                year: 1993,
                category_id: this.getRef("category_Animation").insertId
            }
          ];

        programs.forEach((program) => {
            this.insert(program);
        })
    }
}

module.exports = ProgramSeeder;