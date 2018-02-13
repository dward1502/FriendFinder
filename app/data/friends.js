
var friends = [
    {
        name: "Thor",
        photo: "https://vignette.wikia.nocookie.net/marvelmovies/images/c/c5/Avengers_age_of_ultron_thor-art.jpg/revision/latest/scale-to-width-down/280?cb=20160512192534",
        scores:[5,1,4,4,5,3,1,2,5,2]   
    },
    {
        name: "Joker",
        photo: "http://static.tvtropes.org/pmwiki/pub/images/joker_copy_4176.jpg",
        scores: [2,5,1,1,3,1,5,2,2,1]
    },
    {
        name: "Loki",
        photo: "https://vignette.wikia.nocookie.net/villains/images/4/4e/Loki_MCU.jpg/revision/latest?cb=20171203205140",
        scores: [2,5,2,1,1,1,5,2,1,1]
    },
    {
        name: "Batman",
        photo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Batman_Detective_Comics_Vol_2_1.png/250px-Batman_Detective_Comics_Vol_2_1.png",
        scores: [5,2,4,5,2,4,1,1,5,3]
    },
    {
        name: "Iron Man",
        photo: "https://static1.squarespace.com/static/583c906ebe659429d1106265/t/5935941859cc687293cd3f6b/1496683572683/",
        scores: [5,1,4,3,1,3,2,5,5,4]
    },
    {
        name: "Vision",
        photo: "https://i.annihil.us/u/prod/marvel//universe3zx/images/d/de/Vision442.jpg",
        scores: [4,1,3,3,2,5,1,4,5,4]
    },
    {
        name: "Spider Man",
        photo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/21/Web_of_Spider-Man_Vol_1_129-1.png/250px-Web_of_Spider-Man_Vol_1_129-1.png",
        scores: [5,2,4,3,4,5,3,2,4,5]
    },
    {
        name: "Wonder Woman",
        photo: "https://vignette.wikia.nocookie.net/nurdpedia/images/9/93/Wonder_Woman.jpg/revision/latest?cb=20161005003346",
        scores: [4,3,4,4,4,2,2,4,5,4]
    }, {
        name: "Captain America",
        photo: "http://cdn1us.denofgeek.com/sites/denofgeekus/files/styles/article_width/public/2016/05/captain-america-figure_0.png?itok=bfjgROwr",
        scores: [5,1,5,1,5,5,1,5,5,5]
    }, {
        name: "Riddler",
        photo: "http://www.jimcarreyonline.com/images/albums/movies/batmanforever/promotional/batman-promotional05.jpg",
        scores: [2,5,3,1,1,1,5,2,4,1]
    },
];

function checkScore (userInput){
    for(var i = 0; i < friends.length; i ++){
        var scoreArr = friends[i].scores;
        var inputs = [2, 2, 3, 4, 1, 3, 5, 2, 5, 1];

        
        var result = scoreArr.map(function(item,index){
            return Math.abs(item - inputs[index]);
        });
      //  console.log (result);
        var finalScore = result.reduce(function(a,b){ return a + b; }, 0);
       // console.log("Score for each friend : " + finalScore);
        if (finalScore < 10 || finalScore == 0) {
            console.log(finalScore);
        }
    }
    
}
checkScore();