//Translation API
var url_part1 = "https://translate.yandex.net/api/v1.5/tr.json/translate?lang=";
var url_part2 = "&format=html&text=";
var url_part3 = "&key=trnsl.1.1.20190123T141845Z.d169317d564a30b5.ac6df98071d1672831e74046ce69de9bdc841937";

//TRANSLATION EU-ALB
var num = 1;
var getALB = document.getElementById("albaniaText");
var textALB = "Albania, on Southeastern Europe’s Balkan Peninsula, is a small country with Adriatic and Ionian coastlines and an interior crossed by the Albanian Alps. The country has many castles and archaeological sites. Capital Tirana centers on sprawling Skanderbeg Square, site of the National History Museum, with exhibits spanning antiquity to post-communism, and frescoed Et’hem Bey Mosque.";
var urlTranslationALB = url_part1 + "en-sq" + url_part2 + document.getElementById("albaniaText").textContent + url_part3;
    function TranslateALB(){
        $.post(urlTranslationALB, function(result){
            var sentence = "";
            for(let i = 0; i < result.text.length; i++){
                sentence += result.text[i] + " ";
            } 
            if(num == 1){
                getALB.innerHTML = sentence;
                num = 0;
            }    
            else{
                getALB.innerHTML = textALB;
                num = 1;
            }
        });
    }

//TRANSLATION EU-ARM
var numARM = 1;
var getARM = document.getElementById("armeniaText");
var textARM = "Armenia is a nation, and former Soviet republic, in the mountainous Caucasus region between Asia and Europe. Among the earliest Christian civilizations, it’s defined by religious sites including the Greco-Roman Temple of Garni and 4th-century Etchmiadzin Cathedral, headquarters of the Armenian Church. Khor Virap Monastery is a pilgrimage site near Mount Ararat, a dormant volcano just across the border in Turkey.";

var urlTranslationARM = url_part1 + "en-hy" + url_part2 + document.getElementById("armeniaText").textContent + url_part3;
function TranslateARM(){
    $.post(urlTranslationARM, function(result){
        var sentence = "";
        for(let i = 0; i < result.text.length; i++){
            sentence += result.text[i] + " ";
        }  
        if(num == 1){
            getARM.innerHTML = sentence;
            num = 0;
        }
        else{
            getARM.innerHTML = textARM;
            num = 1;
        }
    });
}


//TRANSLATION EU-AZE
var numAZE = 1;
var getAZE = document.getElementById("azerbeijanText");
var textAZE = "Azerbaijan, the nation and former Soviet republic, is bounded by the Caspian Sea and Caucasus Mountains, which span Asia and Europe. Its capital, Baku, is famed for its medieval walled Inner City. Within the Inner City lies the Palace of the Shirvanshahs, a royal retreat dating to the 15th century, and the centuries-old stone Maiden Tower, which dominates the city skyline.";

var urlTranslationAZE = url_part1 + "en-az" + url_part2 + document.getElementById("azerbeijanText").textContent + url_part3;
function TranslateAZE(){
    $.post(urlTranslationAZE, function(result){
        var sentence = "";
        for(let i = 0; i < result.text.length; i++){
            sentence += result.text[i] + " ";
        }  
        if(num == 1){
            getAZE.innerHTML = sentence;
            num = 0;
        }
        else{
            getAZE.innerHTML = textAZE;
            num = 1;
        }
    });
}

//TRANSLATION EU-AUS --> Spoken language in Austria- German.
var numAUS = 1;
var getAUS = document.getElementById("austriaText");
var textAUS = "Austria is a German-speaking country in Central Europe, characterized by mountain villages, baroque architecture, Imperial history and rugged Alpine terrain. Vienna, its Danube River capital, is home to the Schönbrunn and Hofburg palaces. It has counted Mozart, Strauss and Freud among its residents. The country’s other notable regions include the northern Bohemian Forest, Traunsee Lake and eastern hillside vineyards.";

var urlTranslationAUS = url_part1 + "en-de" + url_part2 + document.getElementById("austriaText").textContent + url_part3;
function TranslateAUSgermany(){
    $.post(urlTranslationAUS, function(result){
        var sentence = "";
        for(let i = 0; i < result.text.length; i++){
            sentence += result.text[i] + " ";
        }  
        if(num == 1){
            getAUS.innerHTML = sentence;
            num = 0;
        }
        else{
            getAUS.innerHTML = textAUS;
            num = 1;
        }
    });
} 

//TRANSLATION EU-BLR
var numBLR = 1;
var getBLR = document.getElementById("belarusText");
var textBLR = "Belarus, a landlocked country in Eastern Europe, is known for its Stalinist architecture, grand fortifications and primeval forests. In the modern capital, Minsk, the monumental KGB Headquarters loom over Independence Square, while the Museum of the Great Patriotic War commemorates the country’s role in WWII. The capital is also home to many churches, including the neo-Romanesque Church of Saints Simon and Helena.";

function TranslateBLR() {
    var urlTranslationBLR = url_part1 + "en-be" + url_part2 + document.getElementById("belarusText").textContent + url_part3;
    $.post(urlTranslationBLR, function (result) {
        var sentence = "";
        for (let i = 0; i < result.text.length; i++) {
            sentence += result.text[i] + " ";
            console.log(result.text[i]);
        }
        if(num == 1){
            getBLR.innerHTML = sentence;
            num = 0;
        }
        else{
            getBLR.innerHTML = textBLR;
            num = 1;
        }

    });
}

