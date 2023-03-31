this.onmessage = (event) => {

    if (event.addition_parameter !== 'undefined') {

        let addend_i, addend_ii, sum;

        console.log(event)
        addend_i = parseInt(event.data.addition_parameter.addend_i, 10);
        addend_ii = parseInt(event.data.addition_parameter.addend_ii, 10);

        sum = addend_i + addend_ii;

        this.postMessage({ 'sum': sum });

    }
    console.log(event.addition_parameter.addend_i)
}