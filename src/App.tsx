import './globals.css'
import { Alert, Autocomplete, Button,CurrencyInput, Input, Ping } from "./";

function App() {
  return (
    <div className="p-8">
      <div className="flex gap-2 mt-4">
        <Button variant="default">Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="link">Link</Button>
      </div>

      <div className="flex gap-2 mt-4">
        <Ping color="error" isActive />
        <Ping color="warn" isActive />
        <Ping color="success" isActive />
        <Ping color="info" isActive />
        <Ping color="default" isActive />
        <Ping color="deactivated" isActive={false} />
      </div>

      <div className="flex gap-2 mt-4">
        <Alert variant="default" className="mt-4">
          Atenção, este é um alerta
        </Alert>
        <Alert variant="destructive" className="mt-4">
          Atenção, este é um erro
        </Alert>
      </div>

      <div className="flex gap-2 mt-4">
        <Input placeholder="Input" />
        <CurrencyInput placeholder="Currency" />
      </div>

      <div className="flex gap-2 mt-4">
        <Autocomplete
          searchText="Autocomplete"
          labelValue="docs.cpf"
          mask="###.###.###-##"
          options={[
            { docs: { cpf: "13708861604" } },
            { docs: { cpf: "12345678901" } },
          ]}
          onValueChange={(value) => console.log(value)}
        />

        <Autocomplete
          searchText="Autocomplete"
          labelValue="docs.cpf"
          mask="###.###.###-##"
          defaultOption={{ docs: { cpf: "13708861604" } }}
          options={[
            { docs: { cpf: "13708861604" } },
            { docs: { cpf: "12345678901" } },
          ]}
          onValueChange={(value) => console.log(value)}
        />
      </div>
    </div>
  );
}

export default App;