//TRANSLATION EU-BEL --> The most spoken language in Belgium is French.
var numBEL = 1;
var getBEL = document.getElementById("belgiumText");
var textBEL = "Belgium, a country in Western Europe, is known for medieval towns, Renaissance architecture and as headquarters of the European Union and NATO. The country has distinctive regions including Dutch-speaking Flanders to the north, French-speaking Wallonia to the south and a German-speaking community to the east. The bilingual capital, Brussels, has ornate guildhalls at Grand-Place and elegant art-nouveau buildings.";

function TranslateBEL(){
    var urlTranslationBEL = url_part1 + "en-fr" + url_part2 + document.getElementById("belgiumText").textContent + url_part3;
    $.post(urlTranslationBEL, function(result){
        var sentence = "";
        for(let i = 0; i < result.text.length; i++){
            sentence += result.text[i] + " ";
        }  
        if(num == 1){
            getBEL.innerHTML = sentence;
            num = 0;
        }
        else{
            getBEL.innerHTML = textBEL;
            num = 1;
        }
    });
}

//TRANSLATION EU-BIH
var numBIH = 1;
var getBIH = document.getElementById("bosniaText");
var textBIH = "Bosnia and Herzegovina is a country on the Balkan Peninsula in southeastern Europe. Its countryside is home to medieval villages, rivers and lakes, plus the craggy Dinaric Alps. National capital Sarajevo has a well preserved old quarter, Baščaršija, with landmarks like 16th-century Gazi Husrev-bey Mosque. Ottoman-era Latin Bridge is the site of the assassination of Archduke Franz Ferdinand, which ignited World War I.";

var urlTranslationBIH = url_part1 + "en-bs" + url_part2 + document.getElementById("bosniaText").textContent + url_part3;
function TranslateBIH(){
    $.post(urlTranslationBIH, function(result){
        var sentence = "";
        for(let i = 0; i < result.text.length; i++){
            sentence += result.text[i] + " ";
        }  
        if(num == 1){
            getBIH.innerHTML = sentence;
            num = 0;
        }
        else{
            getBIH.innerHTML = textBIH;
            num = 1;
        }
    });
}

//TRANSLATION EU-BGR
var numBGR = 1;
var getBGR = document.getElementById("bulgariaText");
var textBGR = "Bulgaria is a Balkan nation with diverse terrain encompassing Black Sea coastline, a mountainous interior and rivers, including the Danube. A cultural melting pot with Greek, Slavic, Ottoman, and Persian influences, it has a rich heritage of traditional dance, music, costumes, and crafts. At the foot of domed Vitosha mountain is its capital city, Sofia, dating to the 5th century B.C.";

var urlTranslationBGR = url_part1 + "en-bg" + url_part2 + document.getElementById("bulgariaText").textContent + url_part3;
function TranslateBGR(){
    $.post(urlTranslationBGR, function(result){
        var sentence = "";
        for(let i = 0; i < result.text.length; i++){
            sentence += result.text[i] + " ";
        }  
        if(num == 1){
            getBGR.innerHTML = sentence;
            num = 0;
        }
        else{
            getBGR.innerHTML = textBGR;
            num = 1;
        }
    });
}

//TRANSLATION EU-HRV
var numHRV = 1;
var getHRV = document.getElementById("croatiaText");
var textHRV = "Croatia, officially the Republic of Croatia is a country at the crossroads of Central and Southeast Europe, on the Adriatic Sea. It borders Slovenia to the northwest, Hungary to the northeast, Serbia to the east, Bosnia and Herzegovina and Montenegro to the southeast, sharing a maritime border with Italy.";

var urlTranslationHRV = url_part1 + "en-hr" + url_part2 + document.getElementById("croatiaText").textContent + url_part3;
function TranslateHRV(){
    $.post(urlTranslationHRV, function(result){
        var sentence = "";
        for(let i = 0; i < result.text.length; i++){
            sentence += result.text[i] + " ";
        }  
        if(num == 1){
            getHRV.innerHTML = sentence;
            num = 0;
        }
        else{
            getHRV.innerHTML = textHRV;
            num = 1;
        }
    });
}

//TRANSLATION EU-CYP --> The most spoken language in Cyprus is Greek
var numCYP = 1;
var getCYP = document.getElementById("cyprusText");
var textCYP = "Cyprus, officially the Republic of Cyprus, is an island country in the Eastern Mediterranean and the third largest and third most populous island in the Mediterranean, located south of Turkey, west of Syria and Lebanon, northwest of Israel, north of Egypt, and southeast of Greece.";

var urlTranslationCYP = url_part1 + "en-el" + url_part2 + document.getElementById("cyprusText").textContent + url_part3;
function TranslateCYP(){
    $.post(urlTranslationCYP, function(result){
        var sentence = "";
        for(let i = 0; i < result.text.length; i++){
            sentence += result.text[i] + " ";
        }  
        if(num == 1){
            getCYP.innerHTML = sentence;
            num = 0;
        }
        else{
            getCYP.innerHTML = textCYP;
            num = 1;
        }
    });
}

//TRANSLATION EU-CZE
var numCZE = 1;
var getCZE = document.getElementById("czechText");
var textCZE = "The Czech Republic, in Central Europe, is a country that's known for its ornate castles, native beers and long history. Prague, the capital, is home to grand 9th-century Prague Castle, a preserved medieval old town and statue-lined Charles Bridge. Český Krumlov, a small town in the South Bohemia region, is notable for its wealth of Gothic, Renaissance and Baroque buildings, many of which house restaurants and shops.";

