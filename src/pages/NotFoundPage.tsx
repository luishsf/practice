import React from "react";
import {Link} from "react-router-dom";
import '../css/notFound.css';

export function NotFoundPage() {

    return (
        <div className="not-found">
            <div className="main-content">
                <h1>Nós não conseguimos encontrar o que você estava procurando</h1>
                <p>Infelizmente a página que você procurava não pôde ser achada. Ela pode estar temporariamente indisponível, movida ou não existir mais.</p>
                <p>Verifique por algum erro inserido no URL e tente novamente.</p>
                <div>
                    <Link to="/">
                        <a className="navigation">
                            Home
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
}