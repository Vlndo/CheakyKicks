import React from 'react';
import useScrollToTop from '../components/useScrollToTop';


const PolConfidentialite = () => {
    useScrollToTop();

    return (
        <main className='otherPage' >
            <div className="containerOther">
                <h1>Politique de Confidentialité</h1>
                <section>
                    <h2>Introduction</h2>
                    <p>Votre vie privée est importante pour nous. Cette politique de confidentialité explique quelles informations nous collectons, pourquoi nous les collectons, et comment nous les utilisons. En utilisant notre site, vous acceptez les pratiques décrites dans cette politique.</p>
                </section>
                <section>
                    <h2>Informations que Nous Collectons</h2>
                    <p>Nous collectons divers types d'informations pour vous fournir et améliorer nos services :</p>
                    <ul>
                        <li><strong>Informations personnelles :</strong> telles que votre nom, adresse e-mail, numéro de téléphone, adresse postale, que vous nous fournissez lors de l'inscription ou de l'achat.</li>
                        <li><strong>Données de navigation :</strong> comme votre adresse IP, type de navigateur, pages visitées, et temps passé sur notre site, collectées automatiquement.</li>
                        <li><strong>Informations de paiement :</strong> telles que les détails de votre carte de crédit, collectées lors d'achats, via des services de paiement sécurisés.</li>
                        <li><strong>Données provenant de tiers :</strong> comme les informations de réseaux sociaux lorsque vous connectez votre compte à des services tiers.</li>
                    </ul>
                </section>
                <section>
                    <h2>Utilisation des Informations</h2>
                    <p>Nous utilisons les informations collectées pour :</p>
                    <ul>
                        <li>Fournir et améliorer nos services.</li>
                        <li>Personnaliser votre expérience utilisateur.</li>
                        <li>Traiter vos commandes et gérer votre compte.</li>
                        <li>Vous envoyer des mises à jour, des offres promotionnelles et d'autres informations marketing (avec votre consentement).</li>
                        <li>Améliorer la sécurité de notre site.</li>
                        <li>Se conformer à nos obligations légales.</li>
                    </ul>
                </section>
                <section>
                    <h2>Partage des Informations</h2>
                    <p>Nous ne partageons vos informations personnelles qu'avec des tiers dans les situations suivantes :</p>
                    <ul>
                        <li><strong>Avec votre consentement :</strong> lorsque vous nous autorisez à partager vos informations avec des tiers.</li>
                        <li><strong>Avec des prestataires de services :</strong> qui nous aident à fournir nos services, tels que les processeurs de paiement, les services de livraison, et les fournisseurs de services de marketing.</li>
                        <li><strong>Pour des raisons légales :</strong> lorsque nous sommes tenus de divulguer vos informations pour nous conformer à la loi ou à une procédure judiciaire.</li>
                    </ul>
                </section>
                <section>
                    <h2>Protection des Informations</h2>
                    <p>Nous mettons en œuvre diverses mesures de sécurité pour protéger vos informations personnelles :</p>
                    <ul>
                        <li>Chiffrement des données sensibles lors de la transmission.</li>
                        <li>Accès restreint aux informations personnelles aux seuls employés et partenaires qui en ont besoin pour fournir nos services.</li>
                        <li>Utilisation de pare-feu et de systèmes de détection d'intrusion pour protéger notre infrastructure informatique.</li>
                    </ul>
                </section>
                <section>
                    <h2>Vos Droits</h2>
                    <p>Vous disposez de plusieurs droits concernant vos informations personnelles :</p>
                    <ul>
                        <li><strong>Droit d'accès :</strong> demander une copie des informations personnelles que nous détenons à votre sujet.</li>
                        <li><strong>Droit de rectification :</strong> demander la correction de toute information inexacte ou incomplète.</li>
                        <li><strong>Droit à l'effacement :</strong> demander la suppression de vos informations personnelles dans certaines conditions.</li>
                        <li><strong>Droit d'opposition :</strong> vous opposer au traitement de vos informations personnelles pour des raisons légitimes.</li>
                        <li><strong>Droit à la portabilité :</strong> demander le transfert de vos informations personnelles à une autre organisation.</li>
                    </ul>
                    <p>Pour exercer ces droits, veuillez nous contacter à l'adresse suivante : contact@example.com.</p>
                </section>
                <section>
                    <h2>Cookies et Technologies Similaires</h2>
                    <p>Nous utilisons des cookies et des technologies similaires pour améliorer votre expérience sur notre site :</p>
                    <ul>
                        <li><strong>Cookies de session :</strong> pour maintenir votre session active sur notre site.</li>
                        <li><strong>Cookies de préférence :</strong> pour mémoriser vos préférences et paramètres.</li>
                        <li><strong>Cookies de sécurité :</strong> pour améliorer la sécurité de notre site.</li>
                        <li><strong>Cookies analytiques :</strong> pour comprendre comment vous utilisez notre site et améliorer ses performances.</li>
                    </ul>
                    <p>Vous pouvez configurer votre navigateur pour refuser les cookies, mais cela peut affecter certaines fonctionnalités de notre site.</p>
                </section>
                <section>
                    <h2>Modifications de cette Politique</h2>
                    <p>Nous pouvons mettre à jour cette politique de confidentialité de temps à autre. Nous vous informerons de tout changement en publiant la nouvelle politique sur notre site. Nous vous encourageons à consulter régulièrement cette page pour rester informé de la manière dont nous protégeons vos informations.</p>
                </section>
                <section>
                    <h2>Contact</h2>
                    <p>Si vous avez des questions concernant cette politique de confidentialité, veuillez nous contacter à l'adresse suivante :</p>
                    <address>
                        <strong>Email :</strong> <a href="mailto:contact@example.com">contact@example.com</a><br/>
                        <strong>Adresse :</strong> 123 Rue de l'Exemple, 75000 Paris, France<br/>
                        <strong>Téléphone :</strong> +33 1 23 45 67 89
                    </address>
                </section>
            </div>
        </main>

    );
};

export default PolConfidentialite;