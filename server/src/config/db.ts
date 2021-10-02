import { Db, MongoClient } from "mongodb";


class Mongo {
  retries = 0;
  MAXRETRIES = 5;
  CONNECT_TIMEOUT = 1000;
  db: Db = null;
  CONNECT_OPTIONS = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    serverSelectionTimeoutMS: 3000
  };

  async dbconnect(): Promise<void> {
    if (this.db) return;
    await this.connectWithRetries();
  }

  private async connectWithRetries(): Promise<void> {
    try {
      const client = await MongoClient.connect(process.env.DB_URI, this.CONNECT_OPTIONS);
      this.db = client.db(process.env.DB_NAME);
      console.log('MongoDB Connected Successfully, DB name:', this.db.namespace);
      return;
    } catch (error) {
      console.error('Cannot Connect to DB', error);
      this.retries++;
      if(this.retries === this.MAXRETRIES) {
        console.error('Failed To Connect After Maximum Number Of Retries');
        return process.exit(1);
      } else {
        setTimeout(async () => {
          await this.connectWithRetries();
        }, this.CONNECT_TIMEOUT);
      }
    }

  }
}

export default new Mongo();