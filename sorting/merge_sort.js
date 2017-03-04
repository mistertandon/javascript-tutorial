var source_arr = [1, 9, 2, 8, 3, 7, 11, 1];

function mergeArr(left_arr, right_arr) {

	var left_arr_length;
	var right_arr_length;
	var it_arr;
	var count;
	var ret_arr = [];

	/**
	 * Will check for `left_arr`, `right_arr` and `left_arr.length` && `right_arr.length`
	 */
	while (right_arr && left_arr && left_arr.length && right_arr.length) {

		if (left_arr[0] >= right_arr[0]) {

			ret_arr.push(left_arr[0]);
			left_arr.shift();
		} else {

			ret_arr.push(right_arr[0]);
			right_arr.shift();
		}
	}

	/**
	 * If iteration over `left_arr` can be done, will iterate
	 * using following piece of code.
	 */
	if (left_arr && left_arr.length) {

		ret_arr.push(left_arr.shift());
	}

	/**
	 * If iteration over `right_arr` can be done, will iterate
	 * using following piece of code.
	 */
	if (right_arr && right_arr.length) {

		ret_arr.push(right_arr.shift());
	}

	return ret_arr;

}

function mergeSort(source_arr) {

	if (source_arr.length < 2) {

		return source_arr;
	}

	var median;
	var left_arr;
	var right_arr;

	/**
	 * Getting meadian of `source` array.
	 */
	median = Math.floor((source_arr.length) / 2);

	left_arr = source_arr.slice(0, median);
	right_arr = source_arr.slice(median);

	/**
	 * Here we are applying merging recursively.
	 */
	return mergeArr(mergeSort(left_arr), mergeSort(right_arr));

}

console.log(mergeSort(source_arr));