import { fetchJson } from "../../../lib/api";

const { CMS_URL } = process.env;

export default async function handleUser(req, res) {
    console.log("HALO************   ",req.cookies);
    const { jwt } = req.cookies;
    if (!jwt) {
        res.status(401).end();
        return;
    }
    try {
        console.log("INSIDE USR API");
         const user = await fetchJson(`${CMS_URL}/users/me`, { headers: { 'Authorization': `Bearer ${jwt}` }, })
        
        console.log("userrrr",user)
        res.status(200).json({
            id: user.id,
            name: user.username
        })

    } catch (err) {
        res.status(401).end();
    }
}