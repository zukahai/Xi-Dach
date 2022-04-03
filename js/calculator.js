class calculator {
    constructor() {

    }

    init() {
        this.AAA = [];
        this.AAA[0] = [1, 10, 11];
        for (let i = 1; i < 4; i++) {
            this.AAA[i] = [];
            for (let j = 0; j < this.AAA[i - 1].length; j++) {
                this.AAA[i].push(this.AAA[i - 1][j] + 1);
                this.AAA[i].push(this.AAA[i - 1][j] + 10);
                this.AAA[i].push(this.AAA[i - 1][j] + 11);
            }
        }
    }

    calcula(arr) {
        this.init();
        let temp = [];
        arr.forEach(a => {
            let x = Math.floor((a + 3) / 4);
            if (x > 10)
                x = 10;
            temp.push(x);
        });
        let sum = 0;
        let count = 0;
        temp.forEach(a => {
            if (a == 1)
                count++;
            else
                sum += a
        });
        let ans = sum;
        if (count > 0)
            this.AAA[count - 1].forEach(a => {
                let value = sum + a;
                if (value > ans && value >= 16 && value <= 21)
                    ans = value;
            });
        return ans;
    }
}