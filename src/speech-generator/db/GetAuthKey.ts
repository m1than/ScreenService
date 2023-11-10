import db from "../../../lib/db/db";

export default async function GetAuthKey(): Promise<any> {
    const database = new db();
    database.connect();
    const query = `SELECT value FROM tokens WHERE tokens.key_name = 'yandex_auth_token';`;
    return await database.query(query);
}
