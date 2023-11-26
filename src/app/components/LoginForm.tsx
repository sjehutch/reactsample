// pages/LoginPage.js
import LoginForm from '../components/LoginForm';
import ThemeSelector from '../components/ThemeSelector';

export default function LoginPage() {
    return (
        <div>
            <ThemeSelector />
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <LoginForm />
            </div>
        </div>
    );
}
