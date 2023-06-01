let propertyData = {};

fetch('Resources/Clusters.json')
  .then((response) => response.json())
  .then((json) => {
  
  // console.log(json)
  // console.log(json.columns)

  for (let index = 0; index < json.columns.length; index++) {
    const element = json.columns[index];
    // console.log(element)
    propertyData[`${element}`] = json.data.map(elem => `${elem[`${index}`]}`)
  }

  console.log(propertyData)

  // var trace1 = {
  //     x: propertyData.Bathroom,
  //     y: propertyData.Bedroom2,
  //     mode: 'markers',
  //     type: 'scatter'
  //   };
    
  //   var data = [trace1];

  //   var layout = {
  //     scattermode: 'group',
  //     title: 'Grouped by Cluster',
  //     xaxis: {title: 'Country'},
  //     yaxis: {title: 'Medals'}
  //   };
    
  //   Plotly.newPlot('plot', data);
  
  });

  