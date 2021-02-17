export let parametersData = [
    "sample name",
    "sample code"
];

export let materialsData = [
    {materialName: "Gd", imgLink: "https://bvb-alyans.ru/media/uploads/images/gadolinij.jpg"},
    {materialName: "Fe", imgLink: ""},
    {materialName: "FeNi", imgLink: ""}
];

export let propertiesData = [
    {quantity: "Mass", unit: "g"},
    {quantity: "Volume", unit: "cm3"},
    {quantity: "Density", unit: "g/cm3"},
    {quantity: "Capacity", unit: "J/K"}
];

export let quantityData = [
    {
        quantity: "m(T, H)",
        imglink: "https://lh3.googleusercontent.com/proxy/Ywoha0otSW2OUkRRTxXtvVGy6BS7reyvC6EWkjrupzPfDdcibepYIFjkd_jVql-_OrARJNLLrUhROTAbk4tkNPPlhuv6-h3VwhQdfyQ8BEk8AkOeYJZHMAzHSrpiZg"
    },
    {
        quantity: "dSm(T, H)",
        imglink: "data:image/png;base64,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"
    },
    {
        quantity: "RC(H)",
        imglink: "https://www.researchgate.net/publication/314490940/figure/fig11/AS:668910663761935@1536492138866/its-shows-that-the-increase-in-refrigeration-capacity-with-a-mixture-refrigerant.png"
    }
];

export let dialoguesData = [
    {
        companionInfo: {
            id: "1",
            companionName: "Svalov",
            status: "last seen at 12:52",
            avaImgLink: "https://static.wikia.nocookie.net/zlodei/images/a/aa/1432627351_1936360012.jpg/revision/latest/top-crop/width/360/height/450?cb=20161101050024&path-prefix=ru"
        },
        messagesData: [
            {id: "1", messageText: "Даров", author: "Svalov", sendingTime: "06:56"},
            {id: "2", messageText: "Хаюшки", author: "me", sendingTime: "06:59"},
            {id: "3", messageText: "Че как?", author: "Svalov", sendingTime: "07:12"},
            {id: "4", messageText: "Да норм)", author: "me", sendingTime: "07:13"}
        ]
    },
    {
        companionInfo: {
            id: "2",
            companionName: "Putin",
            status: "never been online",
            avaImgLink: "https://www.pnp.ru/upload/entities/2020/05/11/article/detailPicture/fd/76/02/05/a4ce68fe529236011ef3b3bfdf7827bc.jpg"
        },
        messagesData: [
            {id: "1", messageText: "Привет", author: "Putin", sendingTime: "--:--"},
            {id: "2", messageText: "Хаюшки", author: "me", sendingTime: "13:42"},
            {id: "3", messageText: "Как жизнь?", author: "Putin", sendingTime: "--:--"},
            {id: "4", messageText: "За Вами следят :)", author: "Putin", sendingTime: "--:--"},
            {id: "5", messageText: "Ну ты охуел, пидор", author: "me", sendingTime: "13:45"}
        ]
    },
];

export let linksData = [
    {url: "/main", label: "Main"},
    {url: "/messenger", label: "Messenger"},
    {url: "/ferromagnet", label: "Ferromagnet"},
    {url: "/antiferromagnet", label: "Antiferromagnet"},
    {url: "/ferrimagnet", label: "Ferrimagnet"},
    {url: "/about", label: "About"},
    {url: "/language_settings", label: "Language settings"},
    {url: "/exit", label: "Exit"}
];


export let imgLinksData = {
    mainLogo: "https://km.insma.urfu.ru/documents/logotype/cm_544x250.png"
}
