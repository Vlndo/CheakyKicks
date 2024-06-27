import React from 'react';
import useScrollToTop from '../components/useScrollToTop';


const ConditionOfUse = () => {
    useScrollToTop();
    return (
        <main className='otherPage'>
            <div className="containerOther">
                <h1>Conditions d'Utilisation</h1>
                <section>
                    <h2>Introduction</h2>
                    <p>Bienvenue sur notre site web. En utilisant nos services, vous acceptez de respecter et d'être lié par les conditions d'utilisation suivantes. Veuillez les lire attentivement avant d'utiliser notre site.</p>
                </section>
                <section>
                    <h2>Acceptation des Conditions</h2>
                    <p>En accédant à notre site, vous acceptez ces conditions d'utilisation. Si vous n'êtes pas d'accord avec ces conditions, veuillez ne pas utiliser notre site.</p>
                </section>
                <section>
                    <h2>Modification des Conditions</h2>
                    <p>Nous nous réservons le droit de modifier ces conditions d'utilisation à tout moment. Les modifications prendront effet dès leur publication sur notre site. Il est de votre responsabilité de consulter régulièrement ces conditions pour prendre connaissance des changements.</p>
                </section>
                <section>
                    <h2>Utilisation du Site</h2>
                    <p>Vous vous engagez à utiliser notre site de manière légale et appropriée. Vous ne devez pas :</p>
                    <ul>
                        <li>Utiliser notre site à des fins illégales ou non autorisées.</li>
                        <li>Utiliser notre site de manière à nuire à d'autres utilisateurs.</li>
                        <li>Transmettre des virus, des logiciels malveillants ou tout autre code nuisible.</li>
                        <li>Tenter d'obtenir un accès non autorisé à notre site ou à nos systèmes.</li>
                    </ul>
                </section>
                <section>
                    <h2>Contenu et Droits d'Auteur</h2>
                    <p>Tous les contenus présents sur notre site, y compris les textes, images, graphiques, logos, et vidéos, sont protégés par les lois sur les droits d'auteur et les droits de propriété intellectuelle. Vous ne devez pas copier, reproduire, distribuer, ou utiliser ces contenus sans notre autorisation écrite préalable.</p>
                </section>
                <section>
                    <h2>Liens vers des Sites Tiers</h2>
                    <p>Notre site peut contenir des liens vers des sites tiers. Nous ne sommes pas responsables du contenu ou des pratiques de confidentialité de ces sites. Nous vous encourageons à lire les conditions d'utilisation et les politiques de confidentialité de tout site tiers que vous visitez.</p>
                </section>
                <section>
                    <h2>Limitation de Responsabilité</h2>
                    <p>Nous nous efforçons de maintenir notre site à jour et fonctionnel, mais nous ne garantissons pas l'absence d'erreurs ou d'interruptions. Nous ne serons pas responsables des dommages directs, indirects, ou consécutifs résultant de l'utilisation ou de l'incapacité d'utiliser notre site.</p>
                </section>
                <section>
                    <h2>Résiliation</h2>
                    <p>Nous nous réservons le droit de résilier ou de suspendre votre accès à notre site, sans préavis, si nous estimons que vous avez violé ces conditions d'utilisation.</p>
                </section>
                <section>
                    <h2>Droit Applicable</h2>
                    <p>Ces conditions d'utilisation sont régies par les lois en vigueur dans notre juridiction. Tout litige relatif à ces conditions sera soumis à la compétence exclusive des tribunaux de notre juridiction.</p>
                </section>
                <section>
                    <h2>Contact</h2>
                    <p>Si vous avez des questions concernant ces conditions d'utilisation, veuillez nous contacter à l'adresse suivante :</p>
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

export default ConditionOfUse;