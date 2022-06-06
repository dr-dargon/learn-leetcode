export class Queue {
    inArr: number[]
    outArr: number[]
    constructor() {
        this.inArr = []
        this.outArr = []
    }

    public push(node: number): void {
        if(this.outArr.length === 0) this.inArr.push(node)
        this.outArr.forEach(ele => {
            this.inArr.unshift(ele)
        })
    }

    public pop(): number {
        if(this.outArr.length === 0) {
            this.inArr.forEach(ele => {
                this.outArr.unshift(ele)
            })
            this.inArr.shift()
            let popNum = this.outArr.pop()
            this.outArr = []
            return popNum
        }
    }

    public show():void {
        console.log(this.inArr.toString())
        console.log(this.outArr.toString())
    }
}

