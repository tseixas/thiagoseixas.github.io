import React from 'react';

import './styles.css';

const Header = () => (
    <header id="header">
        <div className="row mt-5">
            <div className="col-sm">
                <h1 className="font-weight-bold">Paulo Thiago Seixas Serrão</h1>
            </div>
        </div>

        <div className="row">
            <div className="col-sm">
                <h3>Desenvolvedor</h3>
            </div>
        </div>

        <div className="row mt-3">
            <div className="col-sm">
                <p>
                    Experiência em desenvolvimento web trabalhando com as seguintes tecnologias: Python(Django), PHP(Laravel
                    5), Node.js(Loopback), C#, HTML, CSS, Javascript, Bootstrap, AngularJS, Angular 2+, GIT, Banco de dados(MySQL, SQLServer, Postgresql e MongoDB). SCRUM e XP como metodologia ágil.
                </p>
            </div>
        </div>
    </header>
);

export default Header;
