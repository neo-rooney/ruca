import { Button } from "@/components/ui/button";

function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button variant="default">Default</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="secondary">Secondary</Button>
    </div>
  );
}

export default App;
