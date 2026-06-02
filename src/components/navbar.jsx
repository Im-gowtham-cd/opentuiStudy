export function Navbar() {
  return (
    <box width="100%" height={5} borderStyle="single" borderColor="yellow" justifyContent="center" alignItems="center" flexDirection="row">
      <box flexDirection="row" justifyContent="flex-end" width="20%">
        <text bg="yellow" fg="black">{"  GoTM  "}</text>
      </box>
      <box width="80%" flexDirection="row" justifyContent="center" gap={10}>
        <text fg="yellow" >Home</text>
        <text fg="yellow">About</text>
        <text fg="yellow">Project</text>
      </box>
      <box flexDirection="row" justifyContent="start" width="20%">
        <text bg="yellow" fg="black">{"  sourceCode  "}</text>
      </box>
    </box>
  );
}