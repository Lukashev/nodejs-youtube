class Database {

  private static instance: Database = null 
  private connections: number = 0

  private constructor() {}

  public static getInstance(): Database {
    if (Database.instance) return Database.instance
    return Database.instance = new Database()
  }

  public getConnQuantity(): number {
    return this.connections
  }

  public addConnection(): void {
    this.connections++
  }

}