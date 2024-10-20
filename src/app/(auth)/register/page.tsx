import AuthCard from "@/features/auth/components/AuthCard";
import RegisterForm from "@/features/auth/components/RegisterForm";
import { routes } from "@/routes";
import React from "react";

const RegisterPage = () => {
    return (
        <AuthCard
            title="Sign up to continue"
            backLinkText="Already have an account?"
            backLinkhref={routes.auth.login}
            backLinklabel="Sign up"
            showSocial
        >
            <RegisterForm />
        </AuthCard>
    );
};

export default RegisterPage;
