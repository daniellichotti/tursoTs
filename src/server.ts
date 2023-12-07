import express from 'express';
import { createClient } from '@libsql/client';
import { randomUUID } from 'crypto';
import { type } from 'os';

const client = createClient({
    url: 'libsql://demo-daniellichotti.turso.io',
    authToken:
        'eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJpYXQiOiIyMDIzLTEyLTA3VDIxOjA5OjM2LjMyMzE5MTQ4MVoiLCJpZCI6IjZmYWI4YjBmLTk1NDItMTFlZS1hNmZlLTdhNTJlMWY3NzU5YSJ9.c299Vk7gyu5u3TpwNN8rqf_xNTe1wyXGacKHqA3p9jQCCqzcWbmKmj8X4nWs05z6Klc0N3URDG_chJeKDka8AQ',
});

const app = express();

app.get('/users', async (req, res) => {
    try {
        const rs = await client.execute('select * from users');
        res.json(rs);
    } catch (e) {
        res.sendStatus(500);
    }
});

app.get('/adduser', async (req, res) => {
    try {
        //const email = req.query.email;
        //if (typeof email !== 'string') {
        //    res.send(400);
        //    return;
        //}
        const rs = await client.execute({
            sql: 'insert into users values (?, ?, ?)',
            args: [randomUUID(), 'email', 0],
        });
        res.json(rs);
    } catch (e) {
        res.sendStatus(500);
    }
});

app.listen(8000, () => {
    console.log('listining on port 8000');
});
