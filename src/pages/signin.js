import { useState, useEffect } from 'react';
import { useAuth } from '@components/AuthProvider';
import { useRouter } from 'next/router';
import UserState from '@components/UserState';
import { USER, PASSWORD } from '../auth';

const Signin = () => {
  const [form, setForm] = useState({
    email: USER,
    password: PASSWORD,
  });
  const [loading, setLoading] = useState(false);
  const { auth, user, initializing, getRedirect, clearRedirect, error } =
    useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!initializing) {
      if (user) {
        const redirect = getRedirect();
        if (redirect) {
          router.push(getRedirect());
          clearRedirect();
        } else {
          router.push('/dashboard');
        }
      }
    }
  }, [initializing, user]);

  const handleOnChange = function (e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const goHome = () => {
    router.push('/');
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      if (form.email && form.password) {
        setLoading(true);
        await auth.signin(form.email, form.password);
      }
    } catch (error) {
      setLoading(false);
    } finally {
    }
  };

  if (initializing) {
    return <div>Loading...</div>;
  }

  if (loading) {
    return <div>Signing in progres...</div>;
  }

  return (
    <div>
      <h1>Sign in</h1>
      <UserState />
      <div>
        <button onClick={goHome}>Go home</button>
      </div>
      <br />
      <form onSubmit={onSubmit}>
        <div>
          <label>Email</label>
          <input
            name='email'
            type='text'
            value={form.email}
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            name='password'
            type='text'
            value={form.password}
            onChange={handleOnChange}
          />
        </div>
        <button type='submit'>Sign in</button>
      </form>
      {error && (
        <div>
          <p>Sign in error:</p>
          <p>{error.message}</p>
        </div>
      )}
    </div>
  );
};

export default Signin;
