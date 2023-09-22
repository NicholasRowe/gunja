import { Link } from "react-router-dom";

import Logo from "../Logo/Logo";
import logo from '../../../assets/img/logo/f_logo.png';

const Footer = () => {
    return (
        <footer className="footer-bg footer-p">
            <div className="copyright-wrap">
                <div className="container">
                    <div className="row align-items-center text-center">
                        <div className="col-lg-12">
                            {'Copyright © 2023'} <span>{'Gunja Gold Co Ltd'}</span> {'All Rights Reserved.'} - {'Registered Thai Business No: 0325565001673'}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;