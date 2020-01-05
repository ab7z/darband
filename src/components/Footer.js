import React from 'react';
import styles from '../styles/components/Footer.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faReact} from "@fortawesome/free-brands-svg-icons/faReact";
import {faCode} from "@fortawesome/free-solid-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons/faGithub";
import {FormattedMessage} from "react-intl";
import Modal from 'react-modal';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showImprint: false,
            showPrivacyPolicies: false
        }
    }

    setShowImprint = (boolean) => {
        this.setState({showImprint: boolean});
    };

    setShowPrivacyPolicies = (boolean) => {
        this.setState({showPrivacyPolicies: boolean});
    };

    render() {
        return (
            <React.Fragment>
                <footer>
                    <div className={styles.rights}>
                        <FormattedMessage id={'darband.rights'}/>
                        <span> &copy; {new Date().getFullYear()}</span>
                        <span> &minus; Siegstraße 28, 53757 Sankt Augustin</span>
                    </div>
                    <div className={styles.subContainer}>
                        <div className={styles.imprint}
                             onClick={() => {
                                 this.setShowImprint(true)
                             }}
                        >
                            <FormattedMessage id={'darband.impress'}/>
                        </div>
                        <div className={styles.privacyProtection} onClick={() => this.setShowPrivacyPolicies(true)}>
                            Datenschutz
                        </div>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faReact} size={"2x"}/>
                        <FontAwesomeIcon icon={faCode} size={"1x"}/>
                        <FontAwesomeIcon icon={faGithub} size={"2x"}/>
                    </div>
                </footer>

                <Modal isOpen={this.state.showImprint}
                       onRequestClose={() => {
                           this.setShowImprint(false)
                       }}
                >
                    <React.Fragment>
                        <h2>Impressum</h2>

                        <h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
                        <p>Gholamhossein Shah Hosseini<br/>
                            Siegstraße 28<br/>
                            53757 Sankt Augustin</p>

                        <h2>Kontakt</h2>
                        <p>Telefon: 02241 8466380 </p>

                        <h3>Haftung f&uuml;r Inhalte</h3>
                        <p>Als Diensteanbieter sind wir gem&auml;&szlig; &sect; 7
                            Abs.1 TMG f&uuml;r eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                            verantwortlich. Nach &sect;&sect; 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
                            verpflichtet, &uuml;bermittelte oder gespeicherte fremde Informationen zu &uuml;berwachen
                            oder
                            nach Umst&auml;nden zu forschen, die auf eine rechtswidrige T&auml;tigkeit hinweisen.</p>
                        <p>Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
                            allgemeinen Gesetzen bleiben hiervon unber&uuml;hrt. Eine diesbez&uuml;gliche Haftung ist
                            jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung m&ouml;glich. Bei
                            Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend
                            entfernen.</p>
                        <h3>Haftung f&uuml;r Links</h3>
                        <p>Unser Angebot enth&auml;lt Links zu
                            externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb k&ouml;nnen
                            wir
                            f&uuml;r diese fremden Inhalte auch keine Gew&auml;hr &uuml;bernehmen. F&uuml;r die Inhalte
                            der
                            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                            Die
                            verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf m&ouml;gliche
                            Rechtsverst&ouml;&szlig;e &uuml;berpr&uuml;ft. Rechtswidrige Inhalte waren zum Zeitpunkt der
                            Verlinkung nicht erkennbar.</p>
                        <p>Eine permanente inhaltliche Kontrolle der verlinkten Seiten
                            ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
                            Bekanntwerden
                            von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>
                        <h3>Urheberrecht</h3>
                        <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
                            deutschen Urheberrecht. Die Vervielf&auml;ltigung, Bearbeitung, Verbreitung und jede Art der
                            Verwertung au&szlig;erhalb der Grenzen des Urheberrechtes bed&uuml;rfen der schriftlichen
                            Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur
                            f&uuml;r den privaten, nicht kommerziellen Gebrauch gestattet.</p>
                        <p>Soweit die Inhalte auf
                            dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet.
                            Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
                            Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei
                            Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>
                    </React.Fragment>
                </Modal>

                <Modal isOpen={this.state.showPrivacyPolicies}
                       onRequestClose={() => {
                           this.setShowPrivacyPolicies(false)
                       }}
                >
                    <React.Fragment>
                        <div className={styles.privacyContainer}>
                            <p>Verantwortlicher im Sinne der Datenschutzgesetze, insbesondere der
                                EU-Datenschutzgrundverordnung (DSGVO), ist:</p>
                            <p>adentes MVZ - Martin Sperling MSc.
                                <br/>NAME
                                <br/>ANSCHRIFT
                                <br/>53757 Sankt Augustin
                                <br/>Deutschland
                                <br/>
                                <br/>Telefon: +49 2241 39796-0
                            </p>
                            <h2>Ihre Betroffenenrechte</h2>
                            <p>Unter den angegebenen Kontaktdaten unseres Datenschutzbeauftragten können Sie
                                jederzeit folgende Rechte ausüben:</p>
                            <ul>
                                <li>Auskunft über Ihre bei uns gespeicherten Daten und deren Verarbeitung (Art. 15
                                    DSGVO),
                                </li>
                                <li>Berichtigung unrichtiger personenbezogener Daten (Art. 16 DSGVO),</li>
                                <li>Löschung Ihrer bei uns gespeicherten Daten (Art. 17 DSGVO),</li>
                                <li>Widerspruch gegen die Verarbeitung Ihrer Daten bei uns (Art. 21 DSGVO) und</li>
                                <li>Datenübertragbarkeit, sofern Sie in die Datenverarbeitung eingewilligt haben
                                    oder einen Vertrag mit uns abgeschlossen haben (Art. 20 DSGVO).
                                </li>
                            </ul>
                            <p>Sofern Sie uns eine Einwilligung erteilt haben, können Sie diese jederzeit mit
                                Wirkung für die Zukunft widerrufen.</p>
                            <p>Sie können sich jederzeit mit einer Beschwerde an eine Aufsichtsbehörde wenden, z. B.
                                an die zuständige Aufsichtsbehörde des Bundeslands Ihres Wohnsitzes oder an die für
                                uns als verantwortliche Stelle zuständige Behörde.</p>
                            <p>Eine Liste der Aufsichtsbehörden (für den nichtöffentlichen Bereich) mit Anschrift
                                finden Sie unter: <a
                                    href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html"
                                    target="_blank"
                                    rel="noopener noreferrer">https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html</a>.
                            </p>
                            <p></p><h2>Erfassung allgemeiner Informationen beim Besuch unserer Website</h2>
                            <h3>Art und Zweck der Verarbeitung:</h3>
                            <p>Wenn Sie auf unsere Website zugreifen, d.h., wenn Sie sich nicht registrieren oder
                                anderweitig Informationen übermitteln, werden automatisch Informationen allgemeiner
                                Natur erfasst. Diese Informationen beinhalten etwa die Art des
                                Webbrowsers, das verwendete Betriebssystem, den Domainnamen Ihres
                                Internet-Service-Providers, Ihre IP-Adresse und ähnliches. </p>
                            <p>Sie werden insbesondere zu folgenden Zwecken verarbeitet:</p>
                            <ul>
                                <li>Sicherstellung eines problemlosen Verbindungsaufbaus der Website,</li>
                                <li>Sicherstellung einer reibungslosen Nutzung unserer Website,</li>
                                <li>Auswertung der Systemsicherheit und -stabilität sowie</li>
                                <li>zu weiteren administrativen Zwecken.</li>
                            </ul>
                            <p>Wir verwenden Ihre Daten nicht, um Rückschlüsse auf Ihre Person zu ziehen.
                                Informationen dieser Art werden von uns ggfs. statistisch ausgewertet, um unseren
                                Internetauftritt und die dahinterstehende Technik zu optimieren.</p>
                            <h3>Rechtsgrundlage:</h3>
                            <p>Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO auf Basis unseres
                                berechtigten Interesses an der Verbesserung der Stabilität und Funktionalität
                                unserer Website.</p>
                            <h3>Empfänger:</h3>
                            <p>Empfänger der Daten sind ggf. technische Dienstleister, die für den Betrieb und die
                                Wartung unserer Webseite als Auftragsverarbeiter tätig werden.</p>
                            <h3>Speicherdauer:</h3>
                            <p>Die Daten werden gelöscht, sobald diese für den Zweck der Erhebung nicht mehr
                                erforderlich sind. Dies ist für die Daten, die der Bereitstellung der Webseite
                                dienen, grundsätzlich der Fall, wenn die jeweilige Sitzung beendet ist.</p>
                            <h3>Bereitstellung vorgeschrieben oder erforderlich:</h3>
                            <p>Die Bereitstellung der vorgenannten personenbezogenen Daten ist weder gesetzlich noch
                                vertraglich vorgeschrieben. Ohne die IP-Adresse ist jedoch der Dienst und die
                                Funktionsfähigkeit unserer Website nicht gewährleistet. Zudem können einzelne
                                Dienste und Services nicht verfügbar oder eingeschränkt sein. Aus diesem Grund ist
                                ein Widerspruch ausgeschlossen. </p>
                            <p></p>
                            <h2>Cookies</h2>
                            <h3>Art und Zweck der Verarbeitung:</h3>
                            <p>Wie viele andere Webseiten verwenden wir auch so genannte „Cookies“. Bei Cookies handelt
                                es sich um kleine Textdateien, die auf Ihrem Endgerät (Laptop, Tablet, Smartphone o.ä.)
                                gespeichert werden, wenn Sie unsere Webseite besuchen. </p>
                            <p>Hierdurch erhalten wir bestimmte Daten wie z. B. IP-Adresse, verwendeter Browser und
                                Betriebssystem.</p>
                            <p>Cookies können nicht verwendet werden, um Programme zu starten oder Viren auf einen
                                Computer zu übertragen. Anhand der in Cookies enthaltenen Informationen können wir Ihnen
                                die Navigation erleichtern und die korrekte Anzeige unserer Webseiten ermöglichen.</p>
                            <p>In keinem Fall werden die von uns erfassten Daten an Dritte weitergegeben oder ohne Ihre
                                Einwilligung eine Verknüpfung mit personenbezogenen Daten hergestellt.</p>
                            <p>Natürlich können Sie unsere Website grundsätzlich auch ohne Cookies betrachten.
                                Internet-Browser sind regelmäßig so eingestellt, dass sie Cookies akzeptieren. Im
                                Allgemeinen können Sie die Verwendung von Cookies jederzeit über die Einstellungen Ihres
                                Browsers deaktivieren. Bitte verwenden Sie die Hilfefunktionen Ihres Internetbrowsers,
                                um zu erfahren, wie Sie diese Einstellungen ändern können. Bitte beachten Sie, dass
                                einzelne Funktionen unserer Website möglicherweise nicht funktionieren, wenn Sie die
                                Verwendung von Cookies deaktiviert haben.</p>
                            <h3>Speicherdauer und eingesetzte Cookies:</h3>
                            <p>Soweit Sie uns durch Ihre Browsereinstellungen oder Zustimmung die Verwendung von Cookies
                                erlauben, können folgende Cookies auf unseren Webseiten zum Einsatz kommen:</p>
                            <p>Session Cookie
                                <br/>ASP.NET_SessionId: Speicherdauer bis zum Ende der Browsersitzung
                                <br/>
                                <br/>Cookie Opt-In
                                <br/>cookie_track: Speicherdauer bis zum Ende der Browsersitzung
                                <br/>cookieconsent_status: Speicherdauer ein Jahr nach dem Setzen/Aktualisieren
                                <br/>
                                <br/>Google Analytics
                                <br/>_ga: Speicherdauer 2 Jahre nach dem Setzen/Aktualisieren
                                <br/>_gat: Speicherdauer 1 Tag nach dem Setzen/Aktualisieren
                                <br/>_gid: Speicherdauer 1 Tag nach dem Setzen/Aktualisieren
                                <br/>ga-disable-UA-[Ziffernfolge]: Speicherdauer bis der Cookie gelöscht wird</p>
                            <p>Soweit diese Cookies (auch) personenbezogene Daten betreffen können, informieren wir Sie
                                darüber in den folgenden Abschnitten.</p>
                            <p>Sie können über Ihre Browsereinstellungen einzelne Cookies oder den gesamten
                                Cookie-Bestand löschen. Darüber hinaus erhalten Sie Informationen und Anleitungen, wie
                                diese Cookies gelöscht oder deren Speicherung vorab blockiert werden können. Je nach
                                Anbieter Ihres Browsers finden Sie die notwendigen Informationen unter den nachfolgenden
                                Links:</p>
                            <ul>
                                <li>Mozilla Firefox: <a
                                    href="https://support.mozilla.org/de/kb/cookies-loeschen-daten-von-websites-entfernen"
                                    target="_blank"
                                    rel="noopener noreferrer">https://support.mozilla.org/de/kb/cookies-loeschen-daten-von-websites-entfernen</a>
                                </li>
                                <li>Internet Explorer: <a
                                    href="https://support.microsoft.com/de-de/help/17442/windows-internet-explorer-delete-manage-cookies"
                                    target="_blank"
                                    rel="noopener noreferrer">https://support.microsoft.com/de-de/help/17442/windows-internet-explorer-delete-manage-cookies</a>
                                </li>
                                <li>Google Chrome: <a href="https://support.google.com/accounts/answer/61416?hl=de"
                                                      target="_blank"
                                                      rel="noopener noreferrer">https://support.google.com/accounts/answer/61416?hl=de</a>
                                </li>
                                <li>Opera: <a href="http://www.opera.com/de/help" target="_blank"
                                              rel="noopener noreferrer">http://www.opera.com/de/help</a></li>
                                <li>Safari: <a
                                    href="https://support.apple.com/kb/PH17191?locale=de_DE&amp;viewlocale=de_DE"
                                    target="_blank"
                                    rel="noopener noreferrer">https://support.apple.com/kb/PH17191?locale=de_DE&amp;viewlocale=de_DE</a>
                                </li>
                            </ul>
                            <h3>Empfänger:</h3>
                            <p>Empfänger der Daten sind ggf. Auftragsverarbeiter.</p>
                            <h3>Speicherdauer:</h3>
                            <p>Daten werden spätestens 6 Monate nach Bearbeitung der Anfrage gelöscht.</p>
                            <p>Sofern es zu einem Vertragsverhältnis kommt, unterliegen wir den gesetzlichen
                                Aufbewahrungsfristen nach HGB und löschen Ihre Daten nach Ablauf dieser
                                Fristen. </p>
                            <p></p><h2>Verwendung von Google Analytics</h2>
                            <h3>Art und Zweck der Verarbeitung:</h3>
                            <p>Diese Website benutzt Google Analytics, einen Webanalysedienst der Google LLC, 1600
                                Amphitheatre Parkway, Mountain View, CA 94043 USA (nachfolgend: „Google“). Google
                                Analytics verwendet sog. „Cookies“, also Textdateien, die auf Ihrem Computer
                                gespeichert werden und die eine Analyse der Benutzung der Webseite durch Sie
                                ermöglichen. Die durch das Cookie erzeugten Informationen über Ihre Benutzung dieser
                                Webseite werden in der Regel an einen Server von Google in den USA übertragen und
                                dort gespeichert. Aufgrund der Aktivierung der IP-Anonymisierung auf diesen
                                Webseiten, wird Ihre IP-Adresse von Google jedoch innerhalb von Mitgliedstaaten der
                                Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den
                                Europäischen Wirtschaftsraum zuvor gekürzt. Nur in Ausnahmefällen wird die volle
                                IP-Adresse an einen Server von Google in den USA übertragen und dort gekürzt. Im
                                Auftrag des Betreibers dieser Website wird Google diese Informationen benutzen, um
                                Ihre Nutzung der Webseite auszuwerten, um Reports über die Webseitenaktivitäten
                                zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung
                                verbundene Dienstleistungen gegenüber dem Webseitenbetreiber zu erbringen. Die im
                                Rahmen von Google Analytics von Ihrem Browser übermittelte IP-Adresse wird nicht mit
                                anderen Daten von Google zusammengeführt.</p>
                            <p>Die Zwecke der Datenverarbeitung liegen in der Auswertung der Nutzung der Website und
                                in der Zusammenstellung von Reports über Aktivitäten auf der Website. Auf Grundlage
                                der Nutzung der Website und des Internets sollen dann weitere verbundene
                                Dienstleistungen erbracht werden.</p>
                            <h3>Rechtsgrundlage:</h3>
                            <p>Die Verarbeitung der Daten erfolgt auf Grundlage einer Einwilligung des Nutzers (Art.
                                6 Abs. 1 lit. a DSGVO).</p>
                            <h3>Empfänger:</h3>
                            <p>Empfänger der Daten ist Google als Auftragsverarbeiter. Hierfür haben wir mit Google
                                den entsprechenden Auftragsverarbeitungsvertrag abgeschlossen.</p>
                            <h3>Speicherdauer:</h3>
                            <p>Die Löschung der Daten erfolgt, sobald diese für unsere Aufzeichnungszwecke nicht
                                mehr erforderlich sind.</p>
                            <h3>Drittlandtransfer:</h3>
                            <p>Google verarbeitet Ihre Daten in den USA und hat sich dem EU_US Privacy Shield
                                unterworfen <a
                                    href="https://www.privacyshield.gov/EU-US-Framework">https://www.privacyshield.gov/EU-US-Framework</a>.
                            </p>
                            <h3>Bereitstellung vorgeschrieben oder erforderlich:</h3>
                            <p>Die Bereitstellung Ihrer personenbezogenen Daten erfolgt freiwillig, allein auf Basis
                                Ihrer Einwilligung. Sofern Sie den Zugriff unterbinden, kann es hierdurch zu
                                Funktionseinschränkungen auf der Website kommen.</p>
                            <h3>Widerruf der Einwilligung:</h3>
                            <p>Zusätzlich oder als Alternative zum Browser-Add-On können Sie das Tracking durch
                                Google Analytics auf unseren Seiten unterbinden, indem Sie <a
                                    title="Google Analytics Opt-Out-Cookie setzen"
                                    onClick="gaOptout();alert('Google Analytics wurde deaktiviert');" href="#">diesen
                                    Link anklicken</a>. Dabei wird ein Opt-out-Cookie auf Ihrem Gerät installiert.
                                Damit wird die Erfassung durch Google Analytics für diese Website und für diesen
                                Browser zukünftig verhindert, so lange das Cookie in Ihrem Browser installiert
                                bleibt.</p>
                            <h3>Profiling:</h3>
                            <p>Mit Hilfe des Tracking-Tools Google Analytics kann das Verhalten der Besucher der
                                Webseite bewertet und die Interessen analysiert werden. Hierzu erstellen wir ein
                                pseudonymes Nutzerprofil.</p>
                            <p></p><h2>Verwendung von Scriptbibliotheken (Google Webfonts)</h2>
                            <h3>Art und Zweck der Verarbeitung:</h3>
                            <p>Um unsere Inhalte browserübergreifend korrekt und grafisch ansprechend darzustellen,
                                verwenden wir auf dieser Website „Google Web Fonts“ der Google LLC (1600
                                Amphitheatre Parkway, Mountain View, CA 94043, USA; nachfolgend „Google“) zur
                                Darstellung von Schriften.</p>
                            <p>Die Datenschutzrichtlinie des Bibliothekbetreibers Google finden Sie hier: <a
                                href="https://www.google.com/policies/privacy/">https://www.google.com/policies/privacy/</a>
                            </p>
                            <h3>Rechtsgrundlage:</h3>
                            <p>Rechtsgrundlage für die Einbindung von Google Webfonts und dem damit verbundenen
                                Datentransfer zu Google ist Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). </p>
                            <h3>Empfänger:</h3>
                            <p>Der Aufruf von Scriptbibliotheken oder Schriftbibliotheken löst automatisch eine
                                Verbindung zum Betreiber der Bibliothek aus. Dabei ist es theoretisch möglich –
                                aktuell allerdings auch unklar ob und ggf. zu welchen Zwecken – dass der Betreiber
                                in diesem Fall Google Daten erhebt.</p>
                            <h3>Speicherdauer:</h3>
                            <p>Wir erheben keine personenbezogenen Daten, durch die Einbindung von Google
                                Webfonts.</p>
                            <p>Weitere Informationen zu Google Web Fonts finden Sie unter <a
                                href="https://developers.google.com/fonts/faq">https://developers.google.com/fonts/faq</a> und
                                in der Datenschutzerklärung von Google: <a
                                    href="https://www.google.com/policies/privacy/">https://www.google.com/policies/privacy/</a>.
                            </p>
                            <h3>Drittlandtransfer:</h3>
                            <p>Google verarbeitet Ihre Daten in den USA und hat sich dem EU_US Privacy Shield
                                unterworfen <a
                                    href="https://www.privacyshield.gov/EU-US-Framework">https://www.privacyshield.gov/EU-US-Framework</a>.
                            </p>
                            <h3>Bereitstellung vorgeschrieben oder erforderlich:</h3>
                            <p>Die Bereitstellung der personenbezogenen Daten ist weder gesetzlich, noch vertraglich
                                vorgeschrieben. Allerdings kann ggfs. die korrekte Darstellung der Inhalte durch
                                Standardschriften nicht möglich sein.</p>
                            <h3>Widerruf der Einwilligung:</h3>
                            <p>Zur Darstellung der Inhalte wird regelmäßig die Programmiersprache JavaScript
                                verwendet. Sie können der Datenverarbeitung daher widersprechen, indem Sie die
                                Ausführung von JavaScript in Ihrem Browser deaktivieren oder einen
                                JavaScript-Blocker installieren. Bitte beachten Sie, dass es hierdurch zu
                                Funktionseinschränkungen auf der Website kommen kann.</p>
                            <p></p><h2>SSL-Verschlüsselung</h2>
                            <p>Um die Sicherheit Ihrer Daten bei der Übertragung zu schützen, verwenden wir dem
                                aktuellen Stand der Technik entsprechende Verschlüsselungsverfahren (z. B. SSL) über
                                HTTPS.</p>
                            <p></p><h2>Eingesetzte Auftragsverarbeiter</h2>
                            <p>Folgende Organisationen, Unternehmen bzw. Personen wurden vom Betreiber dieser
                                Website mit der Verarbeitung von Daten beauftragt:</p>
                            <p>Auskunft auf Anfrage</p>
                            <p></p><h2>Änderung unserer Datenschutzbestimmungen</h2>
                            <p>Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den
                                aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen
                                in der Datenschutzerklärung umzusetzen, z.B. bei der Einführung neuer Services. Für
                                Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.</p>
                            <h2>Fragen an den Datenschutzbeauftragten</h2>
                            <p>Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine E-Mail oder
                                wenden Sie sich direkt an die für den Datenschutz verantwortliche Person in unserer
                                Organisation:</p>
                            <p>adentes MVZ - Martin Sperling MSc.
                                {/*todo Name einfügen*/}
                                <br/>
                                <br/>
                                <br/>53757 Sankt Augustin
                                <br/>Deutschland
                                <br/>
                                <br/>Telefon: +49 2241 39796-0
                                <br/>E-Mail: info@adentes.de</p>
                            <p><em>Die Datenschutzerklärung wurde mithilfe der activeMind AG erstellt, den Experten
                                für <a href="https://www.activemind.de/datenschutz/datenschutzhinweis-generator/"
                                       target="_blank" rel="noopener noreferrer">externe Datenschutzbeauftragte</a> (Version
                                #2019-04-10).</em></p>
                        </div>
                    </React.Fragment>
                </Modal>
            </React.Fragment>
        );
    }
}

export default Footer;