var urlTranslationCZE = url_part1 + "en-cs" + url_part2 + document.getElementById("czechText").textContent + url_part3;
function TranslateCZE(){
    $.post(urlTranslationCZE, function(result){
        var sentence = "";
        for(let i = 0; i < result.text.length; i++){
            sentence += result.text[i] + " ";
        }  
        if(num == 1){
            getCZE.innerHTML = sentence;
            num = 0;
        }
        else{
            getCZE.innerHTML = textCZE;
            num = 1;
        }
    });
}

//TRANSLATION EU-DNK
var numDNK = 1;
var getDNK = document.getElementById("denmarkText");
var textDNK = "Denmark is a Scandinavian country comprising the Jutland Peninsula and numerous islands. It's linked to nearby Sweden via the Öresund bridge. Copenhagen, its capital, is home to royal palaces and colorful Nyhavn harbor, plus the Tivoli amusement park and the iconic “Little Mermaid” statue. Odense is writer Hans Christian Andersen’s hometown, with a medieval core of cobbled streets and half-timbered houses.";

var urlTranslationDNK = url_part1 + "en-da" + url_part2 + document.getElementById("denmarkText").textContent + url_part3;
function TranslateDNK(){
    $.post(urlTranslationDNK, function(result){
        var sentence = "";
        for(let i = 0; i < result.text.length; i++){
            sentence += result.text[i] + " ";
        }  
        if(num == 1){
            getDNK.innerHTML = sentence;
            num = 0;
        }
        else{
            getDNK.innerHTML = textDNK;
            num = 1;
        }
    });
}

//TRANSLATION EU-EST
var numEST = 1;
var getEST = document.getElementById("estoniaText");
var textEST = "Estonia, a country in Northern Europe, borders the Baltic Sea and Gulf of Finland. Including more than 1,500 islands, its diverse terrain spans rocky beaches, old-growth forest and many lakes. Formerly part of the Soviet Union, it's dotted with castles, churches and hilltop fortresses. The capital, Tallinn, is known for its preserved Old Town, museums and the 314m-high Tallinn TV Tower, which has an observation deck.";

var urlTranslationEST = url_part1 + "en-et" + url_part2 + document.getElementById("estoniaText").textContent + url_part3;
function TranslateEST(){
    $.post(urlTranslationEST, function(result){
        var sentence = "";
        for(let i = 0; i < result.text.length; i++){
            sentence += result.text[i] + " ";
        }  
        if(num == 1){
            getEST.innerHTML = sentence;
            num = 0;
        }
        else{
            getEST.innerHTML = textEST;
            num = 1;
        }
    });
}

//TRANSLATION EU-FIN
var numFIN = 1;
var getFIN = document.getElementById("finlandText");
var textFIN = "Finland is a Northern European nation bordering Sweden, Norway and Russia. Its capital, Helsinki, occupies a peninsula and surrounding islands in the Baltic Sea. Helsinki is home to the 18th-century sea fortress Suomenlinna, the fashionable Design District and diverse museums. The Northern Lights can be seen from the country's Arctic Lapland province, a vast wilderness with national parks and ski resorts.";

var urlTranslationFIN = url_part1 + "en-da" + url_part2 + document.getElementById("finlandText").textContent + url_part3;
function TranslateFIN(){
    $.post(urlTranslationFIN, function(result){
        var sentence = "";
        for(let i = 0; i < result.text.length; i++){
            sentence += result.text[i] + " ";
        }  
        if(num == 1){
            getFIN.innerHTML = sentence;
            num = 0;
        }
        else{
            getFIN.innerHTML = textFIN;
            num = 1;
        }
    });
}

//TRANSLATION EU-FRA
var numFRA = 1;
var getFRA = document.getElementById("franceText");
var textFRA = "France, in Western Europe, encompasses medieval cities, alpine villages and Mediterranean beaches. Paris, its capital, is famed for its fashion houses, classical art museums including the Louvre and monuments like the Eiffel Tower. The country is also renowned for its wines and sophisticated cuisine. Lascaux’s ancient cave drawings, Lyon’s Roman theater and the vast Palace of Versailles attest to its rich history.";

var urlTranslationFRA = url_part1 + "en-fr" + url_part2 + document.getElementById("franceText").textContent + url_part3;
function TranslateFRA(){
    $.post(urlTranslationFRA, function(result){
        var sentence = "";
        for(let i = 0; i < result.text.length; i++){
            sentence += result.text[i] + " ";
        }  
        if(num == 1){
            getFRA.innerHTML = sentence;
            num = 0;
        }
        else{
            getFRA.innerHTML = textFRA;
            num = 1;
        }
    });
}

//TRANSLATION EU-GEO
var numGEO = 1;
var getGEO = document.getElementById("georgiaText");
var textGEO = "Georgia, a country at the intersection of Europe and Asia, is a former Soviet republic that’s home to Caucasus Mountain villages and Black Sea beaches. It’s famous for Vardzia, a sprawling cave monastery dating to the 12th century, and the ancient wine-growing region Kakheti. The capital, Tbilisi, is known for the diverse architecture and mazelike, cobblestone streets of its old town.";

var urlTranslationGEO = url_part1 + "en-ka" + url_part2 + document.getElementById("georgiaText").textContent + url_part3;
function TranslateGEO(){
    $.post(urlTranslationGEO, function(result){
        var sentence = "";
        for(let i = 0; i < result.text.length; i++){
            sentence += result.text[i] + " ";
        }  
        if(num == 1){
            getGEO.innerHTML = sentence;
            num = 0;
        }
        else{
            getGEO.innerHTML = textGEO;
            num = 1;
        }
    });
}

