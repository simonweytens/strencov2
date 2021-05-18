//arrayz
//1
ster1 = [1,2,3,4,5];
ster2 = [6,7,8,9,10];
ster3 = [11,12,13,14,15];
ster4 = [16,17,18,19,20];
//2
ster5 = [26,27,28,29,30];
ster6 = [31,32,33,34,35];
ster7 = [36,37,38,39,40];
ster8 = [41,42,43,44,45];
//3
ster9 = [51,52,53,54,55];
ster10 = [56,57,58,59,60];
ster11 = [61,62,63,64,65];
ster12 = [66,67,68,69,70];
//4
ster13 = [76,77,78,79,80];
ster14 = [81,82,83,84,85];
ster15 = [86,87,88,89,90];
ster16 = [91,92,93,94,95];
//5
ster17 = [101,102,103,104,105];
ster18 = [106,107,108,109,110];
ster19 = [111,112,113,114,115];
ster20 = [116,117,118,119,120];
ster21 = [121,122,123,124,125];
//6
ster22 = [131,132,133,134,135];
ster23 = [136,137,138,139,140];
ster24 = [141,142,143,144,145];
ster25 = [146,147,148,149,150];
//7
ster26 = [156,157,158,159,160];
ster27 = [161,162,163,164,165];
ster28 = [166,167,168,169,170];
ster29 = [171,172,173,174,175];
//8
ster30 = [181,182,183,184,185];
ster31 = [186,187,188,189,190];
ster32 = [191,192,193,194,195];
ster33 = [196,197,198,199,200];
ster34 = [201,202,203,204,205];
//9
ster35 = [211,212,213,214,215];
ster36 = [216,217,218,219,220];
ster37 = [221,222,223,224,225];
ster38 = [226,227,228,229,230];
//10
ster39 = [236,237,238,239,240];
ster40 = [241,242,243,244,245];
ster41 = [246,247,248,249,250];
ster42 = [251,252,253,254,255];
ster43 = [256,257,258,259,260];
//11
ster44 = [266,267,268,269,270];
ster45 = [271,272,273,274,275];
//12
ster46 = [281,282,283,284,285];
ster47 = [286,287,288,289,290];
ster48 = [291,292,293,294,295];
ster49 = [296,297,298,299,300];
//gemiddelde
gem1 = [21,22,23,24,25];
gem2 = [46,47,48,49,50];
gem3 = [71,72,73,74,75];
gem4 = [96,97,98,99,100];
gem5 = [126,127,128,129,130];
gem6 = [151,152,153,154,155];
gem7 = [176,177,178,179,180];
gem8 = [206,207,208,209,210];
gem9 = [231,232,233,234,235];
gem10 = [261,262,263,264,265];
gem11 = [276,277,278,279,280];
gem12 = [301,302,303,304,305];
//sammenvatting gem
gemsterren = [gem1,gem2,gem3,gem4,gem5,gem6,gem7,gem8,gem9,gem10,gem11,gem12];
//sammenvatting sterren
sterren = [ster1,ster2,ster3,ster4,ster5,ster6,ster7,ster8,ster9,ster10,ster11,ster12,ster13,ster14,ster15,ster16,ster17,ster18,ster19,ster20,ster21,ster22,ster23,ster24,ster25,ster26,ster27,ster28,ster29,ster30,ster31,ster32,ster33,ster34,ster35,ster36,ster37,ster38,ster39,ster40,ster41,ster42,ster43,ster44,ster45,ster46,ster47,ster48,ster49];
//data arrays
data1  = ["0","0","0","0"] 
data2  = ["0","0","0","0"]
data3  = ["0","0","0","0"] 
data4  = ["0","0","0","0"]
data5  = ["0","0","0","0","0"]
data6  = ["0","0","0","0"] 
data7  = ["0","0","0","0"]
data8  = ["0","0","0","0","0"]
data9  = ["0","0","0","0"]
data10 = ["0","0","0","0","0"]
data11 = ["0","0"]
data12 = ["0","0","0","0"]
//samenvatting data
datas = [data1,data2,data3,data4,data5,data6,data7,data8,data9,data10,data11,data12] 
gem = ["0","0","0","0","0","0","0","0","0","0","0","0"] //12
legearray = ["0","0","0","0","0","0","0","0","0","0","0","0"] //wordt gebruikt in een if
//chart vars
date = new Date();
datum = date.getDate()+'/'+date.getMonth();
colorborder = [
  '#003580',
  '#cf142b',
  '#009b48',
  '#0d5eaf',
  '#ff7900',
  '#fae042'
]
colorback = [
  'rgba(0, 53, 128, 0.1)',
  'rgba(207, 20, 42,0.1)',
  'rgba(0, 155, 72,0.1)',
  'rgba(13, 94, 175,0.1)',
  'rgba(255, 121, 0,0.1)',
  'rgba(250, 224, 66,0.1)'
]
//extra
b=0;
score=0
sum=0





