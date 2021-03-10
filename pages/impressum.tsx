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
                        Nymphenburger Str. 49
                        <br />
                        80335 München
                    </p>

                    <p>
                        Telefon: +49 156 785 786 83
                        <br />
                        E-Mail: torsten+website@kohn.dev
                    </p>

                    <p>
                        Verantwortlich für den Inhalt gem. § 55 Abs. 2 RStV:
                        <br />
                        Torsten Kohn
                        <br />
                        Nymphenburger Str. 49
                        <br />
                        80335 München
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
