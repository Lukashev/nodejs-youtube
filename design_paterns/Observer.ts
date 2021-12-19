interface IEventListener {
  getState(): IListenerState
  subscribe(observer: IObserver): void
  unsubscribe(observer: IObserver): void
  notify(): void
}

interface IObserver {
  update(eventListener: IEventListener)
}

interface IListenerState {
  data: any[]
  readonly error?: Error
}

class AppListener implements IEventListener {

  private state: IListenerState = { data: [], error: null }
  private observers: IObserver[] = []

  public getState(): IListenerState {
    return this.state
  }

  subscribe(observer: IObserver & { __proto__?: any }): void {
    const isExist = this.observers.includes(observer)
    if (isExist) {
      throw new Error(`Observer ${observer.__proto__.constructor.name} has already subscribed`)
    }
    this.observers.unshift(observer)
    console.log(`Subscribe an observer ${observer.__proto__.constructor.name}`)
  }

  unsubscribe(observer: IObserver): void {
    const observerIdx = this.observers.indexOf(observer)
    if (observerIdx > -1) {
      this.observers.splice(observerIdx, 1)
      console.log('Observer was unsubscribed')
    } else {
      console.log('Observer not exist')
    }
  }

  notify(): void {
    for (const observer of this.observers) {
      observer.update(this)
    }
  }

  public async getUsers(): Promise<void> {
    setTimeout(() => {
      this.state.data = [
        {
          name: 'Alex',
          age: 28
        },
        {
          name: 'John',
          age: 21
        },
        {
          name: 'Sandra',
          age: 19
        }
      ]
      this.notify()
    }, 1000)
  }

}

class SortObserver implements IObserver {
  update(eventListener: IEventListener) {
    const { data } = eventListener.getState()
    const sortedUsers = data.sort((a, b) => a.age - b.age)
    console.log(sortedUsers)
  }
}

class JSONSerializeObserver implements IObserver {
  update(eventListener: IEventListener) {
    const { data } = eventListener.getState()
    console.log(JSON.stringify(data, null, 2))
  }
}

const appListener = new AppListener()

const sortObserver = new SortObserver()
const jsonSObserver = new JSONSerializeObserver()

appListener.subscribe(sortObserver)
appListener.subscribe(jsonSObserver)

appListener.getUsers()