//TRANSLATION EU-DEU
var numDEU = 1;
var getDEU = document.getElementById("germanyText");
var textDEU = "Germany is a Western European country with a landscape of forests, rivers, mountain ranges and North Sea beaches. It has over 2 millennia of history. Berlin, its capital, is home to art and nightlife scenes, the Brandenburg Gate and many sites relating to WWII. Munich is known for its Oktoberfest and beer halls, including the 16th-century Hofbräuhaus. Frankfurt, with its skyscrapers, houses the European Central Bank.";

var urlTranslationDEU = url_part1 + "en-da" + url_part2 + document.getElementById("germanyText").textContent + url_part3;
function TranslateDEU(){
    $.post(urlTranslationDEU, function(result){
        var sentence = "";
        for(let i = 0; i < result.text.length; i++){
            sentence += result.text[i] + " ";
        }  
        if(num == 1){
            getDEU.innerHTML = sentence;
            num = 0;
        }
        else{
            getDEU.innerHTML = textDEU;
            num = 1;
        }
    });
}

//TRANSLATION EU-GRC
var numGRC = 1;
var getGRC = document.getElementById("greeceText");
var textGRC = "Greece is a country in southeastern Europe with thousands of islands throughout the Aegean and Ionian seas. Influential in ancient times, it's often called the cradle of Western civilization. Athens, its capital, retains landmarks including the 5th-century B.C. Acropolis citadel with the Parthenon temple. Greece is also known for its beaches, from the black sands of Santorini to the party resorts of Mykonos.";

var urlTranslationGRC = url_part1 + "en-el" + url_part2 + document.getElementById("greeceText").textContent + url_part3;
function TranslateGRC(){
    $.post(urlTranslationGRC, function(result){
        var sentence = "";
        for(let i = 0; i < result.text.length; i++){
            sentence += result.text[i] + " ";
        }  
        if(num == 1){
            getGRC.innerHTML = sentence;
            num = 0;
        }
        else{
            getGRC.innerHTML = textGRC;
            num = 1;
        }
    });
}

//TRANSLATION EU-HUN
var numHUN = 1;
var getHUN = document.getElementById("hungaryText");
var textHUN = "Hungary is a landlocked country in Central Europe. Its capital, Budapest, is bisected by the Danube River. Its cityscape is studded with architectural landmarks from Buda’s medieval Castle Hill and grand neoclassical buildings along Pest’s Andrássy Avenue to the 19th-century Chain Bridge. Turkish and Roman influence on Hungarian culture includes the popularity of mineral spas, including at thermal Lake Hévíz.";

var urlTranslationHUN = url_part1 + "en-hu" + url_part2 + document.getElementById("hungaryText").textContent + url_part3;
function TranslateHUN(){
    $.post(urlTranslationHUN, function(result){
        var sentence = "";
        for(let i = 0; i < result.text.length; i++){
            sentence += result.text[i] + " ";
        }  
        if(num == 1){
            getHUN.innerHTML = sentence;
            num = 0;
        }
        else{
            getHUN.innerHTML = textHUN;
            num = 1;
        }
    });
}

//TRANSLATION EU-ISL
var numISL = 1;
var getISL = document.getElementById("icelandText");
var textISL = "Iceland, a Nordic island nation, is defined by its dramatic landscape with volcanoes, geysers, hot springs and lava fields. Massive glaciers are protected in Vatnajökull and Snæfellsjökull national parks. Most of the population lives in the capital, Reykjavik, which runs on geothermal power and is home to the National and Saga museums, tracing Iceland’s Viking history.";

var urlTranslationISL = url_part1 + "en-is" + url_part2 + document.getElementById("icelandText").textContent + url_part3;
function TranslateISL(){
    $.post(urlTranslationISL, function(result){
        var sentence = "";
        for(let i = 0; i < result.text.length; i++){
            sentence += result.text[i] + " ";
        }  
        if(num == 1){
            getISL.innerHTML = sentence;
            num = 0;
        }
        else{
            getISL.innerHTML = textISL;
            num = 1;
        }
    });
}

//TRANSLATION EU-IRL
var numIRL = 1;
var getIRL = document.getElementById("irelandText");
var textIRL = "The Republic of Ireland occupies most of the island of Ireland, off the coast of England and Wales. Its capital, Dublin, is the birthplace of writers like Oscar Wilde, and home of Guinness beer. The 9th-century Book of Kells and other illustrated manuscripts are on show in Dublin’s Trinity College Library. Dubbed the Emerald Isle for its lush landscape, the country is dotted with castles like medieval Cahir Castle.";

var urlTranslationIRL = url_part1 + "en-ga" + url_part2 + document.getElementById("irelandText").textContent + url_part3;
function TranslateIRL(){
    $.post(urlTranslationIRL, function(result){
        var sentence = "";
        for(let i = 0; i < result.text.length; i++){
            sentence += result.text[i] + " ";
        }  
        if(num == 1){
            getIRL.innerHTML = sentence;
            num = 0;
        }
        else{
            getIRL.innerHTML = textIRL;
            num = 1;
        }
    });
}

//TRANSLATION EU-ITA
var numITA = 1;
var getITA = document.getElementById("italyText");
var textITA = "Italy, a European country with a long Mediterranean coastline, has left a powerful mark on Western culture and cuisine. Its capital, Rome, is home to the Vatican as well as landmark art and ancient ruins. Other major cities include Florence, with Renaissance masterpieces such as Michelangelo’s David and Brunelleschi's Duomo; Venice, the city of canals; and Milan, Italy’s fashion capital.";

