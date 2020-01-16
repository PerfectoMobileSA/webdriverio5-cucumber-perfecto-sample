module.exports = {
    selectors: {

        get btn_clear() {
            return '//*[@label="all clear"] | //*[@label="clear"]'
        },

        get btn_add() {
            return '//*[@label="add"]'
        },
        get btn_equal() {
            return '//*[@label="equals"]'
        },
        get txtResult() {
            return '//*[@label="Result"]'
        },

        btn_num(num) {
            return '//*[@label="' + num + '"]'
        }
    }
}

