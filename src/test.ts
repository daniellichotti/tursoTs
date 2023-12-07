import { createClient } from '@libsql/client';

async function main() {
    const client = createClient({
        url: 'libsql://demo-daniellichotti.turso.io',
        authToken:
            'eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJpYXQiOiIyMDIzLTEyLTA3VDIxOjA5OjM2LjMyMzE5MTQ4MVoiLCJpZCI6IjZmYWI4YjBmLTk1NDItMTFlZS1hNmZlLTdhNTJlMWY3NzU5YSJ9.c299Vk7gyu5u3TpwNN8rqf_xNTe1wyXGacKHqA3p9jQCCqzcWbmKmj8X4nWs05z6Klc0N3URDG_chJeKDka8AQ',
    });

    try {
        const rs = await client.execute('select * from users');
        //await client.execute("update users set coins =10 where uid='001'");
        console.log(rs);
    } catch (e) {
        console.error(e);
    } finally {
        client.close;
    }
}

main();