var urlTranslationITA = url_part1 + "en-it" + url_part2 + document.getElementById("italyText").textContent + url_part3;
function TranslateITA(){
    $.post(urlTranslationITA, function(result){
        var sentence = "";
        for(let i = 0; i < result.text.length; i++){
            sentence += result.text[i] + " ";
        }  
        if(num == 1){
            getITA.innerHTML = sentence;
            num = 0;
        }
        else{
            getITA.innerHTML = textITA;
            num = 1;
        }
    });
}

//TRANSLATION EU-KAZ
var numKAZ = 1;
var getKAZ = document.getElementById("kazakhstanText");
var textKAZ = "Kazakhstan, a Central Asian country and former Soviet republic, extends from the Caspian Sea in the west to the Altai Mountains at its eastern border with China and Russia. Its largest metropolis, Almaty, is a long-standing trading hub whose landmarks include Ascension Cathedral, a tsarist-era Russian Orthodox church, and the Central State Museum of Kazakhstan, displaying thousands of Kazakh artifacts.";

var urlTranslationKAZ = url_part1 + "en-kk" + url_part2 + document.getElementById("kazakhstanText").textContent + url_part3;
function TranslateKAZ(){
    $.post(urlTranslationKAZ, function(result){
        var sentence = "";
        for(let i = 0; i < result.text.length; i++){
            sentence += result.text[i] + " ";
        }  
        if(num == 1){
            getKAZ.innerHTML = sentence;
            num = 0;
        }
        else{
            getKAZ.innerHTML = textKAZ;
            num = 1;
        }
    });
}

//TRANSLATION EU-LVA
var numLVA = 1;
var getLVA = document.getElementById("latviaText");
var textLVA = "Latvia is a country on the Baltic Sea between Lithuania and Estonia. Its landscape is marked by wide beaches as well as dense, sprawling forests. Latvia’s capital is Riga, home to notable wooden and art nouveau architecture, a vast Central Market and a medieval Old Town with St. Peter's Church. Riga's museums include the Latvian Ethnographic Open-Air Museum, showcasing local crafts, food and music.";

var urlTranslationLVA = url_part1 + "en-lv" + url_part2 + document.getElementById("latviaText").textContent + url_part3;
function TranslateLVA(){
    $.post(urlTranslationLVA, function(result){
        var sentence = "";
        for(let i = 0; i < result.text.length; i++){
            sentence += result.text[i] + " ";
        }  
        if(num == 1){
            getLVA.innerHTML = sentence;
            num = 0;
        }
        else{
            getLVA.innerHTML = textLVA;
            num = 1;
        }
    });
}

//TRANSLATION EU-LTU
var numLTU = 1;
var getLTU = document.getElementById("lithuaniaText");
var textLTU = "Lithuania is a country and the southernmost of Europe’s Baltic states, a former Soviet bloc nation bordering Poland, Latvia and Belarus. Its capital, Vilnius, near Belarus' border, is known for its medieval Old Town. It also has Gothic, Renaissance and baroque architecture, and 18th-century cathedral built on a pagan temple site. Hilltop Gediminas' Tower, a symbol of the city and the nation, offers sweeping views.";

var urlTranslationLTU = url_part1 + "en-lt" + url_part2 + document.getElementById("lithuaniaText").textContent + url_part3;
function TranslateLTU(){
    $.post(urlTranslationLTU, function(result){
        var sentence = "";
        for(let i = 0; i < result.text.length; i++){
            sentence += result.text[i] + " ";
        }  
        if(num == 1){
            getLTU.innerHTML = sentence;
            num = 0;
        }
        else{
            getLTU.innerHTML = textLTU;
            num = 1;
        }
    });
}

//TRANSLATION EU-LUX
var numLUX = 1;
var getLUX = document.getElementById("luxembourgText");
var textLUX = "Luxembourg is a small European country, surrounded by Belgium, France and Germany. It’s mostly rural, with dense Ardennes forest and nature parks in the north, rocky gorges of the Mullerthal region in the east and the Moselle river valley in the southeast. Its capital, Luxembourg City, is famed for its fortified medieval old town perched on sheer cliffs.";

var urlTranslationLUX = url_part1 + "en-lb" + url_part2 + document.getElementById("luxembourgText").textContent + url_part3;
function TranslateLUX(){
    $.post(urlTranslationLUX, function(result){
        var sentence = "";
        for(let i = 0; i < result.text.length; i++){
            sentence += result.text[i] + " ";
        }  
        if(num == 1){
            getLUX.innerHTML = sentence;
            num = 0;
        }
        else{
            getLUX.innerHTML = textLUX;
            num = 1;
        }
    });
}

//TRANSLATION EU-MLT
var numMLT = 1;
var getMLT = document.getElementById("maltaText");
var textMLT = "Malta is an archipelago in the central Mediterranean between Sicily and the North African coast. It's a nation known for historic sites related to a succession of rulers including the Romans, Moors, Knights of Saint John, French and British. It has numerous fortresses, megalithic temples and the Ħal Saflieni Hypogeum, a subterranean complex of halls and burial chambers dating to circa 4000 B.C.";

