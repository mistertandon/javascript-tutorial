// ---------- GIVEN -----------
// Get product id list
function getProductIdList() {
    return new Promise((res, rej) => {
        res([10, 11, 12, 13]);
    }
    );
}

// Returns a promise
function getProductDetailsById(id) {

    return new Promise((res, rej) => {
        res({
            "id": id,
            "name": "product name"
        });
    }
    );
}

//------------ IMPLEMENT ------------

// Returns a promise
function getProductDetailList() {
    // Fetch all ids;
    // Fetch product details for each id
    // Returns a promise of product detail list

    return getProductIdList().then(res => {

        let projectDetailsArr = [];

        for (i = 0; i < res.length; i++) {

            projectDetailsArr.push(getProductDetailsById(res[i]));
        }

        return Promise.all(projectDetailsArr)

    }
    );

}

// USAGE
getProductDetailList().then(productList => {

    for (product of productList) {
        console.log(product);
    }
}
);
