Highcharts.setOptions({
    // colors: ['rgba(5,141,199,0.5)', 'rgba(80,180,50,0.5)', 'rgba(237,86,27,0.5)']
});

const series = [{
    name: 'Cluster 0',
    id: 0,
    marker: {
        symbol: 'diamond'
    }
},
{
    name: 'Cluster 1',
    id: 1,
    marker: {
        symbol: 'triangle-down'
    }
},
{
    name: 'Cluster 2',
    id: 2,
    marker: {
        symbol: 'triangle'
    }
},
{
    name: 'Cluster 3',
    id: 3,
    marker: {
        symbol: 'square'
    }
}];


async function getData() {
    const response = await fetch(
        // 'https://cdn.jsdelivr.net/gh/highcharts/highcharts@24912efc85/samples/data/olympic2012.json'
        'Resources/Clusters_records.json'
    );
    return response.json();
}



// Plot 1

getData().then(data => {
    // console.log(data)
    const getData = cluster => {
        const temp = [];
        data.forEach(elm => {
            // console.log(elm.ValueCluster, cluster)
            if (elm.ValueCluster === cluster) {
                temp.push([elm.Rooms, elm.Price]);
            }
        });
        // console.log(temp)
        return temp;
    };
    series.forEach(s => {
        s.data = getData(s.id);
    });

    Highcharts.chart('plot1', {
        chart: {
            type: 'scatter',
            zoomType: 'xy'
        },
        title: {
            text: 'Price by Number of Rooms',
            align: 'left'
        },
        subtitle: {
            text:
          'Source: <a href="https://www.kaggle.com/datasets/dansbecker/melbourne-housing-snapshot">Kaggle</a>',
            align: 'left'
        },
        xAxis: {
            title: {
                text: 'Rooms'
            },
            labels: {
                format: '{value}'
            },
            startOnTick: true,
            endOnTick: true,
            showLastLabel: true
        },
        yAxis: {
            title: {
                text: 'Price (AUD)'
            },
            labels: {
                format: '{value}'
            }
        },
        legend: {
            enabled: true
        },
        plotOptions: {
            scatter: {
                marker: {
                    radius: 2.5,
                    symbol: 'circle',
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: 'rgb(100,100,100)'
                        }
                    }
                },
                states: {
                    hover: {
                        marker: {
                            enabled: false
                        }
                    }
                },
                jitter: {
                    x: 0.005
                }
            }
        },
        tooltip: {
            pointFormat: 'Rooms: {point.x} <br/> Price: {point.y} AUD'
        },
        series
    });
}
);




// Plot 2

getData().then(data => {
    // console.log(data)
    const getData = cluster => {
        const temp = [];
        data.forEach(elm => {
            // console.log(elm.ValueCluster, cluster)
            if (elm.ValueCluster === cluster) {
                temp.push([elm.Landsize, elm.Price]);
            }
        });
        // console.log(temp)
        return temp;
    };
    series.forEach(s => {
        s.data = getData(s.id);
    });

    Highcharts.chart('plot2', {
        chart: {
            type: 'scatter',
            zoomType: 'xy'
        },
        title: {
            text: 'Price by Land size',
            align: 'left'
        },
        subtitle: {
            text:
          'Source: <a href="https://www.kaggle.com/datasets/dansbecker/melbourne-housing-snapshot">Kaggle</a>',
            align: 'left'
        },
        xAxis: {
            title: {
                text: 'Land'
            },
            labels: {
                format: '{value}'
            },
            startOnTick: true,
            endOnTick: true,
            showLastLabel: true
        },
        yAxis: {
            title: {
                text: 'Price (AUD)'
            },
            labels: {
                format: '{value}'
            }
        },
        legend: {
            enabled: true
        },
        plotOptions: {
            scatter: {
                marker: {
                    radius: 2.5,
                    symbol: 'circle',
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: 'rgb(100,100,100)'
                        }
                    }
                },
                states: {
                    hover: {
                        marker: {
                            enabled: false
                        }
                    }
                },
                jitter: {
                    x: 0.005
                }
            }
        },
        tooltip: {
            pointFormat: 'Land: {point.x} <br/> Price: {point.y} AUD'
        },
        series
    });
}
);



