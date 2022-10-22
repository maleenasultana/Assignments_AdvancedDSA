// stack class implementation............

class Stack {
    constructor(){
        this.data = []
        this. length = 0
    }
    push(element){
        this.data[this.size] = element
        this.size = this.size + 1
    }
    isEmpty(){
        return this.size == 0
    }
    pop(){
        if(!this.isEmpty()){
            this.size--;
            return this.data.pop()
        }else{
            throw error("Stack Underflow")
        }
    }
    peek(){
        if(this.isEmpty())return null
        return this.data.at(-1)
    }
    print(){
        console.log(`the data in the stack is`, this.data)
    }
}
const stk = new Stack()
stk.push(1);
stk.pop();
stk.print();