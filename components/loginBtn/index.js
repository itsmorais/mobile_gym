import { useSession, signIn, signOut } from "next-auth/react"

// signIn.tsx
export const LoginBtn = () => {
    const { register, handleSubmit } = useFormSignin()
  
    return (
      <AuthLayout title="Login">
        <form onSubmit={handleSubmit(({ email, password }) => signIn('credentials', { email, password }))}>
          <Label title="Email">
            <Input {...register('email')} placeholder="Email" />
          </Label>
          <Label title="Password">
            <Input {...register('password')} type="password" placeholder="Password" />
          </Label>
          <Button type="submit">Submit</Button>
        </form>
  
        <Link href="/register">Register</Link>
        
        <button onClick={() => signIn('google')}>Sign in with Google</button>
      </AuthLayout>
    )
  }

module.exports = LoginBtn