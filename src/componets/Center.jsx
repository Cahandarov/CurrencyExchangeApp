import { useEffect, useState } from "react";
import convert from "../assets/convert.svg";
import "/node_modules/flag-icons/css/flag-icons.min.css";
export default function Center({
  data,
  dataToBotom,
  dataToBotom2,
  dataToBotom3,
}) {
  const [currencyKey1, setCurrencyKey1] = useState(""); //valyuta1 key
  const [currencyKey2, setCurrencyKey2] = useState(""); //valyuta2 key
  const [inputData, setInputData] = useState("");
  var [currency1Value, setCurrencyValue1] = useState(""); //valyuta1 value
  const [convertedValue, setConverted2Value] = useState(""); //vslyuta2 value
  var selectedCurrencyKey1;
  var selectedCurrencyKey2;
  const handleSelect1Change = (event) => {
    selectedCurrencyKey1 = event.target.value; //selected currency key1
    setCurrencyKey1(selectedCurrencyKey1);
    setCurrencyValue1(data[`${selectedCurrencyKey1}`]); //get currency value
    console.log(currency1Value);

    dataToBotom(selectedCurrencyKey1); //callback data
  };

  useEffect(() => {
    setConverted2Value(
      ((inputData / currency1Value) * data[`${currencyKey2}`]).toFixed(2)
    );
  }, [inputData, currencyKey1, currencyKey2]);

  const handleSelect2Change = (event) => {
    selectedCurrencyKey2 = event.target.value;
    setCurrencyKey2(selectedCurrencyKey2); //currency key2

    console.log(data[`${selectedCurrencyKey2}`]);
    dataToBotom2(selectedCurrencyKey2); //callback data
    dataToBotom3((data[`${selectedCurrencyKey2}`] / currency1Value).toFixed(2)); //callback data
  };

  function handleChangeCurrencies() {
    var a = currencyKey1;
    var b = currencyKey2;

    console.log(a);
    console.log(b);
    setCurrencyKey1(selectedCurrencyKey2);
    setCurrencyKey2(selectedCurrencyKey1);
    setCurrencyValue1(data[`${selectedCurrencyKey1}`]);
    dataToBotom(selectedCurrencyKey1);
    dataToBotom2(selectedCurrencyKey2);
    dataToBotom3((data[`${selectedCurrencyKey2}`] / currency1Value).toFixed(2));
  }

  return (
    <div id="center">
      <p className="textinside">Məbləğ</p>
      <div className="upperRow">
        <div className="flagBox1">
          <span
            className={`fi fi-${
              currencyKey1 ? currencyKey1.toLowerCase().slice(0, -1) : ""
            } fis`}
          ></span>
        </div>
        <select
          className="currencyName1"
          onChange={handleSelect1Change}
          value={currencyKey1}
        >
          {Object.keys(data).map((curKey1) => (
            <option key={curKey1} value={curKey1}>
              {curKey1}
            </option>
          ))}
        </select>

        <input
          type="text"
          className="currencyInput"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
        />
      </div>
      <p className="textinside2">Çevirilmiş Məbləğ</p>

      <div className="bottomRow">
        <div className="flagBox2">
          <span
            className={`fi fi-${
              currencyKey2 ? currencyKey2.toLowerCase().slice(0, -1) : ""
            } fis`}
          ></span>
        </div>
        <select
          className="currencyName2"
          onChange={handleSelect2Change}
          value={currencyKey2}
        >
          {Object.keys(data).map((e) => (
            <option key={e} value={e}>
              {e}
            </option>
          ))}
        </select>
        <input
          type="text"
          className="currencyInput2"
          readOnly
          value={convertedValue}
          onChange={(e) => setConverted2Value(e.target.value)}
        />
      </div>
      <button id="convertBtn" onClick={handleChangeCurrencies}>
        <img src={convert} alt="convert" />
      </button>
    </div>
  );
}
