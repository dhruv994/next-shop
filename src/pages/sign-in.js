import { useState } from "react";
import Button from "../../components/Button";
import Field from "../../components/Field";
import Input from "../../components/input";
import Page from "../../components/Page";
import { fetchJSON } from "../../lib/api";

export default function SignInPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
      const response = await fetchJSON('http://localhost:1337/auth/local', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ identifier: email, password  })
        });
        console.log('sign-in',response)
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
                <Button type="submit">
                    Sign-in
                </Button>
            </form>
        </Page>
    )
}
