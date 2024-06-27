import React from 'react';
import useScrollToTop from '../components/useScrollToTop';



const GestionDonnees = () => {
    useScrollToTop();

    return (
        <main className='otherPage'>
            <div className="containerOther">
                <h1>Politique de Gestion de Vos Données</h1>
                <section>
                    <h2>Introduction</h2>
                    <p>La protection de vos données personnelles est une priorité pour nous. Cette politique de gestion de vos données décrit comment nous collectons, utilisons, et protégeons vos informations personnelles. Nous nous engageons à respecter votre vie privée et à protéger les informations que vous partagez avec nous.</p>
                    <p>Cette politique de gestion de vos données s'applique à toutes les informations collectées via notre site web et nos services connexes. En utilisant nos services, vous acceptez les pratiques décrites dans cette politique.</p>
                </section>
                <section>
                    <h2>Types de Données Collectées</h2>
                    <p>Nous collectons plusieurs types de données, y compris les informations personnelles que vous fournissez directement, les données de navigation, et les informations provenant de tiers. Voici quelques exemples de données que nous collectons :</p>
                    <ul>
                        <li><strong>Informations personnelles :</strong> nom, adresse e-mail, numéro de téléphone, adresse postale.</li>
                        <li><strong>Données de navigation :</strong> adresse IP, type de navigateur, pages visitées, durée de la visite.</li>
                        <li><strong>Informations provenant de tiers :</strong> données démographiques, préférences de l'utilisateur.</li>
                    </ul>
                    <p>Ces données nous permettent de mieux comprendre nos utilisateurs et d'améliorer nos services.</p>
                </section>
                <section>
                    <h2>Utilisation des Données</h2>
                    <p>Les données collectées sont utilisées pour fournir, améliorer, et personnaliser nos services. Voici comment nous utilisons ces informations :</p>
                    <ul>
                        <li><strong>Fournir des services :</strong> utiliser vos informations pour traiter vos commandes, répondre à vos demandes et offrir un support client.</li>
                        <li><strong>Améliorer nos services :</strong> analyser les données pour comprendre les comportements des utilisateurs et améliorer la performance de notre site web.</li>
                        <li><strong>Personnalisation :</strong> personnaliser votre expérience en fonction de vos préférences et intérêts.</li>
                        <li><strong>Sécurité :</strong> utiliser les informations pour protéger contre les fraudes et assurer la sécurité de nos services.</li>
                        <li><strong>Conformité légale :</strong> respecter nos obligations légales et réglementaires.</li>
                    </ul>
                    <p>Nous nous efforçons de limiter l'utilisation de vos données personnelles à ce qui est strictement nécessaire pour atteindre ces objectifs.</p>
                </section>
                <section>
                    <h2>Partage des Données</h2>
                    <p>Nous pouvons partager vos données avec des tiers de confiance pour vous offrir certains services. Voici les circonstances dans lesquelles nous pouvons partager vos informations :</p>
                    <ul>
                        <li><strong>Fournisseurs de services :</strong> partager des données avec des prestataires qui nous aident à fournir nos services (par exemple, des services de paiement, de livraison).</li>
                        <li><strong>Partenaires commerciaux :</strong> partager des informations avec des partenaires de confiance à des fins de marketing ou de promotion, sous réserve de votre consentement préalable.</li>
                        <li><strong>Obligations légales :</strong> divulguer vos informations si la loi l'exige ou si nous croyons de bonne foi que cette divulgation est nécessaire pour protéger nos droits, votre sécurité ou celle d'autres personnes.</li>
                    </ul>
                    <p>Nous nous assurons que ces tiers respectent des normes strictes de confidentialité et de sécurité.</p>
                </section>
                <section>
                    <h2>Protection des Données</h2>
                    <p>Nous mettons en place diverses mesures de sécurité pour protéger vos données contre l'accès non autorisé, l'altération, la divulgation ou la destruction. Voici quelques-unes des mesures que nous prenons :</p>
                    <ul>
                        <li><strong>Chiffrement :</strong> utiliser le chiffrement pour protéger les données sensibles lors de leur transmission.</li>
                        <li><strong>Contrôles d'accès :</strong> limiter l'accès à vos informations aux employés et aux partenaires qui en ont besoin pour fournir nos services.</li>
                        <li><strong>Sécurité des systèmes :</strong> utiliser des pare-feu, des systèmes de détection d'intrusion et d'autres technologies pour protéger nos systèmes contre les attaques.</li>
                    </ul>
                    <p>Nous nous engageons à maintenir ces mesures de sécurité à jour et à les améliorer continuellement pour assurer la protection de vos données.</p>
                </section>
                <section>
                    <h2>Vos Droits</h2>
                    <p>Vous avez le droit d'accéder, de rectifier, de supprimer vos données personnelles et de vous opposer à leur traitement. Voici comment vous pouvez exercer ces droits :</p>
                    <ul>
                        <li><strong>Droit d'accès :</strong> demander une copie des données personnelles que nous détenons à votre sujet.</li>
                        <li><strong>Droit de rectification :</strong> demander la correction des données inexactes ou incomplètes.</li>
                        <li><strong>Droit à l'effacement :</strong> demander la suppression de vos données personnelles dans certaines circonstances.</li>
                        <li><strong>Droit d'opposition :</strong> vous opposer au traitement de vos données pour des raisons légitimes.</li>
                        <li><strong>Droit à la portabilité :</strong> demander le transfert de vos données personnelles à un autre fournisseur de services.</li>
                    </ul>
                    <p>Pour exercer ces droits, veuillez nous contacter à l'adresse suivante : contact@example.com.</p>
                </section>
                <section>
                    <h2>Contact</h2>
                    <p>Si vous avez des questions concernant notre politique de gestion de vos données, veuillez nous contacter à l'adresse suivante :</p>
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

export default GestionDonnees;