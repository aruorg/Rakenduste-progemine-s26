//API - tarkvara andmekanja

//Fetch on andmete kättesaamiseks ning, et kättesaamine oleks asünkroonne kasutatakse async/await-i
//await ootab kuni API annab vastuse

// response.ok - kontrollib kas API andis vastuse

// useEffect-i kasutatakse, et ühendada tarkvara väliste komponentidega nt API, andmebaasid
//Selleks kasutatakse dependenceid (mõjutavad millal useEffecti kutsutakse)

//async/awaiti on try, catch(errorid) ja finally(mittevajalike funktsioonide puhastamiseks)
//[] kerge viis hoida ära mitmekordseid requste, kutsuda useEffecti ainult esimesel laadimisel

//vale dependency võib panna programmi korduvaid requeste tegema
//cleanup lõpetab või eemaldab effecti poolt loodud tegevusi (timer v even listener)
//kui state on tühi näidatakse nt Loading ja kui andmed tulevad uuendatatkse state-i success/empty state, kui midagi läks valesti antakse error

//API requste on võimalik panna eraldi service failidesse, mida on võimalik importida ning kasutada neid andmete saamiseks, hoides react komponendid kompaktsena.
