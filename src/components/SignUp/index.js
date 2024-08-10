import react, {useState} from "react";
import './index.css';

const Signup = () => {
    const [user_firstname, setFirstName] = useState("");
    const [user_email, setEmail] = useState("");
    const [user_phone, setPhone] = useState("");
    const [user_password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSignup = async (e) => {
        e.preventDefault();

        if (!validateEmail(user_email)) {
            setErrorMessage("Invalid email format");
            return;
        }

        const data = {
            user_firstname,
            user_email,
            user_phone,
            user_password,
            user_lastname: "Doe",
            user_city: "Hyderabad",
            user_zipcode: "500072"
        };

        try{
            const response = await fetch("https://syoft.dev/Api/user_registeration/api/user_registeration", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            body: JSON.stringify(data),
        });
        const result = await response.json();
        console.log('Success:', result);
        } catch (error) {
            console.error('Error:', error);
        }

        
    };

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    return (
        <div className = "form-container">
            <h1>Sign Up</h1>
            <form onSubmit={handleSignup}>
                <input type="text" placeholder="First Name" value={user_firstname} onChange={(e) => setFirstName(e.target.value)} required />
                <input type="email" placeholder="Email" value={user_email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="text" placeholder="Phone" value={user_phone} onChange={(e) => setPhone(e.target.value)} required />
                <input type="password" placeholder="Password" value={user_password} onChange={(e) => setPassword(e.target.value)} required />

                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <button type="submit">Sign Up</button>

            </form>

        </div>
    )
}

export default Signup;


