import React from 'react';

function Login() {
  return (
        <>
          <div>Prijavite se</div>
          <form>
            <label>Email</label>
            <input type={"text"} placeholder={"Unesite email adresu"}/>
            <label>Lozinka</label>
            <input type={"password"} placeholder={"Unesite lozinku"}/>
          </form>
        </>
      )

}

export default Login;
