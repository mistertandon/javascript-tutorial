const arr = [11, 22, 33, 44];

for (var i = 0; i < arr.length; i++) {

    setTimeout(function () {

        console.log('Index: ' + i + ', element: ' + arr[i]);
    }, 3000);
}
/**
 * Output would be
 * 
 * Index: 4, element: undefined
 * Index: 4, element: undefined
 * Index: 4, element: undefined
 * Index: 4, element: undefined
 */