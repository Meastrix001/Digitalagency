const bigDevider = "============================================================================="
const smallDevider = "---------------------------------------------------------------------------------"

function viewsAndLikes() {
  const views = Math.floor(Math.random() * 33000);
  const likes = Math.floor(Math.random() * 7000);
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

const assetsNews1 = [{
  Author: 'Xmenno',
  Comment: ['*\n',
      '\t\t',
  ]
},
{
  Author: 'Xmenno',
  Comment: ['*Dit is eigenlijk helemaal niks voor een Tweakers publiek als ik de reacties hier bekijk, vergelijken met een iPhone etc...  gaat om een camera voor (semi) professionele productie. \nDe BNC aansluiting is eigenlijk 3G-SDI, dit vind je normaal terug op broadcast (TV) grade apparatuur. \nWaarbij je kunt schakelen tussen meerdere bronnen, de kleur live bij kunt stellen zodat alle cameras er hetzelfde uit zien, multiviewers, encoders etc... \nHDMI is leuk want daarmee kun je het ook gebruiken voor een goedkopere ATEM Mini en voor weinig een professionele setup maken voor bijvoorbeeld je eigen show op YouTube of video conference.\n Hij doet ook Desqueezed Anamorphic en dat is weet iets wat je in films en series terug vind. \nEr kan een XLR microfoon worden aangesloten waarmee audio dan meteen in sync is met je video.'

  ]
},
{
  Author: 'Xmenno',
  Comment: ['* \n',
      '\t\t',
  ]
},
]


 const post1 = [{
  Title: 'GROUND2SKY (STUDENT-ONDERNEMER)',
  synopsis: 'Dinsdag 20 februari ging er een workshop rond drones door op onze campus. En welk bedrijf kwam deze workshop geven?',
  body: 'Niemand minder dan onze eigenste GDM-student Tomas Hoste, met zijn bedrijf Ground2Sky.Gelukkig viel het weer mee, waardoor de geïnteresseerde studenten een initiatie “vliegen met drones” konden meevolgen in de gezonde buitenlucht.Hoe ging dat eraan toe? Tomas runt het bedrijf Ground2Sky samen met zijn vader, naast zijn studentenleven. In 2014 werd hij reeds door GoPro geprezen als “video van de dag”, met zijn knappe compilatie van zijn roadtrip door Utah. Iets dat ook de VRT en andere persbedrijven zeker niet ongemerkt voorbij lieten gaan!Je kan zijn voorbije producties volgen via zijn YouTube-kanaal.Naast zijn audiovisuele producties en drones-business, is Tomas ook een fervente reiziger. Zijn roadmaps & blog kan je vinden onder Kalaman Travel.',
  thumbnailUrl: "https://dl.airtable.com/.attachments/c36f9364163442c261e4717af7803c19/47ed76bd/posts_lg_28699109_1989830077937744_5372907581299522850_o.jpg",
  liViews: (viewsAndLikes()),
  dates: (createdAndModifiedAt())
}];

let authorLoop =`
${smallDevider}
Author
${smallDevider}
${assetsNews1.Author}
`



 let newsTitle = `
 =============================================================================
 |                               NEWS                                        |
 ============================================================================= `;
post1.forEach(function (asset, index) {
  newsTitle += `
 ${asset.Title}
 ${bigDevider}\n`
 newsTitle += `
 Synopsis: ${asset.synopsis}\n Body: ${asset.body} \n Thumbnail URl: ${asset.thumbnailUrl} ${asset.liViews}${asset.dates}`;
});

let loopTroughComments1 = `
${smallDevider}
Comments
${smallDevider} `;
assetsNews1.forEach(function (asspro1, index) {
 loopTroughComments1 += `
 *  ${asspro1.Comment} 
`
})

const newsPrintout = 
`
${newsTitle}
${authorLoop}
${loopTroughComments1}

`
console.log(newsPrintout)