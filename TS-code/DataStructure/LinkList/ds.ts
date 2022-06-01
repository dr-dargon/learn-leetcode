// 链表的数据结构
class LinkListNode<T> {
    public element: T
    public next: LinkListNode<T>

    constructor(val: T, next: LinkListNode<T>){
        this.element = val
        this.next = next
    }
}

export class LinkListDataStruct<T> {
    public head:  LinkListNode<T>
    public length: number

    constructor() {
        this.head = new LinkListNode(null, null)
        this.length = 0
    }

    // 追加
    public append(ele:T):void {
        let node = new LinkListNode(ele, null)
        if(this.head.element === null){
            this.head = node
        }else{
            let current = this.head
            while(current.next){
                current = current.next
            }
            current.next = node
        }
        this.length++
    }

    // 指定位置插值
    public insert(position: number, ele: T):boolean {
        if(position >= 0 && position <= this.length){
            let node = new LinkListNode(ele, null)
            let current = this.head
            let index = 0
            let previous: LinkListNode<T>
            if(position === 0) {
                node.next = current
                this.head = node
            }else{
                while(index++ < position){
                    previous = current
                    current = current.next
                }
                node.next = current
                previous.next = node
            }
            this.length++
            return true
        }
        return false
    }

    // 删除指定位置值
    public removeAt(position: number): null|T {
        if(position < 0 && position >= this.length) return null
        let current = this.head
        let previous: LinkListNode<T>
        let index = 0
        if(position === 0) this.head = current.next
        else{
            while(index++ < position){
                previous = current
                current = current.next
            }
            previous.next = current.next
        }
        this.length--
        return current.element
    }

    // 删除指定值
    // todo 待完善
    public remove(ele: T):boolean {
        if(this.length === 0) return false
        else{
            return true
        }
    }

    // 链表大小
    public size():number {
        return this.length
    }

    // 链表判空
    public isEmpty():boolean {
        if(this.length === 0) return true
        return false
    }

    public indexOf(ele:T):number {
        if(this.length === 0) return -1
        else{
            let current = this.head
            let index = 0
            while(current){
                if(ele === current.element){
                    return index
                }
                index++
                current = current.next
            }
            return -1
        }
    }

    // 打印输出
    public show():void {
        if(this.length > 0){
            let current = this.head
            let nodeList = []
            while(current.next != null){
                nodeList.push(current.element)
                current = current.next
            }
            console.log(nodeList.toString())
        }else{
            console.log('')
        }
    }
}