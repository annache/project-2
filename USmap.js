    var exportsum=[];
    var importsum=[];
    var update=0;
    var k=0;

 var j=0;
  var temp = [];


 var year= "2013";
 var process= "export";

  d3.csv("export.csv", function(dataexp){
  d3.csv("import.csv",function(dataimp){

var statePaths = Datamap.prototype.usaTopo.objects.usa.geometries;
var states = [];

for(var i=0;i<statePaths.length;i++)
{
states.push({ code:statePaths[i].id, name : statePaths[i].properties.name });
}
var dataForMap = [];

// //Collecting commodity data
var range = "20-28";
var rangeValues = {};
rangeValues.value = -1;
if(range.indexOf("-") > 0)
{
  var tempStr = range.split("-");
  
  rangeValues.min = parseInt(tempStr[0]);
  rangeValues.max = parseInt(tempStr[1]);
  
}
else
{
  rangeValues.value = parseInt(range);
}

// for(var i=0;i<1430;i++)
// {
// debugger;

//   var hsCode = dataimp[i].hs6.length == 6 ? dataimp[i].hs6.substring(0,2) : 
//               dataimp[i].hs6.length == 5 ? dataimp[i].hs6.substring(0,1) : "0";
// if(rangeValues.value == -1)
// {

//   if(hsCode >= rangeValues.min && hsCode <= rangeValues.max)
//   {
//     var data = dataimp[i];
//     data.code = getStateCode(dataimp[i].statename);
//     dataForMap.push(data);
//   }
// }

// else
//   {
//     if(hsCode == rangeValues.value)
//   { var data = dataimp[i];
//     data.code = getStateCode(dataimp[i].statename);
//     dataForMap.push(data);
//   }
// }
// }

//aggregated data for commodities



function getStateCode(statename)
{
  for(i=0 ; i < states.length; i++)
  {

    if(states[i].name.toUpperCase() == statename.toUpperCase())
    {
      return states[i].code;
    }
  }
  return "";
}



for(var i=0;i<1430;i++)
{
  if(year=="2013-2016"&&process=="export"){
  // debugger;

  if(dataexp[i]["abbreviatn"]=='World')
    {

      temp[j]=parseFloat(parseFloat(dataexp[i]["val2013"]).toFixed(2))+parseFloat(parseFloat(dataexp[i]["val2014"]).toFixed(2))+parseFloat(parseFloat(dataexp[i]["val2015"]).toFixed(2))+parseFloat(parseFloat(dataexp[i]["val2016"]).toFixed(2));
       temp[j]=parseFloat(temp[j].toFixed(2));
          j++;
 
   }
 }


  if(year=="2013"&&process=="export"){

  if(dataexp[i]["abbreviatn"]=='World')
    {
     
       temp[j]=parseFloat(parseFloat(dataexp[i]["val2013"]).toFixed(2));
       temp[j]=parseFloat(temp[j].toFixed(2));
          j++;
   }
 }

 if(year=="2014"&&process=="export"){

  if(dataexp[i]["abbreviatn"]=='World')
    {
     
       temp[j]=parseFloat(parseFloat(dataexp[i]["val2014"]).toFixed(2));
       temp[j]=parseFloat(temp[j].toFixed(2));
          j++;
   }
 }

 if(year=="2015"&&process=="export"){

  if(dataexp[i]["abbreviatn"]=='World')
    {
     
       temp[j]=parseFloat(parseFloat(dataexp[i]["val2015"]).toFixed(2));
       temp[j]=parseFloat(temp[j].toFixed(2));
          j++;
   }
 }

 if(year=="2016"&&process=="export"){

  if(dataexp[i]["abbreviatn"]=='World')
    {
     
       temp[j]=parseFloat(parseFloat(dataexp[i]["val2016"]).toFixed(2));
       temp[j]=parseFloat(temp[j].toFixed(2));
          j++;
   }
 }


  if(year=="2013-2016"&&process=="import"){
  // debugger;

  if(dataexp[i]["abbreviatn"]=='World')
    {

      temp[j]=parseFloat(parseFloat(dataimp[i]["val2013"]).toFixed(2))+parseFloat(parseFloat(dataimp[i]["val2014"]).toFixed(2))+parseFloat(parseFloat(dataimp[i]["val2015"]).toFixed(2))+parseFloat(parseFloat(dataimp[i]["val2016"]).toFixed(2));
       temp[j]=parseFloat(temp[j].toFixed(2));
          j++;
 
   }
 }

  if(year=="2013"&&process=="import"){

  if(dataexp[i]["abbreviatn"]=='World')
    {
     
       temp[j]=parseFloat(parseFloat(dataimp[i]["val2013"]).toFixed(2));
       temp[j]=parseFloat(temp[j].toFixed(2));
          j++;
   }
 }

   if(year=="2014"&&process=="import"){

  if(dataexp[i]["abbreviatn"]=='World')
    {
     
       temp[j]=parseFloat(parseFloat(dataimp[i]["val2014"]).toFixed(2));
       temp[j]=parseFloat(temp[j].toFixed(2));
          j++;
   }
 }

   if(year=="2015"&&process=="import"){

  if(dataexp[i]["abbreviatn"]=='World')
    {
     
       temp[j]=parseFloat(parseFloat(dataimp[i]["val2015"]).toFixed(2));
       temp[j]=parseFloat(temp[j].toFixed(2));
          j++;
   }
 }

   if(year=="2016"&&process=="import"){

  if(dataexp[i]["abbreviatn"]=='World')
    {
     
       temp[j]=parseFloat(parseFloat(dataimp[i]["val2016"]).toFixed(2));
       temp[j]=parseFloat(temp[j].toFixed(2));
          j++;
   }
 }
      //debugger;
      // exportsum[j]=parseFloat(parseFloat(dataexp[i]["val2013"]).toFixed(2))+parseFloat(parseFloat(dataexp[i]["val2014"]).toFixed(2))+parseFloat(parseFloat(dataexp[i]["val2015"]).toFixed(2))+parseFloat(parseFloat(dataexp[i]["val2016"]).toFixed(2));
      //  exportsum[j]=parseFloat(exportsum[j].toFixed(2));


      // importsum[j]=parseFloat(dataimp[i]["val2013"])+parseFloat(dataimp[i]["val2014"])+parseFloat(dataimp[i]["val2015"])+parseFloat(dataimp[i]["val2016"]);

  
      
      // console.log(j+data[i]["statename"]+' '+ parseFloat(exportsum[j]));
    
        
    }

    //debugger;
     
    
console.log(temp);

     var dataset = [
  {
      "abre":"CO",
      "name": "Colorado",
 
      "temp": temp[5]

  },
  {
      "abre":"AZ",
      "name":"Arizona",
    
      "temp": temp[2]

  },
  {
      "abre":"DE",
      "name":"Delaware",
    
      "temp": temp[7]
  },
  {
     "abre":"FL",
     "name":"Florida",

      "temp": temp[9]
  },
  {
     "abre":"GA",
     "name":"Georgia",
 
      "temp": temp[10]
  },
  {
     "abre":"HI",
    "name":"Hawaii",
  
      "temp": temp[11]
  },
  {
     "abre":"ID",
    "name":"Idaho",

      "temp": temp[12]
  },
  {
     "abre":"IL",
      "name":"Illinois",
    
      "temp": temp[14]
  },
  {
     "abre":"IN",
     "name":"Indiana",
 
      "temp": temp[14]
  },
  {
     "abre":"IA",
      "name":"Iowa",
   
      "temp": temp[15]
  },
  {
     "abre":"KS",
      "name":"Kansas",
   
      "temp": temp[16]
  },
  {
     "abre":"KY",
      "name":"Kentucky",
    
      "temp": temp[17]
  },
  {
     "abre":"LA",
      "name":"Louisiana",
  
      "temp": temp[18]
  },
  {
     "abre":"MD",
      "name":"Maryland",

      "temp": temp[20]
  },
  {
     "abre":"ME",
      "name":"Maine",
    
      "temp": temp[21]
  },
  {
     "abre":"MA",
     "name":"Massachusetts",
   
      "temp": temp[19]
  },
  {
      "abre":"MN",
     "name":"Minnesota",

      "temp": temp[23]
  },
  {
     "abre":"MI",
      "name":"Michigan",
     
      "temp": temp[22]
  },
  {
     "abre":"MS",
      "name":"Mississippi",
    
      "temp": temp[25]
  },
  {
     "abre":"MO",
      "name":"Missouri",
  
      "temp": temp[24]
  },
  {
     "abre":"MT",
     "name":"Montana",
  
      "temp": temp[26]
  },
  {
     "abre":"NC",
      "name":"North Carolina",

      "temp": temp[27]
  },
  {
     "abre":"NE",
     "name":"Nebraska",
    
      "temp": temp[29]
  },
  {
     "abre":"NV",
    "name":"Nevada",
 
      "temp": temp[33]
  },
  {
     "abre":"NH",
      "name":"New Hampshire",
     
      "temp": temp[30]
  },
  {
       "abre":"NJ",
       "name":"New Jersey",
   
      "temp": temp[31]
  },
  {
     "abre":"NY",
        "name":"New York",
    
      "temp": temp[34]
  },
  {
     "abre":"ND",
        "name":"North Dakota",
    
      "temp": temp[28]
  },
  {
     "abre":"NM",
        "name":"New Mexico",
     
      "temp": temp[32]
  },
  {
     "abre":"OH",
        "name":"Ohio",
  
      "temp": temp[35]
  },
  {
     "abre":"OK",
        "name":"Oklahoma",
   
      "temp": temp[36]
  },
  {
     "abre":"OR",
        "name":"Oregon",
    
      "temp": temp[37]
  },
  {
     "abre":"PA",
        "name":"Pennsylvania",
 
      "temp": temp[38]
  },
  {
     "abre":"RI",
        "name":"Rhode Island",

      "temp": temp[40]
  },
  {
        "abre":"SC",
        "name":"South Carolina",
  
      "temp": temp[41]
  },
  {
        "abre":"SD",
        "name":"South Dakota",
     
      "temp": temp[42]
  },
  {
        "abre":"TN",
        "name":"Tennessee",
    
      "temp": temp[43]
  },
  {
     "abre":"TX",
        "name":"Texas",
      "temp": temp[44]
  },
  {
     "abre":"UT",
        "name":"Utah",
   
      "temp": temp[45]
  },
  {
     "abre":"WI",
        "name":"Wisconsin",
  
      "temp": temp[50]
  },
  {
     "abre":"VA",
        "name":"Virginia",
  
      "temp": temp[46]
  },
  {
     "abre":"VT",
        "name":"Vermont",
     
      "temp": temp[48]
  },
  {
     "abre":"WA",
        "name":"Washington",
     
      "temp": temp[49]
  },
  {
     "abre":"WV",
        "name":"West Virginia",
  
      "temp": temp[51]
  },
  {
     "abre":"WY",
        "name":"Wyoming",
    
      "temp": temp[52]
  },
  {
     "abre":"CA",
        "name":"California",
  
      "temp": temp[4]
  },
  {
     "abre":"CT",
        "name":"Connecticut",
   
      "temp": temp[6]
  },
  {
     "abre":"AK",
       "name":"Alaska", 
     
      "temp": temp[1]
  },
  {
       "abre":"AR",
        "name":"Arkansas",
    
      "temp": temp[3]
  },
  {
     "abre":"DC",
        "name":"District of Columbia",
     
      "temp": temp[8]
  },
  {
     "abre":"AL",
        "name":"Alabama",
      "temp": temp[0]
  }

]

   

 var dataset1={};

 var onlyValues=[];
for(var i=0;i<dataset.length;i++)
onlyValues[i] = dataset[i].temp;


// var onlyValues = dataset["export"];
    var minValue = Math.min.apply(null, onlyValues),
        maxValue = Math.max.apply(null, onlyValues);
    var midvalue = (minValue+maxValue)/2;

  let paletteScale = d3.scale.pow().exponent(0.3)
            .domain([minValue,maxValue])
            .range(["#ffffcc", "#800026"]); 



      dataset.forEach(function(item){ //
        // item example value ["USA", 70]
        let iso = item["abre"],
                value = item["temp"];
        dataset1[iso] = { temp: value, fillColor: paletteScale(value) };
    });


// dataset[iso] = { numberOfThings: value, fillColor: paletteScale(value) };



//console.log(exportsum);


//update=2013



var election = new Datamap({

  element: document.getElementById('USMap'),
  scope: 'usa',
 geographyConfig: {
            borderColor: '#DEDEDE',
            highlightBorderWidth: 2,
            // don't change color on mouse hover
            highlightFillColor: function(geo) {
                return geo['fillColor'] || '#F5F5F5';
            },
            // only change border
            highlightBorderColor: '#B7B7B7',
            // show desired information in tooltip
            popupTemplate: function(geo, data) {
                // don't show tooltip if country don't present in dataset
                if (!data) { return ; }
                // tooltip content
               return '<div class="hoverinfo">' + "<h4>"+geo.properties.name+"</h4><table>" + 
                "<tr><td>export:</td><td>"+ data.temp+"</td></tr>"
            }
          },

  fills: {

  defaultFill: '#EDDC4E'

 },


data:dataset1


});

election.labels();
j=0;
temp = [];
});
});