var urlTranslationMLT = url_part1 + "en-mt" + url_part2 + document.getElementById("maltaText").textContent + url_part3;
function TranslateMLT(){
    $.post(urlTranslationMLT, function(result){
        var sentence = "";
        for(let i = 0; i < result.text.length; i++){
            sentence += result.text[i] + " ";
        }  
        if(num == 1){
            getMLT.innerHTML = sentence;
            num = 0;
        }
        else{
            getMLT.innerHTML = textMLT;
            num = 1;
        }
    });
}

//TRANSLATION EU-MDA --> The most spoken language in Moldova is Romanian.
var numMDA = 1;
var getMDA = document.getElementById("moldovaText");
var textMDA = "Moldova, an Eastern European country and former Soviet republic, has varied terrain including forests, rocky hills and vineyards. Its wine regions include Nistreana, known for reds, and Codru, home to some of the world’s largest cellars. Capital Chișinău has Soviet-style architecture and the National Museum of History, exhibiting art and ethnographic collections that reflect cultural links with neighboring Romania.";

var urlTranslationMDA = url_part1 + "en-ro" + url_part2 + document.getElementById("moldovaText").textContent + url_part3;
function TranslateMDA(){
    $.post(urlTranslationMDA, function(result){
        var sentence = "";
        for(let i = 0; i < result.text.length; i++){
            sentence += result.text[i] + " ";
        }  
        if(num == 1){
            getMDA.innerHTML = sentence;
            num = 0;
        }
        else{
            getMDA.innerHTML = textMDA;
            num = 1;
        }
    });
}

//TRANSLATION EU-MNE
var numMNE = 1;
var getMNE = document.getElementById("montenegroText");
var textMNE = "Montenegro is a Balkan country with rugged mountains, medieval villages and a narrow strip of beaches along its Adriatic coastline. The Bay of Kotor, resembling a fjord, is dotted with coastal churches and fortified towns such as Kotor and Herceg Novi. Durmitor National Park, home to bears and wolves, encompasses limestone peaks, glacial lakes and 1,300m-deep Tara River Canyon.";

var urlTranslationMNE = url_part1 + "en-sr" + url_part2 + document.getElementById("montenegroText").textContent + url_part3;
function TranslateMNE(){
    $.post(urlTranslationMNE, function(result){
        var sentence = "";
        for(let i = 0; i < result.text.length; i++){
            sentence += result.text[i] + " ";
        }  
        if(num == 1){
            getMNE.innerHTML = sentence;
            num = 0;
        }
        else{
            getMNE.innerHTML = textMNE;
            num = 1;
        }
    });
}

//TRANSLATION EU-NLD
var numNLD = 1;
var getNLD = document.getElementById("netherlandsText");
var textNLD = "The Netherlands, a country in northwestern Europe, is known for a flat landscape of canals, tulip fields, windmills and cycling routes. Amsterdam, the capital, is home to the Rijksmuseum, Van Gogh Museum and the house where Jewish diarist Anne Frank hid during WWII. Canalside mansions and a trove of works from artists including Rembrandt and Vermeer remain from the city's 17th-century Golden Age.";

var urlTranslationNLD = url_part1 + "en-nl" + url_part2 + document.getElementById("netherlandsText").textContent + url_part3;
function TranslateNLD(){
    $.post(urlTranslationNLD, function(result){
        var sentence = "";
        for(let i = 0; i < result.text.length; i++){
            sentence += result.text[i] + " ";
        }  
        if(num == 1){
            getNLD.innerHTML = sentence;
            num = 0;
        }
        else{
            getNLD.innerHTML = textNLD;
            num = 1;
        }
    });
}

//TRANSLATION EU-NOR
var numNOR = 1;
var getNOR = document.getElementById("norwayText");
var textNOR = "Norway is a Scandinavian country encompassing mountains, glaciers and deep coastal fjords. Oslo, the capital, is a city of green spaces and museums. Preserved 9th-century Viking ships are displayed at Oslo’s Viking Ship Museum. Bergen, with colorful wooden houses, is the starting point for cruises to the dramatic Sognefjord. Norway is also known for fishing, hiking and skiing, notably at Lillehammer’s Olympic resort.";

var urlTranslationNOR = url_part1 + "en-da" + url_part2 + document.getElementById("norwayText").textContent + url_part3;
function TranslateNOR(){
    $.post(urlTranslationNOR, function(result){
        var sentence = "";
        for(let i = 0; i < result.text.length; i++){
            sentence += result.text[i] + " ";
        }  
        if(num == 1){
            getNOR.innerHTML = sentence;
            num = 0;
        }
        else{
            getNOR.innerHTML = textNOR;
            num = 1;
        }
    });
}

//TRANSLATION EU-POL
var numPOL = 1;
var getPOL = document.getElementById("polandText");
var textPOL = "Poland, officially the Republic of Poland, is a country located in Central Europe. It is divided into 16 administrative subdivisions, covering an area of 312,696 square kilometres, and has a largely temperate seasonal climate.";

var urlTranslationPOL = url_part1 + "en-pl" + url_part2 + document.getElementById("polandText").textContent + url_part3;
function TranslatePOL(){
    $.post(urlTranslationPOL, function(result){
        var sentence = "";
        for(let i = 0; i < result.text.length; i++){
            sentence += result.text[i] + " ";
        }  
        if(num == 1){
            getPOL.innerHTML = sentence;
            num = 0;
        }
        else{
            getPOL.innerHTML = textPOL;
            num = 1;
        }
    });
}

//TRANSLATION EU-PRT
var numPRT = 1;
var getPRT = document.getElementById("portugalText");
var textPRT = "Portugal is a southern European country on the Iberian Peninsula, bordering Spain. Its location on the Atlantic Ocean has influenced many aspects of its culture: salt cod and grilled sardines are national dishes, the Algarve's beaches are a major destination and much of the nation’s architecture dates to the 1500s–1800s, when Portugal had a powerful maritime empire.";

