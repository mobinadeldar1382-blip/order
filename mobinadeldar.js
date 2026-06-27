function prepareOrder(foodName, callback) {
    console.log(`سفارش ${foodName} در حال آماده سازی است...`);

    setTimeout(() => {
        console.log(`زمان انتظار به پایان رسید.`);

        callback();
    }, 3000);
}

function onOrderReady() {
    console.log("غذا آماده شد!");
}

prepareOrder("مرغ بریان", onOrderReady);