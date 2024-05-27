import React, { useState } from 'react';
import '../stilovi/Calculator.css';

function Calculator() {
    const [vecaTarifa, setVecaTarifa] = useState('');
    const [manjaTarifa, setManjaTarifa] = useState('');
    const [obnovljiviIzvori, setObnovljiviIzvori] = useState('');

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
        setVecaTarifa(formatValue(veca));
        setManjaTarifa(formatValue(manja));
        setObnovljiviIzvori(formatValue(veca + manja));
    };

    const handleFocus = (e) => {
        e.target.select();
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.target.blur();
        }
    };

    return (
        <div className="calculator">
            <header className="calculator-header">
                <h1>Online kalkulator</h1>
            </header>
            <main className="calculator-content">
                <section className="calculator-selection">
                    <div className="dropdown">
                        <button className="dropdown-button">Kategorija</button>
                    </div>
                    <div className="dropdown">
                        <button className="dropdown-button">Tarifa</button>
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
                            <td>0.00</td>
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
                                />
                            </td>
                            <td>0.00</td>
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
                                />
                            </td>
                            <td>0.00</td>
                        </tr>
                        <tr>
                            <td>Obnovljivi izvori (kWh)</td>
                            <td>
                                <input
                                    type="number"
                                    min="0"
                                    value={obnovljiviIzvori}
                                    readOnly
                                />
                            </td>
                            <td>0.00</td>
                        </tr>
                        <tr>
                            <td>Iznos bez PDV</td>
                            <td></td>
                            <td>0.00</td>
                        </tr>
                        <tr>
                            <td>17% PDV</td>
                            <td></td>
                            <td>0.00</td>
                        </tr>
                        <tr>
                            <td>Iznos sa PDV</td>
                            <td></td>
                            <td>0.00</td>
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
