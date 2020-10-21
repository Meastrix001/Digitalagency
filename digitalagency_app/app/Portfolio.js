 const bigDevider = "============================================================================="
 const smallDevider = "---------------------------------------------------------------------------------"

 function viewsAndLikes() {
     const views = Math.floor(Math.random() * 1000);
     const likes = Math.floor(Math.random() * 300);
     return `
    Views: ${views} 
    Likes: ${likes}`;
 };

 function createdAndModifiedAt() {
     const createdAt = new Date(1602885600000);
     const modifiedAt = new Date(1603178266403);
     const currentTime = new Date(Date.now())
     return `
    Created at: ${createdAt}
    Modified at: ${modifiedAt}
    Current time: ${currentTime}
    `
 };


 const project1 = [{
     Title: 'Project 1: 404-DESIGN CHALLENGE THEMA CORONA',
     synopsis: 'Studenten kregen als rush-opdracht ( van 3 uur) een 404-pagina te ontwerpen in team met als thema corona',
     thumbnailUrl: "https://dl.airtable.com/.attachments/0b20453d11902108a1ab4eabc9e65501/3e0421ec/Tim.png",
     liViews: (viewsAndLikes()),
     dates: (createdAndModifiedAt())
 }];



 const assetsProject1 = [{
         asset: ['404 Annick not found \n',
             '\t\thttps://dl.airtable.com/.attachments/47e4b4d250fb9a1ff49e997f3578b6dc/5243b78f/Annick.png',
         ]
     },
     {
         asset: ['404 tim not found \n',
             '\t\thttps://dl.airtable.com/.attachments/0b20453d11902108a1ab4eabc9e65501/3e0421ec/Tim.png',
         ]
     },
     {
         asset: ['404 Evelien not found \n',
             '\t\thttps://dl.airtable.com/.attachments/913de317fa84181d328e2a60c226dada/1de2d2e4/Evelien.png',
         ]
     },
 ]

 const project2 = [{
     Title: 'Project 2: SHARETEVELDE',
     synopsis: 'Hoe kunnen we in tijden van corona aan de hand van een webapplicatie toch',
     thumbnailUrl: "https://dl.airtable.com/.attachments/2e7bdd9a37dc4a4242ecc8e1f35b0ddc/fdd1ad46/Screenshot_2020-05-24ReactApp4.png",
     liViews: (viewsAndLikes()),
     dates: (createdAndModifiedAt())
 }];

 
 const assetsProject2 = [{
    asset: ['Nieuwe Post \n',
        '\t\thttps://dl.airtable.com/.attachments/9950706ca2ac47e4f7d6594e42325422/bc603b78/Screenshot_2020-05-24ReactApp6.png',
    ]
},
{
    asset: ['Design Proces \n',
        '\t\thttps://dl.airtable.com/.attachments/0950324598e5c50f4015979654f20163/f2a25ce0/Screenshot_2020-05-24ReactApp1.png',
    ]
},
{
    asset: ['Photoshop Collage \n',
        '\t\thttps://dl.airtable.com/.attachments/fa66c8d53b164e4af522735232d136de/4631ce0c/Screenshot_2020-05-24ReactApp1.jpg',
    ]
},
]






 let portfolioTitle = `
    =============================================================================
    |                               Portfolio                                   |
    ============================================================================= `;
 project1.forEach(function (assli, index) {
     portfolioTitle += `
    ${assli.Title}
    ${bigDevider}\n`
    portfolioTitle += `
    Synopsis :${assli.synopsis} \n Thumbnail URl: ${assli.thumbnailUrl} \n ${assli.liViews} \n ${assli.dates}`;
 });



 let loopTroughAssets1 = `
    ${smallDevider}\n
    Assets\n
    ${smallDevider} `;
 assetsProject1.forEach(function (asspro1, index) {
     loopTroughAssets1 += `
     Asset ${index +1}:\t${asspro1.asset} 
    `
 })


 let loopTroughAssets2 = `
    ${smallDevider}
    Assets
    ${smallDevider} `;
 assetsProject2.forEach(function (assproject2, index) {
     loopTroughAssets2 += `
     Asset ${index +1}:\t${assproject2.asset} 
`
 })
let project2Info = ``;
 project2.forEach(function (assli, index) {
     project2Info = `
     ${bigDevider}\n
     ${assli.Title}\n
     ${bigDevider}`
    project2Info += `
    Synopsis :${assli.synopsis}\n    Thumbnail URl: ${assli.thumbnailUrl} \n ${assli.liViews} \n ${assli.dates}`;;
});
 



 const digitalAgencyPrintOut =
     `
    ${portfolioTitle}
    ${loopTroughAssets1}
    ${project2Info}
    ${loopTroughAssets2}
    `;

    
 console.log(digitalAgencyPrintOut)