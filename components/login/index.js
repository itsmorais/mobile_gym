import { useState } from "react";
import { Container } from "./style";
import { useRouter } from "next/router";

export default function Login() {
  const [nome, setNome] = useState("");
  const [pass, setPass] = useState("");
  const router = useRouter();

  async function handleLogin() {
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome_usuario: nome,
          senha: pass,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        router.push(`/?id_usuario=${data.id_usuario}`)
      } else {
        console.error("Failed to log in");
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  }

  return (
    <Container>
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Nome do usuário"
      />
      <input
        type="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder="Senha"
      />
      <button onClick={handleLogin}>Login</button>
    </Container>
  );
}
