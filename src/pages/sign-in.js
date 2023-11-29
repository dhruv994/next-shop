import { useState } from "react";
import Button from "../../components/Button";
import Field from "../../components/Field";
import Input from "../../components/input";
import Page from "../../components/Page";
import { fetchJSON } from "../../lib/api";


function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}
export default function SignInPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState({ loading: false, error: false })

    const handleSubmit = async (event) => {
        event.preventDefault();
        setStatus({ loading: true, error: false });
        await sleep(2000);
        try {
            const response = await fetchJSON('http://localhost:1337/auth/local', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ identifier: email, password })
            });
            setStatus({ loading: false, error: false });

            console.log('sign-in', response)
        } catch (err) {
            setStatus({ loading: false, error: true });

        }
    }

    return (
        <Page title="Sign-In">
            <form onSubmit={handleSubmit}>
                <Field label="Email">

                    <Input type="email" required value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </Field>
                <Field label="password">
                    <Input type="password" required value={password} onChange={(event) => setPassword(event.target.value)} />
                </Field>
                {status.error &&
                    <p className="text-red-700">
                        Invalid Credentials
                    </p>

                }
                {status.loading ?
                    <p> loadingg....</p> : (
                        <Button type="submit">
                            Sign-in
                        </Button>

                    )

                }

            </form>
        </Page>
    )
}