var urlTranslationPRT = url_part1 + "en-pt" + url_part2 + document.getElementById("portugalText").textContent + url_part3;
function TranslatePRT(){
    $.post(urlTranslationPRT, function(result){
        var sentence = "";
        for(let i = 0; i < result.text.length; i++){
            sentence += result.text[i] + " ";
        }  
        if(num == 1){
            getPRT.innerHTML = sentence;
            num = 0;
        }
        else{
            getPRT.innerHTML = textPRT;
            num = 1;
        }
    });
}

//TRANSLATION EU-ROU
var numROU = 1;
var getROU = document.getElementById("romaniaText");
var textROU = "Romania is a southeastern European country known for the forested region of Transylvania, ringed by the Carpathian Mountains. Its preserved medieval towns include Sighişoara, and there are many fortified churches and castles, notably clifftop Bran Castle, long associated with the Dracula legend. Bucharest, the country’s capital, is the site of the gigantic, Communist-era Palatul Parlamentului government building.";

var urlTranslationROU = url_part1 + "en-ro" + url_part2 + document.getElementById("romaniaText").textContent + url_part3;
function TranslateROU(){
    $.post(urlTranslationROU, function(result){
        var sentence = "";
        for(let i = 0; i < result.text.length; i++){
            sentence += result.text[i] + " ";
        }  
        if(num == 1){
            getROU.innerHTML = sentence;
            num = 0;
        }
        else{
            getROU.innerHTML = textROU;
            num = 1;
        }
    });
}

//TRANSLATION EU-RUS
var numRUS = 1;
var getRUS = document.getElementById("russiaText");
var textRUS = "Russia, the world’s largest nation, borders European and Asian countries as well as the Pacific and Arctic oceans. Its landscape ranges from tundra and forests to subtropical beaches. It’s famous for Moscow's Bolshoi and St. Petersburg's Mariinsky ballet companies. St. Petersburg, founded by Russian leader Peter the Great, has the baroque Winter Palace, now housing part of the State Hermitage Museum’s art collection.";

var urlTranslationRUS = url_part1 + "en-ru" + url_part2 + document.getElementById("russiaText").textContent + url_part3;
function TranslateRUS(){
    $.post(urlTranslationRUS, function(result){
        var sentence = "";
        for(let i = 0; i < result.text.length; i++){
            sentence += result.text[i] + " ";
        }  
        if(num == 1){
            getRUS.innerHTML = sentence;
            num = 0;
        }
        else{
            getRUS.innerHTML = textRUS;
            num = 1;
        }
    });
}

//TRANSLATION EU-SRB
var numSRB = 1;
var getSRB = document.getElementById("serbiaText");
var textSRB = "Serbia is a country on southeast Europe's Balkan peninsula with northern plateaus and mountains with ski resorts to the south. Capital city Belgrade is home to Communist-era architecture and Kalemegdan Park, site of Belgrade Fortress, held successively by the Roman, Byzantine and Ottoman empires. Stari Grad, the old city, is home to 19th-century mansions, plus opera and ballet at Narodno Pozorište (national theater).";

var urlTranslationSRB = url_part1 + "en-sr" + url_part2 + document.getElementById("serbiaText").textContent + url_part3;
function TranslateSRB(){
    $.post(urlTranslationSRB, function(result){
        var sentence = "";
        for(let i = 0; i < result.text.length; i++){
            sentence += result.text[i] + " ";
        }  
        if(num == 1){
            getSRB.innerHTML = sentence;
            num = 0;
        }
        else{
            getSRB.innerHTML = textSRB;
            num = 1;
        }
    });
}

//TRANSLATION EU-SVK
var numSVK = 1;
var getSVK = document.getElementById("slovakiaText");
var textSVK = "Slovakia is a central European country known for its dramatic natural landscape and many castles. Near the Austrian border, capital city Bratislava features a pedestrian-only Old Town with a lively cafe scene. Rising on a hill above the Danube River, Bratislava Castle houses a branch of the Slovak National Museum, with displays ranging from Roman artifacts to 20th-century arts and crafts.";

var urlTranslationSVK = url_part1 + "en-sk" + url_part2 + document.getElementById("slovakiaText").textContent + url_part3;
function TranslateSVK(){
    $.post(urlTranslationSVK, function(result){
        var sentence = "";
        for(let i = 0; i < result.text.length; i++){
            sentence += result.text[i] + " ";
        }  
        if(num == 1){
            getSVK.innerHTML = sentence;
            num = 0;
        }
        else{
            getSVK.innerHTML = textSVK;
            num = 1;
        }
    });
}

//TRANSLATION EU-SVN
var numSVN = 1;
var getSVN = document.getElementById("sloveniaText");
var textSVN = "Slovenia, a country in Central Europe, is known for its mountains, ski resorts and lakes. On Lake Bled, a glacial lake fed by hot springs, the town of Bled contains a church-topped islet and a cliffside medieval castle. In Ljubljana, Slovenia’s capital, baroque facades mix with the 20th-century architecture of native Jože Plečnik, whose iconic Tromostovje (Triple Bridge) spans the tightly curving Ljubljanica River.";

