import Layout from '../components/layout';
import PageLayout from '../components/pageLayout';

export default function AboutPage(): JSX.Element {
    return (
        <>
            <Layout>
                <PageLayout title="About">
                    <p>
                        Ich bin Software Engineer in München und arbeite mit unterschiedlichen Technologien. Mein
                        Schwerpunkt liegt in der Entwicklung von Softwarelösungen mithilfe von Spring, Angular React,
                        Bash. Ich bin stets auf der Suche nach neuen Konzepten und Vorgehen in der Entwicklung von
                        Software mit Java und JavaScript. Zudem bin ich häufig auf Meetups rund um Softwareentwicklung
                        im Raum München anzutreffen.
                    </p>

                    <h2>Vorträge</h2>

                    <ul>
                        <li>
                            Java Forum Nord (September 2019, Hannover) - OOP meets FP und warum ich Java trotzdem mag -{' '}
                            <a
                                href="https://docs.google.com/presentation/d/14vFXcQ3CqetFqm24qc7BpB5JjGw7G6i4ZdIAwR-pYMM"
                                title="Folien vom Talk als Google SLides"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Google Slides
                            </a>{' '}
                            <a
                                href="https://gitlab.com/torstenkohn/2019-java-forum-nord-oop-meets-fp"
                                title="Beispiel-Code bei GitLab"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Beispiel-Code
                            </a>
                        </li>
                        <li>
                            Java Forum Stuttgart (Juli 2018) - Reaktive Programmierung mit Spring Boot und Project
                            Reactor -{' '}
                            <a
                                href="https://docs.google.com/presentation/d/1PU0rCu-qXb4r8IXRyoLpwTQhSltnWwtL2gLxYw9Clv0/edit?usp=sharing"
                                title="Folien vom Talk als Google Slides"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Google Slides
                            </a>{' '}
                            <a
                                href="https://gitlab.com/torstenkohn/reactive-java-forum-stuttgart-demo"
                                title="Demoprojekt zum Vortrag"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Beispiel-Code
                            </a>
                        </li>
                        <li>
                            Lightweight Java User Group (Juni 2018, München) - Reaktive Programmierung mit Spring Boot
                            und Project Reactor -{' '}
                            <a
                                href="https://docs.google.com/presentation/d/1Xo87rbHnfaiLRsVOtm-f5chBrxykMVtvoL12Y9iaOHg/edit?usp=sharing"
                                title="Folien vom Meetup als Google Slides"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Google Slides
                            </a>{' '}
                            <a
                                href="https://gitlab.com/torstenkohn/reactive-ljug-demo"
                                title="Demoprojekt zum Vortrag"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Beispiel-Code
                            </a>
                        </li>
                        <li>Herbstcampus (September 2017) - Reaktive Programmierung mit Java und Spring 5</li>
                    </ul>

                    <h2>Veröffentlichungen</h2>

                    <ul>
                        <li>
                            Java aktuell 03/2018 - Reaktive Programmierung mit Java und Spring{' '}
                            <a
                                href="/downloads/2018_Java_aktuell_Reaktive-Programmierung-mit-Java-und-Spring.pdf"
                                title="Artikel als PDF Download"
                            >
                                PDF
                            </a>
                        </li>
                    </ul>

                    <h2>Qualifikationen</h2>

                    <ul>
                        <li>iSAQB Certified Professional for Software Architecture Foundation Level - 2019</li>
                        <li>Professional Scrum Product Owner (PSPO I) - 2019</li>
                        <li>Professional Scrum Master (PSM I) - 2017</li>
                        <li>Spring Professional v4.3 - 2017</li>
                        <li>Angular 2 {'&'} TypeScript Grundlagen (Schulung bei thecodecampus 2017)</li>
                    </ul>

                    <h2>Ausbildung</h2>

                    <ul>
                        <li>B. Sc. Medieninformatik (Hochschule Düsseldorf, September 2011 - Juli 2015)</li>
                        <li>Mechatroniker (PM°DM, Villingen-Schwenningen, September 2005 - Juni 2008)</li>
                        <li>IT-Systemelektroniker (Telekom, Kiel, September 2002 - Juni 2005)</li>
                    </ul>
                </PageLayout>
            </Layout>
        </>
    );
}
