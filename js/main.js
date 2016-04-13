var trace1 = {
    x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    y: [870, 1, 0.001, 0.005, 100, 850, 800, 3, 850, 1, 10, 0.007, 0.03, 1, 0.001, 0.005],
    mode: 'markers',
    type: 'scatter',
    name: 'Penicilin'
};

var trace2 = {
    x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    y: [1, 2, 0.01, 11, 0.4, 1.2, 5, 0.1, 2, 0.4, 0.8, 0.1, 0.03, 1, 14, 10],
    mode: 'markers',
    type: 'scatter',
    name: 'Streptomycin'
};

var trace3 = {
    x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    y: [1.6, 0.02, 0.007, 10, 0.1, 1, 2, 0.1, 0.4, 0.008, 0.09, 0.001, 0.001, 0.1, 10, 40],
    mode: 'markers',
    type: 'scatter',
    name: 'Neomycin'
};

var trace4 = {
    x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    y: [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
    mode: 'markers',
    type: 'bar'
};

var data = [trace4];
var data2 = [trace3];
var data3 = [trace1, trace2, trace3];
//var dataSum = [sum1, sum2, sum3]
var sum1;
var sum2;
var sum3;
sum1 = 0;
sum2 = 0;
sum3 = 0;
console.log(trace3);
console.log(trace3.y);
for (var i = 0; i < trace1.y.length; i++) {
    sum1 += trace1.y[i];
    sum2 += trace2.y[i];
    sum3 += trace3.y[i];
}
console.log(sum1);
console.log(sum2);
console.log(sum3);

var dataObj = {
    x: ['Penicilin', 'Streptomycin', 'Neomycin'], 
    y: [sum1, sum2, sum3],
    mode: 'markers',
    type: 'bar'
};

var dataArray = [dataObj];

var oneG1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var oneG2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var oneG3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var totalG = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

//oneG1 = 0;
//oneG2 = 0;
//oneG3 = 0;

for (var i = 0; i < trace1.y.length; i++) {
    if (trace1.y[i] <= 1)
	oneG1[i] = 1;
    if (trace2.y[i] <= 1)
	oneG2[i] = 1;
    if (trace3.y[i] <= 1)
	oneG3[i] = 1;
    totalG[i] = oneG1[i] + oneG2[i] + oneG3[i];
}

//    x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
/*
x: ['Aerobacter aerogenes', 'Brucella abortus',' Brucella anthracis', 'Diplococcus pneumoniae', 'Escherichia coli', 'Klebsiella pneumoniae', 'Mycobacterium tuberculosis', 'Proteus vulgaris', 'Pseudomonas aeruginosa', 'Salmonella (Eberthella) typhosa', 'Salmonella schottmuelleri', 'Staphylococcus albus', 'Staphylococcus aureus', 'Streptococcus fecalis', 'Streptococcus hemolyticus', 'Streptococcus viridans'],
*/
var oneGObj = {
   // x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    x: ['Aerobacter aerogenes', 'Brucella abortus',' Brucella anthracis', 'Diplococcus pneumoniae', 'Escherichia coli', 'Klebsiella pneumoniae', 'Mycobacterium tuberculosis', 'Proteus vulgaris', 'Pseudomonas aeruginosa', 'Salmonella (Eberthella) typhosa', 'Salmonella schottmuelleri', 'Staphylococcus albus', 'Staphylococcus aureus', 'Streptococcus fecalis', 'Streptococcus hemolyticus', 'Streptococcus viridans'],
    y: oneG1,
    //mode: 'markers',
    type: 'box',
    boxpoints: 'all',
    jitter: 0.3
};

var oneGObj2 = {
    //x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    x: ['Aerobacter aerogenes', 'Brucella abortus',' Brucella anthracis', 'Diplococcus pneumoniae', 'Escherichia coli', 'Klebsiella pneumoniae', 'Mycobacterium tuberculosis', 'Proteus vulgaris', 'Pseudomonas aeruginosa', 'Salmonella (Eberthella) typhosa', 'Salmonella schottmuelleri', 'Staphylococcus albus', 'Staphylococcus aureus', 'Streptococcus fecalis', 'Streptococcus hemolyticus', 'Streptococcus viridans'],
    y: oneG2,
    //mode: 'markers',
    type: 'box',
    boxpoints: 'all',
    jitter: 0.3
};

var oneGObj3 = {
    //x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
   x: ['Aerobacter aerogenes', 'Brucella abortus',' Brucella anthracis', 'Diplococcus pneumoniae', 'Escherichia coli', 'Klebsiella pneumoniae', 'Mycobacterium tuberculosis', 'Proteus vulgaris', 'Pseudomonas aeruginosa', 'Salmonella (Eberthella) typhosa', 'Salmonella schottmuelleri', 'Staphylococcus albus', 'Staphylococcus aureus', 'Streptococcus fecalis', 'Streptococcus hemolyticus', 'Streptococcus viridans'],
    y: oneG3,
    //mode: 'markers',
    type: 'box',
    boxpoints: 'all',
    jitter: 0.3
};

var totalGObj = {
    //x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    x: ['Aerobacter aerogenes', 'Brucella abortus',' Brucella anthracis', 'Diplococcus pneumoniae', 'Escherichia coli', 'Klebsiella pneumoniae', 'Mycobacterium tuberculosis', 'Proteus vulgaris', 'Pseudomonas aeruginosa', 'Salmonella (Eberthella) typhosa', 'Salmonella schottmuelleri', 'Staphylococcus albus', 'Staphylococcus aureus', 'Streptococcus fecalis', 'Streptococcus hemolyticus', 'Streptococcus viridans'],
    y: totalG,
    //mode: 'markers',
    type: 'box',
    boxpoints: 'all',
    jitter: 0.3
};

var strep1Obj = {
    x: ['Streptococcus fecalis' ,'Streptococcus hemolyticus ' , 'Streptococcus viridans'],
    y: [trace1.y[13], trace1.y[14], trace1.y[15]],
    mode: 'markers',
    type: 'box',
    name: 'Penicilin'
}

var strep2Obj = {
    x: ['Streptococcus fecalis' ,'Streptococcus hemolyticus ' , 'Streptococcus viridans'], 
    y: [trace2.y[13], trace2.y[14], trace2.y[15]],
    mode: 'markers',
    type: 'box',
    name: 'Streptomycin'
}

var strep3Obj = {
    x: ['Streptococcus fecalis' ,'Streptococcus hemolyticus ' , 'Streptococcus viridans'],
    y: [trace3.y[13], trace3.y[14], trace3.y[15]],
    mode: 'markers',
    type: 'box',
    name: 'Neomycin'
}


var oneGarray = [totalGObj];

var strepArray = [strep1Obj, strep2Obj, strep3Obj];

var layout = {
    title: 'Amount of antibiotic required to kill each type of bacteria (Grams)',
    height: window.height,
    width: window.width
};

var layout2 = {
    title: 'Count of antibiotic that require less than a gram to kill bacteria',
    height: window.height,
    width: window.width,
    boxmode: 'group'
};

var layout3 = {
    title: 'Dosage needed to kill strep (Grams)',
    height: window.height,
    width: window.width
};




//Plotly.newPlot('graph', data, layout);
Plotly.newPlot('graph', dataArray, layout, {staticPlot: true});
Plotly.newPlot('graph2', oneGarray, layout2, {staticPlot: true});
Plotly.newPlot('graph3', strepArray, layout3, {staticPlot: true});
