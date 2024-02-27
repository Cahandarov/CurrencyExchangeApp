import { useEffect, useState } from "react";
import Bottom from "./Bottom";
import Center from "./Center";
import axios from "axios";

export default function Container() {
  function dataToBotom(curr1) {
    setDataBottom(curr1);
  }
  function dataToBotom2(curr2) {
    setDataBottom2(curr2);
  }
  function dataToBotom3(curr3) {
    setDataBottom3(curr3);
  }
  const [data, setData] = useState("");
  const [dataBottom, setDataBottom] = useState(null);
  const [dataBottom2, setDataBottom2] = useState(null);
  const [dataBottom3, setDataBottom3] = useState(null);
  useEffect(() => {
    getData();
  }, []);
  function getData() {
    axios
      .get(
        "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_dKethqMafNkVtTM9afqf9bmnoCw5Z65mLvO5hVCK"
      )
      .then((res) => {
        console.log(res.data);
        setData(res.data.data);
      });
  }
  return (
    <div className="container">
      <p className="header">VALYUTA HESABLAMA KALKULYATORU</p>
      <Center
        data={data}
        dataToBotom={dataToBotom}
        dataToBotom2={dataToBotom2}
        dataToBotom3={dataToBotom3}
      />
      {dataBottom && dataBottom2 && dataBottom3 !== null ? (
        <Bottom
          dataBottom={dataBottom}
          dataBottom2={dataBottom2}
          dataBottom3={dataBottom3}
        />
      ) : null}
    </div>
  );
}
