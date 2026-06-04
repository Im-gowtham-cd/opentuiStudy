export function Navbar() {
  return (
    <box width="100%" height={5} borderStyle="single" borderColor="yellow" justifyContent="center" alignItems="center" flexDirection="row">
      <box flexDirection="row" justifyContent="flex-end" width="10%">
        <text bg="yellow" fg="black">{"  GoTM  "}</text>
      </box>
      <box width="80%" flexDirection="row" justifyContent="center" gap={10}>
        <text fg="yellow" >[1] Home</text>
        <text fg="yellow">[2] About</text>
      </box>
      <box flexDirection="row" justifyContent="start" width="10%">
        <text bg="yellow" fg="black">{"  [3] sourceCode  "}</text>
      </box>
    </box>
  );
}