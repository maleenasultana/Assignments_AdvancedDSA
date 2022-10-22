// Queue class implementation..........

class Queue {
    constructor(){
        this.data ={}
        this.front =0
        this.rear = 0
    }

    enqueue(){
        this.data[this.rear]= element
        this.rear++
    }

    deQueue(){
        if(this.isEmpty()) return null  //underflow condition
        let temp = this.data[this.front] 
        delete this.data[this.front]
        this.front++
        return temp
    }

    isEmpty(){
        return this.rear === this.front
    }

    getFront(){
        if(!this.isEmpty()) {
            return this.data[this.front]
        } else {
            return -1
        }
    }
    getLength(){
        return this.rear - this.front
    }

    getData(){
        let res = []
        for(let i = this.front; i< this.rear; i++) res.push(this.data[i])
        return res
    }

    print(){
        console.log(`the data in the queue is`, this.data,`the front and rear are`+
        `${this.front},${this.rear}`+`the length of the queue is`+`${this.getLength()}`)
    }
}
const q= new Queue();
q.enqueue(1)
q.deQueue();
console.log(q.data, q.front, q.rear)
q.print()
