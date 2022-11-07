var Vue = new Vue ({
    el: '#app',
    data: {
        result: "",
        numbers: [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 0
        ],
        operators: [
            "+", "-", "*", "/"
        ],
    },
    methods: {
        input: function(elem) {
            this.result = this.result.toString();
            this.result += elem;
        },
        reset: function() {
            this.result = ""
        },
        calc: function() {
            this.result = eval(this.result)
        }
    }
})