//local indexedDB aanmaken
let db = new Localbase('db');

//data oplsaan in indexedDB
function SaveData(){
  db.collection('Scorenlijst').add({
    array: gem,
    datum: datum 
  })
}

function cleardb(){
  db.collection('Scorenlijst').delete()
  location.reload();
}

//slider function
$(document).ready(function(){
    // Content van één item slideToggle'n.
    $(".title").click(function(){
        $(this).next(".content").slideToggle();
        
    });
});

//sterren functie click aan mee geven
for(let a=0;a<=sterren.length;a++)
{
sterren[a].forEach(i => 
  {
    document.getElementById(`S${i}`).addEventListener("click",(element,event) =>
    {
      console.log(`geklikt op ster ${i}`);
     
      for(let j=sterren[a][0]; j<=i;j++) //aanzetten orangje
  
        {
          score++;
          let starElement=document.getElementById(`S${j}`);
          starElement.classList.remove("unchecked");
          starElement.classList.add("checked");
        }
      
        for(let k=i+1; k<=sterren[a][4];k++) //uitzetten zwart
  
        {
          let starElement=document.getElementById(`S${k}`);
          starElement.classList.remove("checked");
          starElement.classList.add("unchecked");
        }

        //data opslaan
        if (a >= 0) b=0; 
        if (a >= 4) b=1; //volgende hoofdstuk
        if (a >= 8) b=2;
        if (a >= 12) b=3; 
        if (a >= 16) b=4; 
        if (a >= 21) b=5; 
        if (a >= 25) b=6; 
        if (a >= 29) b=7; 
        if (a >= 34) b=8; 
        if (a >= 38) b=9; 
        if (a >= 43) b=10; 
        if (a >= 45) b=11;  
        switch (a) {
          case 0: 
            p = 0;
            break;
          case 1: 
            p = 1;
            break;
          case 2: 
            p = 2;
            break;
          case 3: 
            p = 3;
            break;

          case 4: 
            p = 0;
            break;
          case 5: 
            p = 1;
            break;
          case 6: 
            p = 2;
            break;
          case 7: 
            p = 3;
            break;
          
            case 8: 
            p = 0;
            break;
          case 9: 
            p = 1;
            break;
          case 10: 
            p = 2;
            break;
          case 11: 
            p = 3;
            break;

          case 12: 
            p = 0;
            break;
          case 13: 
            p = 1;
            break;
          case 14: 
            p = 2;
            break;
          case 15: 
            p = 3;
            break;

          case 16: 
            p = 0;
            break;
          case 17: 
            p = 1;
            break;
          case 18: 
            p = 2;
            break;
          case 19: 
            p = 3;
            break;
          case 20: 
            p = 4;
            break;

          case 21: 
            p = 0;
            break;
          case 22: 
            p = 1;
            break;
          case 23: 
            p = 2;
            break;
          case 24: 
            p = 3;
            break;

          case 25: 
            p = 0;
            break;
          case 26: 
            p = 1;
            break;
          case 27: 
            p = 2;
            break;
          case 28: 
            p = 3;
            break;

          case 29: 
            p = 0;
            break;
          case 30: 
            p = 1;
            break;
          case 31: 
            p = 2;
            break;
          case 32: 
            p = 3;
            break;
          case 33: 
            p = 4;
            break;

          case 34: 
            p = 0;
            break;
          case 35: 
            p = 1;
            break;
          case 36: 
            p = 2;
            break;
          case 37: 
            p = 3;
            break;

          case 38: 
            p = 0;
            break;
          case 39: 
            p = 1;
            break;
          case 40: 
            p = 2;
            break;
          case 41: 
            p = 3;
            break;
          case 42: 
            p = 4;
            break;

          case 43: 
            p = 0;
            break;
          case 44: 
            p = 1;
            break;

          case 45: 
            p = 0;
            break;
          case 46: 
            p = 1;
            break;
          case 47: 
            p = 2;
            break;
          case 48: 
            p = 3;
            break;

        } 
        datas[b][p]=score;
        console.log(datas);
        score=0;

        //gemiddelde opslaan
        for(let x=0; x<=datas[b].length-1;x++)
        {
          sum = sum + +datas[b][x];
        }
        gem[b] = Math.round(sum/datas[b].length);
        console.log("gemiddeldes : "+gem);
        
        sum=0;
        gemiddelde(b);
    });
  });
}

