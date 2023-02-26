import Layout from '../components/layout';
import PageLayout from '../components/pageLayout';

export default function ImpressumPage(): JSX.Element {
    return (
        <>
            <Layout>
                <PageLayout title="Impressum">
                    <p>
                        Torsten Kohn
                        <br />
                        Fritz-Wendel-Str. 1
                        <br />
                        86159 Augsburg
                    </p>

                    <p>
                        Telefon: +49 160 93 845 149
                        <br />
                        E-Mail: torsten+website@kohn.dev
                    </p>

                    <p>
                        Verantwortlich für den Inhalt gem. § 55 Abs. 2 RStV:
                        <br />
                        Torsten Kohn
                        <br />
                        Fritz-Wendel-Str. 1
                        <br />
                        86159 Augsburg
                        <br />
                    </p>

                    <p>
                        Wir nehmen nicht an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
                        teil.
                    </p>

                    <p>
                        <a
                            href="https://www.123recht.net/impressumsgenerator.asp"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Impressum erstellt mit dem Impressumsgenerator von 123recht.net - Rechtsberatung online.
                        </a>
                    </p>
                </PageLayout>
            </Layout>
        </>
    );
}