var urlTranslationSVN = url_part1 + "en-sl" + url_part2 + document.getElementById("sloveniaText").textContent + url_part3;
function TranslateSVN(){
    $.post(urlTranslationSVN, function(result){
        var sentence = "";
        for(let i = 0; i < result.text.length; i++){
            sentence += result.text[i] + " ";
        }  
        if(num == 1){
            getSVN.innerHTML = sentence;
            num = 0;
        }
        else{
            getSVN.innerHTML = textSVN;
            num = 1;
        }
    });
}

//TRANSLATION EU-ESP
var numESP = 1;
var getESP = document.getElementById("spainText");
var textESP = "Spain, a country on Europe’s Iberian Peninsula, includes 17 autonomous regions with diverse geography and cultures. Capital city Madrid is home to the Royal Palace and Prado museum, housing works by European masters. Segovia has a medieval castle (the Alcázar) and an intact Roman aqueduct. Catalonia’s capital, Barcelona, is defined by Antoni Gaudí’s whimsical modernist landmarks like the Sagrada Família church.";

var urlTranslationESP = url_part1 + "en-es" + url_part2 + document.getElementById("spainText").textContent + url_part3;
function TranslateESP(){
    $.post(urlTranslationESP, function(result){
        var sentence = "";
        for(let i = 0; i < result.text.length; i++){
            sentence += result.text[i] + " ";
        }  
        if(num == 1){
            getESP.innerHTML = sentence;
            num = 0;
        }
        else{
            getESP.innerHTML = textESP;
            num = 1;
        }
    });
}

//TRANSLATION EU-SWE
var numSWE = 1;
var getSWE = document.getElementById("swedenText");
var textSWE = "Sweden is a Scandinavian nation with thousands of coastal islands and inland lakes, along with vast boreal forests and glaciated mountains. Its principal cities, eastern capital Stockholm and southwestern Gothenburg and Malmö, are all coastal. Stockholm is built on 14 islands. It has more than 50 bridges, as well as the medieval old town, Gamla Stan, royal palaces and museums such as open-air Skansen.";

var urlTranslationSWE = url_part1 + "en-sv" + url_part2 + document.getElementById("swedenText").textContent + url_part3;
function TranslateSWE(){
    $.post(urlTranslationSWE, function(result){
        var sentence = "";
        for(let i = 0; i < result.text.length; i++){
            sentence += result.text[i] + " ";
        }  
        if(num == 1){
            getSWE.innerHTML = sentence;
            num = 0;
        }
        else{
            getSWE.innerHTML = textSWE;
            num = 1;
        }
    });
}

//TRANSLATION EU-CHE
var numCHE = 1;
var getCHE = document.getElementById("switzerlandText");
var textCHE = "Switzerland is a mountainous Central European country, home to numerous lakes, villages and the high peaks of the Alps. Its cities contain medieval quarters, with landmarks like capital Bern’s Zytglogge clock tower and Lucerne’s wooden chapel bridge. The country is also known for its ski resorts and hiking trails. Banking and finance are key industries, and Swiss watches and chocolate are world renowned.";

var urlTranslationCHE = url_part1 + "en-fr" + url_part2 + document.getElementById("switzerlandText").textContent + url_part3;
function TranslateCHE(){
    $.post(urlTranslationCHE, function(result){
        var sentence = "";
        for(let i = 0; i < result.text.length; i++){
            sentence += result.text[i] + " ";
        }  
        if(num == 1){
            getCHE.innerHTML = sentence;
            num = 0;
        }
        else{
            getCHE.innerHTML = textCHE;
            num = 1;
        }
    });
}

//TRANSLATION EU-TUR
var numTUR = 1;
var getTUR = document.getElementById("turkeyText");
var textTUR = "Turkey is a nation straddling eastern Europe and western Asia with cultural connections to ancient Greek, Persian, Roman, Byzantine and Ottoman empires. Cosmopolitan Istanbul, on the Bosphorus Strait, is home to the iconic Hagia Sophia, with its soaring dome and Christian mosaics, the massive 17th-century Blue Mosque and the circa-1460 Topkapı Palace, former home of sultans. Ankara is Turkey’s modern capital.";

var urlTranslationTUR = url_part1 + "en-tr" + url_part2 + document.getElementById("turkeyText").textContent + url_part3;
function TranslateTUR(){
    $.post(urlTranslationTUR, function(result){
        var sentence = "";
        for(let i = 0; i < result.text.length; i++){
            sentence += result.text[i] + " ";
        }  
        if(num == 1){
            getTUR.innerHTML = sentence;
            num = 0;
        }
        else{
            getTUR.innerHTML = textTUR;
            num = 1;
        }
    });
}

//TRANSLATION EU-UKR
var numUKR = 1;
var getUKR = document.getElementById("ukraineText");
var textUKR = "Ukraine is a large country in Eastern Europe known for its Orthodox churches, Black Sea coastline and forested mountains. Its capital, Kiev, features the gold-domed St. Sophia's Cathedral, with 11th-century mosaics and frescoes. Overlooking the Dnieper River is the Kiev Pechersk Lavra monastery complex, a Christian pilgrimage site housing Scythian tomb relics and catacombs containing mummified Orthodox monks.";

var urlTranslationUKR = url_part1 + "en-uk" + url_part2 + document.getElementById("ukraineText").textContent + url_part3;
function TranslateUKR(){
    $.post(urlTranslationUKR, function(result){
        var sentence = "";
        for(let i = 0; i < result.text.length; i++){
            sentence += result.text[i] + " ";
        }  
        if(num == 1){
            getUKR.innerHTML = sentence;
            num = 0;
        }
        else{
            getUKR.innerHTML = textUKR;
            num = 1;
        }
    });
}