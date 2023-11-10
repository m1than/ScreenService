import {Pool} from "pg";
import * as process from "process";
import "dotenv/config";

export default class db {
    private database;

    constructor() {
        this.init();
    }

    private init() {
        this.database = new Pool({
            user: process.env.LOGIN,
            password: process.env.PASSWORD,
            host: process.env.HOST,
            port: +process.env.PORT,
            database: process.env.DATABASE,
        });
    }
    public connect() {
        this.database.connect();
    }
    public disconnect() {
        this.database.release();
    }
    public async query(q: string): Promise<object> {
        return await this.database.query(q);
    }
}