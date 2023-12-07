"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@libsql/client");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = (0, client_1.createClient)({
            url: 'libsql://demo-daniellichotti.turso.io',
            authToken: 'eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJpYXQiOiIyMDIzLTEyLTA3VDIxOjA5OjM2LjMyMzE5MTQ4MVoiLCJpZCI6IjZmYWI4YjBmLTk1NDItMTFlZS1hNmZlLTdhNTJlMWY3NzU5YSJ9.c299Vk7gyu5u3TpwNN8rqf_xNTe1wyXGacKHqA3p9jQCCqzcWbmKmj8X4nWs05z6Klc0N3URDG_chJeKDka8AQ',
        });
        try {
            const rs = yield client.execute('select * from users');
            //await client.execute("update users set coins =10 where uid='001'");
            console.log(rs);
        }
        catch (e) {
            console.error(e);
        }
        finally {
            client.close;
        }
    });
}
main();
