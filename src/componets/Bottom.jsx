export default function Bottom({ dataBottom, dataBottom2, dataBottom3 }) {
  return (
    <div id="bottom">
      <p className="textBottom">İndikativ məzənnə</p>
      <p className="indikativ">
        1 {dataBottom} <span>= </span>
        <span>{dataBottom3} </span>
        <span>{dataBottom2}</span>
      </p>
    </div>
  );
}
