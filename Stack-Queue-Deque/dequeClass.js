 //Deque class implementation..........

 class Deque {
    constructor() {
        this.data = {}
        this.rear = 0
        this.front = 0
    }

    addFront(element){
        this.front--
        this.data[this.front] = element
    }

    addBack(element){
        this.data[this.rear] = element
        this.rear++
    }
    isEmpty(){
        return this.rear === this.front
    }

    removeFront(){
       if(this.isEmpty())return null
       let temp = this.data[this.front]
       delete this.data[this.front]
       this.front++
       return temp
    }

    removeBack(){
        if(this.isEmpty())return null
        this.rear--
        let temp = this.data[this.rear]
        delete this.data[this.rear]
        return temp
    }

    getLength(){
        return this.rear - this.front
    }
    
    getFront(){
        if(this.isEmpty())return null
        return this.data[this.front]
    }
    getRear(){
        if(this.isEmpty())return null
        return this.data[this.rear-1]
    }
    getData(){
        let result =[]
        for(let i = this.front; i < this.rear; i++)result.push(this.data[i])
        return result
    }
    print(){
        console.log(`the data in the queue is`, this.getData(),`the front and rear are`+
        `${this.front},${this.rear}`+
        `the length of the queue is` +
        `${this.getLength()}`)
    }
 }