// Plot 3

getData().then(data => {
    // console.log(data)
    const getData = cluster => {
        const temp = [];
        data.forEach(elm => {
            // console.log(elm.ValueCluster, cluster)
            if (elm.ValueCluster === cluster) {
                temp.push([elm.BuildingArea, elm.Price]);
            }
        });
        // console.log(temp)
        return temp;
    };
    series.forEach(s => {
        s.data = getData(s.id);
    });

    Highcharts.chart('plot3', {
        chart: {
            type: 'scatter',
            zoomType: 'xy'
        },
        title: {
            text: 'Price by Building Size',
            align: 'left'
        },
        subtitle: {
            text:
          'Source: <a href="https://www.kaggle.com/datasets/dansbecker/melbourne-housing-snapshot">Kaggle</a>',
            align: 'left'
        },
        xAxis: {
            title: {
                text: 'Footprint (m²)'
            },
            labels: {
                format: '{value}'
            },
            startOnTick: true,
            endOnTick: true,
            showLastLabel: true
        },
        yAxis: {
            title: {
                text: 'Price (AUD)'
            },
            labels: {
                format: '{value}'
            }
        },
        legend: {
            enabled: true
        },
        plotOptions: {
            scatter: {
                marker: {
                    radius: 2.5,
                    symbol: 'circle',
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: 'rgb(100,100,100)'
                        }
                    }
                },
                states: {
                    hover: {
                        marker: {
                            enabled: false
                        }
                    }
                },
                jitter: {
                    x: 0.005
                }
            }
        },
        tooltip: {
            pointFormat: 'Footprint (m²): {point.x} <br/> Price: {point.y} AUD'
        },
        series
    });
}
);



// Plot 4

getData().then(data => {
    // console.log(data)
    let categories = [];
    const getData = cluster => {
        const temp = [];
        data.forEach(elm => {
            // console.log(elm.ValueCluster, cluster)
            if (!categories.includes(elm.Suburb)) {
                categories.push(elm.Suburb);
            }
            if (elm.ValueCluster === cluster) {
                temp.push([categories.findIndex(i => i === elm.Suburb), elm.Price]);
            }
        });
        // console.log(temp)
        return temp;
    };
    series.forEach(s => {
        s.data = getData(s.id);
    });
    console.log(series)

    Highcharts.chart('plot4', {
        chart: {
            type: 'scatter',
            zoomType: 'xy'
        },
        title: {
            text: 'Price by Suburb',
            align: 'left'
        },
        subtitle: {
            text:
          'Source: <a href="https://www.kaggle.com/datasets/dansbecker/melbourne-housing-snapshot">Kaggle</a>',
            align: 'left'
        },
        xAxis: {
            title: {
                text: 'Suburb'
            },
            categories: categories,
            labels: {
                format: '{value}'
            },
            startOnTick: true,
            endOnTick: true,
            showLastLabel: false
        },
        yAxis: {
            title: {
                text: 'Price (AUD)'
            },
            labels: {
                format: '{value}'
            }
        },
        legend: {
            enabled: true
        },
        plotOptions: {
            scatter: {
                marker: {
                    radius: 2.5,
                    symbol: 'circle',
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: 'rgb(100,100,100)'
                        }
                    }
                },
                states: {
                    hover: {
                        marker: {
                            enabled: false
                        }
                    }
                },
                jitter: {
                    x: 0.005
                }
            }
        },
        tooltip: {
            croshairs: true,
            pointFormat: `Suburb: {xAxis.categories[point.x]} <br/> Price: {point.y} AUD`,
            formatter: function() {
                return 'Suburb: ' + this.x + '<br/> Price: ' + this.y + ' AUD'
            }
        },
        series
    });
}
);