module.exports = {
    selectors: {
        get btn_clear() {
            return '//*[@resource-id="com.sec.android.app.popupcalculator:id/bt_clear"]'
        },
        get btn_3() {
            return $('//*[@resource-id="com.sec.android.app.popupcalculator:id/bt_03"]');
        },
        get btn_5() {
            return $('//*[@resource-id="com.sec.android.app.popupcalculator:id/bt_05"]');
        },
        get btn_add() {
            return '//*[@resource-id="com.sec.android.app.popupcalculator:id/bt_add"]'
        },
        get btn_equal() {
            return '//*[@resource-id="com.sec.android.app.popupcalculator:id/bt_equal"]'
        },
        get txtResult() {
            return '//*[@resource-id="com.sec.android.app.popupcalculator:id/txtCalc"] | //*[@resource-id="com.sec.android.app.popupcalculator:id/calc_edt"]'
        },


        btn_num(num) {
            return '//*[@text="' + num + '"]'
        }
    }
}

