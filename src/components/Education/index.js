import React from 'react';

import './styles.css';

const Education = () => (
  <div id="education">
    <h4>
      <span className="badge badge-pill badge-dark">
        <i className="material-icons">school</i>
      </span>
      Educação
                </h4>
    <hr />
    <div className="row">

      <div className="col-3">
        <span>
          <strong>Cursando</strong>
        </span>
      </div>
      <div className="col-9">
        <span>
          <strong>Pós-graduação em Eng. de Software</strong>
        </span>
        <br />
        <span>
          <i> FUCAPI </i>
        </span>
        <br />
      </div>

    </div>
    <div className="row mt-3">

      <div className="col-3">
        <span>
          <strong>Concluído</strong>
        </span>
      </div>
      <div className="col-9">
        <span>
          <strong>Graduação em Análise e Desenvolvimento de Sistemas</strong>
        </span>
        <br />
        <span>
          <i> Universidade Paulista - UNIP </i>
        </span>
        <br />
      </div>

    </div>
  </div>

);

export default Education;
