// 栈的数据结构
export class StackDataStruct<T> {
    private data:Array<T> // 数据
    private top:number // 栈顶元素索引

    // 初始化
    constructor() {
        this.data = []
        this.top = 0
    }

    // 入栈
    public push(item: any):void {
        this.data.push(item)
        this.top ++
    }

    // 出栈
    public pop():any {
        this.top --
        return this.data.pop()
    }

    // 返回栈顶元素
    public peek():any {
        return this.data[this.top]
    }

    // 栈判空
    public isEmpty():boolean  {
        return this.top === 0
    }

    // 栈大小
    public size():number {
        return this.top
    }

    // 清空
    public clear():void {
        delete this.data
        this.top = 0
        this.data = []
    }

    public show():void {
        console.log(this.data.toString())
    }
}