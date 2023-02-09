export default function LoadingScreen() {
  return (
    <div className="flex min-h-screen grow flex-col items-center justify-center bg-black">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
