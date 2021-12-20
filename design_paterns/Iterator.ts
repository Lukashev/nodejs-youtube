interface Iterator<T> {
  next(): T
  hasNext(): boolean
}

interface Aggregate {
  createIterator(): Iterator<Number>
}

class ConcreteIterator implements Iterator<Number> {

  private index = 0
  private collection: Number[] = []

  public constructor(c: Number[]) {
    this.collection = c
  }

  next(): any {
    return this.collection[this.index++]
  }

  hasNext(): boolean {
      return this.index < this.collection.length
  }

}


class ConcreteAggregate implements Aggregate {

  private collection: Number[] = []

  public constructor(c: Number[]) {
    this.collection = c
  }

  createIterator(): Iterator<Number> {
    return new ConcreteIterator(this.collection)    
  }
};


const aggregator: Aggregate = new ConcreteAggregate([10, -9, 20, 17])
const iterator =  aggregator.createIterator()


while (iterator.hasNext()) {
  console.log(iterator.next())
}
