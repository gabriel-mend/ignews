import { signIn, signOut, useSession } from 'next-auth/client'
import styles from './styles.module.scss'
import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

export function SignInGithub() {
  const [session] = useSession()

  console.log(session)
  return session ? (
    <button 
      type="button"
      className={styles.signInButton}
    >
      <FaGithub color="#04d361" />
      {session.user.name}
      <FiX color="#737380" className={styles.closeIcon} onClick={() => signOut()}/>
    </button>
  ): (
    <button 
      type="button"
      className={styles.signInButton}
      onClick={() => signIn('github')}
    >
      <FaGithub color="#" />
      Sign in with Github
    </button>
  )
}