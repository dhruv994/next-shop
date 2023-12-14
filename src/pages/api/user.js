import { fetchJSON } from "../../../lib/api";

const { CMS_URL } = process.env;

export default async function handleUser(req, res) {
    const { jwt } = req.cookies;
    if (!jwt) {
        res.status(401).end();
        return;
    }
    try {
        const user = await fetchJSON(`${CMS_URL}/users/me`, { header: { 'Authorization': `Bearer${jwt}` } })
        console.log('Cookies :', res.cookies)
        res.status(200).json({
            id: user.id,
            name: user.username
        })

    } catch (err) {
        res.status(401).end();
    }
}