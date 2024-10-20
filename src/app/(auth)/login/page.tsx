import AuthCard from "@/features/auth/components/AuthCard";
import LoginForm from "@/features/auth/components/LoginForm";
import { routes } from "@/routes";
import React from "react";

const LoginPage = () => {
    return (
        <AuthCard
            title="Log in to continue"
            backLinkText="Not registered yet?"
            backLinkhref={routes.auth.register}
            backLinklabel="Register"
            showSocial
        >
            <LoginForm />
        </AuthCard>
    );
};

export default LoginPage;