//gemiddelde tonen
function gemiddelde(rij){
  
  gemsterren[rij].forEach(i => 
    {
      document.getElementById(`S${i}`);

      for(let f = 1;f<=5;f++){
      if (gem[rij]==f)
      {
        for(let d=0;d<f;d++) //aanzeten
        {
        let starElement=document.getElementById(`S${gemsterren[rij][d]}`);
            starElement.classList.remove("unchecked");
            starElement.classList.add("checkgem");
        }
        for(let e=f;f<=sterren[rij][4];e++) //uitzetten
        {
          let starElement=document.getElementById(`S${gemsterren[rij][e]}`);
            starElement.classList.remove("checkgem");
            starElement.classList.add("unchecked");
        }
      }
    }
    });
  
}

//functie array equal
function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;
  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}
function Restart(){
  $(document).ready(function(){
    $(this).scrollTop(0);
    location.reload();
});
}
//CHART CODE
async function showNL(element)
{ 
  if (arraysEqual(gem,legearray))
  {
    console.log("er is niets ingevuld")
  }
  else {await SaveData();}//waarden opslaan in de indexedDB
  

  //variabelen
  var datasetval = [];
  a = -1

  col= await db.collection('Scorenlijst').get()
  
    for(let i = 0;i<col.length;i++)
    {
        if (a==5){a=-1}
        a++
        datasetval[i]=
        {
          label: col[i].datum,
          data: col[i].array,
          backgroundColor: colorback[a],
          borderColor: colorborder[a]
        }
    }


  //data volledige const aanmaken
  const data = {
      labels: [
        'Waarden + Ethiek',
        'Identiteit',
        'Zorg',
        'Communicatie',
        'Gezonheids',
        'Empowerment',
        'Collabratief',
        'Positive',
        'Diversiteit',
        'Reflectie', 
        'Verantwoordelijkheid',
        'Ervaring'
      ],
      datasets: datasetval,
    };

    //chart aanmaken adhv div
    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'radar',
    
        // The data for our dataset
        data: data,
    
        // Configuration options go here
        options: {
          scale: {
            angleLines: {
                display: false
            },
            ticks: {
                suggestedMin: 0,
                suggestedMax: 5
            }
        }
        }
    });
 
  datasetval = [];
  //disable show button
  element.disabled = true; 
}

async function showEN(element)
{ 
  if (arraysEqual(gem,legearray))
  {
    console.log("er is niets ingevuld")
  }
  else await SaveData();//waarden opslaan in de indexedDB
  

  //variabelen
  var datasetval = [];
  a = -1

  col= await db.collection('Scorenlijst').get()
  
    for(let i = 0;i<col.length;i++)
    {
        if (a==5){a=-1}
        a++
        datasetval[i]=
        {
          label: col[i].datum,
          data: col[i].array,
          backgroundColor: colorback[a],
          borderColor: colorborder[a]
        }
    }


  //data volledige const aanmaken
  const data = {
      labels: [
        'Values + Ethic',
        'Identify',
        'Service',
        'Communication',
        'Health',
        'Empowerment', 
        'Collaborative',
        'Positive',
        'Diversity',
        'Reflection',
        'Responsibilities',
        'Experience'
      ],
      datasets: datasetval
    };

    //chart aanmaken adhv div
    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'radar',
    
        // The data for our dataset
        data: data,
    
        // Configuration options go here
        options: {
          scale: {
            angleLines: {
                display: false
            },
            ticks: {
                suggestedMin: 0,
                suggestedMax: 5
            }
        }
        }
    });
 
  datasetval = [];

  element.disabled = true;
}

