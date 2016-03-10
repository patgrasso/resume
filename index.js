/*global $, google*/



// Turn spaces into dots on h1
$('h1, h2').each(function (index, elem) {
  elem.innerHTML = elem.innerText.replace(/ /g, '<span class="char-dot">&nbsp;&nbsp;</span>');
  elem.innerHTML += '<span class="char-return"></span>';
});

var applyColor = function (listA, listB) {
  return listA.map(function (sublist, index) {
    sublist.push('color: ' + listB[index] + '; stroke-color: ' + listB[index] + '; stroke-width: 1');
    return sublist;
  });
};


var githubColors = ['#f1e05a', '#b07219', '#563d7c', '#e44b23',
                    '#9e9e9e','#3272a5', '#1e4aec', '#f34b7d'];
var materialColors = ['#ffeb3b', '#795548', '#03a9f4', '#f44336',
                       '#9e9e9e', '#ffeb3b', '#673ab7', '#2196f3'];
var allRed = ['#f44336', '#f44336', '#f44336', '#f44336',
              '#f44336', '#f44336', '#f44336', '#f44336'];
var allBlue = ['#82b1ff', '#82b1ff', '#82b1ff', '#82b1ff',
               '#82b1ff', '#82b1ff', '#82b1ff', '#82b1ff'];
var allGreen = ['#69f0ae', '#69f0ae', '#69f0ae', '#69f0ae',
                '#69f0ae', '#69f0ae', '#69f0ae', '#69f0ae'];
var lightBlue = ['#80d8ff', '#80d8ff', '#80d8ff', '#80d8ff',
                 '#80d8ff', '#80d8ff', '#80d8ff', '#80d8ff'];
var allTeal = ['#1de9b6', '#1de9b6', '#1de9b6', '#1de9b6',
               '#1de9b6', '#1de9b6', '#1de9b6', '#1de9b6'];


var languageProficiencies = [
  ['JavaScript',  90],
  ['Java',        80],
  ['CSS3',        80],
  ['HTML5',       70],
  ['C',           70],
  ['Python',      60],
  ['Scheme',      30],
  ['C++',         20]
];


var datatable = applyColor(languageProficiencies, allTeal);
datatable.unshift(['Programming Language', 'Proficiency', {role: 'style'}]);

var drawProgrammingLanguagesChart = function () {
  /*
  var data = google.visualization.arrayToDataTable([
    ['Programming Language', 'Proficiency', {role: 'style'}],
    ['JavaScript',  90, 'color: #ffeb3b'],//#f1e05a'],
    ['Java',        80, 'color: #795548'],//#b07219'],
    ['CSS3',        80, 'color: #03a9f4'],//#563d7c'],
    ['HTML5',       70, 'color: #f44336'],//#e44b23'],
    ['C',           70, 'color: #9e9e9e'],//#9e9e9e'],
    ['Python',      60, 'color: #ffeb3b'],//#3272a5'],
    ['Scheme',      30, 'color: #673ab7'],//#1e4aec'],
    ['C++',         20, 'color: #2196f3']//#f34b7d']
  ]);
  */
  var data = google.visualization.arrayToDataTable(datatable);

  var options = {
    width: 400,
    height: 246,
    chart: {
      title: 'Programming Languages'
    },
    bars: 'horizontal',
    bar: {
      groupWidth: 15
    },
    backgroundColor: {fill: 'transparent'},
    legend: 'none',
    chartArea: {left: 100},
    hAxis: { gridlines: { color: 'transparent' }, textPosition: 'none' },
    vAxis: { textStyle: { fontSize: 14 } }
  };

  var formatter = new google.visualization.PatternFormat('<p>hello{1}</p>');

  var chart = new google.visualization.BarChart(
    document.getElementById('programming-language-chart')
  );
  chart.draw(data, options);
};

google.charts.load('current', { packages: ['corechart', 'bar'] });
google.charts.setOnLoadCallback(drawProgrammingLanguagesChart);


