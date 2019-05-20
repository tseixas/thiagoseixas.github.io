import React from 'react';

import './styles.css';

const Profile = () => (
  <div id="profile">
    <h4>
      <span className="badge badge-pill badge-dark">
        <i className="material-icons">person</i>
      </span>
      Perfil
    </h4>
    <hr />

    <div>
      <span>
        <strong>Cidade</strong>
      </span>
      <br />
      <span>Manaus - AM</span>
      <br />
    </div>

    <div className="mt-3">
      <span>
        <strong>Telefone</strong>
      </span>
      <br />
      <span>(92) 98225-5754</span>
      <br />
    </div>

    <div className="mt-3">
      <span>
        <strong>E-mail</strong>
      </span>
      <br />
      <a href="mailto:thiago.seixas10@gmail.com" target="_blank" rel="noopener noreferrer">thiago.seixas10@gmail.com</a>
      <br />
    </div>

    <div className="mt-3">
      <span>
        <strong>LinkedIn</strong>
      </span>
      <br />
      <a href="https://linkedin.com/in/thiagooseixas" target="_blank" rel="noopener noreferrer">linkedin.com/in/thiagooseixas</a>
      <br />
    </div>

    <div className="mt-3">
      <span>
        <strong>Skype</strong>
      </span>
      <br />
      <span>thiago.seixas_1</span>
      <br />
    </div>

  </div>
);

export default Profile;
