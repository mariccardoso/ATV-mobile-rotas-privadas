import {Redirect } from 'expo-router';

export default function Index() {
    // Redirecionar para login por padrão
    // o AuthContext cuidará de redirecionar para a tela correta

    return <Redirect href="/(auth)/login" />;
}