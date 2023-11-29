import { useState } from "react";
import Button from "../../components/Button";
import Field from "../../components/Field";
import Input from "../../components/input";
import Page from "../../components/Page";

export default function SignInPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Should submit',  { email, password })
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
 