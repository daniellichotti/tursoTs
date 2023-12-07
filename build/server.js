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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_1 = require("@libsql/client");
const crypto_1 = require("crypto");
const client = (0, client_1.createClient)({
    url: 'libsql://demo-daniellichotti.turso.io',
    authToken: 'eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJpYXQiOiIyMDIzLTEyLTA3VDIxOjA5OjM2LjMyMzE5MTQ4MVoiLCJpZCI6IjZmYWI4YjBmLTk1NDItMTFlZS1hNmZlLTdhNTJlMWY3NzU5YSJ9.c299Vk7gyu5u3TpwNN8rqf_xNTe1wyXGacKHqA3p9jQCCqzcWbmKmj8X4nWs05z6Klc0N3URDG_chJeKDka8AQ',
});
const app = (0, express_1.default)();
app.get('/users', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const rs = yield client.execute('select * from users');
        res.json(rs);
    }
    catch (e) {
        res.sendStatus(500);
    }
}));
app.get('/adduser', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //const email = req.query.email;
        //if (typeof email !== 'string') {
        //    res.send(400);
        //    return;
        //}
        const rs = yield client.execute({
            sql: 'insert into users values (?, ?, ?)',
            args: [(0, crypto_1.randomUUID)(), 'email', 0],
        });
        res.json(rs);
    }
    catch (e) {
        res.sendStatus(500);
    }
}));
app.listen(8000, () => {
    console.log('listining on port 8000');
});
