// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import '../stilovi/Calculator.css';

function Calculator() {
    const [vecaTarifa, setVecaTarifa] = useState('');
    const [manjaTarifa, setManjaTarifa] = useState('');
    const [obnovljiviIzvori, setObnovljiviIzvori] = useState('');
    const [vecaTarifaCijena, setVecaTarifaCijena] = useState(0);
    const [manjaTarifaCijena, setManjaTarifaCijena] = useState(0);
    const [obnovljiviIzvoriCijena, setObnovljiviIzvoriCijena] = useState(0);
    const [cijenaBezPDV, setCijenaBezPDV] = useState(0);
    const [cijenaSaPDV, setCijenaSaPDV] = useState(0);
    const [pdv, setPdv] = useState(0);
    const [kategorija, setKategorija] = useState('');
    const [tarifa, setTarifa] = useState('');



    const formatValue = (value) => {
        return parseFloat(value).toFixed(2);
    };

    const handleVecaTarifaChange = (e) => {
        const value = e.target.value;
        setVecaTarifa(value);
    };

    const handleManjaTarifaChange = (e) => {
        const value = e.target.value;
        setManjaTarifa(value);
    };

    const handleBlur = () => {
        const veca = parseFloat(vecaTarifa) || 0;
        const manja = parseFloat(manjaTarifa) || 0;
        const obnovljiva = veca + manja;

        const formattedVeca = formatValue(veca);
        const formattedManja = formatValue(manja);
        const formattedObnovljivi = formatValue(obnovljiva);

        const manjaCijena = parseFloat(formattedManja) * 0.084100;
        const vecaCijena = parseFloat(formattedVeca) * 0.168200;
        const obnovljiviCijena = obnovljiva * 0.001200;
        const cijenaBez = manjaCijena + vecaCijena + obnovljiviCijena + 4.8;
        const pdvCijena = cijenaBez * 0.17;
        const cijenaSa = cijenaBez + pdvCijena;

        setVecaTarifa(formattedVeca);
        setManjaTarifa(formattedManja);
        setObnovljiviIzvori(formattedObnovljivi);
        setManjaTarifaCijena(formatValue(manjaCijena));
        setVecaTarifaCijena(formatValue(vecaCijena));
        setObnovljiviIzvoriCijena(formatValue(obnovljiviCijena));
        setCijenaBezPDV(formatValue(cijenaBez));
        setPdv(formatValue(pdvCijena));
        setCijenaSaPDV(formatValue(cijenaSa));
    };


    const handleFocus = (e) => {
        e.target.select();
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.target.blur();
        }
    };

    const handleKategorijaChange = (e) => {
        setKategorija(e.target.value);
    };

    const handleTarifaChange = (e) => {
        setTarifa(e.target.value);
    };

    return (
        <div className="calculator">
            <header className="calculator-header">
                <h1>Online kalkulator</h1>
            </header>
            <main className="calculator-content">
                <section className="calculator-selection">
                    <div className="dropdown">
                        <select className="dropdown-button" value={kategorija} onChange={handleKategorijaChange}>
                            <option value="">Izaberite kategoriju</option>
                            <option value="kategorija1">Domaćinstva</option>
                            <option value="kategorija2">Ostala potrošnja</option>
                        </select>
                    </div>
                    <div className="dropdown">
                        <select className="dropdown-button" value={tarifa} onChange={handleTarifaChange}>
                            <option value="">Izaberite tarifu</option>
                            <option value="tarifa1">I tarifna grupa</option>
                            <option value="tarifa2">II tarifna grupa</option>
                            <option value="tarifa3">III tarifna grupa</option>
                        </select>
                    </div>
                </section>
                <section className="calculator-table">
                    <table>
                        <thead>
                        <tr>
                            <th>Vrste stavke</th>
                            <th>Količina</th>
                            <th>Cijena (KM)</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Mjerno mjesto (mjesec)</td>
                            <td><input className="mjerno-mjesto" type="text" value="1" readOnly/></td>
                            <td>4.80</td>
                        </tr>
                        <tr>
                            <td>Aktivna energija - veća tarifa (kWh)</td>
                            <td>
                                <input
                                    type="number"
                                    min="0"
                                    value={vecaTarifa}
                                    onChange={handleVecaTarifaChange}
                                    onBlur={handleBlur}
                                    onFocus={handleFocus}
                                    onKeyDown={handleKeyDown}
                                    style={{textAlign:"center"}}
                                />
                            </td>
                            <td>{vecaTarifaCijena}</td>
                        </tr>
                        <tr>
                            <td>Aktivna energija - manja tarifa (kWh)</td>
                            <td>
                                <input
                                    type="number"
                                    min="0"
                                    value={manjaTarifa}
                                    onChange={handleManjaTarifaChange}
                                    onBlur={handleBlur}
                                    onFocus={handleFocus}
                                    onKeyDown={handleKeyDown}
                                    style={{textAlign:"center"}}
                                />
                            </td>
                            <td>{manjaTarifaCijena}</td>
                        </tr>
                        <tr>
                            <td>Obnovljivi izvori (kWh)</td>
                            <td>
                                <input className="mjerno-mjesto"
                                    type="number"
                                    min="0"
                                    value={obnovljiviIzvori}
                                    readOnly
                                />
                            </td>
                            <td>{obnovljiviIzvoriCijena}</td>
                        </tr>
                        <tr>
                            <td>Iznos bez PDV</td>
                            <td></td>
                            <td>{cijenaBezPDV}</td>
                        </tr>
                        <tr>
                            <td>17% PDV</td>
                            <td></td>
                            <td>{pdv}</td>
                        </tr>
                        <tr>
                            <td>Iznos sa PDV</td>
                            <td></td>
                            <td>{cijenaSaPDV}</td>
                        </tr>
                        </tbody>
                    </table>
                    <p className="note">Napomena: Dobiveni podaci ne predstavljaju konačan obračun i služe isključivo u svrhu informisanja.</p>
                </section>
            </main>
        </div>
    );
}

export default Calculator;
