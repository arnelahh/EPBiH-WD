import React from 'react';
import '../stilovi/Market.css';

function Market() {
  return (
      <div className="market">
        <header className="market-header">
          <h1>O tržištu</h1>
        </header>
        <main className="market-content">
          <section className="customer-info">
            <p>U ovom dijelu možete naći osnovne informacije o tržištu električne energije u Bosni i Hercegovini, kategorijama kupaca koji mogu slobodno da biraju snabdjevača električne energije, kao i koje korake je potrebno poduzeti da bi postali naš kupac električne energije, bilo da ste kupac priključen na distributivnu mrežu JP EPBiH ili na distributivnu mrežu drugih elektroprivrednih kompanija koje djeluju na području Bosne i Hercegovine. Za sve dodatne informacije, kupcima je na raspolaganju tim Snabdijevanje EPBiH putem adrese snabdijevanje@epbih.ba</p><br />
            <hr/>
            <h2>Tržište električne energije</h2>
            <p>Od 01.01.2015. godine svi krajnji kupci električne energije su kvalifikovani kupci čime ostvaruju pravo na slobodan izbor svog snabdjevača.</p>
            <p>U skladu sa dozvolom za obavljanje djelatnosti snabdijevanja električnom energijom izdatom od strane FERK-a, JP EPBiH ima sljedeće uloge:</p>
            <ul>
              <li>snabdijevanje krajnjih kupaca koji su na tržištu slobodno izabrali snabdjevača električnom energijom</li>
              <li>snabdijevanje krajnjih kupaca koji na tržištu nisu odabrali snabdjevača (usluga javnog snabdijevanja)</li>
              <li>snabdijevanje krajnjih kupaca u slučaju kada odabrani snabdjevač prestane da vrši snabdijevanje kvalifikovanog kupca električnom energijom (usluga rezervnog snabdijevanja)</li>
            </ul>
            <div className="grid-content">
              <div className="grid-item">
                <img src="https://www.epbih.ba/img/s/700x700/upload/images/v2/pages/ilustracije/Depositphotos_151249562_original.jpg" alt="Ilustracija" />
              </div>
              <div className="grid-item">
                <h1>Javni snabdjevač</h1>
                <p>Krajnji kupci električne energije iz kategorije potrošnje domaćinstvo i ostala potrošnja na 0,4 kV (mala preduzeća i komercijalni kupci), koji na tržištu nisu odabrali snabdjevača imaju pravo na snabdijevanje električnom energijom standardnog kvaliteta po ekonomski opravdanim, lako i jasno usporedivim i transparentnim cijenama u okviru pružanja univerzalne usluge od javnog snabdjevača.</p>
                <p className="link">+Detaljnije</p>
              </div>
              <div className="grid-item">
                <h1>Rezervni snabdjevač</h1>
                <p>Rezervni snabdjevač je snabdjevač koji ima obavezu kvalifikovanog kupca snabdijevati električnom energijom, u periodu ne dužem od 60 dana, kada odabrani snabdjevač prestane da vrši snabdijevanje kvalifikovanog kupca električnom energijom. Javne i rezervne snabdjevače u Federaciji BiH je imenovala Vlada Federacije BiH.</p>
                <p className="link">+Detaljnije</p>
              </div>
              <div className="grid-item">
                <img src="https://www.epbih.ba/img/s/700x700/upload/images/v2/pages/ilustracije/Depositphotos_182636538_original.jpg" alt="Ilustracija" />
              </div>
            </div>
            <h2>Kako postati kupac?</h2>
            <h3>Kupac koji ima ili će imati priključak na prijenosnu mrežu (naponski nivo 110 kV i viši)</h3>
            <p>Ukoliko ste kupac koji je priključen na prijenosnu mrežu i želite da vam snabdjevač električne energije bude JP Elektroprivreda BiH, dovoljno je da se obratite sa zahtjevom JP EPBiH kao vašem budućem novom snabdjevaču električne energije. Postupak promjene snabdjevača će trajati maksimalno 21 dan od trenutka podnošenja zahtjeva za promjenom snabdjevača.</p>
            <p>Kupac koji će imati priključak na distributivnu mrežu (naponski nivo do 110 kV) JP EPBiH</p>
            <p>JP Elektroprivreda BiH d.d.-Sarajevo je ovlašteni distributer električne energije u sedam kantona Federacije BiH.</p>
            <p>Putem navedenih elektrodistributivnih područja možete:</p>
            <ul>
              <li>Postati novi kupac/proizvođač električne energije, odnosno dobiti prethodnu elektroenergetsku saglasnost, elektroenergetsku saglasnost, obezbijediti priključenje na distributivnu mrežu, te potpisati ugovore o priključenju, o korištenju distributivne mreže i o snabdijevanju električnom energijom.</li>
              <li>Kao postojeći kupac električne energije, ako je potrebno, podnijeti zahtjev za izdavanje saglasnosti za izmjenu uvjeta priključenja ili promjenu priključka za električnu energiju.</li>
            </ul>
            <p>Prije izgradnje svih građevinskih objekata, zakonski propisi nalažu pribavljanje saglasnosti distributera električne energije. Ove saglasnosti su potrebne da bi se obezbijedila sigurnost svih podzemnih instalacija, da novo gradilište ili objekat ne bi ugrozili snabdijevanje postojećih korisnika električne energije, kao i da se planira i obezbijedi legalan priključak za novog krajnjeg kupca/proizvođača električne energije.</p>
            <br />
            <p>Za lakše podnošenje zahtjeva i razumijevanje procesa izrade saglasnosti, izgradnje priključka do potpisivanja ugovora, na ovoj stranici možete naći tri grupe tipskih obrazaca, čiji naziv i sadržaj potpuno odgovaraju procesu i specifičnim potrebama novog ili postojećeg krajnjeg kupca/proizvođača električne energije:</p>
            <ul className="obrasci">
              <li>Obrasci zahtjeva koje podnose krajnji kupci/proizvođači</li>
              <li>Obrasci ugovora koje potpisuje distributer sa krajnjim kupcem/proizvođačem</li>
              <li>Obrasci ugovora koje potpisuje snabdjevač sa krajnjim kupcem/proizvođačem</li>
            </ul>
            <h3>Kupac koji ima priključak na distributivnu mrežu drugih elektroprivreda u BiH, a želi da mu snabdjevač električne energije bude JP EPBiH</h3>
            <p>Ukoliko ste priključeni na distributivnu mrežu drugih elektroprivreda u BiH, odnosno drugih elektrodistributivnih preduzeća, a želite postati kupac električne energije JP EPBiH, dovoljno je da se obratite sa zahtjevom JP EPBiH kao vašem budućem novom snabdjevaču električne energije. Postupak promjene snabdjevača trajat će maksimalno 21 dan od trenutka podnošenja zahtjeva za promjenom snabdjevača. Za sve informacije u vezi s promjenom snabdjevača možete se obratiti nadležnim podružnicama.</p>
          </section>
        </main>
      </div>
  );
}

export default Market;
