// const mysql = require("mysql")
// const db = mysql.createConnection({
//     host:"sql11.freemysqlhosting.net",
//     user:"sql11490422",
//     password:"ydPrVqNHDf",
//     database:"sql11490422",
//     port: 3306
// })
// db.connect((err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("successfully connected to db")
//     }
// })
let express = require("express")
let app = express()
let cors = require("cors")
app.use(cors())
app.use(express.json())
let countries =  ["Uruguay",
"Paraguay",
"Gambia",
"Djibouti",
"Martinique",
"Guam",
"Georgia",
"United States",
"Belize",
"Mauritius",
"Lebanon",
"Saudi Arabia",
"Ecuador",
"Marshall Islands",
"Brazil",
"Uganda",
"Qatar",
"Timor-Leste",
"Mongolia",
"Chile",
"Liberia",
"Nauru",
"Réunion",
"Montserrat",
"Taiwan",
"Antarctica",
"Saint Pierre and Miquelon",
"Argentina",
"Togo",
"Austria",
"Grenada",
"Faroe Islands",
"Morocco",
"Anguilla",
"Palau",
"Northern Mariana Islands",
"Mauritania",
"Ukraine",
"China",
"Lesotho",
"Cyprus",
"DR Congo",
"Russia",
"Bangladesh",
"South Africa",
"Curaçao",
"Guatemala",
"Puerto Rico",
"Antigua and Barbuda",
"Israel",
"Guyana",
"Cayman Islands",
"Croatia",
"Iceland",
"Caribbean Netherlands",
"Sint Maarten",
"Namibia",
"Dominica",
"Gibraltar",
"Senegal",
"Saint Kitts and Nevis",
"Oman",
"Kuwait",
"Åland Islands",
"United States Virgin Islands",
"Bouvet Island",
"United Kingdom",
"Honduras",
"South Georgia",
"Cambodia",
"North Macedonia",
"Iran",
"Panama",
"Cook Islands",
"Andorra",
"Burundi",
"Trinidad and Tobago",
"Comoros",
"French Southern and Antarctic Lands",
"Kosovo",
"Nigeria",
"Poland",
"Niue",
"New Caledonia",
"Ethiopia",
"Germany",
"Azerbaijan",
"Netherlands",
"France",
"Nepal",
"Barbados",
"Jersey",
"India",
"Kyrgyzstan",
"South Sudan",
"Iraq",
"Italy",
"Cuba",
"Bhutan",
"Bahamas",
"Norway",
"Lithuania",
"Kenya",
"Pitcairn Islands",
"Sweden",
"Guadeloupe",
"Gabon",
"Macau",
"Guernsey",
"Rwanda",
"Syria",
"Canada",
"Algeria",
"British Indian Ocean Territory",
"Western Sahara",
"Isle of Man",
"Botswana",
"Kazakhstan",
"Venezuela",
"French Polynesia",
"Sudan",
"Wallis and Futuna",
"Slovakia",
"Saint Barthélemy",
"Christmas Island",
"Solomon Islands",
"Latvia",
"British Virgin Islands",
"Jamaica",
"Afghanistan",
"Serbia",
"Tajikistan",
"Tonga",
"Kiribati",
"Eritrea",
"Mali",
"Haiti",
"Vanuatu",
"Bosnia and Herzegovina",
"Vatican City",
"Benin",
"Svalbard and Jan Mayen",
"Samoa",
"Bolivia",
"Madagascar",
"São Tomé and Príncipe",
"Bahrain",
"Greece",
"Peru",
"Suriname",
"American Samoa",
"Niger",
"Thailand",
"Tuvalu",
"North Korea",
"Ivory Coast",
"Yemen",
"New Zealand",
"Armenia",
"Pakistan",
"Tokelau",
"Malawi",
"Ireland",
"Philippines",
"Czechia",
"Myanmar",
"Cocos (Keeling) Islands",
"Romania",
"Dominican Republic",
"Equatorial Guinea",
"Ghana",
"Malta",
"Turkey",
"Egypt",
"Mozambique",
"Mayotte",
"Belgium",
"Slovenia",
"Hungary",
"United Arab Emirates",
"Albania",
"Heard Island and McDonald Islands",
"Fiji",
"San Marino",
"Moldova",
"Estonia",
"Saint Vincent and the Grenadines",
"United States Minor Outlying Islands",
"Belarus",
"Sri Lanka",
"El Salvador",
"Australia",
"Bermuda",
"Nicaragua",
"Somalia",
"Turks and Caicos Islands",
"Micronesia",
"Palestine",
"Turkmenistan",
"Burkina Faso",
"Costa Rica",
"Vietnam",
"Cameroon",
"French Guiana",
"Eswatini",
"Zambia",
"Liechtenstein",
"Montenegro",
"Saint Lucia",
"Uzbekistan",
"Chad",
"Aruba",
"Denmark",
"Japan",
"Cape Verde",
"Switzerland",
"Hong Kong",
"Bulgaria",
"Jordan",
"Republic of the Congo",
"Laos",
"Norfolk Island",
"South Korea",
"Tunisia",
"Finland",
"Zimbabwe",
"Maldives",
"Singapore",
"Monaco",
"Angola",
"Malaysia",
"Luxembourg",
"Guinea",
"Libya",
"Spain",
"Indonesia",
"Seychelles",
"Brunei",
"Mexico",
"Saint Helena, Ascension and Tristan da Cunha",
"Sierra Leone",
"Central African Republic",
"Greenland",
"Colombia",
"Papua New Guinea",
"Falkland Islands",
"Portugal",
"Guinea-Bissau",
"Saint Martin",
"Tanzania"]
let referal =  [
    {
        id:1,
        name:"MEM-xKnTo",
        code:"Abnet Abebe Assefa"
    },
    {
        id:2,
        name:"MEM-ZLLgX",
        code:"Addisu Tsegaye Tirfe"
    },
    {
        id:3,
        name:"MEM-ahbWo",
        code:"Wondemagegn Gizachew Tilahun"
    },
    {
        id:4,
        name:"ZLLgX",
        code:"Eskedar Mastaviciene"
    },
    {
        id:5,
        name:"MEM-ahbW4",
        code:"Abenezer Markos"
    },
    {
        id:6,
        name:"MEM-LI3f0",
        code:"yared belay teklu"
    },
    {
        id:7,
        name:"MEM-oekaL",
        code:"Tinsae Markos"
    },
    {
        id:8,
        name:"MEM-xtO6r",
        code:"Meskele Yirgalem Tindash"
    },
    {
        id:9,
        name:"MEM-8UBVL",
        code:"Abebe Lema Tayee"
    },
    {
        id:10,
        name:"MEM-0KSd8",
        code:"Aschalew B Waqjira"
    },
    {
        id:11,
        name:"MEM-YQP2q",
        code:"Samuel Desta"
    },
    {
        id:12,
        name:"MEM-STZml",
        code:"Alta Wolde"
    },
    {
        id:13,
        name:"MEM-S2dkr",
        code:"Gezahegn Talema Badiye"
    },
    {
        id:14,
        name:"MEM-Cbj8Q",
        code:"Zinash Teka Haile"
    },
    {
        id:15,
        name:"MEM-SWdDn",
        code:"Daniel Wolde Hailemariam"
    },
    {
        id:16,
        name:"MEM-R03GR",
        code:"tizita kebede megersa"
    },
    {
        id:17,
        name:"MEM-AWPSu",
        code:"Melese Nigussie Asfaw"
    },
    {
        id:18,
        name:"MEM-09Jp9",
        code:"Dagim Leykun Berhanu"
    },
    {
        id:19,
        name:"MEM-WgRD2",
        code:"redeat tsegaye bekele"
    },
    {
        id:20,
        name:"MEM-4CP2U",
        code:"Betelehem Aligaz Wondwoson"
    },
    {
        id:21,
        name:"MEM-aByyQ",
        code:"Mulugeta A Nigusie"
    },
    {
        id:22,
        name:"MEM-g0ghO",
        code:"Filipos Abraha Tecle"
    },
    {
        id:23,
        name:"MEM-9cFqr",
        code:"Kalkidan Delelegn Abebe"
    },
    {
        id:24,
        name:"MEM-hyWQT",
        code:"shita Sisay Deneke"
    },
    {
        id:25,
        name:"MEM-WrpJw",
        code:"Andualem Abebe Akalewold"
    },
    {
        id:26,
        name:"MEM-nJ63S",
        code:"Netsanet Mekbib"
    },
    {
        id:27,
        name:"MEM-iDkzy",
        code:"Yohannes Fekafeselase Gebrehiwot"
    },
    {
        id:28,
        name:"MEM-VZSMQ",
        code:"Birhanu Areda Beressa"
    },
    {
        id:29,
        name:"MEM-AAmHA",
        code:"Tebaki Melak Birhanu"
    },
    {
        id:30,
        name:"MEM-TdTFx",
        code:"Iffa D Wolkaba"
    },
    {
        id:31,
        name:"MEM-YGQQF",
        code: "SAMSON TSEGAYE BANTYWALU"
    },
    {
        id:32,
        name:"MEM-VrQkZ",
        code:"Ermias Belete Bena"
    },
    {
        id:33,
        name:"MEM-nVfoM",
        code:"Samuel Kebede Gelena"
    },
    {
        id:34,
        name:"MEM-YnQ1q",
        code:"Salim Firew Kebede"
    },
    {
        id:35,
        name:"MEM-CRMsq",
        code:"Hiwot Dagne"
    },
    {
        id:36,
        name:"MEM-L5JWT",
        code:"Girma Jemberu"
    },
    {
        id:37,
        name:"MEM-lqhBc",
        code:"Hiwot Dagne"
    },
    {
        id:38,
        name:"MEM-QwSSH",
        code:"Hanna Gebremedkel Asrst"
    },
    {
        id:39,
        name:"MEM-EYS3u",
        code:"Ashagre Argo Baye"
    },
    {
        id:40,
        name:"MEM-4gEOd",
        code:"Hanna Walelegne Alemu"
    },
    {
        id:41,
        name:"MEM-D5kwE",
        code:"Haileysus Solomon Mengistu"
    },
    {
        id:42,
        name:"MEM-xLovT",
        code:"WOTARO BALTA DANA"
    },
    {
        id:43,
        name:"MEM-nVgAa",
        code:"Moges Wendmu Nigatu"
    },
    {
        id:44,
        name:"MEM-G9fVb",
        code:"Endalkachew Girma Alemu"
    },
    {
        id:45,
        name:"MEM-eGCYZ",
        code:"Abiy Ayalew Admassu"
    },
    {
        id:46,
        name:"MEM-xLkYT",
        code:"Beyene Neguse Dabi"
    },
    {
        id:47,
        name:"MEM-aB7f9",
        code:"Micheal Berhanu Legesse"
    },
    {
        id:48,
        name:"MEM-poSys",
        code:"Biniyam Fitsum"

    },
    {
        id:49,
        name:"MEM-QsWa9",
        code:"Yaregal Tafere Bayih"
    },
    {
        id:50,
        name:"MEM-MdTSn",
        code:"Hailemariam Asres Zeleke"
    },
    {
        id:51,
        name:"MEM-GVn3C",
        code:"Eyob Geremew Bekele"
    },
    {
        id:52,
        name:"MEM-HmqoO",
        code:"Hanibal Girmay"
    },
    {
        id:53,
        name:"MEM-mrndO",
        code:"Mathias Assefa Jember"
    },
    {
        id:54,
        name:"MEM-GLwRU",
        code:"Etagegen Tadesse"
    },
    {
        id:55,
        name:"PBE065",
        code:"TILAHUN WORKU KERCHO"
    },
    {
        id:56,
        name:"MEM-DmiMT",
        code:"Hailemikael Taye"
    },
    {
        id:57,
        name:"MEM-e4Tca",
        code:"Filimon Leul Tesfaye"
    },
    {
        id:58,
        name:"MEM-rq40b",
        code:"Tsegaye Roman Wondafrash"
    },
    {
        id:59,
        name:"MEM-5bqIE",
        code:"Kassahun Goshu Ejigu"
    },
    {
        id:60,
        name:"MEM-78Nwz",
        code:"Zecharias Fassil Berhe"
    },
    {
        id:61,
        name:"MEM-4VNpL",
        code:"Ermyas Kefelegn Adefris"
    },
    {
        id:62,
        name:"MEM-QDIMa",
        code:"Meron Asgedom Gebremeskel"
    },
    {
        id:63,
        name:"MEM-5Ixbk",
        code:"Yonathan Tessema  Ansie"
    },
    {
        id:64,
        name:"MEM-zMiXV",
        code:"Amanuel Godebo Godana"
    },
    {
        id:65,
        name:"MEM-juio6",
        code:"Mahlet Gashaw Addise"
    },
    {
        id:66,
        name:"MEM-ymoZe",
        code:"Faka Meeret"
    },
    {
        id:67,
        name:"MEM-f7HJu",
        code:"Biniyam Mulatu Zeleke"
    },
    {
        id:68,
        name:"MEM-Epeic",
        code:"Temesgen Abebe Melaku"
    },
    {
        id:69,
        name:"MEM-yEUjF",
        code:"Selam Asfaw Jemal"
    },
    {
        id:70,
        name:"MEM-xgwCC",
        code:"Mastewal Solomon Unduche"
    },
    {
        id:71,
        name:"MEM-1C2cU",
        code:"Aklilu Z Eshete"
    },
    {
        id:72,
        name:"MEM-vEIQR",
        code:"Dalmar Hassen Jama"
    },
    {
        id:73,
        name:"MEM-0TNTA",
        code:"Assefa Misgana Talore"
    },
    {
        id:74,
        name:"MEM-kHAtz",
        code:"Tsegahun Admasu Woldearegai"
    },
    {
        id:75,
        name:"MEM-Ymb5o",
        code:"Yoseph Teshome Birhanu"
    },
    {
        id:76,
        name:"MEM-9ZVJ9",
        code:"Samson Ayele Worku"
    },
    {
        id:77,
        name:"MEM-GIC5z",
        code:"Sara Teka Naji"
    },
    {
        id:78,
        name:"MEM-0L6sW",
        code:"Onesimos Gebissa"
    },
    {
        id:79,
        name:"MEM-Tp2ef",
        code:"Shalom Daniel"
    },
    {
        id:80,
        name:"MEM-mtgmT",
        code:"Opiew Olock Opiew"
    },
    {
        id:81,
        name:"MEM-pk2gm",
        code:"Elefenesh Olana Bakere"
    },
    {
        id:82,
        name:"MEM-dBzB4",
        code:"Mahder Mulatu Parviainen"
    },
    {
        id:83,
        name:"MEM-NxERY",
        code:"Kassahun Regassa Tullu"
    },
    {
        id:84,
        name:"MEM-he100",
        code:"ERMIAS MULUGETA BEYENE"
    },
    {
        id:85,
        name:"MEM-k80P9",
        code:"Gashaw Abera Beyene"
    },
    {
        id:86,
        name:"MEM-p4Rtc",
        code:"Simegenew Abebe Shiferaw"
    },
    {
        id:87,
        name:"MEM-SnzPn",
        code:"Habtamu Kassahub Teferra"
    },
    {
        id:88,
        name:"MEM-aLcbD",
        code:"Shimeless Taffesse"
    },
    {
        id:89,
        name:"MEM-PKaCg",
        code:"Fiker Muluneh Terefe"
    },
    {
        id:90,
        name:"MEM-brQvl",
        code:"Redwan Zeynu Berihu"
    },
    {
        id:91,
        name:"MEM-de6pj",
        code:"Bethlehem Bayuh Attifield"
    },
    {
        id:92,
        name:"MEM-bxeft",
        code:"Mikiyas Yohannes Nigussie"
    },
    {
        id:93,
        name:"MEM-kC7fv",
        code:"Yadiel Fisseha Hilawe"
    },
    {
        id:94,
        name:"MEM-Y0I18",
        code:"GIRMA Kebede ERENA"
    },
    {
        id:95,
        name:"MEM-WHs0A",
        code:"Israel Negash"
    },
    {
        id:96,
        name:"MEM-pWJAP",
        code:"SAHLE MEKTIE ZENEBE"
    },
    {
        id:97,
        name:"MEM-1RIpj",
        code:"Beamlak Andualem Yilma"
    },
    {
        id:98,
        name:"MEM-NDu5V",
        code:"Ameran Andualem Yilma"
    },
    {
        id:99,
        name:"MEM-NDu5V",
        code:"Yeshititila Degefu"
    },
    {
        id:100,
        name:"MEM-kpjmS",
        code:"Mekdelawit Tadesse Woldeyohanes"
    },
    {
        id:101,
        name:"MEM-H9Ajg",
        code:"Kuma Kebede Bejiga"
    },
    {
        id:102,
        name:"MEM-KSLIB",
        code:"Habtemariam Fentahun Tarek"
    },
    {
        id:103,
        name:"MEM-GXEyc",
        code:"Abel yohannes"
    },
    {
        id:104,
        name:"MEM-TCyFF",
        code:"Million Moja Timotiwos"
    },
    {
        id:105,
        name:"MEM-Ryfus",
        code:"Anteneh F AFEWORK"
    },
    {
        id:106,
        name:"MEM-3uixl",
        code:"Tadesse Waktola Gamessa"
    },
    {
        id:107,
        name:"MEM-uy3qF",
        code:"Million Kassa"
    },
    {
        id:108,
        name:"MEM-K4drt",
        code:"Bezaye Abera Furno"
    },
    {
        id:109,
        name:"MEM-6t3bS",
        code:"Mekdelawit Tadesse Woldeyohanes"
    },
    {
        id:110,
        name:"MEM-3B4UM",
        code:"Yonas Zeleke Amare"
    },
    {
        id:111,
        name:"MEM-KrLjs",
        code:"Mahlet Mekonnen"
    },
    {
        id:112,
        name:"MEM-5I522",
        code:"Mekdelawit Tadesse Woldeyohanes"
    },
    {
        id:113,
        name:"IPQJb",
        code:"Hayalu Gebremariam Mulat"
    },
    {
        id:114,
        name:"MEM-i9oPW",
        code:"Rahel kifle"
    },
    {
        id:115,
        name:"MEM-7khqk",
        code:"Genene Kabthyimer Hailu"
    },
    {
        id:116,
        name:"MEM-rqhTy",
        code:"Besufikad Girma Kebede"
    },
    {
        id:117,
        name:"MEM-p0EmW",
        code:"Mikias Zelalem Anteneh"
    },
    {
        id:118,
        name:"MEM-kOGNZ",
        code:"Worku Teshome Mesele"
    },
    {
        id:119,
        name:"MEM-iDo63",
        code:"ESUENDALE T Gashaw"
    },
    {
        id:120,
        name:"MEM-0JdSO",
        code:"Kefelegn Geremew Hailemariam"
    },
    {
        id:121,
        name:"MEM-sWYpq",
        code:"GEBREKIROS WOLDEMARIYAM"
    },
    {
        id:122,
        name:"MEM-6fcDn",
        code:"Binyam Daniel Berhe"
    },
    {
        id:123,
        name:"MEM-89jD7",
        code:"Daniel Zewdu Teferi"
    },
    {
        id:124,
        name:"MEM-1xDCG",
        code:"Belayhun Aragaw Wolde"
    },
    {
        id:125,
        name:"MEM-kxvou",
        code:"Biinyam Seyoum Tekeste"
    },
    {
        id:126,
        name:"MEM-mYAZ5",
        code:"Yohanis Tulu"
    },
    {
        id:127,
        name:"MEM-USY6r",
        code:"Seid Adem Seid"
    },
    {
        id:128,
        name:"MEM-5jnti",
        code:"Senait Leulseged Molla"
    },
    {
        id:129,
        name:"MEM-8oDDP",
        code:"Ethiomix Trading plc"
    },
    {
        id:130,
        name:"MEM-fG0X8",
        code:"Dawit Kebede"
    },
    {
        id:131,
        name:"MEM-6I4kR",
        code:"Samuel Tesfaye Beshah"
    },
    {
        id:132,
        name:"MEM-bVI1F",
        code:"Mahfuza Ahmed"
    },
    {
        id:133,
        name:"MEM-IYzEN",
        code:"Yosef Seyoum"
    },
    {
        id:134,
        name:"MEM-O9HiA",
        code:"Adamu Mengesha"
    },
    {
        id:135,
        name:"MEM-BUvbl",
        code:"Ketema Kebede"
    },
    {
        id:136,
        name:"MEM-i4bll",
        code:"Kidist Endale"
    },
    {
        id:137,
        name:"MEM-E97Uw",
        code:"Mahder Parviainen"
    },
    {
        id:138,
        name:"MEM-oDSy1",
        code:"Wondwosen Bekele"
    },
    {
        id:139,
        name:"MEM-abMkk",
        code:"Dr. Senait Mario"
    },
    {
        id:140,
        name:"ET30",
        code:"Eskedar Mastaviciene"
    },
    {
        id:141,
        name:"ATL001",
        code:"Yonas Hailu"
    },
    {
        id:142,
        name:"BEI001",
        code:"Tadesse Ataklti Hidmo"
    },
    {
        id:143,
        name:"DAL001",
        code:"Mengistu Humne"
    },
    {
        id:144,
        name:"DEN001",
        code:"Betel Belay"
    },
    {
        id:145,
        name:"DMV001",
        code:"Abdusalam Abajebel"
    },
    {
        id:146,
        name:"DUB001",
        code:"Beletu Tilahun"
    },
    {
        id:147,
        name:"EDM001",
        code:"Samuel"
    },
    {
        id:148,
        name:"FIN001",
        code:"Tessema Asrat"
    },
    {
        id:149,
        name:"GER001",
        code:"Azeb Demeyesus"
    },
    {
        id:150,
        name:"ITA001",
        code:"Mesfin Bekele Kebede"
    },
    {
        id:151,
        name:"LIT001",
        code:"Mulugeta Acahmyeleh Negussie"
    },
    {
        id:152,
        name:"LON001",
        code:"Kongit Girma"
    },
    {
        id:153,
        name:"MEL001",
        code:"Addis Berhanu"
    },
    {
        id:154,
        name:"NAR001",
        code:"Addis Berhe"
    },
    {
        id:155,
        name:"NEW001",
        code:"Tigist Mengesha"
    },
    {
        id:156,
        name:"NEW002",
        code:"Shelly Girma"
    },
    {
        id:157,
        name:"OTT001",
        code:"Million Woldetsadik"
    },
    {
        id:158,
        name:"PEN001",
        code:"Wogayehu Tamerat"
    },
    {
        id:159,
        name:"QAT001",
        code:"Rahel Sisay"
    },
    {
        id:160,
        name:"SAN001",
        code:"Marshet Ketema"
    },
    {
        id:161,
        name:"SEA001",
        code:"Ayele Melese"
    },
    {
        id:162,
        name:"TOR001",
        code:"Teshale Tegegn"
    },
    {
        id:163,
        name:"CHI001",
        code:"Jullias Mohammed"
    },
    {
        id:164,
        name:"WIN001",
        code:"Ermias Bekele"
    },
    {
        id:165,
        name:"MIC001",
        code:"Prof. Zenebe Kinfu"
    },
    {
        id:166,
        name:"LAS001",
        code:"Berhanu kibebew"
    },
    {
        id:167,
        name:"ISR001",
        code:"Yacob Amare"
    },
    {
        id:168,
        name:"MAR001",
        code:"Tesfaye Mekonnen"
    },
    {
        id:169,
        name:"ZUR001",
        code:"Tinbet Habete"
    },
    {
        id:170,
        name:"BER001",
        code:"Yonas Mulugeta Shefaraw"
    },
    {
        id:171,
        name:"SUD001",
        code:"Astatke Belay"
    },
    {
        id:172,
        name:"BEL001",
        code:"Sebrina Ousman"
    },
    {
        id:173,
        name:"ITE001",
        code:"Girma Taffese"
    },
    {
        id:174,
        name:"SYN001",
        code:"Emebet Gemechu Beshada"
    },
    {
        id:175,
        name:"MAR002",
        code:"Sasha Adem"
    },
    {
        id:176,
        name:"RUS001",
        code:"Yiheyis Kebede"
    },
    {
        id:177,
        name:"BTV001",
        code:"Asayehegn Eshetu"
    },
    {
        id:178,
        name:"OHI001",
        code:"Kinfe Zewdie"
    },
    {
        id:179,
        name:"CAL001",
        code:"Tefera Hailu"
    },
    {
        id:180,
        name:"TOR002",
        code:"Amanuel Chala"
    },
    {
        id:181,
        name:"MEL002",
        code:"Henok Tekeste"
    },
    {
        id:182,
        name:"EDM002",
        code:"Dr. Ermiyas Nesibu"
    },
    {
        id:183,
        name:"DMV002",
        code:"Fetsum Sahlemariam Amakelew"
    },
    {
        id:184,
        name:"TOR004",
        code:"Yohanns Zewdie"
    },
    {
        id:185,
        name:"ALB001",
        code:"Yemima Eyob"
    },
    {
        id:186,
        name:"ZUR002",
        code:"Hiwot Alemu"
    },
    {
        id:187,
        name:"BOS001",
        code:"Feven Yohannes"
    },
    {
        id:188,
        name:"PBE073",
        code:"Elen Afework"
    },
    {
        id:189,
        name:"PBE70",
        code:"Rediet Mohammed"
    },
    {
        id:190,
        name:"YUK-001",
        code:"Dagmawi Yaregal"
    },
    {
        id:191,
        name:"PBE009",
        code:"Behailu Mengistu"
    },
    {
        id:192,
        name:"PBE078",
        code:"Kidist Leulseged"
    }
    // ,
    // {
    //     id:193,
    //     name:"IND001"
    // },
    // {
    //     id:194,
    //     name:"pbe079"
    // },
    // {
    //     id:195,
    //     name:"PBE080"
    // },
    // {
    //     id:196,
    //     name:"PBE075"
    // },
    // {
    //     id:197,
    //     name:"PBE089"
    // },
    // {
    //     id:198,
    //     name:"PBE090"
    // },
    // {
    //     id:199,
    //     name:"PBE091"
    // },
    // {
    //     id:200,
    //     name:"PBE092"
    // },
    // {
    //     id:201,
    //     name:"PBE093"
    // },
    // {
    //     id:202,
    //     name:"[object Object]"
    // },
    // {
    //     id:203,
    //     name:"PBESA0028"
    // },
    // {
    //     id:204,
    //     name:"PBESA0030"
    // },
    // {
    //     id:205,
    //     name:"PBESA0029"
    // },
    // {
    //     id:206,
    //     name:"MEM-JGPPY"
    // },
    // {
    //     id:207,
    //     name:"MEM-fojM4"
    // },
    // {
    //     id:208,
    //     name:"MEM-aYFpA"
    // },
    // {
    //     id:209,
    //     name:"MEM-MKbev"
    // },
    // {
    //     id:210,
    //     name:"MEM-73y3A"
    // },
    // {
    //     id:211,
    //     name:"MEM-xfIWB"
    // },
    // {
    //     id:212,
    //     name:"MEM-AeA4J"
    // },
    // {
    //     id:213,
    //     name:"MEM-3iXRA"
    // },
    // {
    //     id:214,
    //     name:"MEM-zxDHz"
    // },
    // {
    //     id:215,
    //     name:"MEM-71sSa"
    // },
    // {
    //     id:216,
    //     name:"MEM-6GeF9"
    // },
    // {
    //     id:217,
    //     name:"MEM-Xjvov"
    // },
    // {
    //     id:218,
    //     name:"MEM-uHLLZ"
    // },
    // {
    //     id:219,
    //     name:"MEM-HMsrA"
    // },
    // {
    //     id:220,
    //     name:"MEM-hoEZS"
    // },
    // {
    //     id:221,
    //     name:"MEM-ylwi2"
    // },
    // {
    //     id:222,
    //     name:"MEM-RggB1"
    // },
    // {
    //     id:223,
    //     name:"MEM-00Piq"
    // },
    // {
    //     id:224,
    //     name:"MEM-b8rp5"
    // },
    // {
    //     id:225,
    //     name:"MEM-OxL3Y"
    // },
    // {
    //     id:226,
    //     name:"MEM-s8x89"
    // },
    // {
    //     id:227,
    //     name:"MEM-TjNse"
    // },
    // {
    //     id:228,
    //     name:"MEM-deD6K"
    // },
    // {
    //     id:229,
    //     name:"MEM-5cJ4p"
    // },
    // {
    //     id:230,
    //     name:"MEM-2311t"
    // },
    // {
    //     id:231,
    //     name:"MEM-T17yn"
    // },
    // {
    //     id:232,
    //     name:"MEM-0NSbN"
    // },
    // {
    //     id:233,
    //     name:"MEM-qZDng"
    // },
    // {
    //     id:234,
    //     name:"MEM-WZpNI"
    // },
    // {
    //     id:235,
    //     name:"MEM-kwMje"
    // },
    // {
    //     id:236,
    //     name:"MEM-8CP61"
    // },
    // {
    //     id:237,
    //     name:"MEM-dwGtc"
    // },
    // {
    //     id:238,
    //     name:"MEM-WMWI6"
    // },
    // {
    //     id:239,
    //     name:"MEM-c0MyV"
    // },
]
app.get("/",(req,res)=>{
    res.json({success : true})
})
app.get("/countries",(req,res)=>{
    res.json({countries})
})
app.get("/referal",(req,res)=>{
    res.json({referal})
})
countries.sort()
console.log(countries)
const PORT = process.env.PORT || 5000
app.listen(PORT)