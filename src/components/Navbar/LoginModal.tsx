import { Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useUser } from "../../contexts/UserContext";
import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function LoginModal({
    openModal,
    onCloseModal,
}: {
    openModal: boolean;
    onCloseModal: () => void;
}) {
    const { login } = useUser();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    useEffect(() => {
        if (!openModal) {
            setEmailError("");
            setPasswordError("");
        }
    }, [openModal]);

    const handleEmailChange = (text: string) => {
        setEmail(text);
        validateEmail(text);
    };

    const handlePasswordChange = (text: string) => {
        setPassword(text);
        validatePassword(text);
    };

    const validateEmail = (email: string) => {
        if (!email.endsWith('@gmail.com') && !email.endsWith('@stylistco.com')) {
            setEmailError('Email must be like @gmail.com or @stylistco.com');
            return false;
        } else {
            setEmailError('');
            return true;
        }
    };
    
    const validatePassword = (password: string) => {
        if (password === '') {
            setPasswordError('Password cannot be empty');
            return false;
        } else {
            setPasswordError('');
            return true;
        }
    };
    
    const handleLogin = () => {
        const isEmailValid = validateEmail(email);
        const isPasswordValid = validatePassword(password);
    
        if (isEmailValid && isPasswordValid) {
            login(email, password);
            onCloseModal();
            navigate("/");
            setEmail("");
            setPassword("");
        }
    };

    return (
        <Modal show={openModal} size="md" onClose={onCloseModal} popup lang="en">
            <Modal.Header />
            <Modal.Body>
                <div className="space-y-6">
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                        Sign in to our platform
                    </h3>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email" value="Your email" />
                        </div>
                        <TextInput
                            id="email"
                            placeholder="email@email.com"
                            required
                            value={email}
                            onChange={(e) => handleEmailChange(e.target.value)}
                        />
                        {emailError && <div className="text-red-500">{emailError}</div>}
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="password" value="Your password" />
                        </div>
                        <TextInput
                            id="password"
                            type="password"
                            required
                            value={password}
                            onChange={(e) =>
                                handlePasswordChange(e.target.value)
                            }
                        />
                        {passwordError && <div className="text-red-500">{passwordError}</div>}
                    </div>
                    <div className="flex justify-between">
                        <div className="flex items-center gap-2">
                            <Checkbox id="remember" />
                            <Label htmlFor="remember">Remember me</Label>
                        </div>
                        <a
                            href="#"
                            className="text-sm text-cyan-700 hover:underline dark:text-cyan-500"
                        >
                            Forgot Password?
                        </a>
                    </div>
                    <div className="w-full flex justify-center items-center">
                        <button
                            className={`w-8/12 h-10 text-white bg-cyan-700 hover:bg-cyan-500 hover:shadow-lg font-medium rounded-lg text-sm
                                                transition-all duration-300 ease-in-out`}
                            onClick={handleLogin}
                        >
                            Log in to your account
                        </button>
                    </div>
                    <div className="flex flex-col justify-center items-center text-sm font-medium text-gray-500 dark:text-gray-300">
                        Not registered yet?&nbsp;
                        <Link
                            to=""
                            className="text-cyan-700 hover:underline dark:text-cyan-500"
                        >
                            Create account
                        </Link>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}